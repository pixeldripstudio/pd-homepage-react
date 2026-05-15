import { useInView } from '../../hooks/useInView';

export default function CTA() {
  const { ref, visible } = useInView();

  return (
    <section id="pd-home-cta" className="section-cta" ref={ref as React.Ref<HTMLElement>}>
      <div className="container">
        <div className={`cta-inner fade-up ${visible ? 'visible' : ''}`}>
          <h2 className="cta-headline text-dark">Ready To Stop Guessing?</h2>
          <p className="cta-body text-body-light">
            Get your free marketing inspection. We'll show you exactly what's holding your business back — and what to do about it. No commitment. No pitch. Just answers.
          </p>
          <a href="#" className="btn-primary">Claim My Free Inspection</a>
          <p className="cta-sublabel">
            Texas businesses only · Results delivered within 1 business day
          </p>
        </div>
      </div>
    </section>
  );
}
