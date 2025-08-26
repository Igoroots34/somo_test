import React from 'react';
import { useGameStore } from '../../store/gameStore';
import { NeonPanel } from '../../components/ui/NeonPanel';
import { Button } from '../../components/ui/Button';

/**
 * LobbyView displays available rooms and allows the user to create a new room
 * or join existing ones. For now this component acts as a placeholder
 * until real WebSocket integrations are implemented.
 */
const LobbyView: React.FC = () => {
  const { setView } = useGameStore();

  return (
    <div className="container mx-auto px-4 py-6 max-w-3xl space-y-6">
      <h1 className="font-heading text-3xl text-cp-primary drop-shadow-md">
        Lobby
      </h1>
      <NeonPanel className="p-6 space-y-4">
        <p className="text-sm text-white/80">
          Nenhuma sala encontrada. Crie uma nova sala para começar uma partida.
        </p>
        <div className="flex gap-2">
          <Button onClick={() => setView('game')} className="bg-emerald-500 hover:bg-emerald-400 flex-1">
            Criar Sala
          </Button>
        </div>
      </NeonPanel>
    </div>
  );
};

export default LobbyView;