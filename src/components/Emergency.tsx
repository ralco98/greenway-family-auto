import { motion } from 'motion/react';
import { PhoneCall } from 'lucide-react';

export default function Emergency() {
  return (
    <section
      style={{
        backgroundColor: 'var(--color-green)',
        padding: 'var(--section-py) var(--section-px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background watermark */}
      <span
        style={{
          position: 'absolute',
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(140px, 24vw, 360px)',
          color: 'rgba(0,0,0,0.06)',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        EXPERT
      </span>

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
            fontSize: '13px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.75)',
            marginBottom: '20px',
          }}
        >
          Immediate Mechanical Assistance
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(34px, 5vw, 76px)',
            color: 'white',
            letterSpacing: '-0.03em',
            lineHeight: 0.98,
            marginBottom: '28px',
          }}
        >
          CAR TROUBLE IN SUN CITY?
          <br />
          CALL US FOR DIRECT HELP.
        </motion.h2>

        <motion.a
          href="tel:+16239775322"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.02 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '16px',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(32px, 5vw, 72px)',
            color: 'white',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            textDecoration: 'none',
            marginBottom: '24px',
            transition: 'opacity 0.15s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          <PhoneCall size={44} color="white" />
          (623) 977-5322
        </motion.a>

        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(15px, 1.6vw, 18px)',
            color: 'rgba(255,255,255,0.88)',
            letterSpacing: '0.02em',
          }}
        >
          Open Monday–Friday until 5:00 PM · 15030 N 99th Ave, Sun City, AZ · Walk-ins & Tow-ins Welcome
        </p>
      </div>
    </section>
  );
}
