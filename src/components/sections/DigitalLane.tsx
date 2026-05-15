import { useState } from 'react';
import { useInView } from '../../hooks/useInView';

const SERVICES = [
  {
    id: 'web-design',
    title: 'Web Design & Development',
    body: "High-converting websites built from scratch — fast, mobile-first, and designed to turn visitors into leads. Every pixel has a purpose.",
    link: '#',
    linkLabel: 'Houston website redesign →',
  },
  {
    id: 'seo-ai',
    title: 'SEO & AI Search Visibility',
    body: 'Rank on Google AND get cited by AI tools like ChatGPT and Perplexity. We build content architectures that own your niche organically.',
    link: '#',
    linkLabel: 'SEO & AI visibility services →',
  },
  {
    id: 'google-ads',
    title: 'Google Ads Management',
    body: 'Targeted paid search campaigns that put you in front of buyers ready to act — with transparent reporting and zero wasted spend.',
    link: '#',
    linkLabel: 'Google Ads management →',
  },
  {
    id: 'gbp',
    title: 'Google Business Profile',
    body: 'Dominate local search with an optimized GBP that drives calls, directions, and reviews — the foundation of local lead flow.',
    link: '#',
    linkLabel: 'GBP management services →',
  },
  {
    id: 'funnels',
    title: 'Sales Funnels & CRO',
    body: 'Strategic landing pages and conversion-rate optimization that turn your existing traffic into more leads without increasing ad spend.',
    link: '#',
    linkLabel: 'Sales funnels & CRO →',
  },
  {
    id: 'ai-automations',
    title: 'AI Business Automations',
    body: 'Automate follow-ups, lead nurturing, and repetitive workflows using AI — so you close more deals without adding headcount.',
    link: '#',
    linkLabel: 'AI automation services →',
  },
];

export default function DigitalLane() {
  const [openId, setOpenId] = useState('web-design');
  const { ref, visible } = useInView();

  return (
    <section id="pd-home-digital-lane" className="section-digital-lane" ref={ref as React.Ref<HTMLElement>}>
      <div className="container">
        <div className="lane-grid">
          <div className={`lane-intro fade-up ${visible ? 'visible' : ''}`}>
            <span className="lane-eyebrow">Dominate The Screen</span>
            <h2 className="lane-heading text-white">Your Digital Infrastructure</h2>
            <p className="lane-body">
              We don't sell website packages. We build connected digital systems — search visibility, paid traffic, local presence, automation — all engineered to feed your pipeline. Every service we offer locks into the next, creating a growth engine that compounds over time.
            </p>
            <p className="lane-body">
              Whether you need a single channel or the full stack, each piece is built with conversion as the north star. Click any service to see what it means for your business.
            </p>
          </div>

          <div className={`lane-accordion fade-up delay-2 ${visible ? 'visible' : ''}`}>
            {SERVICES.map((s) => {
              const isOpen = openId === s.id;
              return (
                <div
                  key={s.id}
                  className={`accordion-item ${isOpen ? 'open' : ''}`}
                  onClick={() => setOpenId(isOpen ? '' : s.id)}
                >
                  <div className="accordion-header">
                    <span className="accordion-header-inner">
                      <svg className="accordion-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {s.title}
                    </span>
                    <svg className="accordion-toggle" viewBox="0 0 24 24" aria-hidden="true">
                      <line x1="12" y1="5" x2="12" y2="19" strokeLinecap="round"/>
                      <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round"/>
                    </svg>
                  </div>
                  {isOpen && (
                    <div className="accordion-body">
                      <p>{s.body}</p>
                      <a href={s.link} className="accordion-learn-more" onClick={(e) => e.stopPropagation()}>{s.linkLabel}</a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
