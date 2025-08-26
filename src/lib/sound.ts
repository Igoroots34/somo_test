import { Howl } from 'howler';

/**
 * Centralised sound manager using howler.js. The sound files themselves
 * should live in `src/assets/sfx`. At runtime, you can call
 * `playSound('click')` to play the click sound, for example.
 */
const sounds: Record<string, Howl> = {
  // Placeholder definitions; the actual audio files must be added to
  // the `assets/sfx` directory (e.g. click.mp3, card-play.mp3, etc.)
  click: new Howl({ src: ['/assets/sfx/click.mp3'], volume: 0.5 }),
  'card-play': new Howl({ src: ['/assets/sfx/card-play.mp3'], volume: 0.5 }),
  reverse: new Howl({ src: ['/assets/sfx/reverse.mp3'], volume: 0.5 }),
  joker: new Howl({ src: ['/assets/sfx/joker.mp3'], volume: 0.5 }),
  'round-start': new Howl({ src: ['/assets/sfx/round-start.mp3'], volume: 0.5 }),
  error: new Howl({ src: ['/assets/sfx/error.mp3'], volume: 0.5 })
};

/**
 * Plays a named sound effect if it exists. If the sound is not found,
 * the call is silently ignored.
 */
export function playSound(name: keyof typeof sounds) {
  const sound = sounds[name];
  if (sound) {
    sound.play();
  }
}

/**
 * Toggles global mute state. This is a simple implementation that
 * iterates over all loaded Howl instances. To persist this setting
 * across sessions, consider storing the value in localStorage.
 */
export function setMute(muted: boolean) {
  Object.values(sounds).forEach((sound) => {
    sound.mute(muted);
  });
}