import { motion } from 'motion/react';

interface PaginationDotsProps {
  currentStep: number;
  totalSteps: number;
}

export function PaginationDots({ currentStep, totalSteps }: PaginationDotsProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <motion.div
          key={index}
          className="rounded-full"
          animate={{
            width: currentStep === index + 1 ? 24 : 8,
            height: 8,
            backgroundColor: currentStep === index + 1 ? '#C0622A' : '#D4C4B0',
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
