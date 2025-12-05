import { otherTech } from '@/components/TechStack/techData';
import { motion } from 'framer-motion';
import { TechBadge } from '../EmploymentTimeline/TechBadge';

export function OtherTech() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="mb-6 text-center text-lg font-medium text-muted-foreground">
        And more...
      </h3>

      <div className="flex flex-wrap justify-center gap-3">
        {otherTech.map((item, index) => (
          <TechBadge key={item.name} item={item} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
