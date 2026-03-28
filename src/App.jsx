import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import NavPill from './components/NavPill';
import HeroText from './components/HeroText';
import PhoneTriptych from './components/PhoneTriptych';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#ffffff',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* Subtle SVG noise texture */}
      <div className="noise-bg">
        <svg width="100%" height="100%">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" opacity="0.025" />
        </svg>
      </div>

      {/* Animated background gradient blobs that react to mouse */}
      <motion.div
        animate={{
          x: mousePos.x * 30,
          y: mousePos.y * 20,
        }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: '10%',
          left: '20%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <motion.div
        animate={{
          x: mousePos.x * -20,
          y: mousePos.y * -15,
        }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: '30%',
          right: '15%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(103,232,249,0.05) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <motion.div
        animate={{
          x: mousePos.x * 15,
          y: mousePos.y * 25,
        }}
        transition={{ duration: 2, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          bottom: '10%',
          left: '40%',
          width: 350,
          height: 350,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,168,212,0.05) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Navigation */}
      <NavPill />

      {/* Main Hero Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 120,
          paddingBottom: 40,
          paddingLeft: 20,
          paddingRight: 20,
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        <HeroText />
        <PhoneTriptych mouseX={mousePos.x} mouseY={mousePos.y} />
      </motion.main>

      {/* Spacer for scroll animations */}
      <div style={{ height: '150vh', background: 'transparent' }} />
    </div>
  );
}
