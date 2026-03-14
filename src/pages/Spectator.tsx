import { Eye, EyeOff, ScrollText, ShieldCheck, Users } from 'lucide-react';
import PremiumBackdrop from '../components/common/PremiumBackdrop';
import PremiumNav from '../components/common/PremiumNav';
import Button from '../components/common/Button';
import LuxuryPokerTable, { type LuxurySeat } from '../components/poker/LuxuryPokerTable';
import type { DemoPage, DemoTable } from '../types/demo';

interface SpectatorProps {
  onNavigate?: (page: DemoPage) => void;
  table: DemoTable;
}

const spectatorSeats: LuxurySeat[] = [
  {
    id: 'marble-ace',
    position: 'top-left',
    label: 'UTG',
    name: 'Marble Ace',
    stack: 6240,
    bet: 180,
    note: 'Public seat visible',
    showCardBacks: false
  },
  {
    id: 'noir-river',
    position: 'top-center',
    label: 'HJ',
    name: 'Noir River',
    stack: 3920,
    bet: 0,
    note: 'Folded previous street',
    isFolded: true,
    showCardBacks: false
  },
  {
    id: 'velvet-stack',
    position: 'top-right',
    label: 'CO',
    name: 'Velvet Stack',
    stack: 7180,
    bet: 240,
    note: 'Action already public',
    showCardBacks: false
  },
  {
    id: 'chateau-pair',
    position: 'bottom-left',
    label: 'SB',
    name: 'Chateau Pair',
    stack: 2880,
    bet: 0,
    note: 'Waiting list seat nearby',
    showCardBacks: false
  },
  {
    id: 'hero',
    position: 'bottom-center',
    label: 'Button',
    name: 'Seated Player',
    stack: 5400,
    bet: 240,
    note: 'Hole cards hidden in spectator mode',
    isDealer: true,
    showCardBacks: true
  },
  {
    id: 'guild-room',
    position: 'bottom-right',
    label: 'BB',
    name: 'Guild Room',
    stack: 4600,
    bet: 240,
    note: 'Live player panel visible',
    isActive: true,
    showCardBacks: false
  }
];

export default function Spectator({ onNavigate, table }: SpectatorProps) {
  return (
    <PremiumBackdrop roomGlow="burgundy">
      <PremiumNav
        current="spectator"
        onNavigate={onNavigate}
        title={`${table.name} • Spectator mode`}
        subtitle="Public table view"
        compact
      />

      <main className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
          <section className="space-y-6">
            <div className="flex flex-col gap-4 rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.92),rgba(9,4,7,0.96))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.38)] sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="club-label text-[#d6b078]">Spectator Mode</div>
                <h1 className="club-display mt-3 text-4xl text-[#fff4e7]">Watch the room without exposing private cards</h1>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#eadcc9]/72">
                  This demo view keeps the same premium table atmosphere while showing only public game information:
                  board cards, pot, seating, and visible action.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button variant="ghost" onClick={() => onNavigate?.('lobby')}>
                  Back to Lobby
                </Button>
                <Button variant="secondary" onClick={() => onNavigate?.('table')}>
                  Player View
                </Button>
                <Button variant="primary" onClick={() => onNavigate?.('admin-dashboard')}>
                  Admin Panel
                </Button>
              </div>
            </div>

            <LuxuryPokerTable
              seats={spectatorSeats}
              board={['Q♠', 'Q♥', '9♣', '4♦', '3♠']}
              pot={1920}
              roomLabel={table.roomCode ?? 'Spectator room'}
              tableLabel={`${table.gameType} • ${table.stakes}`}
              announcement="Spectators see the board and pot, never private hole cards"
              tags={['Spectator enabled', 'Hole cards hidden', `${table.spectators} viewers`]}
            />
          </section>

          <aside className="space-y-6">
            <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.92),rgba(9,4,7,0.96))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d3aa6d]/16 bg-[#d3aa6d]/10">
                  <Eye className="h-5 w-5 text-[#dfb881]" />
                </div>
                <div>
                  <div className="club-label text-[#d6b078]">Visible</div>
                  <div className="mt-1 text-lg font-semibold text-[#fff1de]">What spectators can see</div>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  'Community board cards',
                  'Main pot and public betting state',
                  'Table seats and active player glow',
                  'Waiting list and room status banners'
                ].map((item) => (
                  <div key={item} className="rounded-[20px] border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-[#eadcc9]/72">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.92),rgba(9,4,7,0.96))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d3aa6d]/16 bg-[#d3aa6d]/10">
                  <EyeOff className="h-5 w-5 text-[#dfb881]" />
                </div>
                <div>
                  <div className="club-label text-[#d6b078]">Hidden</div>
                  <div className="mt-1 text-lg font-semibold text-[#fff1de]">Private information stays blocked</div>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  'Player hole cards',
                  'Private action prompts',
                  'Admin-only surveillance states'
                ].map((item) => (
                  <div key={item} className="rounded-[20px] border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-[#eadcc9]/72">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.92),rgba(9,4,7,0.96))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d3aa6d]/16 bg-[#d3aa6d]/10">
                  <ScrollText className="h-5 w-5 text-[#dfb881]" />
                </div>
                <div>
                  <div className="club-label text-[#d6b078]">Public Feed</div>
                  <div className="mt-1 text-lg font-semibold text-[#fff1de]">Room timeline</div>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  'Seat 3 raised preflop to 120.',
                  'Two players saw the turn.',
                  'Main pot reached $1,920.',
                  'Admin can disable spectators any time.'
                ].map((item) => (
                  <div key={item} className="rounded-[20px] border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-[#eadcc9]/72">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.92),rgba(9,4,7,0.96))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
              <div className="club-label text-[#d6b078]">Room Summary</div>
              <div className="mt-5 grid gap-3">
                {[
                  ['Spectators', `${table.spectators}`],
                  ['Seats used', `${table.currentPlayers}/${table.maxPlayers}`],
                  ['Table access', table.isPrivate ? 'Invite controlled' : 'Open demo room'],
                  ['Host permissions', 'Enable, remove, or mute spectators']
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between rounded-[18px] border border-white/8 bg-black/18 px-4 py-3">
                    <span className="text-sm text-[#eadcc8]/60">{label}</span>
                    <span className="text-sm font-medium text-[#fff1de]">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-[#d3aa6d]/14 bg-[#d3aa6d]/10 p-5 text-sm leading-7 text-[#f1e4d0]">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-[#e1ba82]" />
                Admin can enable or disable spectators for each table at any time.
              </div>
              <div className="mt-4 flex items-center gap-3">
                <Users className="h-5 w-5 text-[#e1ba82]" />
                Waiting-list entry can move a spectator into a seat when the host approves.
              </div>
            </div>
          </aside>
        </div>
      </main>
    </PremiumBackdrop>
  );
}
