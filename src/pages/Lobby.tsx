import React from 'react';
import LobbyView from '../features/lobby/LobbyView';

/**
 * Top‑level page for the lobby. This page delegates most of its
 * functionality to the LobbyView component, which can be found in the
 * `features/lobby` directory.
 */
const LobbyPage: React.FC = () => {
  return <LobbyView />;
};

export default LobbyPage;