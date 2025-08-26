import React from 'react';
import { NeonPanel } from '../ui/NeonPanel';
import { Card } from './Card';
import type { CardComp } from '../../store/gameStore';

export interface TableProps {
  deckCount: number;
  discardTop: CardComp | null;
}

/**
 * Table renders the central area of the game where the deck and the
 * discard pile live. It also serves as a drop target for played cards
 * when drag‑and‑drop is implemented.
 */
export const Table: React.FC<TableProps> = ({ deckCount, discardTop }) => {
  return (
    <NeonPanel className="p-6 flex items-center justify-center gap-8">
      {/* Deck slot */}
      <div className="flex flex-col items-center">
        <div className="w-28 h-40 bg-cp-surface rounded-xl border border-cp-primary/20"></div>
        <span className="text-xs mt-2 text-white/70">{deckCount} cartas</span>
      </div>
      {/* Discard slot */}
      <div className="flex flex-col items-center">
        {discardTop ? (
          <Card card={discardTop} />
        ) : (
          <div className="w-28 h-40 bg-cp-surface rounded-xl border border-cp-primary/20"></div>
        )}
        <span className="text-xs mt-2 text-white/70">Descarte</span>
      </div>
    </NeonPanel>
  );
};