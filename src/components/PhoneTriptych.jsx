import { motion, useScroll, useTransform } from 'framer-motion';
import PhoneCenter from './PhoneCenter';
import PhoneSide from './PhoneSide';
import { PHONE_LEFT, PHONE_RIGHT } from '../constants/content';

export default function PhoneTriptych({ mouseX, mouseY }) {
  // Parallax offsets based on mouse position
  const parallaxX = mouseX * 0.015;
  const parallaxY = mouseY * 0.01;

  // Scroll animations
  const { scrollY } = useScroll();
  
  // Transform values based on scroll (0 to 600px)
  const centerScrollY = useTransform(scrollY, [0, 600], [0, -350]);
  const centerScale = useTransform(scrollY, [0, 600], [1, 1.25]);

  const sideScrollY = useTransform(scrollY, [0, 600], [0, -100]);
  const leftScrollX = useTransform(scrollY, [0, 600], [0, -140]);
  const rightScrollX = useTransform(scrollY, [0, 600], [0, 140]);
  const leftScrollRotate = useTransform(scrollY, [0, 600], [-12, -30]);
  const rightScrollRotate = useTransform(scrollY, [0, 600], [12, 30]);
  const sideOpacity = useTransform(scrollY, [0, 600], [0.88, 0.2]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 22,
        delay: 0.9,
        mass: 1.2,
      }}
      style={{
        position: 'relative',
        width: '100%',
        height: 420,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: 40,
      }}
    >
      {/* Left Phone Scroll Wrapper */}
      <motion.div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: -10,
          width: 196,
          height: 380,
          marginLeft: -268, /* -98 (half width) - 170 (offset) */
          zIndex: 10,
          y: sideScrollY,
          x: leftScrollX,
          rotate: leftScrollRotate,
          opacity: sideOpacity,
        }}
      >
        <motion.div
          animate={{
            y: [0, -6, 0],
            x: parallaxX * -1.2,
          }}
          transition={{
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 },
            x: { duration: 0.3, ease: 'easeOut' },
          }}
          whileHover={{ scale: 1.03, rotateY: 3 }}
          style={{
            width: '100%',
            height: '100%',
            transformStyle: 'preserve-3d',
            cursor: 'pointer',
          }}
        >
          <PhoneSide
            greeting={PHONE_LEFT.greeting}
            userMessage={PHONE_LEFT.userMessage}
            userMsgColor={PHONE_LEFT.userMsgColor}
          />
        </motion.div>
      </motion.div>

      {/* Center Phone Scroll Wrapper */}
      <motion.div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 0,
          width: 220,
          height: 420,
          marginLeft: -110,
          zIndex: 20,
          y: centerScrollY,
          scale: centerScale,
        }}
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
            x: parallaxX * 0.3,
          }}
          transition={{
            y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
            x: { duration: 0.3, ease: 'easeOut' },
          }}
          whileHover={{ scale: 1.04, rotateX: 2 }}
          style={{
            width: '100%',
            height: '100%',
            transformStyle: 'preserve-3d',
            cursor: 'pointer',
          }}
        >
          <PhoneCenter />
        </motion.div>
      </motion.div>

      {/* Right Phone Scroll Wrapper */}
      <motion.div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: -10,
          width: 196,
          height: 380,
          marginLeft: 72, /* -98 (center) + 170 (offset) */
          zIndex: 10,
          y: sideScrollY,
          x: rightScrollX,
          rotate: rightScrollRotate,
          opacity: sideOpacity,
        }}
      >
        <motion.div
          animate={{
            y: [0, -6, 0],
            x: parallaxX * 1.2,
          }}
          transition={{
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
            x: { duration: 0.3, ease: 'easeOut' },
          }}
          whileHover={{ scale: 1.03, rotateY: -3 }}
          style={{
            width: '100%',
            height: '100%',
            transformStyle: 'preserve-3d',
            cursor: 'pointer',
          }}
        >
          <PhoneSide
            greeting={PHONE_RIGHT.greeting}
            userMessage={PHONE_RIGHT.userMessage}
            userMsgColor={PHONE_RIGHT.userMsgColor}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
