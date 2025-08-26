import React from 'react';
import type { Player } from '../../store/gameStore';
import { NeonPanel } from '../ui/NeonPanel';
import { Bot } from 'lucide-react';

export interface PlayerHudProps {
  player: Player;
  isCurrent: boolean;
  isSelf: boolean;
}

/**
 * Displays a player's basic information in the HUD. It shows the
 * nickname, whether the player is a bot, how many cards they hold and
 * how many tokens they have left. The current player's card glows to
 * indicate the active turn.
 */
export const PlayerHud: React.FC<PlayerHudProps> = ({ player, isCurrent, isSelf }) => {
  return (
    <NeonPanel
      className={[
        'p-3 transition-all',
        isCurrent ? 'ring-1 ring-cp-primary/70 shadow-panel' : '',
        isSelf ? 'bg-white/10' : ''
      ].join(' ')}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className={[
              'text-sm font-semibold',
              player.is_eliminated ? 'text-rose-400 line-through' : 'text-cp-primary'
            ].join(' ')}
          >
            {player.nickname}
          </span>
          {player.is_bot && <Bot size={16} className="text-white/70" />}
          {isSelf && <span className="text-[10px] uppercase tracking-widest text-white/60">Você</span>}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-white/70">{player.hand_count} cartas</span>
          <div className="flex gap-1">
            {Array.from({ length: player.tokens }).map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-sm bg-emerald-400/90 shadow-[0_0_12px_rgba(16,185,129,0.6)]"
              />
            ))}
          </div>
        </div>
      </div>
    </NeonPanel>
  );
};