import React from 'react';
import GameView from '../features/game/GameView';

/**
 * Top‑level page for the game room. This component renders the
 * GameView, which contains the table, hand, HUD and chat.
 */
const RoomPage: React.FC = () => {
  return <GameView />;
};

export default RoomPage;