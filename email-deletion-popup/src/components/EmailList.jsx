import { AnimatePresence, motion } from 'framer-motion';
import EmailRow from './EmailRow';

export default function EmailList({ emails, selectedIds, toggleSelection }) {
  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
      <AnimatePresence mode="popLayout">
        {emails.map((email, index) => (
          <EmailRow
            key={email.id}
            email={email}
            index={index}
            isSelected={selectedIds.has(email.id)}
            onClick={() => toggleSelection(email.id)}
          />
        ))}
      </AnimatePresence>

      {emails.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center h-48 text-[#52525b]"
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3 opacity-50">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.44 2 2 0 0 1 3.55 1.27h3a2 2 0 0 1 2 1.72c.13 1 .37 1.98.72 2.91a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.09 6.09l.91-.91a2 2 0 0 1 2.11-.45c.93.35 1.91.59 2.91.72a2 2 0 0 1 1.72 2.02z"/>
          </svg>
          <p className="text-sm">Inbox is empty</p>
        </motion.div>
      )}
    </div>
  );
}
