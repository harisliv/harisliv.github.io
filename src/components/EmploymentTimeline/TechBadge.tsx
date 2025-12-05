import type { TechItem } from '@/components/TechStack/techData';
import { motion } from 'framer-motion';

// Simple badge for other technologies
export function TechBadge({ item, index }: { item: TechItem; index: number }) {
  const { Icon } = item;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.03, duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="flex cursor-default items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10"
    >
      {item.needsWhiteBackground ? (
        <div className="flex h-5 w-5 items-center justify-center rounded bg-white p-0.5">
          <Icon
            className="h-full w-full max-h-full max-w-full"
            style={{ color: item.color }}
          />
        </div>
      ) : (
        <Icon
          className="h-5 w-5 max-h-5 max-w-5"
          style={{ color: item.color }}
        />
      )}
      <span className="text-sm font-medium text-foreground/80">
        {item.name}
      </span>
    </motion.div>
  );
}
