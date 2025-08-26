import React from 'react';
import { Card } from './Card';
import type { CardComp } from '../../store/gameStore';

export interface HandProps {
  /**
   * Array of cards in the player's hand.
   */
  cards: CardComp[];
  /**
   * Callback when a card is selected or played. The parent component is
   * responsible for determining whether the card can be played.
   */
  onPlay: (card: CardComp) => void;
}

/**
 * Hand renders the player's set of cards. This basic implementation
 * arranges the cards in a responsive flexbox. In the future this
 * component should implement a fan layout and support drag‑and‑drop.
 */
export const Hand: React.FC<HandProps> = ({ cards, onPlay }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 py-2">
      {cards.map((card) => (
        <Card key={card.id} card={card} onClick={() => onPlay(card)} />
      ))}
    </div>
  );
};