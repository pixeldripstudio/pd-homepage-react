export default function Hero() {
  return (
    <section id="pd-home-hero" className="section-hero" aria-label="Hero">
      <img
        src="https://res.cloudinary.com/dfq0nosxj/image/upload/f_auto,q_auto/v1778344173/pixeldrip-home-service-hero_xhwhg1.webp"
        alt="PixelDrip Studio — marketing that works for Texas businesses"
        className="hero-bg"
        fetchPriority="high"
        decoding="async"
        width="1920"
        height="1080"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="container">
        <div className="hero-content">
          <span className="section-eyebrow" style={{ animationDelay: '0s' }}>
            Texas Marketing That Actually Performs
          </span>

          <h1 className="hero-headline fade-up visible" style={{ transitionDelay: '0.1s' }}>
            Proven Marketing That Delivers More Customers
          </h1>

          <p className="hero-subhead fade-up visible" style={{ transitionDelay: '0.2s' }}>
            Stop letting empty agency promises bleed your budget dry while your competitors walk away with your customers. We fix what is broken online and on-site so your marketing finally does its job, making you more money.
          </p>

          <div className="hero-cta-row fade-up visible" style={{ transitionDelay: '0.3s' }}>
            <a href="#pd-home-cta" className="btn-primary">Claim My Free Inspection</a>
            <a href="#" className="btn-secondary">See The Results</a>
          </div>

          <p className="hero-trust fade-up visible" style={{ transitionDelay: '0.45s' }}>
            ✦ No commitment&nbsp;&nbsp;✦ Results in 1 business day&nbsp;&nbsp;✦ Texas-based team
          </p>
        </div>
      </div>
    </section>
  );
}
