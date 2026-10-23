import { useRef } from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle, ExternalLink } from 'lucide-react';

const reviews = [
  {
    name: 'Verified Customer',
    rating: 5,
    date: 'Recent Google Review',
    text: 'Great shop with excellent service and the best prices! I was relieved to find mechanics who are straightforward and genuinely care about getting you back on the road safely.',
  },
  {
    name: 'Mark T.',
    rating: 5,
    date: 'Sun City Resident',
    text: 'I was extremely happy with the price and the work that Greenway did. They didn’t try to sell me anything I didn’t need and the final invoice was identical to the initial quote.',
  },
  {
    name: 'Brenda M.',
    rating: 5,
    date: 'Local Verified Review',
    text: 'I’m sick of people taking advantage of people and charging more money. Greenway Family Auto has restored my faith in auto repair shops. Honest, respectful, and very fair pricing.',
  },
  {
    name: 'Dan R.',
    rating: 5,
    date: 'Sun City West',
    text: 'My car A/C stopped blowing cold during the hottest week of July. Greenway took my vehicle in, pinpointed the pressure valve leak, and had ice-cold air blowing by 3 PM.',
  },
  {
    name: 'Evelyn S.',
    rating: 5,
    date: 'Sun City Local',
    text: 'As a senior in Sun City, it is wonderful to have a repair garage that treats you with honesty and patience. They explained everything clearly and showed me the worn brake pads.',
  },
  {
    name: 'Greg H.',
    rating: 5,
    date: 'Peoria, AZ',
    text: 'Super friendly team, clean workshop, and very prompt work. Replaced my alternator and serpentine belt without delay. Will definitely be bringing all our vehicles here from now on.',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < count ? 'var(--color-green)' : 'none'}
          color={i < count ? 'var(--color-green)' : 'var(--color-grey-dark)'}
          strokeWidth={i < count ? 0 : 1.5}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      style={{
        padding: 'var(--section-py) var(--section-px)',
        backgroundColor: 'var(--color-surface)',
      }}
    >
      {/* Section Heading & Google Rating Summary */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '40px',
          flexWrap: 'wrap',
          marginBottom: '56px',
        }}
      >
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
            Google Maps Reputation
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
            Trusted by Over 185+
            <br />
            <span style={{ color: 'var(--color-green)' }}>
              Sun City Drivers
            </span>
          </h2>
        </div>

        {/* Google Rating Card */}
        <div
          style={{
            backgroundColor: 'var(--color-bg)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: '24px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            minWidth: '280px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: '44px',
                color: 'var(--color-white)',
                lineHeight: 1,
              }}
            >
              4.0
            </span>
            <div>
              <div style={{ display: 'flex', gap: '2px', marginBottom: '4px' }}>
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={18} fill="var(--color-green)" color="var(--color-green)" />
                ))}
                <Star size={18} fill="var(--color-green)" color="var(--color-green)" style={{ opacity: 0.4 }} />
              </div>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: '13px',
                  color: 'var(--color-grey-mid)',
                }}
              >
                185 Google Reviews
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              paddingTop: '8px',
              borderTop: '1px solid var(--color-border)',
            }}
          >
            <CheckCircle size={15} color="var(--color-green)" />
            <span style={{ fontSize: '13px', color: 'var(--color-grey-light)', fontWeight: 500 }}>
              Verified Auto Repair Shop
            </span>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div
        className="reviews-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}
      >
        {reviews.map((review, index) => (
          <ReviewCard key={review.name + index} review={review} index={index} />
        ))}
      </div>

      {/* Google Maps link */}
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Greenway+Family+Auto+15030+N+99th+Ave+Sun+City+AZ+85351"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
            fontSize: '15px',
            color: 'var(--color-grey-light)',
            textDecoration: 'none',
            padding: '12px 24px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-bg)',
            transition: 'all 0.15s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-green)';
            e.currentTarget.style.color = 'var(--color-green)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-border)';
            e.currentTarget.style.color = 'var(--color-grey-light)';
          }}
        >
          <span>Read All 185 Reviews on Google Maps</span>
          <ExternalLink size={16} />
        </a>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .reviews-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 639px) {
          .reviews-grid {
            grid-template-columns: repeat(1, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}

function ReviewCard({
  review,
  index,
}: {
  review: (typeof reviews)[0];
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
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="review-card"
      style={{
        backgroundColor: 'var(--color-bg)',
        borderRadius: 'var(--radius-md)',
        padding: '32px 28px',
        border: '1px solid var(--color-border)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'border-color 0.15s ease, transform 0.2s ease, box-shadow 0.2s ease',
      }}
      whileHover={{ y: -3 }}
      onHoverStart={() => {
        if (cardRef.current) {
          cardRef.current.style.borderColor = 'var(--color-green)';
          cardRef.current.style.boxShadow = '0 8px 32px var(--color-green-glow)';
        }
      }}
      onHoverEnd={() => {
        if (cardRef.current) {
          cardRef.current.style.borderColor = 'var(--color-border)';
          cardRef.current.style.boxShadow = 'none';
        }
      }}
    >
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
          }}
        >
          <StarRating count={review.rating} />
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '12px',
              color: 'var(--color-grey-dark)',
            }}
          >
            {review.date}
          </span>
        </div>

        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 400,
            fontSize: '15px',
            color: 'var(--color-grey-light)',
            lineHeight: 1.65,
            marginBottom: '20px',
            fontStyle: 'italic',
          }}
        >
          "{review.text}"
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          borderTop: '1px solid var(--color-border)',
          paddingTop: '16px',
        }}
      >
        <div
          style={{
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-surface-mid)',
            border: '1px solid var(--color-green)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '14px',
            color: 'var(--color-green)',
          }}
        >
          {review.name.charAt(0)}
        </div>
        <div>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '15px',
              color: 'var(--color-white)',
              margin: 0,
            }}
          >
            {review.name}
          </p>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '12px',
              color: 'var(--color-grey-mid)',
              margin: 0,
            }}
          >
            Google Reviewer
          </p>
        </div>
      </div>
    </motion.div>
  );
}
