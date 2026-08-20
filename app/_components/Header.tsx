"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { dictionary, getLocaleFromPath, guideItems, locales, localizeHref, navGroups, officialLinks } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const copy = dictionary[locale];
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
      if (event.key === "Escape") {
        setMenuOpen(false);
        setLangOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const localizedPath = useMemo(() => {
    const parts = pathname.split("/").filter(Boolean);
    return parts[0] === locale && locale !== "en" ? `/${parts.slice(1).join("/")}` : pathname;
  }, [locale, pathname]);

  function toggleTheme() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("nmrih2-theme", next);
  }

  useEffect(() => {
    const saved = localStorage.getItem("nmrih2-theme");
    document.documentElement.dataset.theme = saved === "light" || saved === "dark" ? saved : "dark";
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href={localizeHref("/", locale)} aria-label="No More Room in Hell 2 Wiki home">
            <span className="brand-mark logo-mark" aria-hidden="true">
              <img className="brand-logo" src="/img/logo-nmrih2.png" alt="" width="48" height="48" />
            </span>
            <span>
              <strong>No More Room in Hell 2</strong>
              <small>survival wiki</small>
            </span>
          </Link>
          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span>Menu</span>
            <span className="menu-icon" aria-hidden="true" />
          </button>
          <nav id="primary-navigation" className={`top-nav ${menuOpen ? "open" : ""}`} aria-label="Primary navigation">
            <Link href={localizeHref("/", locale)}>Home</Link>
            {navGroups.map((group) => (
              <div className="nav-group" key={group.title}>
                <div className="nav-group-head">
                  <Link href={localizeHref(group.href, locale)}>{group.title}</Link>
                  <button className="nav-group-caret" type="button" aria-label={group.title}>
                    <span aria-hidden="true">v</span>
                  </button>
                </div>
                <div className="nav-dropdown">
                  {group.links.map((item) => (
                    <Link href={localizeHref(item.href, locale)} key={item.href}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <a className="official-link" href={officialLinks.site} target="_blank" rel="noopener noreferrer">
              Official site <span aria-hidden="true">↗</span>
            </a>
          </nav>
          <div className="header-actions">
            <button type="button" className="search-trigger" aria-label="Search" onClick={() => setSearchOpen(true)}>
              <span className="search-icon" aria-hidden="true">
                ⌕
              </span>
              <span className="search-text">Search</span>
              <span className="search-kbd">⌘K</span>
            </button>
            <div className="lang-wrap">
              <button className="lang-btn" type="button" aria-expanded={langOpen} onClick={() => setLangOpen((value) => !value)}>
                <span aria-hidden="true">🌐</span> {locales.find((item) => item.code === locale)?.short}
              </button>
              {!langOpen ? null : (
                <div className="lang-menu" role="menu">
                  {locales.map((item) => (
                    <Link
                      href={item.code === "en" ? localizedPath || "/" : `/${item.code}${localizedPath === "/" ? "" : localizedPath}`}
                      key={item.code}
                      role="menuitem"
                      aria-current={item.code === locale}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <button className="icon-btn" type="button" aria-label="Switch theme" onClick={toggleTheme}>
              <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4.2" />
                <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6" />
              </svg>
              <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <path d="M20.5 14.2A8.6 8.6 0 0 1 9.8 3.5a8.6 8.6 0 1 0 10.7 10.7Z" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      {searchOpen ? (
        <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Search No More Room in Hell 2 Wiki">
          <div className="search-panel">
            <div className="search-input-row">
              <span aria-hidden="true">⌕</span>
              <input autoFocus placeholder={`Search ${copy.guideIndexTitle}`} />
              <button className="search-close" type="button" onClick={() => setSearchOpen(false)}>
                Esc
              </button>
            </div>
            <div className="search-results">
              {guideItems.slice(0, 8).map((item) => (
                <Link href={localizeHref(item.href, locale)} key={item.href} onClick={() => setSearchOpen(false)}>
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
