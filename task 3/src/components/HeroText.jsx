import { motion } from 'framer-motion';
import {
  WAITLIST_TEXT,
  HEADLINE_BEFORE,
  HEADLINE_ACCENT,
  SUBHEADLINE,
  CTA_TEXT,
} from '../constants/content';

const appleEase = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: appleEase, delay },
});

export default function HeroText() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 680,
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* Waitlist Badge */}
      <motion.div
        {...fadeUp(0.3)}
        style={{
          background: 'var(--accent-purple-light)',
          border: '1px solid var(--accent-purple-border)',
          borderRadius: 999,
          padding: '5px 14px',
          fontSize: 11,
          fontFamily: 'var(--font-display)',
          fontWeight: 500,
          color: '#7c5cbf',
          marginBottom: 20,
          cursor: 'default',
        }}
      >
        {WAITLIST_TEXT}
      </motion.div>

      {/* Headline */}
      <motion.h1
        {...fadeUp(0.45)}
        style={{
          fontSize: 'clamp(36px, 6vw, 64px)',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          lineHeight: 1.08,
          color: '#0a0a0a',
          fontFamily: 'var(--font-display)',
          marginBottom: 18,
        }}
      >
        {HEADLINE_BEFORE}
        <span style={{ color: 'var(--accent-purple)' }}>{HEADLINE_ACCENT}</span>
      </motion.h1>

      {/* Sub-headline */}
      <motion.p
        {...fadeUp(0.6)}
        style={{
          fontSize: 15,
          fontFamily: 'var(--font-display)',
          fontWeight: 400,
          color: '#4b4b4b',
          lineHeight: 1.65,
          maxWidth: 480,
          marginBottom: 28,
        }}
      >
        {SUBHEADLINE}
      </motion.p>

      {/* CTA Button */}
      <motion.div {...fadeUp(0.75)}>
        <motion.button
          whileHover={{
            scale: 0.98,
            opacity: 0.85,
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.25)',
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: '#0f0f0f',
            color: '#fff',
            borderRadius: 999,
            padding: '13px 28px',
            fontSize: 14,
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Shimmer overlay */}
          <span
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 3s ease-in-out infinite',
              pointerEvents: 'none',
            }}
          />
          {CTA_TEXT}
        </motion.button>
      </motion.div>
    </div>
  );
}
