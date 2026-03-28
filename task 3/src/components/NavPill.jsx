import { motion } from 'framer-motion';
import { NAV_LINKS, CTA_TEXT } from '../constants/content';

const appleEase = [0.16, 1, 0.3, 1];

export default function NavPill() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: appleEase, delay: 0.1 }}
      style={{
        position: 'fixed',
        top: 16,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        background: '#0f0f0f',
        borderRadius: 999,
        padding: '6px 8px 6px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Logo circle */}
      <div
        style={{
          width: 24,
          height: 24,
          borderRadius: '50%',
          background: '#fff',
          marginRight: 12,
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M6 0L7.8 4.2L12 6L7.8 7.8L6 12L4.2 7.8L0 6L4.2 4.2L6 0Z" fill="#0f0f0f" />
        </svg>
      </div>

      {/* Nav Links */}
      {NAV_LINKS.map((link) => (
        <motion.a
          key={link}
          href="#"
          whileHover={{ color: '#ffffff', backgroundColor: '#1e1e1e' }}
          style={{
            color: '#888',
            fontSize: 12,
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            textDecoration: 'none',
            padding: '7px 14px',
            borderRadius: 999,
            transition: 'all 0.2s ease',
            whiteSpace: 'nowrap',
          }}
        >
          {link}
        </motion.a>
      ))}

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 0.97, opacity: 0.9 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: '#fff',
          color: '#0f0f0f',
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: 12,
          padding: '7px 16px',
          borderRadius: 999,
          border: 'none',
          cursor: 'pointer',
          marginLeft: 4,
          whiteSpace: 'nowrap',
        }}
      >
        {CTA_TEXT.replace(' →', '')}
      </motion.button>
    </motion.nav>
  );
}
