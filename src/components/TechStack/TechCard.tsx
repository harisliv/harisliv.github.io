import type { ITechIconProps } from '@/types';
import { motion } from 'framer-motion';

export function TechCard({
  item,
  index
}: {
  item: ITechIconProps;
  index: number;
}) {
  const { Icon } = item;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative h-48 w-full rounded-2xl p-6 backdrop-blur-sm"
        style={{
          transformStyle: 'preserve-3d',
          boxShadow: `0 0 40px ${item.color}15`,
          background: `linear-gradient(135deg, ${item.color}20 0%, ${item.color}10 50%, ${item.color}05 100%)`
        }}
        animate={{
          rotateX: [0, 8, -8, 6, -6, 4, -4, 2, -2, 0],
          rotateY: [0, -8, 8, -6, 6, -4, 4, -2, 2, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.6
        }}
      >
        {/* Vivid inner glow effect - always visible */}
        <div
          className="absolute inset-0 rounded-2xl transition-all duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(ellipse at center, ${item.color}50 0%, ${item.color}25 30%, ${item.color}10 60%, transparent 85%)`,
            opacity: 0.7
          }}
        />
        {/* Inner shadow border glow - more pronounced */}
        <div
          className="absolute inset-[2px] rounded-2xl pointer-events-none transition-all duration-300 group-hover:opacity-100"
          style={{
            boxShadow: `inset 0 0 40px ${item.color}40, inset 0 0 80px ${item.color}20, inset 0 2px 4px ${item.color}30`,
            opacity: 0.8
          }}
        />
        {/* Additional corner glow accents */}
        <div
          className="absolute top-2 left-2 h-8 w-8 rounded-lg opacity-40 blur-sm transition-opacity duration-300 group-hover:opacity-60"
          style={{
            background: `radial-gradient(circle, ${item.color}80, transparent)`
          }}
        />
        <div
          className="absolute bottom-2 right-2 h-8 w-8 rounded-lg opacity-40 blur-sm transition-opacity duration-300 group-hover:opacity-60"
          style={{
            background: `radial-gradient(circle, ${item.color}80, transparent)`
          }}
        />

        {/* Icon */}
        <div className="relative flex h-full flex-col items-center justify-center gap-4">
          <Icon className="h-12 w-12" style={{ color: item.color }} />

          <span className="text-lg font-semibold text-foreground">
            {item.name}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
