import { useState } from 'react';
import { motion } from 'motion/react';
import { PhoneCall, Calendar, Clock, MapPin, CreditCard, CheckCircle2 } from 'lucide-react';

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    service: 'A/C Repair & Recharge',
    date: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="booking"
      style={{
        padding: 'var(--section-py) var(--section-px)',
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div
        className="booking-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'flex-start',
        }}
      >
        {/* Left — Info */}
        <div>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: '13px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-green)',
              marginBottom: '12px',
            }}
          >
            Easy Scheduling
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: 'var(--text-h2)',
              color: 'var(--color-white)',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              marginBottom: '24px',
            }}
          >
            Schedule Your
            <br />
            <span style={{ color: 'var(--color-green)' }}>Appointment.</span>
          </motion.h2>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              color: 'var(--color-grey-mid)',
              lineHeight: 1.7,
              marginBottom: '36px',
            }}
          >
            Appointments are recommended so our technicians have a bay reserved for your vehicle.
            Submit the form below or call directly — we'll confirm your reservation promptly.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
            {[
              {
                icon: PhoneCall,
                label: 'Phone',
                text: '(623) 977-5322',
                href: 'tel:+16239775322',
              },
              {
                icon: Clock,
                label: 'Shop Hours',
                text: 'Mon–Fri 7:30 AM – 5:00 PM (Closes 5 PM)',
                href: null,
              },
              {
                icon: MapPin,
                label: 'Location',
                text: '15030 N 99th Ave, Sun City, AZ 85351',
                href: 'https://www.google.com/maps/search/?api=1&query=15030+N+99th+Ave+Sun+City+AZ+85351',
              },
              {
                icon: CreditCard,
                label: 'Payment Methods',
                text: 'Credit Cards, Debit Cards & NFC Mobile Payments (Apple Pay/Google Pay)',
                href: null,
              },
            ].map(({ icon: Icon, label, text, href }) => (
              <div
                key={label}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--color-green-subtle)',
                    border: '1px solid rgba(39, 184, 100, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} color="var(--color-green)" />
                </div>
                <div>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: '13px',
                      color: 'var(--color-grey-mid)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: '15px',
                        color: 'var(--color-grey-light)',
                        textDecoration: 'none',
                        transition: 'color 0.15s ease',
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = 'var(--color-green)')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = 'var(--color-grey-light)')
                      }
                    >
                      {text}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 500,
                        fontSize: '15px',
                        color: 'var(--color-grey-light)',
                      }}
                    >
                      {text}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form Container */}
        <div
          style={{
            backgroundColor: 'var(--color-surface)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border)',
            padding: '40px 36px',
            boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
          }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                textAlign: 'center',
                padding: '40px 20px',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-green-subtle)',
                  border: '1px solid var(--color-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                }}
              >
                <CheckCircle2 size={36} color="var(--color-green)" />
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: '24px',
                  color: 'var(--color-white)',
                  marginBottom: '12px',
                }}
              >
                Appointment Request Received!
              </h3>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '15px',
                  color: 'var(--color-grey-mid)',
                  lineHeight: 1.6,
                  marginBottom: '24px',
                }}
              >
                Thank you, {formData.name || 'valued customer'}. The Greenway Family Auto team will call you at{' '}
                <strong style={{ color: 'var(--color-white)' }}>{formData.phone || 'your number'}</strong> to confirm your service slot.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-grey-light)',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: '14px',
                  padding: '10px 24px',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                }}
              >
                Submit Another Request
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <Calendar size={20} color="var(--color-green)" />
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '20px',
                    color: 'var(--color-white)',
                    margin: 0,
                  }}
                >
                  Request a Time Slot
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Full Name */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: '13px',
                      color: 'var(--color-grey-light)',
                      marginBottom: '8px',
                    }}
                  >
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Miller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      backgroundColor: 'var(--color-surface-mid)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--color-white)',
                      fontSize: '15px',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--color-green)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: '13px',
                      color: 'var(--color-grey-light)',
                      marginBottom: '8px',
                    }}
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(623) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      backgroundColor: 'var(--color-surface-mid)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--color-white)',
                      fontSize: '15px',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--color-green)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                  />
                </div>

                {/* Vehicle Year / Make / Model */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: '13px',
                      color: 'var(--color-grey-light)',
                      marginBottom: '8px',
                    }}
                  >
                    Vehicle (Year, Make, Model) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2017 Honda CR-V"
                    value={formData.vehicle}
                    onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      backgroundColor: 'var(--color-surface-mid)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--color-white)',
                      fontSize: '15px',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--color-green)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                  />
                </div>

                {/* Service Needed */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: '13px',
                      color: 'var(--color-grey-light)',
                      marginBottom: '8px',
                    }}
                  >
                    Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      backgroundColor: 'var(--color-surface-mid)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--color-white)',
                      fontSize: '15px',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--color-green)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                  >
                    <option value="A/C Repair & Recharge">A/C Repair & Recharge</option>
                    <option value="Brake Service">Brake Service (Pads & Rotors)</option>
                    <option value="Check Engine Light">Check Engine Light / Diagnostics</option>
                    <option value="Oil & Filter Change">Oil & Filter Change (Full Synthetic)</option>
                    <option value="Suspension / Steering">Suspension & Steering Check</option>
                    <option value="General Inspection">General Inspection / Other Repair</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: '13px',
                      color: 'var(--color-grey-light)',
                      marginBottom: '8px',
                    }}
                  >
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      backgroundColor: 'var(--color-surface-mid)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--color-white)',
                      fontSize: '15px',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--color-green)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                  />
                </div>

                {/* Notes */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: '13px',
                      color: 'var(--color-grey-light)',
                      marginBottom: '8px',
                    }}
                  >
                    Symptoms or Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe any sounds, vibrations, warning lights, or specific concerns..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      backgroundColor: 'var(--color-surface-mid)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--color-white)',
                      fontSize: '15px',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--color-green)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  style={{
                    backgroundColor: 'var(--color-green)',
                    color: 'var(--color-white)',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: '16px',
                    padding: '16px',
                    borderRadius: 'var(--radius-sm)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.15s ease, box-shadow 0.15s ease',
                    marginTop: '8px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-green-hover)';
                    e.currentTarget.style.boxShadow = '0 6px 25px var(--color-green-glow)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-green)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Request Service Appointment
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .booking-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
