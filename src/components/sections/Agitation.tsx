import { useInView } from '../../hooks/useInView';

const PROBLEMS = [
  {
    title: 'Wasted Marketing Spend',
    body: "Every month your budget vanishes with no measurable return. You're paying for activity, not results — and the cycle never ends without the right system behind it.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="#77bbd4" strokeWidth="1.8"/>
        <path d="M8 12h8M12 8v8" stroke="#77bbd4" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M7 7l10 10M17 7L7 17" stroke="#77bbd4" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4"/>
      </svg>
    ),
  },
  {
    title: 'Your Website Is Invisible',
    body: "If customers can't find you on Google, you don't exist. Weak SEO means your competitors are capturing every lead that should have been yours — every single day.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ellipse cx="12" cy="12" rx="10" ry="6.5" stroke="#77bbd4" strokeWidth="1.8"/>
        <circle cx="12" cy="12" r="2.5" stroke="#77bbd4" strokeWidth="1.8"/>
        <path d="M3 3l18 18" stroke="#77bbd4" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'You Look Less Than Professional',
    body: "A dated or inconsistent brand signals distrust before a word is read. Prospects judge you in seconds — and if your image doesn't command respect, they move on.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 3l8 3.5v5C20 16.5 16.5 20.5 12 22c-4.5-1.5-8-5.5-8-10.5v-5L12 3z" stroke="#77bbd4" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="#77bbd4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Agitation() {
  const { ref, visible } = useInView();

  return (
    <section id="pd-home-agitation" className="section-agitation" ref={ref as React.Ref<HTMLElement>}>
      <div className="container-narrow" style={{ textAlign: 'center' }}>
        <span className={`agitation-eyebrow fade-up ${visible ? 'visible' : ''}`}>Sound Familiar?</span>
        <h2 className={`agitation-headline fade-up delay-1 ${visible ? 'visible' : ''}`}>
          Is Your Marketing a Colossal Waste of Money?
        </h2>
        <p className={`agitation-body fade-up delay-2 ${visible ? 'visible' : ''}`}>
          You've heard the empty promises before. But every month, your budget disappears with zero results to show for it. Most agencies are experts at sending invoices, but they fail at solving problems. At PixelDrip, we're the "Fixers." We step in to maximize your visibility and make you impossible to ignore.
        </p>
        <h3 className={`agitation-subheading fade-up delay-3 ${visible ? 'visible' : ''}`}>
          The Three Problems Killing Your Growth
        </h3>
      </div>

      <div className="container">
        <div className="agitation-grid">
          {PROBLEMS.map((p, i) => (
            <div key={p.title} className={`agitation-card fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${0.15 + i * 0.1}s` }}>
              <div className="agitation-card-icon">{p.icon}</div>
              <p className="agitation-card-title">{p.title}</p>
              <p className="agitation-card-body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
