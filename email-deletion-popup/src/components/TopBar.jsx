import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function TopBar({ selectedCount, onDeleteClick }) {
  const [time, setTime] = useState('');
  const controls = useAnimation();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleTrashClick = () => {
    if (selectedCount === 0) {
      controls.start({
        x: [0, -5, 5, -5, 5, 0],
        transition: { duration: 0.35 }
      });
    } else {
      onDeleteClick();
    }
  };

  return (
    <div className="flex justify-between items-center px-6 pt-5 pb-2">
      {/* Clock */}
      <span className="text-white text-[15px] font-semibold tracking-wide tabular-nums">
        {time}
      </span>

      {/* Trash Button */}
      <motion.button
        onClick={handleTrashClick}
        animate={controls}
        whileTap={{ scale: 0.88 }}
        className="relative p-2 rounded-full focus:outline-none"
      >
        {/* Icon container with subtle bg when items selected */}
        <motion.div
          animate={{
            backgroundColor: selectedCount > 0 ? 'rgba(239,68,68,0.12)' : 'rgba(255,255,255,0)',
          }}
          transition={{ duration: 0.25 }}
          className="w-9 h-9 rounded-full flex items-center justify-center"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <motion.g
              animate={{ stroke: selectedCount > 0 ? '#ef4444' : '#a1a1aa' }}
              transition={{ duration: 0.25 }}
              strokeWidth="2"
            >
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </motion.g>
          </svg>
        </motion.div>

        {/* Count Badge */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={selectedCount > 0 ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 20 }}
          className="absolute top-0.5 right-0.5 min-w-[18px] h-[18px] bg-[#ef4444] text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 shadow-md"
        >
          {selectedCount}
        </motion.div>
      </motion.button>
    </div>
  );
}
