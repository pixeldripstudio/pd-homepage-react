import { useInView } from '../../hooks/useInView';

const CARDS = [
  {
    headline: 'Wasted Marketing Spend',
    body: "Your website, your ads, your social, your signage — they're all saying something slightly different. There's no unified system pulling customers through a clear journey. You're spending money in multiple places with no single strategy tying it together.",
    icon: <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="#77bbd4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><polyline points="17 6 23 6 23 12" stroke="#77bbd4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    hasContainer: true,
  },
  {
    headline: 'Your Website is Invisible',
    body: "When someone in your area searches for what you do, your competitors are showing up — and you're not. Whether it's Google Search, Google Maps, or AI-powered search results, if you're not visible, you don't exist to that customer.",
    icon: <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" stroke="#77bbd4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" stroke="#77bbd4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><line x1="1" y1="1" x2="23" y2="23" stroke="#77bbd4" strokeWidth="1.8" strokeLinecap="round"/></svg>,
    hasContainer: false,
  },
  {
    headline: 'You Look Less Than Professional',
    body: "Digital gets them interested. But a yard sign, a branded shirt, a leave-behind card — that's what makes them remember you and trust you. Most agencies ignore the real world entirely. That's a gap your competitors are quietly filling.",
    icon: <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#77bbd4" strokeWidth="1.8" strokeLinejoin="round"/><line x1="12" y1="8" x2="12" y2="12" stroke="#77bbd4" strokeWidth="1.8" strokeLinecap="round"/><line x1="12" y1="16" x2="12.01" y2="16" stroke="#77bbd4" strokeWidth="2" strokeLinecap="round"/></svg>,
    hasContainer: false,
  },
];

export default function PainPoints() {
  const { ref, visible } = useInView();

  return (
    <section id="pd-home-pain-points" className="section-pain-points" ref={ref as React.Ref<HTMLElement>}>
      <div className="container">
        <span className={`pain-points-label fade-up ${visible ? 'visible' : ''}`}>
          The Three Problems Killing Your Growth
        </span>

        <div className="grid-3">
          {CARDS.map((card, i) => (
            <article key={card.headline} className={`card-glass fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${0.1 + i * 0.15}s` }}>
              {card.hasContainer ? (
                <div className="pain-card-icon">{card.icon}</div>
              ) : (
                <div className="pain-card-icon-plain">{card.icon}</div>
              )}
              <h3 className="pain-card-headline text-white">{card.headline}</h3>
              <p className="pain-card-body text-body-dark">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
