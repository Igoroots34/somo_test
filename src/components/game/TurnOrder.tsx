import React from 'react';
import { RotateCw, RotateCcw } from 'lucide-react';
import { NeonPanel } from '../ui/NeonPanel';

export interface TurnOrderProps {
  /**
   * Direction of play. `true` indicates clockwise (Horário), `false` is
   * anti‑clockwise (Anti‑horário).
   */
  direction: boolean;
}

/**
 * Displays the current direction of play with an accompanying icon.
 */
export const TurnOrder: React.FC<TurnOrderProps> = ({ direction }) => {
  return (
    <NeonPanel className="px-4 py-3 flex items-center justify-center gap-2">
      {direction ? <RotateCw className="w-4 h-4" /> : <RotateCcw className="w-4 h-4" />}
      <span className="text-sm font-medium tracking-wide">
        {direction ? 'Horário' : 'Anti‑horário'}
      </span>
    </NeonPanel>
  );
};