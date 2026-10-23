import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const trustPoints = [
  {
    title: 'Upfront Quotes · No Hidden Fees',
    detail:
      'We quote before we touch. If we discover additional work needed, we call and discuss it with you first. No surprise line items.',
  },
  {
    title: 'Family-Owned Sun City Pride',
    detail:
      'We treat our Sun City neighbors like family. Respectful communication, honest mechanical advice, and zero pressure sales tactics.',
  },
  {
    title: '12-Month / 12k-Mile Warranty',
    detail:
      'Every replacement part and repair we perform is backed by our full 12-month or 12,000-mile parts and labor guarantee.',
  },
  {
    title: 'Same-Day Service on Most Repairs',
    detail:
      'Drop your car off in the morning, and in most cases, collect it by afternoon. Fast turnaround so you stay on schedule.',
  },
];

export default function WhyUs() {
  return (
    <section
      id="about"
      style={{
        padding: 'var(--section-py) var(--section-px)',
        backgroundColor: 'var(--color-surface)',
      }}
    >
      {/* Section Heading */}
      <h2
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 800,
          fontSize: 'var(--text-h2)',
          color: 'var(--color-white)',
          letterSpacing: '-0.02em',
          lineHeight: 1.05,
          marginBottom: '48px',
        }}
      >
        Why Greenway <span style={{ color: 'var(--color-green)' }}>Family</span> Auto?
      </h2>

      {/* Trust Points Row */}
      <div
        className="trust-grid"
        style={{
          display: 'flex',
          gap: '36px',
          flexWrap: 'wrap',
        }}
      >
        {trustPoints.map((point, index) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              flex: '1 1 240px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
            }}
          >
            {/* Green Circle Checkmark */}
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-green)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '2px',
                boxShadow: '0 4px 16px var(--color-green-glow)',
              }}
            >
              <Check size={22} color="white" strokeWidth={2.5} />
            </div>

            <div>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '18px',
                  color: 'var(--color-white)',
                  marginBottom: '8px',
                }}
              >
                {point.title}
              </p>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: '15px',
                  color: 'var(--color-grey-mid)',
                  lineHeight: 1.6,
                }}
              >
                {point.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 639px) {
          .trust-grid {
            flex-direction: column !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
