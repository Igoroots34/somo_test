import { render, screen } from '@testing-library/react';
import LobbyView from '../LobbyView';

describe('LobbyView', () => {
  it('renders the lobby with create room button', () => {
    render(<LobbyView />);
    expect(screen.getByText(/Nenhuma sala encontrada/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Criar Sala/i })
    ).toBeInTheDocument();
  });
});