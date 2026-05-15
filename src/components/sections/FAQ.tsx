import { useState } from 'react';
import { useInView } from '../../hooks/useInView';

const FAQS = [
  {
    id: 'faq-1',
    question: 'What exactly is the Free Inspection?',
    answer: "It's a no-cost audit of your website, local search visibility, and ad spend. We identify what's working, what's broken, and what to fix first — then walk you through it on a call. No pitch, no pressure.",
  },
  {
    id: 'faq-2',
    question: 'Do I have to sign a long-term contract?',
    answer: "No. We work month-to-month on most services. We'd rather earn your business every month than lock you in.",
  },
  {
    id: 'faq-3',
    question: 'How long before I see results?',
    answer: 'It depends on the service. Ads can drive traffic within days. SEO typically shows meaningful movement in 60–90 days. We set clear expectations upfront so you always know what to expect.',
  },
  {
    id: 'faq-4',
    question: 'Do you only work with Texas businesses?',
    answer: "We're Texas-based and built for Texas markets, but we work with businesses across the US. If you're outside Texas, reach out and we'll let you know if we're a good fit.",
  },
  {
    id: 'faq-5',
    question: 'What makes PixelDrip different from other agencies?',
    answer: "Most agencies stay in one lane. We handle digital and physical marketing together — website, search, ads, signage, apparel, print — as one connected system. And you always talk to real people, not account managers reading from a script.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const { ref, visible } = useInView();

  return (
    <section id="pd-home-faq" className="section-faq" ref={ref as React.Ref<HTMLElement>}>
      <div className="container">
        <span className={`section-label text-blue text-center fade-up ${visible ? 'visible' : ''}`}>
          Common Questions
        </span>
        <h2 className={`faq-headline text-white text-center fade-up delay-1 ${visible ? 'visible' : ''}`}>
          Got Questions? We've Got Straight Answers.
        </h2>

        <div className="faq-list">
          {FAQS.map((item, i) => {
            const isOpen = openId === item.id;
            return (
              <article
                key={item.id}
                className={`faq-item card-flat ${isOpen ? 'open' : ''} fade-up ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${0.1 + i * 0.07}s` }}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`answer-${item.id}`}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <span className="faq-toggle" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <line x1="12" y1="5" x2="12" y2="19" strokeLinecap="round"/>
                      <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>
                <div id={`answer-${item.id}`} className="faq-answer">
                  <p className="faq-answer-body">{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
