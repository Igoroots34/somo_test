import React from 'react';
import { motion } from 'framer-motion';

export interface DiceProps {
  /**
   * The final value shown on the dice when rolling has finished.
   */
  value: number;
  /**
   * Whether the dice is currently rolling. When true, the dice animates
   * through random numbers until the final value is displayed.
   */
  rolling: boolean;
}

/**
 * Dice renders a simple d20. In a full implementation this component
 * would animate between numbers and play a sound when rolling starts.
 */
export const Dice: React.FC<DiceProps> = ({ value, rolling }) => {
  // Placeholder animation: spin the number when rolling.
  return (
    <motion.div
      animate={{ rotateY: rolling ? 360 : 0 }}
      transition={{ duration: rolling ? 1 : 0.3, repeat: rolling ? Infinity : 0 }}
      className="w-16 h-16 flex items-center justify-center rounded-md bg-cp-surface border border-cp-primary/20 text-3xl font-bold text-cp-primary shadow-neon"
    >
      {value}
    </motion.div>
  );
};