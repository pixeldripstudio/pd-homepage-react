import { useInView } from '../../hooks/useInView';

const STEPS = [
  {
    number: '01',
    label: 'We find what\'s broken',
    headline: 'The Inspection',
    body: 'We get under the hood of your business to pinpoint leaks costing you customers and wasting your marketing budget.',
  },
  {
    number: '02',
    label: 'We Build The System',
    headline: 'The Fix',
    body: 'We bridge the gap between how you show up online and on the job site so you get the contract, every time.',
  },
  {
    number: '03',
    label: 'We Keep It Growing',
    headline: 'The Payoff',
    body: 'Your marketing finally does its job, maximizing your visibility and putting more hard-earned dollars back into your pocket.',
  },
];

export default function Process() {
  const { ref, visible } = useInView();

  return (
    <section id="pd-home-process" className="section-process" ref={ref as React.Ref<HTMLElement>}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <span className={`section-label text-blue text-center fade-up ${visible ? 'visible' : ''}`}>
          3 Steps to More Customers
        </span>
        <h2 className={`process-headline text-white text-center fade-up delay-1 ${visible ? 'visible' : ''}`}>
          3 Steps to More Customers
        </h2>

        <div className="grid-3 process-steps">
          {STEPS.map((step, i) => (
            <article key={step.number} className={`process-step card-flat fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${0.15 + i * 0.12}s` }}>
              <div className="step-number text-orange">{step.number}</div>
              <div className="step-label text-blue">{step.label}</div>
              <h3 className="step-headline text-white">{step.headline}</h3>
              <p className="step-body text-body-dark">{step.body}</p>
            </article>
          ))}
        </div>

        <div className={`process-cta fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
          <a href="#pd-home-cta" className="btn-primary">Claim My Free Inspection</a>
          <p className="process-cta-sub text-muted">Start with Step 01 — it's free.</p>
        </div>
      </div>
    </section>
  );
}
