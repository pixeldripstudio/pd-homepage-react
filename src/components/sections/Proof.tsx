import { useInView } from '../../hooks/useInView';

const TESTIMONIALS = [
  {
    quote: '"We went from invisible on Google to getting 3–5 calls a day from new customers. PixelDrip didn\'t just build us a website — they built us a system."',
    author: 'Marcus T.',
    business: 'HVAC Contractor — Houston, TX',
  },
  {
    quote: '"Terry and the team are the real deal. Straight answers, no runaround, and our Google rankings actually moved. We\'ve tried three other agencies. PixelDrip is the first one that delivered."',
    author: 'Sandra R.',
    business: 'Boutique Retail — Tyler, TX',
  },
  {
    quote: '"The branded apparel and yard signs alone brought in two new clients at our last event. People kept asking who did our branding. That\'s never happened before."',
    author: 'James K.',
    business: 'Landscaping Company — East Texas',
  },
];

export default function Proof() {
  const { ref, visible } = useInView();

  return (
    <section id="pd-home-proof" className="section-proof" ref={ref as React.Ref<HTMLElement>}>
      <div className="container">
        <span className={`section-label text-blue text-center fade-up ${visible ? 'visible' : ''}`}>
          What Texas Businesses Are Saying
        </span>
        <h2 className={`proof-headline text-white text-center fade-up delay-1 ${visible ? 'visible' : ''}`}>
          Results Our Clients Can Measure
        </h2>
        <p className={`proof-subheading text-center fade-up delay-2 ${visible ? 'visible' : ''}`}>
          Real Texas businesses getting real results. No fluff, just marketing that works.
        </p>

        <div className="grid-3">
          {TESTIMONIALS.map((t, i) => (
            <article key={t.author} className={`card-glass testimonial-card fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${0.15 + i * 0.12}s` }}>
              <p className="testimonial-stars text-blue">★★★★★</p>
              <blockquote className="testimonial-quote text-body-dark">{t.quote}</blockquote>
              <footer className="testimonial-footer">
                <p className="testimonial-author text-white">{t.author}</p>
                <p className="testimonial-business text-muted">{t.business}</p>
              </footer>
            </article>
          ))}
        </div>

        <div className={`proof-link fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
          <a href="#" className="btn-ghost">See All Results →</a>
        </div>
      </div>
    </section>
  );
}
