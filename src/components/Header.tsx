import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Grow Online', href: '#' },
  { label: 'Print & Promo', href: '#' },
  { label: 'Our Work', href: '#' },
  { label: 'About', href: '#' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="nav-header">
        <div className="container nav-inner">
          <a href="/" className="nav-logo" aria-label="PixelDrip Studio — home">
            <img src="/assets/logo-horizontal-fullcolor-white.svg" alt="PixelDrip Studio" />
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            {NAV_LINKS.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">{item.label}</a>
            ))}
          </nav>
          <div className="nav-actions">
            <a href="#pd-home-cta" className="btn-primary nav-cta-desktop" style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}>
              Claim My Free Inspection
            </a>
            <button
              className="nav-mobile-btn"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {open ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        {NAV_LINKS.map((item) => (
          <a key={item.label} href={item.href} className="mobile-nav-link" onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <div className="mobile-cta">
          <a href="#pd-home-cta" className="btn-primary" onClick={() => setOpen(false)}>
            Claim My Free Inspection
          </a>
        </div>
      </div>
    </>
  );
}
