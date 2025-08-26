import { render, screen } from '@testing-library/react';
import GameView from '../GameView';

describe('GameView', () => {
  it('shows loading message when room is null', () => {
    render(<GameView />);
    expect(screen.getByText(/Carregando partida/i)).toBeInTheDocument();
  });
});