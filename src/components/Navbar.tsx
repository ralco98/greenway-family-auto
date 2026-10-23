import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews (185)', href: '#reviews' },
  { label: 'Location', href: '#location' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 90,
          backgroundColor: 'var(--color-bg)',
          borderBottom: '1px solid var(--color-border)',
          padding: '16px var(--section-px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: '22px',
            color: 'var(--color-white)',
            letterSpacing: '-0.02em',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span>GREENWAY</span>
          <span
            style={{
              color: 'var(--color-green)',
              backgroundColor: 'var(--color-green-subtle)',
              border: '1px solid var(--color-green)',
              fontSize: '11px',
              padding: '2px 8px',
              borderRadius: '999px',
              letterSpacing: '0.08em',
              fontWeight: 700,
              textTransform: 'uppercase',
            }}
          >
            Family Auto
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex"
          style={{ gap: '28px', alignItems: 'center' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: '14px',
                color: 'var(--color-grey-mid)',
                letterSpacing: '0.01em',
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
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: '16px' }}>
          <a
            href="tel:+16239775322"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '15px',
              color: 'var(--color-grey-light)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-green)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-grey-light)')}
          >
            <Phone size={16} color="var(--color-green)" />
            (623) 977-5322
          </a>

          <a
            href="#booking"
            style={{
              backgroundColor: 'var(--color-green)',
              color: 'var(--color-white)',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: '14px',
              padding: '10px 20px',
              borderRadius: 'var(--radius-sm)',
              textDecoration: 'none',
              transition: 'background-color 0.15s ease, box-shadow 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-green-hover)';
              e.currentTarget.style.boxShadow = '0 4px 20px var(--color-green-glow)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-green)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Request Appointment
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex lg:hidden"
          onClick={() => setMobileOpen(true)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-grey-light)',
            padding: '4px',
          }}
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mobile-drawer"
          >
            {/* Drawer Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '40px',
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: '20px',
                  color: 'var(--color-white)',
                  letterSpacing: '-0.02em',
                }}
              >
                GREENWAY <span style={{ color: 'var(--color-green)' }}>FAMILY AUTO</span>
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--color-grey-light)',
                  padding: '4px',
                }}
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
            </div>

            {/* Drawer Links */}
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '24px',
                    color: 'var(--color-grey-light)',
                    textDecoration: 'none',
                    letterSpacing: '-0.02em',
                    padding: '12px 0',
                    borderBottom: '1px solid var(--color-border)',
                    transition: 'color 0.15s ease',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = 'var(--color-green)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = 'var(--color-grey-light)')
                  }
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Drawer Call & CTA */}
            <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href="tel:+16239775322"
                onClick={() => setMobileOpen(false)}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-white)',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '18px',
                  padding: '14px 20px',
                  borderRadius: 'var(--radius-sm)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                }}
              >
                <Phone size={18} color="var(--color-green)" />
                (623) 977-5322
              </a>

              <a
                href="#booking"
                onClick={() => setMobileOpen(false)}
                style={{
                  backgroundColor: 'var(--color-green)',
                  color: 'var(--color-white)',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: '16px',
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-sm)',
                  textDecoration: 'none',
                  textAlign: 'center',
                }}
              >
                Request Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
