import create from 'zustand';

/**
 * Types describing the game state. These mirror the contracts provided by
 * the backend. Do not change the shape of these interfaces; if you need
 * to adapt the data for your UI, do so in helper functions.
 */
export interface CardComp {
  id: string;
  value?: number;
  kind: 'number' | 'plus2' | 'times2' | 'reset0' | 'reverse' | 'joker';
}

export interface Player {
  id: string;
  nickname: string;
  tokens: number;
  is_bot: boolean;
  is_eliminated: boolean;
  hand_count: number;
}

export interface PendingEffect {
  multiplier?: number;
  add?: number;
}

export interface RoomState {
  id: string;
  players: Player[];
  host_id: string;
  max_players: number;
  direction: boolean;
  accumulated_sum: number;
  round_limit: number;
  pending_effect?: PendingEffect | null;
  deck_count: number;
  game_started: boolean;
  current_turn?: string | null;
}

export interface GameStore {
  room: RoomState | null;
  selfHand: CardComp[];
  // Functions to mutate the state. In a real implementation these will
  // communicate with the backend through WebSockets.
  startGame: () => void;
  playCard: (cardId: string, value?: number) => void;
  playSpecial: (cardId: string, type: CardComp['kind']) => void;
  passTurn: () => void;
  addBot: (difficulty: 'easy' | 'medium' | 'hard') => void;
  setView: (view: 'lobby' | 'game') => void;
  toggleChat: () => void;
  showChat: boolean;
}

export const useGameStore = create<GameStore>((set) => ({
  room: null,
  selfHand: [],
  showChat: false,
  startGame: () => {
    /* TODO: implement start game */
  },
  playCard: (cardId: string, value?: number) => {
    /* TODO: implement play card */
  },
  playSpecial: (cardId: string, type) => {
    /* TODO: implement play special */
  },
  passTurn: () => {
    /* TODO: implement pass turn */
  },
  addBot: (difficulty) => {
    /* TODO: implement add bot */
  },
  setView: (view) => {
    /* TODO: implement view change */
  },
  toggleChat: () => set((state) => ({ showChat: !state.showChat }))
}));

// Example selectors to determine current user state. In a real application
// these would look at the authenticated user and the game state.
export const useIsMyTurn = () => {
  const { room } = useGameStore();
  // TODO: implement based on current user id
  return false;
};

export const useIsHost = () => {
  const { room } = useGameStore();
  // TODO: implement based on current user id
  return false;
};

export const useSelfPlayer = () => {
  const { room } = useGameStore();
  // TODO: implement based on current user id
  return undefined;
};