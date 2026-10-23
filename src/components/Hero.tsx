import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, PhoneCall, Star, MapPin, Clock } from 'lucide-react';

export default function Hero() {
  const [heroVisible, setHeroVisible] = useState(true);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          height: '100vh',
          minHeight: '680px',
          overflow: 'hidden',
        }}
      >
        {/* Layer 1 — Background Photo */}
        <img
          src="/hero.jpg"
          alt="Professional auto technician servicing vehicle at Greenway Family Auto in Sun City, AZ"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 1,
            filter: 'brightness(0.65) contrast(1.1)',
          }}
        />

        {/* Layer 2 — Watermark "GREENWAY" */}
        <span
          style={{
            position: 'absolute',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(120px, 20vw, 360px)',
            color: 'rgba(232, 232, 232, 0.03)',
            right: '-2%',
            top: '50%',
            transform: 'translateY(-50%)',
            lineHeight: 1,
            letterSpacing: '-0.04em',
            zIndex: 5,
            userSelect: 'none',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          GREENWAY
        </span>

        {/* Layer 3 — Gradient Overlay for Readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 10,
            background:
              'linear-gradient(to right, rgba(20,25,32,0.96) 0%, rgba(20,25,32,0.85) 45%, rgba(20,25,32,0.45) 75%, rgba(20,25,32,0.15) 100%)',
          }}
        />

        {/* Layer 4 — Content */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            zIndex: 20,
            paddingLeft: 'var(--section-px)',
            paddingRight: 'var(--section-px)',
            maxWidth: '860px',
          }}
        >
          {/* Eyebrow badge with Google rating */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'rgba(39, 184, 100, 0.12)',
              border: '1px solid rgba(39, 184, 100, 0.35)',
              padding: '6px 14px',
              borderRadius: '999px',
              width: 'fit-content',
              marginBottom: '24px',
            }}
          >
            <div style={{ display: 'flex', gap: '2px' }}>
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={14} fill="var(--color-green)" color="var(--color-green)" />
              ))}
              <Star size={14} fill="var(--color-green)" color="var(--color-green)" style={{ opacity: 0.5 }} />
            </div>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: '12px',
                color: 'var(--color-grey-light)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              4.0 Stars · 185+ Google Reviews · Sun City, AZ
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: 'var(--text-hero)',
              color: 'var(--color-white)',
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              marginBottom: '24px',
            }}
          >
            HONEST SERVICE.
            <br />
            <span style={{ color: 'var(--color-green)' }}>FAMILY</span> VALUES.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(16px, 1.8vw, 21px)',
              color: 'var(--color-grey-light)',
              maxWidth: '560px',
              lineHeight: 1.6,
              marginBottom: '36px',
            }}
          >
            Sun City's premier independent auto repair shop on 99th Ave. No hidden
            fees, no surprise markups — just honest diagnostics, upfront prices, and
            reliable craftsmanship.
          </motion.p>

          {/* Key Quick Badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'flex',
              gap: '24px',
              flexWrap: 'wrap',
              marginBottom: '36px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={16} color="var(--color-green)" />
              <span style={{ fontSize: '14px', color: 'var(--color-grey-mid)' }}>
                15030 N 99th Ave, Sun City
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={16} color="var(--color-green)" />
              <span style={{ fontSize: '14px', color: 'var(--color-grey-mid)' }}>
                Open Mon–Fri · Closes 5:00 PM
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <a
              href="#booking"
              style={{
                backgroundColor: 'var(--color-green)',
                color: 'var(--color-white)',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: '16px',
                padding: '14px 30px',
                borderRadius: 'var(--radius-sm)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.15s ease',
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
              Book an Appointment
            </a>

            <a
              href="tel:+16239775322"
              style={{
                border: '1px solid var(--color-border)',
                color: 'var(--color-grey-light)',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: '16px',
                padding: '14px 28px',
                borderRadius: 'var(--radius-sm)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'rgba(255,255,255,0.04)',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.borderColor = 'var(--color-green)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.borderColor = 'var(--color-border)';
              }}
            >
              <PhoneCall size={18} color="var(--color-green)" />
              (623) 977-5322
            </a>
          </motion.div>
        </div>

        {/* Layer 5 — Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            bottom: '80px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 20,
          }}
        >
          <ChevronDown size={28} color="rgba(232,232,232,0.4)" />
        </motion.div>

        {/* Sentinel div at the bottom of hero */}
        <div
          ref={sentinelRef}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '1px',
            zIndex: 0,
          }}
        />
      </section>

      {/* Fixed Call Bar */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={heroVisible ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: 'var(--color-green)',
          padding: '14px var(--section-px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '14px',
          pointerEvents: heroVisible ? 'auto' : 'none',
          flexWrap: 'wrap',
          boxShadow: '0 -4px 20px rgba(0,0,0,0.3)',
        }}
      >
        <PhoneCall size={22} color="white" />
        <a
          href="tel:+16239775322"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(18px, 2.2vw, 26px)',
            color: 'var(--color-white)',
            letterSpacing: '-0.01em',
            textDecoration: 'none',
          }}
        >
          CALL US: (623) 977-5322
        </a>
        <span
          className="hidden sm:inline"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 400,
            fontSize: '14px',
            color: 'rgba(255,255,255,0.85)',
            marginLeft: '8px',
          }}
        >
          Mon–Fri 7:30am–5:00pm · 15030 N 99th Ave, Sun City, AZ
        </span>
      </motion.div>
    </>
  );
}
