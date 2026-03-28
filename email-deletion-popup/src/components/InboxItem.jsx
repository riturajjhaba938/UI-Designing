import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function InboxItem({ item, isSelected, onToggle }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0, overflow: "hidden" }}
      transition={{
        layout: { type: "spring", stiffness: 500, damping: 35 },
        exit: { duration: 0.25 },
      }}
      onClick={() => onToggle(item.id)}
      className="flex items-start gap-3 px-5 py-4 border-b border-white/[0.07] cursor-pointer active:bg-white/5 select-none"
    >
      {/* Text content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-white text-[16px] font-bold leading-snug mb-1 truncate">
          {item.title}
        </h3>
        <p className="text-[#888888] text-[13px] leading-snug line-clamp-2">
          {item.preview}
        </p>
      </div>

      {/* Checkbox — right aligned, square style to match image */}
      <div className="flex-shrink-0 mt-1">
        <div
          className={`w-[22px] h-[22px] rounded-[5px] border-2 flex items-center justify-center transition-all duration-200 ${
            isSelected
              ? "bg-[#3b82f6] border-[#3b82f6]"
              : "border-[#555] bg-transparent"
          }`}
        >
          {isSelected && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 600, damping: 30 }}
            >
              <Check className="w-[14px] h-[14px] text-white stroke-[3]" />
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
