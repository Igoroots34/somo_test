import React from 'react';

export interface EffectsToasterProps {
  /**
   * The textual representation of the effect to display. When null,
   * nothing is rendered.
   */
  effect: string | null;
}

/**
 * EffectsToaster displays transient notifications for game effects
 * (e.g. +2, ×2, Reverse). In a complete implementation this would be
 * integrated with shadcn/ui's toast component or a custom toast
 * system. This skeleton simply renders a box in the bottom right when
 * an effect is present.
 */
export const EffectsToaster: React.FC<EffectsToasterProps> = ({ effect }) => {
  if (!effect) return null;
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-cp-surface px-4 py-2 rounded shadow-neon border border-cp-primary/40">
      <span className="text-cp-primary font-medium">{effect}</span>
    </div>
  );
};