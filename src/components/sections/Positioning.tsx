import { useInView } from '../../hooks/useInView';

const DIFFERENTIATORS = [
  '✦ Full-scope digital + physical marketing',
  '✦ Data-driven decisions — no guessing',
  '✦ Direct communication — no handoffs, no runaround',
  '✦ Texas-based team that understands your market',
];

export default function Positioning() {
  const { ref, visible } = useInView();

  return (
    <section id="pd-home-positioning" className="section-positioning" ref={ref as React.Ref<HTMLElement>}>
      <img
        src="https://images.unsplash.com/photo-1653149870708-50f54131a536?w=1920&h=1080&fit=crop"
        alt="Texas city skyline"
        className="positioning-bg"
        loading="lazy"
        decoding="async"
        width="1920"
        height="1080"
      />
      <div className="positioning-overlay" aria-hidden="true" />

      <div className="container">
        <div className="positioning-content">
          <span className={`section-label text-blue fade-up ${visible ? 'visible' : ''}`}>Why PixelDrip Is Different</span>
          <h2 className={`positioning-headline fade-up delay-1 ${visible ? 'visible' : ''}`}>
            A hands-on partner, not a "full-service" agency.
          </h2>
          <p className={`positioning-body text-body-dark fade-up delay-2 ${visible ? 'visible' : ''}`}>
            Most agencies live in one lane. They do websites, or they do ads, or they do print. You end up managing three vendors, three invoices, and three different strategies that don't talk to each other. PixelDrip is built differently. We handle the full picture — from your website and search visibility to your Google Ads, your Google Business Profile, and the branded materials your customers see in the real world. Every piece is connected. Every decision is backed by data. And you always know exactly what's happening and why.
          </p>
          <ul className="positioning-list">
            {DIFFERENTIATORS.map((item, i) => (
              <li key={i} className={`positioning-list-item text-body-dark fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${0.3 + i * 0.08}s` }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
