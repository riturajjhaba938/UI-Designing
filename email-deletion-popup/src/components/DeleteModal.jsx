import { motion, AnimatePresence } from "framer-motion";

export default function DeleteModal({ isOpen, count, onConfirm, onCancel }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="absolute inset-0 z-50 flex items-center justify-center">
          {/* Intense Red Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(220,38,38,0.95) 0%, rgba(185,28,28,0.98) 100%)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          />

          {/* Modal Content — centered, no card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="relative z-10 flex flex-col items-center text-center px-8"
          >
            <h2 className="text-white text-2xl font-semibold mb-2">
              {count} {count === 1 ? "item" : "items"}
            </h2>
            <p className="text-white/80 text-[15px] leading-relaxed mb-10 max-w-[250px]">
              Are you sure you want to delete these entries? You can't undo this
              action.
            </p>

            {/* Delete — pill, white button */}
            <button
              onClick={onConfirm}
              className="w-[220px] py-4 bg-white text-black font-semibold text-[17px] rounded-full mb-4 active:scale-95 transition-transform shadow-lg cursor-pointer"
            >
              Delete
            </button>

            {/* Cancel — plain text */}
            <button
              onClick={onCancel}
              className="text-white/80 text-[17px] py-2 active:opacity-60 transition-opacity cursor-pointer"
            >
              Cancel
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
