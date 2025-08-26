import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import type { CardComp } from '../../store/gameStore';

// TODO: import card images; for now we use a placeholder.
import defaultImg from '../../assets/cards/default.png';

export interface CardProps {
  card: CardComp;
  disabled?: boolean;
  onClick?: () => void;
}

/**
 * Card renders an individual playing card. It uses Framer Motion to
 * animate hover and tap interactions. The appearance of the card will
 * eventually depend on its type (`kind`) and value, but for now it
 * renders a single placeholder image.
 */
export const Card: React.FC<CardProps> = ({ card, disabled, onClick }) => {
  // In a full implementation, this function would map card.kind/value to
  // the appropriate imported SVG/PNG. Placeholder for now.
  const getImageSrc = () => {
    return defaultImg;
  };
  return (
    <motion.button
      disabled={disabled}
      onClick={onClick}
      whileHover={{ y: -6, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        'relative rounded-xl overflow-hidden select-none',
        'bg-gradient-to-b from-white/10 to-white/5',
        'border border-white/10 hover:border-cp-primary/60',
        'shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_0_24px_rgba(246,224,94,0.08)]',
        'transition-transform will-change-transform',
        'enabled:hover:-translate-y-1 enabled:hover:shadow-[0_8px_30px_rgba(246,224,94,0.25)]',
        'disabled:opacity-40 disabled:cursor-not-allowed',
        'w-28 h-40 md:w-32 md:h-48'
      )}
    >
      <img
        src={getImageSrc()}
        alt={`${card.kind} ${card.value ?? ''}`}
        className="absolute inset-0 w-full h-full object-contain"
      />
      <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-60 bg-[radial-gradient(120px_80px_at_50%_0%,rgba(147,197,253,0.20),transparent_60%),radial-gradient(120px_80px_at_50%_100%,rgba(244,114,182,0.15),transparent_60%)]"></div>
      <div className="absolute -inset-px rounded-xl border border-cp-primary/20"></div>
    </motion.button>
  );
};