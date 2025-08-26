import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Lobby from '../src/pages/Lobby.tsx'
import Room from '../src/pages/Room.tsx';

/**
 * Defines the client‑side routes for our application. In a more complex
 * application, this could be broken into nested route modules.
 */
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Lobby />} />
      <Route path="/room/:id" element={<Room />} />
      {/* fallback to lobby if route not found */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;