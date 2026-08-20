import Link from "next/link";
import { dictionary, footerContent, guideItems, officialLinks } from "@/lib/site";

export function Footer() {
  const copy = dictionary.en;
  const guideLinks = guideItems.filter((item) => item.group !== "Release").slice(0, 9);
  const releaseLinks = guideItems.filter((item) => item.group === "Release");

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <p className="eyebrow">{copy.footerKicker}</p>
            <h2>{footerContent.aboutTitle}</h2>
            <p>{footerContent.about}</p>
            <p>{footerContent.description}</p>
          </div>
          <div>
            <h3>Guides</h3>
            {guideLinks.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.title}
              </Link>
            ))}
          </div>
          <div>
            <h3>More</h3>
            {releaseLinks.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.title}
              </Link>
            ))}
          </div>
          <div>
            <h3>Official</h3>
            <a href={officialLinks.site} target="_blank" rel="noopener noreferrer">
              nmrih2.com ↗
            </a>
            <a href={officialLinks.steam} target="_blank" rel="noopener noreferrer">
              Steam ↗
            </a>
            <a href={officialLinks.discord} target="_blank" rel="noopener noreferrer">
              {footerContent.officialDiscord} ↗
            </a>
            <a href={officialLinks.reddit} target="_blank" rel="noopener noreferrer">
              Reddit ↗
            </a>
            <a href={officialLinks.youtube} target="_blank" rel="noopener noreferrer">
              {footerContent.officialYoutube} ↗
            </a>
            <Link href="/privacy-policy/">{footerContent.privacyPolicy}</Link>
            <Link href="/terms-of-service/">{footerContent.termsOfService}</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>This site is not affiliated with Torn Banner Studios.</p>
          <p>Last verified: Aug 20, 2026 · © 2026 No More Room in Hell 2 Wiki</p>
        </div>
      </div>
    </footer>
  );
}
