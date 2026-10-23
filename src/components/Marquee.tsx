const items = [
  '4.0 ★ (185+ Google Reviews)',
  'Family Owned & Operated in Sun City, AZ',
  'Honest Upfront Pricing',
  'Arizona Summer A/C Specialist',
  'ASE Certified Master Mechanics',
  'Precision Brake Repair',
  '15030 N 99th Ave, Sun City',
  'NFC Mobile & Card Payments Accepted',
  '12-Month / 12,000-Mile Warranty',
];

export default function Marquee() {
  const allItems = [...items, ...items]; // duplicate for seamless loop

  return (
    <div
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        padding: '18px 0',
        overflow: 'hidden',
      }}
    >
      <div
        className="marquee-track"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        {allItems.map((item, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(14px, 1.4vw, 16px)',
                color: 'var(--color-grey-light)',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
                padding: '0 36px',
              }}
            >
              {item}
            </span>
            <span
              style={{
                color: 'var(--color-green)',
                fontSize: '22px',
                lineHeight: 1,
                flexShrink: 0,
              }}
            >
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
