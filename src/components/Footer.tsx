const GROW_LINKS = [
  { label: 'Web Design', href: '#' },
  { label: 'SEO & AI Search', href: '#' },
  { label: 'Google Ads', href: '#' },
  { label: 'AI Automations', href: '#' },
  { label: 'GBP Management', href: '#' },
  { label: 'Sales Funnels', href: '#' },
];
const PRINT_LINKS = [
  { label: 'Signs & Displays', href: '#' },
  { label: 'Branded Apparel', href: '#' },
  { label: 'Business Cards', href: '#' },
  { label: 'Stickers', href: '#' },
  { label: 'Flyers', href: '#' },
  { label: 'Promo Items', href: '#' },
];
const COMPANY_LINKS = [
  { label: 'About', href: '#' },
  { label: 'Our Work', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Free Inspection', href: '#pd-home-cta' },
];

const SOCIALS = [
  { label: 'Facebook', href: '#', icon: <svg viewBox="0 0 24 24" fill="none"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { label: 'Instagram', href: '#', icon: <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="currentColor" strokeWidth="1.8"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg> },
  { label: 'LinkedIn', href: '#', icon: <svg viewBox="0 0 24 24" fill="none"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.8"/></svg> },
  { label: 'X', href: '#', icon: <svg viewBox="0 0 24 24" fill="none"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="grid-4 footer-grid">
          <div className="footer-brand">
            <p className="footer-wordmark">
              <span className="footer-wordmark-pixel">Pixel</span>
              <span className="footer-wordmark-drip">Drip</span>
              <span className="footer-wordmark-studio"> Studio</span>
            </p>
            <p className="footer-tagline">Marketing That Actually Works</p>
            <p className="footer-desc">PixelDrip Studio helps Texas businesses get more customers by making their marketing actually work.</p>
            <div className="footer-social">
              {SOCIALS.map(({ label, href, icon }) => (
                <a key={label} href={href} className="footer-social-link" aria-label={label} target="_blank" rel="noopener noreferrer">
                  {icon}
                </a>
              ))}
            </div>
            <div className="footer-contact">
              <a href="tel:+18328101502" className="footer-phone">+1 (832) 810-1502</a>
              <a href="mailto:hello@pixeldripstudio.com" className="footer-email">hello@pixeldripstudio.com</a>
              <address className="footer-address">459 Marshall Lane, Hemphill, TX 75948</address>
            </div>
          </div>

          <div className="footer-nav-col">
            <span className="footer-nav-label blue">Grow Online</span>
            <ul className="footer-nav-list">
              {GROW_LINKS.map(({ label, href }) => (
                <li key={label}><a href={href} className="footer-nav-link">{label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-nav-col">
            <span className="footer-nav-label">Print &amp; Promo</span>
            <ul className="footer-nav-list">
              {PRINT_LINKS.map(({ label, href }) => (
                <li key={label}><a href={href} className="footer-nav-link">{label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-nav-col">
            <span className="footer-nav-label">Company</span>
            <ul className="footer-nav-list">
              {COMPANY_LINKS.map(({ label, href }) => (
                <li key={label}><a href={href} className="footer-nav-link">{label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p className="footer-copy">© 2025 PixelDrip Studio LLC. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#" className="footer-legal-link">Privacy Policy</a>
              <span className="footer-legal-sep">·</span>
              <a href="#" className="footer-legal-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
