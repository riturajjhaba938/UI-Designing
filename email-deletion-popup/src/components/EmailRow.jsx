import { motion } from 'framer-motion';

export default function EmailRow({ email, index, isSelected, onClick }) {
  return (
    <motion.div
      layout
      onClick={onClick}
      initial={{ opacity: 1, x: 0 }}
      exit={{ x: 60, opacity: 0, transition: { duration: 0.22, delay: index * 0.04, ease: 'easeIn' } }}
      className="flex items-center px-6 py-[18px] cursor-pointer border-b border-white/[0.06] last:border-0 hover:bg-white/[0.03] active:bg-white/5 transition-colors select-none"
    >
      {/* Text */}
      <div className="flex-1 pr-4 min-w-0">
        <h3 className="text-[15px] font-semibold text-white tracking-tight leading-snug truncate">
          {email.subject}
        </h3>
        <p className="text-[13px] text-[#71717a] mt-[3px] line-clamp-1 leading-snug">
          {email.snippet}
        </p>
      </div>

      {/* Checkbox — 24px circle */}
      <div className="w-6 h-6 shrink-0 relative flex items-center justify-center">
        {/* Background fill */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            backgroundColor: isSelected ? '#3b82f6' : 'rgba(255,255,255,0.04)',
          }}
          style={{
            border: isSelected ? '2px solid #3b82f6' : '2px solid rgba(255,255,255,0.25)',
          }}
          transition={{ duration: 0.15 }}
        />
        {/* Checkmark */}
        <motion.svg
          initial={false}
          animate={isSelected ? { scale: 1, opacity: 1 } : { scale: 0.3, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 600, damping: 22 }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3 h-3 relative z-10"
        >
          <polyline points="20 6 9 17 4 12" />
        </motion.svg>
      </div>
    </motion.div>
  );
}
