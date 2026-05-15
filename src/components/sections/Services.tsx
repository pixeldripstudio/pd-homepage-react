import { useInView } from '../../hooks/useInView';

const SERVICES = [
  { title: 'Web Design & Development', body: 'Websites built to turn visitors into customers — fast, modern, and built for Texas businesses.' },
  { title: 'SEO & AI Search Visibility', body: 'Get found on Google and in AI-powered search results before your competitors do.' },
  { title: 'Google Ads Management', body: 'Stop burning ad budget. We build and manage campaigns that bring in real leads.' },
  { title: 'Google Business Profile', body: 'Dominate local search and Google Maps — the #1 source of calls for local businesses.' },
  { title: 'Sales Funnels & CRO', body: 'Turn more of your existing traffic into paying customers without spending more on ads.' },
  { title: 'AI Business Automations', body: 'Automate the follow-ups, scheduling, and workflows that are eating your time.' },
];

const TAGS = ['Apparel', 'Yard Signs', 'Banners', 'Business Cards', 'Stickers', 'Flyers', 'Door Hangers', 'Promo Items'];

const SERVICE_ICONS = [
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8"/><path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.8"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><line x1="12" y1="20" x2="12" y2="4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><line x1="6" y1="20" x2="6" y2="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M9 9h6M9 12h6M9 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
];

export default function Services() {
  const { ref, visible } = useInView();

  return (
    <section id="pd-home-services" className="section-services" ref={ref as React.Ref<HTMLElement>}>
      <div className="container">
        <div className={`services-header text-center fade-up ${visible ? 'visible' : ''}`}>
          <span className="section-label text-blue">What We Do</span>
          <h2 className="services-headline text-dark">Everything Your Business Needs To Get Found And Get Chosen</h2>
          <p className="services-intro text-body-light">
            Whether a customer finds you on Google, drives past your truck, or gets handed your card — PixelDrip makes sure every touchpoint is working together to bring them through the door.
          </p>
        </div>

        <p className={`section-sublabel text-dark fade-up delay-1 ${visible ? 'visible' : ''}`}>Dominate the Screen</p>

        <div className="grid-3 services-grid">
          {SERVICES.map((s, i) => (
            <div key={s.title} className={`card-flat-white fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${0.1 + i * 0.06}s` }}>
              <div className="service-card-icon">{SERVICE_ICONS[i]}</div>
              <h3 className="service-title text-dark">{s.title}</h3>
              <p className="service-body text-body-light">{s.body}</p>
            </div>
          ))}
        </div>

        <p className={`section-sublabel text-dark fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>Command the Street</p>
        <div className={`physical-block fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.55s' }}>
          <div className="physical-icon-row">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.86H5v10a1 1 0 001 1h12a1 1 0 001-1V10h1.15a1 1 0 00.99-.86l.58-3.57a2 2 0 00-1.34-2.23z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><line x1="7" y1="7" x2="7.01" y2="7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
          </div>
          <h3 className="physical-headline text-dark">Your Brand Doesn't Stop When The Screen Does</h3>
          <p className="physical-body text-body-light">
            The businesses people remember aren't just online — they're everywhere. A yard sign that stops traffic. A branded shirt that starts a conversation. A business card that doesn't get thrown away.
          </p>
          <div className="product-tags">
            {TAGS.map((tag) => <span key={tag} className="product-tag">{tag}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
