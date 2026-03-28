import { useState } from "react";
import { Trash2 } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import InboxItem from "./InboxItem";
import DeleteModal from "./DeleteModal";

const INITIAL_ITEMS = [
  {
    id: 1,
    title: "Weekly team update",
    preview:
      "Hi team, Just a quick update on our progress this week. We've made significant strides in th...",
  },
  {
    id: 2,
    title: "Your subscription confirmation",
    preview:
      "Thank you for subscribing to our newsletter! You'll now receive updates about our latest...",
  },
  {
    id: 3,
    title: "Invoice #1234 for April",
    preview:
      "Your monthly invoice is now available. Please find attached the detailed breakdown of your...",
  },
  {
    id: 4,
    title: "Security alert: New login",
    preview:
      "We detected a new sign-in to your account from a new device or location. If this was you,...",
  },
  {
    id: 5,
    title: "Upcoming maintenance notice",
    preview:
      "Please be advised that our platform will undergo scheduled maintenance this weeken...",
  },
];

export default function Inbox() {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleItem = (id) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleDelete = () => {
    setItems((prev) => prev.filter((item) => !selectedIds.has(item.id)));
    setSelectedIds(new Set());
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    // keep selection intact so user sees items still checked
  };

  const hasSelection = selectedIds.size > 0;

  return (
    <div className="relative flex flex-col h-full bg-[#121212] overflow-hidden">
      {/* Sticky Header */}
      <header className="flex items-center justify-between px-5 pt-4 pb-3 flex-shrink-0">
        <h1 className="text-white text-[34px] font-bold tracking-tight">
          Inbox
        </h1>

        {/* Trash icon — activates when items selected */}
        <button
          onClick={() => hasSelection && setIsModalOpen(true)}
          className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${
            hasSelection
              ? "bg-white/10 text-white"
              : "text-white/40"
          }`}
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </header>

      {/* Divider */}
      <div className="h-px bg-white/10 mx-0 flex-shrink-0" />

      {/* Message List */}
      <div className="flex-1 overflow-y-auto">
        <AnimatePresence initial={false} mode="popLayout">
          {items.map((item) => (
            <InboxItem
              key={item.id}
              item={item}
              isSelected={selectedIds.has(item.id)}
              onToggle={toggleItem}
            />
          ))}
        </AnimatePresence>

        {items.length === 0 && (
          <div className="flex items-center justify-center h-40 text-[#888]">
            <p className="text-[15px]">No messages</p>
          </div>
        )}
      </div>

      {/* Deletion Modal (absolute inside phone frame) */}
      <DeleteModal
        isOpen={isModalOpen}
        count={selectedIds.size}
        onConfirm={handleDelete}
        onCancel={handleCancel}
      />
    </div>
  );
}
