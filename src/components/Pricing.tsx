import { motion } from 'motion/react';

const pricingRows = [
  { service: 'Full Synthetic Oil Change + 30-Pt Check', price: 'From $49.95', time: '30–45 min' },
  { service: 'A/C Diagnostic & Leak Check', price: 'From $69.00', time: '45 min' },
  { service: 'A/C Evac & Full Freon Recharge', price: 'From $129.00', time: '1 hr' },
  { service: 'Front or Rear Brake Pads (per axle)', price: 'From $99.00', time: '1 hr' },
  { service: 'Brake Pads + New Rotors (per axle)', price: 'From $189.00', time: '1.5 hrs' },
  { service: 'Computer OBD2 Diagnostic Scan', price: 'From $65.00', time: '30 min' },
  { service: 'Serpentine Drive Belt Replacement', price: 'From $85.00', time: '45 min' },
  { service: 'Cooling System Flush & Fluid Exchange', price: 'From $119.00', time: '1 hr' },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        padding: 'var(--section-py) var(--section-px)',
        backgroundColor: 'var(--color-bg)',
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
          marginBottom: '12px',
        }}
      >
        No Surprises.{' '}
        <span style={{ color: 'var(--color-green)' }}>Just Honest Prices.</span>
      </h2>

      <p
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 300,
          fontSize: '17px',
          color: 'var(--color-grey-mid)',
          marginBottom: '48px',
          maxWidth: '620px',
          lineHeight: 1.6,
        }}
      >
        We believe in transparent auto repair. All starting rates are clearly outlined,
        and we always provide a detailed written estimate for your approval prior to beginning work.
      </p>

      {/* Pricing Table */}
      <div className="pricing-scroll-wrapper">
        <div
          style={{
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            border: '1px solid var(--color-border)',
            minWidth: '540px',
          }}
        >
          {/* Header Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 180px 140px',
              backgroundColor: 'var(--color-green)',
              padding: '16px 28px',
            }}
            className="pricing-header"
          >
            {['Service', 'Estimated Price', 'Avg. Time'].map((col) => (
              <span
                key={col}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '14px',
                  color: 'white',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
                className={col === 'Avg. Time' ? 'hide-on-mobile' : ''}
              >
                {col}
              </span>
            ))}
          </div>

          {/* Data Rows */}
          {pricingRows.map((row, i) => (
            <motion.div
              key={row.service}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 180px 140px',
                padding: '18px 28px',
                backgroundColor:
                  i % 2 === 0
                    ? 'var(--color-surface)'
                    : 'var(--color-surface-mid)',
                borderBottom:
                  i < pricingRows.length - 1
                    ? '1px solid var(--color-border)'
                    : 'none',
                alignItems: 'center',
              }}
              className="pricing-row"
            >
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: '16px',
                  color: 'var(--color-grey-light)',
                }}
              >
                {row.service}
              </span>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '16px',
                  color: 'var(--color-green)',
                }}
              >
                {row.price}
              </span>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: '15px',
                  color: 'var(--color-grey-mid)',
                }}
                className="hide-on-mobile"
              >
                {row.time}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footnote */}
      <p
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 300,
          fontSize: '13px',
          color: 'var(--color-grey-dark)',
          marginTop: '18px',
          lineHeight: 1.6,
        }}
      >
        * Prices shown are indicative starting rates and may vary slightly depending on vehicle make, model, and engine specifications. Tax and shop supplies not included.
      </p>

      <style>{`
        @media (max-width: 639px) {
          .hide-on-mobile {
            display: none !important;
          }
          .pricing-header {
            grid-template-columns: 1fr 150px !important;
          }
          .pricing-row {
            grid-template-columns: 1fr 150px !important;
          }
        }
      `}</style>
    </section>
  );
}
