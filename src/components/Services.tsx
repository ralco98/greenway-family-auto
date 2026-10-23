import { useRef } from 'react';
import { motion } from 'motion/react';
import {
  Wind,
  CircleDot,
  ScanLine,
  Gauge,
  SlidersHorizontal,
  ClipboardCheck,
  type LucideProps,
} from 'lucide-react';
import type { ElementType } from 'react';

interface Service {
  name: string;
  icon: ElementType<LucideProps>;
  description: string;
  price: string;
}

const services: Service[] = [
  {
    name: 'A/C Repair & Recharge',
    icon: Wind,
    description:
      'Arizona heat is brutal on auto A/C systems. We perform complete diagnostic leak tests, compressor repair, evaporator service, and precision refrigerant recharge.',
    price: 'From $89',
  },
  {
    name: 'Brake Repair & Service',
    icon: CircleDot,
    description:
      'Ceramic brake pads, rotor replacement or resurfacing, caliper rebuilds, and brake fluid flushes. Safe, squeak-free stopping backed by our 12-month warranty.',
    price: 'From $99 / axle',
  },
  {
    name: 'Check Engine & Diagnostics',
    icon: ScanLine,
    description:
      'State-of-the-art computer scanning covering powertrain, ABS, airbag, and emission controls. We decode the exact fault codes and explain what they mean.',
    price: 'From $65',
  },
  {
    name: 'Engine & Transmission',
    icon: Gauge,
    description:
      'Complete mechanical repairs — from spark plugs, coils, and timing belts to water pumps and transmission fluid service. Honest diagnosis before any work starts.',
    price: 'Free Estimate',
  },
  {
    name: 'Suspension & Steering',
    icon: SlidersHorizontal,
    description:
      'Shocks, struts, tie rods, control arms, and sway bar links. Restore smooth handling, eliminate rattles, and ensure even tire wear across Arizona roads.',
    price: 'From $120',
  },
  {
    name: 'Oil & Scheduled Care',
    icon: ClipboardCheck,
    description:
      'Full synthetic or synthetic-blend oil service with new OEM filter, fluid top-offs, and a thorough 30-point safety inspection to catch small issues early.',
    price: 'From $49.95',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: 'var(--section-py) var(--section-px)',
        backgroundColor: 'var(--color-bg)',
      }}
    >
      {/* Section Heading */}
      <div style={{ marginBottom: '56px' }}>
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
          Comprehensive Auto Care
        </p>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 'var(--text-h2)',
            color: 'var(--color-white)',
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
          }}
        >
          Full-Service Auto Repair
          <br />
          <span style={{ color: 'var(--color-grey-mid)' }}>
            in Sun City, Arizona
          </span>
        </h2>
      </div>

      {/* Services Grid — 3 cols desktop, 2 tablet, 1 mobile */}
      <div
        className="services-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.name} service={service} index={index} />
        ))}
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 639px) {
          .services-grid {
            grid-template-columns: repeat(1, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon = service.icon;
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="service-card"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderRadius: 'var(--radius-md)',
        padding: '36px 32px',
        borderLeft: '4px solid transparent',
        borderTop: '1px solid var(--color-border)',
        borderRight: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '280px',
        transition: 'border-color 0.15s ease, transform 0.2s ease, box-shadow 0.2s ease',
      }}
      whileHover={{ y: -4 }}
      onHoverStart={() => {
        if (cardRef.current) {
          cardRef.current.style.borderLeftColor = 'var(--color-green)';
          cardRef.current.style.boxShadow = '0 8px 32px var(--color-green-glow)';
        }
      }}
      onHoverEnd={() => {
        if (cardRef.current) {
          cardRef.current.style.borderLeftColor = 'transparent';
          cardRef.current.style.boxShadow = 'none';
        }
      }}
    >
      <div>
        {/* Icon */}
        <div style={{ marginBottom: '24px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--color-green-subtle)',
              border: '1px solid rgba(39, 184, 100, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon size={28} color="var(--color-green)" strokeWidth={1.75} />
          </div>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'var(--text-h3)',
            color: 'var(--color-white)',
            marginBottom: '12px',
          }}
        >
          {service.name}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 400,
            fontSize: '15px',
            color: 'var(--color-grey-mid)',
            lineHeight: 1.65,
          }}
        >
          {service.description}
        </p>
      </div>

      {/* Starting Price & Link */}
      <div
        style={{
          marginTop: '28px',
          paddingTop: '20px',
          borderTop: '1px solid var(--color-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '16px',
            color: 'var(--color-green)',
          }}
        >
          {service.price}
        </span>

        <a
          href="#booking"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
            fontSize: '13px',
            color: 'var(--color-grey-light)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-green)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-grey-light)')}
        >
          Schedule &rarr;
        </a>
      </div>
    </motion.div>
  );
}
