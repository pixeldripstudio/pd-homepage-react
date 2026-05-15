import { useInView } from '../../hooks/useInView';

export default function ScatteredMarketing() {
  const { ref, visible } = useInView();

  return (
    <section id="pd-home-integrations" className="section-scattered" ref={ref as React.Ref<HTMLElement>}>
      <div className="container-narrow">
        <div className={`fade-up ${visible ? 'visible' : ''}`}>
          <span className="section-eyebrow">Sound Familiar?</span>
          <h2 className={`agitation-headline fade-up delay-1 ${visible ? 'visible' : ''}`}>
            Is Your Marketing a Colossal Waste of Money?
          </h2>
          <p className={`agitation-body fade-up delay-2 ${visible ? 'visible' : ''}`}>
            You've got a website. Maybe you're running ads. You've posted on social media. But the phone isn't ringing the way it should, and you're not sure what's actually working — or what's quietly draining your budget. Most businesses aren't failing because they're not trying. They're failing because their marketing is scattered, disconnected, and built without a system.
          </p>
          <p className={`agitation-closer fade-up delay-3 ${visible ? 'visible' : ''}`}>
            That's exactly what PixelDrip fixes.
          </p>
        </div>
      </div>
    </section>
  );
}
