import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  dictionary,
  faqItems,
  genericPages,
  guideItems,
  heroStats,
  homeContent,
  localizeHref,
  mediaCards,
  officialLinks,
  pageBySlug,
  quickFacts,
  sidebarCodes,
  type GenericPage,
  type Locale
} from "@/lib/site";
import type { ArticleContent } from "@/lib/mdx";

export function HomePage({ locale }: { locale: Locale }) {
  const copy = dictionary[locale];

  return (
    <article className="article-shell">
      <header className="page-hero home-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href={localizeHref("/", locale)}>Home</Link>
          <span aria-hidden="true">/</span>
          <span>Survival wiki</span>
        </nav>
        <p className="eyebrow">{homeContent.hero.eyebrow}</p>
        <h1 className="home-title">{homeContent.hero.title}</h1>
        <p className="page-intro">{homeContent.hero.description}</p>
        <div className="cta-row">
          <Link className="button button-primary" href={localizeHref(homeContent.start.cards[0].href, locale)}>
            {homeContent.hero.primaryCta} <span aria-hidden="true">↓</span>
          </Link>
          <Link className="button button-secondary" href={localizeHref(homeContent.start.cards[1].href, locale)}>
            {homeContent.hero.secondaryCta} <span aria-hidden="true">→</span>
          </Link>
          <Link className="button button-secondary" href={localizeHref(homeContent.start.cards[3].href, locale)}>
            {homeContent.hero.tertiaryCta} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </header>

      <section className="hero-stats" aria-label="No More Room in Hell 2 wiki coverage">
        {heroStats.map((item) => (
          <Link className="hero-stat" href={localizeHref(item.href, locale)} key={item.label}>
            <b>{item.value}</b>
            <span>{item.label}</span>
          </Link>
        ))}
      </section>

      <section className="plan-section start-section" aria-labelledby="start-title">
        <p className="eyebrow">{homeContent.start.eyebrow}</p>
        <h2 id="start-title">{homeContent.start.title}</h2>
        <ol className="checklist start-cards">
          {homeContent.start.cards.map((card) => (
            <li key={card.number}>
              <Link href={localizeHref(card.href, locale)}>
                <strong>{card.title}</strong>
                <span>{card.description}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="dashboard" id="wiki-hub" aria-labelledby="wiki-hub-title">
        <div className="container">
          <header className="dashboard-header">
            <div>
              <p className="eyebrow">Browse the wiki</p>
              <h2 id="wiki-hub-title">{copy.browseTitle}</h2>
            </div>
            <div>
              <p>{copy.browseCopy}</p>
              <Link className="search-trigger prominent" href={localizeHref("/guides/", locale)}>
                <span className="search-icon" aria-hidden="true">
                  ⌕
                </span>
                <span className="search-text">Open index</span>
                <span className="search-kbd">{guideItems.length} pages</span>
              </Link>
            </div>
          </header>
          <div className="dashboard-grid">
            <BrowsePanel locale={locale} />
            <FactsPanel locale={locale} />
          </div>
        </div>
      </section>

      <section className="media-cards" aria-labelledby="media-title">
        <div className="catalogue-heading">
          <div>
            <p className="eyebrow">From the game</p>
            <h2 id="media-title">In-game screens</h2>
          </div>
          <p>Official in-game media. Every card links to the guide that covers what you are looking at.</p>
        </div>
        <div className="entity-grid">
          {mediaCards.map((card) => (
            <article className="entity-card" key={card.title}>
              <img src={card.image} alt={`${card.title} in No More Room in Hell 2`} loading="lazy" />
              <div className="entity-body">
                <p className="entity-meta">
                  <small>{card.tag}</small>
                </p>
                <h3>{card.title}</h3>
                <p className="entity-summary">{card.summary}</p>
                <span className="entity-link">
                  Open the guide <span className="arr" aria-hidden="true">→</span>
                </span>
                <Link href={localizeHref(card.href, locale)} className="stretched" aria-label={card.title} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="answers-panel" aria-labelledby="answers-title">
        <header>
          <p className="eyebrow">Popular questions</p>
          <h2 id="answers-title">Answers before you begin</h2>
        </header>
        <div>
          {faqItems.map((item) => (
            <Link href={localizeHref(item.href, locale)} key={item.question}>
              <strong>{item.question}</strong>
              <span>{item.answer}</span>
              <small>Open the guide →</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="intro-grid intro-section">
        <div className="intro-copy">
          <p className="eyebrow">About the game</p>
          <h2>{homeContent.aboutGame.title}</h2>
          {homeContent.aboutGame.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Link className="button button-secondary" href={localizeHref("/guides/", locale)}>
            {homeContent.aboutGame.cta} <span aria-hidden="true">→</span>
          </Link>
        </div>
        <aside className="about-card" aria-label="No More Room in Hell 2 facts">
          <dl>
            {homeContent.aboutGame.stats.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      <section className="codes-section" aria-labelledby="codes-title">
        <div>
          <p className="eyebrow">Codes</p>
          <h2 id="codes-title">No More Room in Hell 2 Codes</h2>
          <p>
            No More Room in Hell 2 is not a code-driven Steam game, so this site does not invent Active Codes for SEO.
            Researched active codes are listed as unavailable.
          </p>
        </div>
        <div className="codes-grid" aria-label="Sidebar codes">
          {sidebarCodes.map((code, index) => (
            <span className="code-pill" key={`${code}-${index}`}>
              {code}
            </span>
          ))}
        </div>
      </section>

      <section className="source-block home-source final-cta" aria-labelledby="final-cta-title">
        <p className="eyebrow">Community wiki</p>
        <h2 id="final-cta-title">{homeContent.finalCta.title}</h2>
        <p>{homeContent.finalCta.description}</p>
        <div className="cta-row">
          <Link className="button button-primary" href={localizeHref(homeContent.start.cards[0].href, locale)}>
            {homeContent.finalCta.primary}
          </Link>
          <a className="button button-secondary" href={officialLinks.steam} target="_blank" rel="noopener noreferrer">
            {homeContent.finalCta.secondary} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </article>
  );
}

export function GuideIndexPage({ locale }: { locale: Locale }) {
  const copy = dictionary[locale];
  const groups = ["Release", "Gameplay", "Guides"] as const;

  return (
    <article className="article-shell">
      <header className="page-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href={localizeHref("/", locale)}>Home</Link>
          <span aria-hidden="true">/</span>
          <span>Guides</span>
        </nav>
        <p className="eyebrow">Browse the wiki</p>
        <h1 className="article-title">{copy.guideIndexTitle}</h1>
        <p className="page-intro">{copy.guideIndexIntro}</p>
        <div className="status-strip">
          <div className="status-cell">
            <b>{guideItems.length}</b>
            <span>Core pages</span>
          </div>
          <div className="status-cell">
            <b>3</b>
            <span>Intent groups</span>
          </div>
          <div className="status-cell">
            <b>MDX</b>
            <span>Article content</span>
          </div>
        </div>
      </header>

      <section className="entity-catalog">
        <div className="catalogue-heading">
          <div>
            <p className="eyebrow">Navigation page</p>
            <h2>Open the right No More Room in Hell 2 page</h2>
          </div>
          <p>This page mirrors the target site's database-list pattern, with numbered links and short intent summaries.</p>
        </div>
        {groups.map((group) => (
          <div className="guide-group" key={group}>
            <h2>{group}</h2>
            <div className="browse-panel full">
              <nav aria-label={`${group} guides`}>
                {guideItems
                  .filter((item) => item.group === group)
                  .map((item) => (
                    <Link href={localizeHref(item.href, locale)} key={item.href}>
                      <span className="browse-number">{item.number}</span>
                      <span>
                        <strong>{item.title}</strong>
                        <small>{item.description}</small>
                      </span>
                      <span className="arrow" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  ))}
              </nav>
            </div>
          </div>
        ))}
      </section>

      <aside className="related" aria-labelledby="related-title">
        <h2 id="related-title">Suggested starting pages</h2>
        <div className="related-grid">
          {["guide", "map", "weapons"].map((slug) => {
            const page = pageBySlug(slug);
            return (
              <Link className="related-link" href={localizeHref(`/${slug}/`, locale)} key={slug}>
                <strong>{page.title}</strong>
                <span>{page.intro}</span>
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            );
          })}
        </div>
      </aside>
    </article>
  );
}

export function ArticlePage({
  locale,
  article
}: {
  locale: Locale;
  slug: string;
  article: ArticleContent;
}) {
  return (
    <article className="article-shell">
      <header className="page-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href={localizeHref("/", locale)}>Home</Link>
          <span aria-hidden="true">/</span>
          <Link href={localizeHref("/guides/", locale)}>Guides</Link>
          <span aria-hidden="true">/</span>
          <span>Solo Mode</span>
        </nav>
        <p className="eyebrow">{article.frontmatter.eyebrow}</p>
        <h1 className="article-title">{article.frontmatter.title}</h1>
        <p className="page-intro">{article.frontmatter.description}</p>
        <p className="updated">{article.frontmatter.updated}</p>
        <div className="status-strip">
          {article.frontmatter.statuses.map((item) => (
            <div className="status-cell" key={item.label}>
              <b>{item.label}</b>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </header>

      <div className="prose">
        <MDXRemote source={article.content} />
      </div>

      <aside className="related" aria-labelledby="related-title">
        <h2 id="related-title">Related guides</h2>
        <div className="related-grid">
          {["guide", "map", "how-to-cure-infected"].map((slug) => {
            const page = pageBySlug(slug);
            return (
              <Link className="related-link" href={localizeHref(`/${slug}/`, locale)} key={slug}>
                <strong>{page.title}</strong>
                <span>{page.intro}</span>
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            );
          })}
        </div>
      </aside>
    </article>
  );
}

export function GenericGuidePage({ locale, page }: { locale: Locale; page: GenericPage }) {
  return (
    <article className="article-shell">
      <header className="page-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href={localizeHref("/", locale)}>Home</Link>
          <span aria-hidden="true">/</span>
          <Link href={localizeHref("/guides/", locale)}>Guides</Link>
          <span aria-hidden="true">/</span>
          <span>{page.title}</span>
        </nav>
        <p className="eyebrow">{page.eyebrow}</p>
        <h1 className="article-title">{page.title}</h1>
        <p className="page-intro">{page.intro}</p>
        <div className="status-strip">
          {page.facts.slice(0, 3).map((fact) => (
            <div className="status-cell" key={fact}>
              <b>{fact.split(" ")[0]}</b>
              <span>{fact}</span>
            </div>
          ))}
        </div>
      </header>

      <div className="prose">
        {page.answer ? (
          <section className="answer-summary">
            <h2>Quick Answer</h2>
            <p>{page.answer}</p>
          </section>
        ) : null}
        {page.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {Array.isArray(section.body) ? (
              section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
            ) : (
              <p>{section.body}</p>
            )}
          </section>
        ))}
        <p className="source-note">
          Official links:{" "}
          <a href={officialLinks.site} target="_blank" rel="noopener noreferrer">
            No More Room in Hell 2 official site
          </a>
          ,{" "}
          <a href={officialLinks.steam} target="_blank" rel="noopener noreferrer">
            Steam
          </a>
          .
        </p>
      </div>

      <aside className="related" aria-labelledby="related-title">
        <h2 id="related-title">Related guides</h2>
        <div className="related-grid">
          <Link className="related-link" href={localizeHref("/guides/", locale)}>
            <strong>Guide index</strong>
            <span>Return to the complete No More Room in Hell 2 navigation page.</span>
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </Link>
          <Link className="related-link" href={localizeHref("/solo-mode/", locale)}>
            <strong>Solo Mode MDX</strong>
            <span>Open the legacy MDX article detail route.</span>
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </Link>
          <Link className="related-link" href={localizeHref("/steam/", locale)}>
            <strong>Steam</strong>
            <span>Open the confirmed Steam platform page.</span>
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </aside>
    </article>
  );
}

function BrowsePanel({ locale }: { locale: Locale }) {
  return (
    <div className="browse-panel">
      <nav aria-label="Browse the wiki">
        {guideItems.map((item) => (
          <Link href={localizeHref(item.href, locale)} key={item.href}>
            <span className="browse-number">{item.number}</span>
            <span>
              <strong>{item.title}</strong>
              <small>{item.description}</small>
            </span>
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

function FactsPanel({ locale }: { locale: Locale }) {
  const copy = dictionary[locale];

  return (
    <aside className="facts-panel" aria-labelledby="facts-title">
      <div className="verification">
        <span className="verification-mark" aria-hidden="true">
          ✓
        </span>
        <span>
          <strong>Source-checked</strong>
          <small>Homepage research - Aug 2026</small>
        </span>
      </div>
      <p className="eyebrow">Quick facts</p>
      <h2 id="facts-title">{copy.factsTitle}</h2>
      <p className="facts-copy">{copy.factsCopy}</p>
      <dl>
        {quickFacts.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>
              {item.href.startsWith("http") ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.value}
                </a>
              ) : (
                <Link href={localizeHref(item.href, locale)}>{item.value}</Link>
              )}
              <small>{item.note}</small>
            </dd>
          </div>
        ))}
      </dl>
      <div className="sidebar-codes" aria-label="Sidebar codes">
        <p className="eyebrow">Codes</p>
        {sidebarCodes.map((code, index) => (
          <span className="code-pill" key={`${code}-${index}`}>
            {code}
          </span>
        ))}
      </div>
    </aside>
  );
}

export const knownPages = genericPages;
