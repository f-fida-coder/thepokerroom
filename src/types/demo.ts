export type DemoPage =
  | 'landing'
  | 'login'
  | 'register'
  | 'lobby'
  | 'table'
  | 'spectator'
  | 'admin-login'
  | 'admin-dashboard';

export interface DemoTable {
  id: string;
  name: string;
  gameType: string;
  stakes: string;
  blindsLabel: string;
  maxPlayers: number;
  currentPlayers: number;
  spectators: number;
  status: 'waiting' | 'playing' | 'full';
  isPrivate?: boolean;
  isVIP?: boolean;
  mixedRotation?: string;
  roomCode?: string;
  bombPot?: string;
  runMode?: string;
  buyIn?: string;
  ambiance?: string;
}
