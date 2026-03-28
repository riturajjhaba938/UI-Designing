import { motion } from 'framer-motion';

export default function RedOverlay() {
  return (
    <motion.div
      key="red-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="absolute inset-0 z-40 pointer-events-none"
      style={{
        background:
          'radial-gradient(ellipse at 50% 35%, rgba(239,68,68,0.55) 0%, rgba(185,28,28,0.80) 50%, rgba(69,10,10,0.95) 100%)',
        backdropFilter: 'blur(20px) saturate(1.5)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.5)',
      }}
    />
  );
}
