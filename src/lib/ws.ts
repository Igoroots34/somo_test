/**
 * WebSocket helper utilities. In a production build this would
 * encapsulate the logic for connecting to the server, sending
 * messages and handling events. For the purposes of this scaffold it
 * simply provides typed stubs.
 */
export type WsMessage =
  | { type: 'start_game' }
  | { type: 'play_card'; cardId: string; value?: number }
  | { type: 'play_special'; cardId: string; special: string }
  | { type: 'pass_turn' }
  | { type: 'add_bot'; difficulty: 'easy' | 'medium' | 'hard' };

export class GameSocket {
  private ws: WebSocket | null = null;

  constructor(private url: string) {}

  connect() {
    this.ws = new WebSocket(this.url);
    this.ws.onopen = () => {
      console.log('[WS] connected');
    };
    this.ws.onclose = () => {
      console.log('[WS] disconnected');
    };
    this.ws.onmessage = (event) => {
      console.log('[WS] message:', event.data);
    };
  }

  send(msg: WsMessage) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(msg));
    }
  }
}