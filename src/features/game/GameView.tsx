import React from 'react';
import { useGameStore } from '../../store/gameStore';
import { NeonPanel } from '../../components/ui/NeonPanel';
import { Button } from '../../components/ui/Button';

/**
 * GameView is the entry point for an active game. It will eventually
 * compose the Table, Hand, PlayerHUD, TurnOrder and other components
 * defined in the specification. For now, it acts as a simple placeholder
 * that displays whether a room has been loaded.
 */
const GameView: React.FC = () => {
  const { room } = useGameStore();
  return (
    <div className="min-h-[60vh] grid place-items-center text-white/80">
      {room ? 'Partida em andamento' : 'Carregando partida…'}
    </div>
  );
};

export default GameView;