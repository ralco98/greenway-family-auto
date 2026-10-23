import { ShieldCheck, MapPin, Clock, Phone, CreditCard, ExternalLink, Star } from 'lucide-react';

const hours = [
  { day: 'Monday', time: '7:30am – 5:00pm' },
  { day: 'Tuesday', time: '7:30am – 5:00pm' },
  { day: 'Wednesday', time: '7:30am – 5:00pm' },
  { day: 'Thursday', time: '7:30am – 5:00pm' },
  { day: 'Friday', time: '7:30am – 5:00pm' },
  { day: 'Saturday', time: 'Closed' },
  { day: 'Sunday', time: 'Closed' },
];

const assurances = [
  '4.0 ★ Rating (185+ Google Reviews)',
  'ASE Certified Master Mechanics',
  '12-Month / 12,000-Mile Warranty',
  'Family-Owned & Operated Locally',
];

const quickLinks = [
  { label: 'Our Services', href: '#services' },
  { label: 'Why Choose Us', href: '#about' },
  { label: 'Transparent Pricing', href: '#pricing' },
  { label: 'Customer Reviews (185)', href: '#reviews' },
  { label: 'Schedule Appointment', href: '#booking' },
];

export default function Footer() {
  return (
    <footer
      id="location"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        padding: '64px var(--section-px) 32px',
      }}
    >
      {/* 3-Column Grid */}
      <div
        className="footer-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr 1fr',
          gap: '48px',
          marginBottom: '40px',
        }}
      >
        {/* Column 1 — Brand & Location */}
        <div>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: '24px',
              color: 'var(--color-white)',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            GREENWAY <span style={{ color: 'var(--color-green)' }}>FAMILY AUTO</span>
          </div>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
              fontSize: '14px',
              color: 'var(--color-grey-mid)',
              lineHeight: 1.7,
              marginBottom: '24px',
            }}
          >
            Sun City's trusted, family-owned auto repair garage. Providing honest diagnostic
            evaluations, fair upfront quotes, and dependable repairs for our Northwest Valley neighbors.
          </p>

          {/* Address */}
          <div
            style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}
          >
            <MapPin size={18} color="var(--color-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: '14px',
                  color: 'var(--color-grey-light)',
                  lineHeight: 1.5,
                  marginBottom: '4px',
                }}
              >
                15030 N 99th Ave, Sun City, AZ 85351
              </p>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '12px',
                  color: 'var(--color-grey-mid)',
                }}
              >
                Plus Code: JPCJ+J5 Sun City, Arizona
              </span>
              <br />
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=15030+N+99th+Ave+Sun+City+AZ+85351"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '13px',
                  color: 'var(--color-green)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  marginTop: '4px',
                }}
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Phone */}
          <div
            style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '16px' }}
          >
            <Phone size={18} color="var(--color-green)" style={{ flexShrink: 0 }} />
            <a
              href="tel:+16239775322"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '16px',
                color: 'var(--color-grey-light)',
                textDecoration: 'none',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-green)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-grey-light)')}
            >
              (623) 977-5322
            </a>
          </div>

          {/* Payment Methods */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px' }}>
            <CreditCard size={16} color="var(--color-green)" />
            <span style={{ fontSize: '12px', color: 'var(--color-grey-mid)' }}>
              Credit cards, Debit cards & NFC Mobile Payments
            </span>
          </div>
        </div>

        {/* Column 2 — Opening Hours & Trust */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '20px',
            }}
          >
            <Clock size={18} color="var(--color-green)" />
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '16px',
                color: 'var(--color-white)',
                letterSpacing: '-0.01em',
              }}
            >
              Shop Hours
            </span>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '24px' }}>
            <tbody>
              {hours.map((row) => (
                <tr
                  key={row.day}
                  style={{
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <td
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 500,
                      fontSize: '13px',
                      color:
                        row.day === 'Saturday' || row.day === 'Sunday'
                          ? 'var(--color-grey-dark)'
                          : 'var(--color-grey-mid)',
                      padding: '8px 0',
                    }}
                  >
                    {row.day}
                  </td>
                  <td
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: '13px',
                      color:
                        row.day === 'Saturday' || row.day === 'Sunday'
                          ? 'var(--color-grey-dark)'
                          : 'var(--color-grey-light)',
                      textAlign: 'right',
                      padding: '8px 0',
                    }}
                  >
                    {row.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Google badge preview */}
          <div
            style={{
              backgroundColor: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', gap: '2px', marginBottom: '2px' }}>
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={13} fill="var(--color-green)" color="var(--color-green)" />
                ))}
                <Star size={13} fill="var(--color-green)" color="var(--color-green)" style={{ opacity: 0.4 }} />
              </div>
              <span style={{ fontSize: '11px', color: 'var(--color-grey-mid)' }}>
                4.0 rating · 185 Google reviews
              </span>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Greenway+Family+Auto+15030+N+99th+Ave+Sun+City+AZ+85351"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--color-green)',
                textDecoration: 'none',
              }}
            >
              View Maps &rarr;
            </a>
          </div>
        </div>

        {/* Column 3 — Assurances & Navigation */}
        <div>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '16px',
              color: 'var(--color-white)',
              letterSpacing: '-0.01em',
              display: 'block',
              marginBottom: '20px',
            }}
          >
            The Greenway Guarantee
          </span>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginBottom: '28px',
            }}
          >
            {assurances.map((cert) => (
              <div
                key={cert}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <ShieldCheck size={16} color="var(--color-green)" style={{ flexShrink: 0 }} />
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '13px',
                    color: 'var(--color-grey-light)',
                  }}
                >
                  {cert}
                </span>
              </div>
            ))}
          </div>

          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '14px',
              color: 'var(--color-white)',
              display: 'block',
              marginBottom: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            Quick Links
          </span>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '14px',
                  color: 'var(--color-grey-mid)',
                  textDecoration: 'none',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--color-green)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'var(--color-grey-mid)')
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: '1px solid var(--color-border)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '13px',
            color: 'var(--color-grey-dark)',
          }}
        >
          © {new Date().getFullYear()} Greenway Family Auto. All rights reserved. 15030 N 99th Ave, Sun City, AZ 85351.
        </p>

        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '13px',
            color: 'var(--color-grey-dark)',
          }}
        >
          Family-Owned Auto Repair in Sun City, AZ
        </p>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 639px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
