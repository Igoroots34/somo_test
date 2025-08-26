# Somo Cyberpunk

Este projeto é a reimplementação do front‑end do jogo de cartas **Somo Network** com uma estética **cyberpunk**. O objetivo é proporcionar uma experiência imersiva com cores neon, micro‑animações, sons e interface responsiva.

## Scripts

```bash
# instalar dependências
pnpm i

# iniciar o servidor de desenvolvimento
pnpm dev

# construir para produção
pnpm build

# executar testes unitários
pnpm test
```

Certifique‑se de que o arquivo `.env` contenha `VITE_WS_URL` apontando para o servidor WebSocket do backend, por exemplo:

```env
VITE_WS_URL=ws://localhost:8000/ws
```

## Estrutura de pastas

```
src/
  app/
    main.tsx          # ponto de entrada da aplicação
    routes.tsx        # definição das rotas
  assets/
    fonts/            # fontes customizadas (opcional)
    images/           # imagens estáticas
    sfx/              # efeitos sonoros (Howler)
  components/
    ui/               # componentes de interface genéricos (NeonPanel, Button, ...)
    game/
      Card.tsx        # renderização de cartas individuais
      Hand.tsx        # layout da mão do jogador
      Table.tsx       # área central de jogo (deck e descarte)
      PlayerHud.tsx   # HUD de cada jogador
      TurnOrder.tsx   # indicador de sentido de jogo
      EffectsToaster.tsx
      Dice.tsx
  features/
    lobby/
      LobbyView.tsx   # tela de lobby com criação/entrada de salas
    game/
      GameView.tsx    # tela principal da partida
  hooks/
  lib/
    sound.ts          # utilitários de áudio
    theme.ts          # tokens de tema
    ws.ts             # cliente WebSocket
  store/
    gameStore.ts      # estado global usando Zustand
  styles/
    globals.css       # estilos globais e importação de Tailwind
  pages/
    Lobby.tsx
    Room.tsx
```

## Testes

Os testes são escritos com **Testing Library** e **Vitest**. Para executar os testes, rode:

```bash
pnpm test
```

## Acessibilidade

O projeto utiliza cores com contraste adequado, foco visível e semântica HTML. As animações respeitam a preferência `prefers-reduced-motion` quando aplicável. Utilize o script de testes com o **axe-core** para verificar violações de acessibilidade durante o desenvolvimento.

## Contribuição

Os componentes e utilitários ainda são esqueléticos. Sinta‑se livre para evoluir a implementação conforme os requisitos: integrar as mensagens reais do backend via WebSocket, adicionar micro‑animações com Framer Motion, implementar layout em leque para as cartas, criar toasts e modal de coringa, etc. Verifique as especificações no documento original para guiar sua contribuição.
