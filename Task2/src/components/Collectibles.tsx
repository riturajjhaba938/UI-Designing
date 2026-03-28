import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import { List, Grid2X2, Layers } from 'lucide-react';
import clsx from 'clsx';

type ViewMode = 'list' | 'card' | 'pack';

const ITEMS = [
  {
    id: 'skilled-fingers',
    name: 'Skilled Fingers Series',
    price: '0.855 ETH',
    serial: '#209',
    image: '/2finger.png',
    bg: 'bg-[#EADEFF]', 
    particleColor: '#aa3bff',
    glowColor: 'rgba(170, 59, 255, 0.4)'
  },
  {
    id: 'vibrant-vibes',
    name: 'Vibrant Vibes Series',
    price: '0.209 ETH',
    serial: '#808',
    image: '/casseteTape.png',
    bg: 'bg-[#E3F2FD]',
    particleColor: '#3b82f6',
    glowColor: 'rgba(59, 130, 246, 0.4)'
  },
];

// Reusable Tilt Card Component for the Card View
function TiltCard({ item, children }: { item: any, children: React.ReactNode }) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [15, -15]);
  const rotateY = useTransform(x, [0, 1], [-15, 15]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    x.set(mouseX / width);
    y.set(mouseY / height);
  }

  function handleMouseLeave() {
    animate(x, 0.5, { type: "spring", stiffness: 300, damping: 20 });
    animate(y, 0.5, { type: "spring", stiffness: 300, damping: 20 });
  }

  return (
    <motion.div
      layoutId={`container-${item.id}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={clsx(
        "rounded-[32px] p-6 pt-8 pb-7 overflow-hidden relative flex flex-col transition-shadow bg-white",
        // Soft glowing shadow based on card color
        "hover:shadow-2xl hover:z-20 cursor-pointer"
      )}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background soft color */}
      <motion.div layoutId={`bg-${item.id}`} className={clsx("absolute inset-0 opacity-40", item.bg)} />
      
      {/* Subtle Glowing Aura */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full blur-[50px] pointer-events-none"
        style={{ backgroundColor: item.glowColor }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Magical Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`particle-${item.id}-${i}`}
            className="absolute rounded-full"
            style={{ 
              backgroundColor: item.particleColor,
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              filter: 'blur(1px)' 
            }}
            initial={{
              opacity: 0,
              x: Math.random() * 200 + 40,
              y: Math.random() * 50 + 150,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [null, Math.random() * -100 + 20],
              x: [null, Math.random() * 60 - 30 + 100],
            }}
            transition={{
              duration: Math.random() * 2 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {children}
    </motion.div>
  );
}

export default function Collectibles() {
  const [view, setView] = useState<ViewMode>('card');

  const navItems = [
    { id: 'list', label: 'List view', icon: List },
    { id: 'card', label: 'Card view', icon: Grid2X2 },
    { id: 'pack', label: 'Pack view', icon: Layers },
  ];

  return (
    <div className="flex flex-col h-full w-full bg-[#f6f7f9] text-gray-900 pb-12 font-sans overflow-hidden">
      
      {/* Header */}
      <motion.div 
        layout="position"
        className="pt-6 pb-4 px-6 sticky top-0 bg-[#f6f7f9]/90 backdrop-blur-md z-10"
      >
        <h1 className="text-3xl font-bold tracking-tight text-center mb-6">Collectibles</h1>

        {/* View Toggles Container */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide no-scrollbar -mx-2 px-2 pb-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = view === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setView(item.id as ViewMode)}
                className={clsx(
                  "relative flex items-center gap-2 px-4 py-3 rounded-full text-[15px] font-medium transition-colors border",
                  isActive ? "text-white border-transparent" : "text-gray-600 bg-white border-gray-200 hover:bg-gray-50"
                )}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-[#2563eb] rounded-full shadow-md"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                  <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="flex-1 w-full px-5 relative mt-4 perspective-[1200px]">
        
        {/* CARD VIEW */}
        <AnimatePresence mode="popLayout">
          {view === 'card' && (
            <motion.div 
              key="card-view"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, filter: 'blur(5px)' }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="flex gap-6 flex-col w-full"
            >
              {ITEMS.map((item) => (
                <TiltCard key={item.id} item={item}>
                  <motion.img
                    layoutId={`image-${item.id}`}
                    src={item.image}
                    alt={item.name}
                    className="w-[200px] h-[200px] object-contain mx-auto relative z-10 filter drop-shadow-xl"
                    style={{ transform: 'translateZ(40px)' }} // 3D pop out effect
                  />
                  <motion.div layoutId={`info-${item.id}`} className="mt-6 relative z-10" style={{ transform: 'translateZ(20px)' }}>
                    <div className="flex justify-between items-start mb-1">
                      <h2 className="text-[22px] font-semibold leading-tight text-gray-900 pr-2">{item.name}</h2>
                      <span className="text-gray-500 font-medium text-lg shrink-0">{item.serial}</span>
                    </div>
                    <p className="text-gray-600 font-medium">{item.price}</p>
                  </motion.div>
                </TiltCard>
              ))}
            </motion.div>
          )}

          {/* LIST VIEW */}
          {view === 'list' && (
            <motion.div 
              key="list-view"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30, filter: 'blur(5px)' }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col gap-4 w-full pt-2"
            >
              {ITEMS.map((item) => (
                <motion.div
                  key={item.id}
                  layoutId={`container-${item.id}`}
                  className="rounded-3xl p-3 bg-white shadow-sm flex items-center gap-4 relative overflow-hidden group hover:shadow-md cursor-pointer transition-shadow"
                >
                  <motion.div layoutId={`bg-${item.id}`} className={clsx("absolute inset-0 opacity-[0.15] transition-opacity group-hover:opacity-[0.25]", item.bg)} />
                  
                  {/* Thumbnail */}
                  <div className={clsx("w-20 h-20 rounded-2xl flex items-center justify-center relative p-2 shadow-inner", item.bg)}>
                     <motion.img
                      layoutId={`image-${item.id}`}
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain relative z-10 filter drop-shadow hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Details */}
                  <motion.div layoutId={`info-${item.id}`} className="flex-1 relative z-10 pr-2">
                    <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
                    <p className="text-gray-500 font-medium">{item.price}</p>
                  </motion.div>

                  {/* Serial */}
                  <span className="text-gray-400 font-semibold pr-3 relative z-10">{item.serial}</span>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* PACK VIEW */}
          {view === 'pack' && (
            <motion.div 
              key="pack-view"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(5px)' }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col items-center justify-center w-full h-[60vh] pb-10 perspective-[1000px]"
            >
              <div className="relative w-[300px] h-[360px] flex justify-center mt-6 group">
                {ITEMS.map((item, index) => {
                  const isTop = index === 0;
                  return (
                    <motion.div
                      key={item.id}
                      layoutId={`container-${item.id}`}
                      className="absolute rounded-[32px] p-6 shadow-2xl flex flex-col items-center border border-white/50 bg-white"
                      style={{ 
                        width: '280px',
                        height: '350px',
                        zIndex: ITEMS.length - index,
                        top: index * 20,
                        scale: 1 - (index * 0.05)
                      }}
                      animate={{
                        y: [-5, 5, -5],
                        rotate: index === 0 ? -2 : 4,
                        rotateX: index === 0 ? 5 : 0,
                      }}
                      transition={{
                        y: { repeat: Infinity, duration: 4 + index, ease: "easeInOut" }
                      }}
                      whileHover={{
                        y: index === 0 ? -20 : 0,
                        rotate: index === 0 ? 0 : 8,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                    >
                      <motion.div layoutId={`bg-${item.id}`} className={clsx("absolute inset-0 opacity-[0.25] rounded-[32px]", item.bg)} />
                      
                      {/* Subtle Glow in Pack View */}
                      {isTop && (
                        <motion.div 
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full blur-[40px] pointer-events-none"
                          style={{ backgroundColor: item.glowColor }}
                          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                      )}

                      <motion.img
                        layoutId={`image-${item.id}`}
                        src={item.image}
                        alt={item.name}
                        className="w-[180px] h-[180px] object-contain relative z-10 mt-6 filter drop-shadow-xl"
                      />
                      
                      <motion.div layoutId={`info-${item.id}`} className={clsx("mt-10 relative z-10 text-center transition-opacity duration-300", !isTop && "opacity-0 group-hover:opacity-100")}>
                        <h2 className="text-xl font-bold text-gray-900">{item.name}</h2>
                        <p className="text-gray-500 font-medium">{item.price}</p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
              
              <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3, type: "spring", damping: 15 }}
               className="mt-12 text-center"
              >
                <div className="inline-block px-4 py-2 bg-white/60 shadow-sm backdrop-blur-sm rounded-full font-bold text-gray-700 mb-3 border border-gray-100">
                  2 Collectibles
                </div>
                <div className="text-2xl font-black text-gray-900 tracking-tight drop-shadow-sm">
                  1.064 ETH
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
