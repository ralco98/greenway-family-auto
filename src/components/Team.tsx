import { useRef } from 'react';
import { motion } from 'motion/react';

const team = [
  {
    name: 'Dominic "Dom" Vance',
    experience: 24,
    speciality: 'Shop Owner & Master Tech',
    image: '/team-danny.jpg',
  },
  {
    name: 'Scott Miller',
    experience: 17,
    speciality: 'Diagnostics & Electrical',
    image: '/team-priya.jpg',
  },
  {
    name: 'Carl Hutchins',
    experience: 19,
    speciality: 'Brakes, A/C & Suspension',
    image: '/team-carl.jpg',
  },
];

export default function Team() {
  return (
    <section
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
          marginBottom: '56px',
        }}
      >
        Meet the <span style={{ color: 'var(--color-green)' }}>Mechanics</span>
      </h2>

      {/* Team Grid */}
      <div
        className="team-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}
      >
        {team.map((member, index) => (
          <TeamCard key={member.name} member={member} index={index} />
        ))}
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 639px) {
          .team-grid {
            grid-template-columns: repeat(1, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}

function TeamCard({
  member,
  index,
}: {
  member: (typeof team)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="team-card"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        borderTop: '4px solid transparent',
        transition: 'border-color 0.15s ease, transform 0.2s ease, box-shadow 0.2s ease',
      }}
      whileHover={{ y: -4 }}
      onHoverStart={() => {
        if (cardRef.current) {
          cardRef.current.style.borderTopColor = 'var(--color-green)';
          cardRef.current.style.boxShadow = '0 12px 40px var(--color-green-glow)';
        }
      }}
      onHoverEnd={() => {
        if (cardRef.current) {
          cardRef.current.style.borderTopColor = 'transparent';
          cardRef.current.style.boxShadow = 'none';
        }
      }}
    >
      {/* Photo — 4:3 ratio */}
      <div
        style={{
          aspectRatio: '4/3',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <img
          src={member.image}
          alt={`${member.name} — technician at Greenway Family Auto`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            transition: 'transform 0.4s ease',
          }}
        />
      </div>

      {/* Card Body */}
      <div style={{ padding: '24px 28px 28px' }}>
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '22px',
            color: 'var(--color-white)',
            marginBottom: '4px',
          }}
        >
          {member.name}
        </h3>
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 400,
            fontSize: '14px',
            color: 'var(--color-grey-mid)',
            marginBottom: '16px',
          }}
        >
          {member.experience} years professional experience
        </p>

        {/* Speciality Chip */}
        <span
          style={{
            display: 'inline-block',
            backgroundColor: 'var(--color-green)',
            color: 'white',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
            fontSize: '12px',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            padding: '5px 12px',
            borderRadius: '4px',
          }}
        >
          {member.speciality}
        </span>
      </div>
    </motion.div>
  );
}
