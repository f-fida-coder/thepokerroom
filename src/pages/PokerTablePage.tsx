import { startTransition, useEffect, useState } from 'react';
import {
  MessageSquareText,
  PlayCircle,
  ScrollText,
  WalletCards
} from 'lucide-react';
import PremiumBackdrop from '../components/common/PremiumBackdrop';
import PremiumNav from '../components/common/PremiumNav';
import Button from '../components/common/Button';
import ChipSelector from '../components/poker/ChipSelector';
import LuxuryPokerTable, { type LuxurySeat } from '../components/poker/LuxuryPokerTable';
import TimerRing from '../components/poker/TimerRing';
import type { DemoPage, DemoTable } from '../types/demo';

interface PokerTablePageProps {
  onNavigate?: (page: DemoPage) => void;
  table: DemoTable;
}

interface SceneState {
  label: string;
  announcement: string;
  board: string[];
  pot: number;
  activeSeatId: string;
  bets: Record<string, number>;
  folded: string[];
  seatNotes: Record<string, string>;
  actionLine: string;
  chatMessage: { user: string; text: string };
}

const baseSeats: Omit<LuxurySeat, 'bet' | 'isActive' | 'isFolded' | 'note'>[] = [
  { id: 'marble-ace', position: 'top-left', label: 'UTG', name: 'Marble Ace', stack: 6240, isDealer: false, showCardBacks: true },
  { id: 'noir-river', position: 'top-center', label: 'HJ', name: 'Noir River', stack: 3920, isDealer: false, showCardBacks: true },
  { id: 'velvet-stack', position: 'top-right', label: 'CO', name: 'Velvet Stack', stack: 7180, isDealer: false, showCardBacks: true },
  { id: 'chateau-pair', position: 'bottom-left', label: 'SB', name: 'Chateau Pair', stack: 2880, isDealer: false, showCardBacks: true },
  {
    id: 'hero',
    position: 'bottom-center',
    label: 'Button',
    name: 'You',
    stack: 5400,
    isDealer: true,
    isHero: true,
    cards: ['A♥', 'A♠'],
    cardsVisible: true
  },
  { id: 'guild-room', position: 'bottom-right', label: 'BB', name: 'Guild Room', stack: 4600, isDealer: false, showCardBacks: true }
];

const sceneSequence: SceneState[] = [
  {
    label: 'Preflop',
    announcement: 'Dealer opens a new hand in the velvet room',
    board: [],
    pot: 150,
    activeSeatId: 'velvet-stack',
    bets: {
      'chateau-pair': 20,
      'guild-room': 40,
      'velvet-stack': 120,
      hero: 120
    },
    folded: [],
    seatNotes: {
      'velvet-stack': 'Opening to 120',
      hero: 'Considering the call',
      'guild-room': 'Posted big blind'
    },
    actionLine: 'Velvet Stack raises to 120 preflop.',
    chatMessage: { user: 'Floor', text: 'Private room code accepted. Table live.' }
  },
  {
    label: 'Flop',
    announcement: 'Bomb-pot cadence scheduled in three hands',
    board: ['A♦', 'K♠', 'Q♣'],
    pot: 820,
    activeSeatId: 'hero',
    bets: {
      'velvet-stack': 180,
      hero: 180
    },
    folded: ['chateau-pair'],
    seatNotes: {
      hero: 'Top set on a premium board',
      'chateau-pair': 'Folded preflop'
    },
    actionLine: 'Flop: A♦ K♠ Q♣. Action is on you for 180.',
    chatMessage: { user: 'Noir River', text: 'That board connected fast.' }
  },
  {
    label: 'Turn',
    announcement: 'Turn card changes the room energy',
    board: ['A♦', 'K♠', 'Q♣', '8♥'],
    pot: 1460,
    activeSeatId: 'guild-room',
    bets: {
      hero: 320,
      'guild-room': 320
    },
    folded: ['chateau-pair', 'velvet-stack'],
    seatNotes: {
      'guild-room': 'Tank time active',
      hero: 'Strong value range'
    },
    actionLine: 'Turn: Guild Room tanks facing 320.',
    chatMessage: { user: 'Marble Ace', text: 'This room plays deeper than most demos.' }
  },
  {
    label: 'River',
    announcement: 'River card on felt, final action pending',
    board: ['A♦', 'K♠', 'Q♣', '8♥', '3♠'],
    pot: 2140,
    activeSeatId: 'hero',
    bets: {
      hero: 480,
      'guild-room': 480
    },
    folded: ['chateau-pair', 'velvet-stack', 'noir-river'],
    seatNotes: {
      hero: 'River decision for 480',
      'guild-room': 'Balanced range'
    },
    actionLine: 'River action returns to you for the final decision.',
    chatMessage: { user: 'Guild Room', text: 'Beautiful table design. Tough river.' }
  },
  {
    label: 'Showdown',
    announcement: 'Replay-ready showdown state saved to history',
    board: ['A♦', 'K♠', 'Q♣', '8♥', '3♠'],
    pot: 2820,
    activeSeatId: 'hero',
    bets: {},
    folded: ['chateau-pair', 'velvet-stack', 'noir-river'],
    seatNotes: {
      hero: 'Winner shown in hand history',
      'guild-room': 'Review available to admin'
    },
    actionLine: 'Showdown complete. Hand captured for replay.',
    chatMessage: { user: 'System', text: 'Hand #948220 stored with replay markers.' }
  }
];

const baseTimeline = [
  'Room opened by admin host with mixed-game options visible.',
  'Players received mock private-club chip balances.',
  'Spectator mode remains enabled without hole-card access.',
  'Rake and action feed visible to the host console.'
];

export default function PokerTablePage({ onNavigate, table }: PokerTablePageProps) {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(26);
  const [showRaiseModal, setShowRaiseModal] = useState(false);
  const [showChipRequestModal, setShowChipRequestModal] = useState(false);
  const [timeline, setTimeline] = useState<string[]>(baseTimeline);
  const [chatFeed, setChatFeed] = useState<{ user: string; text: string }[]>([
    { user: 'Floor', text: 'Welcome to the premium table demo.' },
    { user: 'You', text: 'The room feels ready for presentation.' }
  ]);
  const [heroBanner, setHeroBanner] = useState('Seat live. Demo actions are available below.');

  const scene = sceneSequence[sceneIndex];

  useEffect(() => {
    setSecondsLeft(26);
    setTimeline((previous) => [scene.actionLine, ...previous].slice(0, 7));
    setChatFeed((previous) => [scene.chatMessage, ...previous].slice(0, 6));
  }, [sceneIndex, scene.actionLine, scene.chatMessage]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setSecondsLeft((value) => {
        if (value <= 1) {
          startTransition(() => {
            setSceneIndex((current) => (current + 1) % sceneSequence.length);
          });
          return 26;
        }

        return value - 1;
      });
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  const seats: LuxurySeat[] = baseSeats.map((seat) => ({
    ...seat,
    bet: scene.bets[seat.id] ?? 0,
    isActive: scene.activeSeatId === seat.id,
    isFolded: scene.folded.includes(seat.id),
    note: scene.seatNotes[seat.id]
  }));

  const handleAction = (label: string) => {
    setHeroBanner(label);
    setTimeline((previous) => [`You: ${label}`, ...previous].slice(0, 7));
    setChatFeed((previous) => [{ user: 'You', text: label }, ...previous].slice(0, 6));
  };

  return (
    <PremiumBackdrop roomGlow="burgundy">
      <PremiumNav
        current="table"
        onNavigate={onNavigate}
        title={`${table.name} • ${table.stakes}`}
        subtitle="Live room table"
        compact
      />

      <main className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
          <section className="space-y-6">
            <div className="flex flex-col gap-4 rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.92),rgba(9,4,7,0.96))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.38)] sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="club-label text-[#d6b078]">Joined Table</div>
                <h1 className="club-display mt-3 text-4xl text-[#fff4e7]">{table.name}</h1>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[#d1aa71]/80">
                  {table.gameType} • {table.blindsLabel} • {scene.label}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button variant="ghost" onClick={() => onNavigate?.('lobby')}>
                  Back to Lobby
                </Button>
                <Button variant="secondary" onClick={() => onNavigate?.('spectator')}>
                  Spectator View
                </Button>
                <Button variant="primary" onClick={() => onNavigate?.('admin-dashboard')}>
                  Admin Panel
                </Button>
              </div>
            </div>

            <LuxuryPokerTable
              seats={seats}
              board={scene.board}
              pot={scene.pot}
              roomLabel={table.roomCode ?? 'Private room'}
              tableLabel={`${table.gameType} • ${table.stakes}`}
              announcement={scene.announcement}
              tags={[table.bombPot ?? 'Bomb pot off', table.runMode ?? 'Run once', scene.label]}
            />

            <div className="grid gap-6 lg:grid-cols-[1.06fr_0.94fr]">
              <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.92),rgba(9,4,7,0.96))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="club-label text-[#d6b078]">Action Console</div>
                    <h2 className="mt-3 text-2xl font-semibold text-[#fff1de]">Believable demo interactions</h2>
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d3aa6d]/16 bg-[#d3aa6d]/10">
                    <PlayCircle className="h-7 w-7 text-[#dfb881]" />
                  </div>
                </div>

                <div className="mt-5 rounded-[24px] border border-[#d3aa6d]/14 bg-[#d3aa6d]/10 px-5 py-4 text-sm text-[#f2e4d0]">
                  {heroBanner}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  <Button variant="danger" size="lg" onClick={() => handleAction('Fold selected. Demo seat state updated.')}>
                    Fold
                  </Button>
                  <Button variant="success" size="lg" onClick={() => handleAction('Check selected. Action passes to the next player.')}>
                    Check
                  </Button>
                  <Button variant="secondary" size="lg" onClick={() => handleAction('Call 180 selected. Pot pulse and action feed updated.')}>
                    Call 180
                  </Button>
                  <Button variant="primary" size="lg" onClick={() => setShowRaiseModal(true)}>
                    Raise
                  </Button>
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Button variant="ghost" onClick={() => setShowChipRequestModal(true)}>
                    Request Chips
                  </Button>
                  <Button variant="ghost" onClick={() => handleAction('Run-it-twice preference surfaced in the demo feed.')}>
                    Run It Twice
                  </Button>
                  <Button variant="ghost" onClick={() => handleAction('Hand replay marker added to the demo timeline.')}>
                    Save Replay Marker
                  </Button>
                </div>
              </div>

              <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.92),rgba(9,4,7,0.96))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
                <div className="club-label text-[#d6b078]">Live Table Signals</div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {[
                    ['Bomb pots', table.bombPot ?? 'Host-controlled'],
                    ['Mixed rotation', table.mixedRotation ?? 'Single game'],
                    ['Buy-in limits', table.buyIn ?? 'Host set'],
                    ['Room status', `${table.currentPlayers}/${table.maxPlayers} seated`]
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4">
                      <div className="club-label text-[#d4af77]">{label}</div>
                      <div className="mt-3 text-sm leading-7 text-[#fff1de]">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.92),rgba(9,4,7,0.96))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="club-label text-[#d6b078]">Action Timer</div>
                  <div className="mt-2 text-lg font-semibold text-[#fff1de]">{scene.label} decision window</div>
                </div>
                <TimerRing seconds={secondsLeft} maxSeconds={26} />
              </div>
              <div className="mt-5 rounded-[24px] border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-[#eadcc9]/72">
                Active seat highlight, bet chips, and timeline updates move automatically in this demo to keep the room feeling alive.
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.92),rgba(9,4,7,0.96))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d3aa6d]/16 bg-[#d3aa6d]/10">
                  <ScrollText className="h-5 w-5 text-[#dfb881]" />
                </div>
                <div>
                  <div className="club-label text-[#d6b078]">Action Timeline</div>
                  <div className="mt-1 text-lg font-semibold text-[#fff1de]">Table feed</div>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {timeline.map((item) => (
                  <div key={item} className="rounded-[20px] border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-[#eadcc9]/72">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.92),rgba(9,4,7,0.96))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d3aa6d]/16 bg-[#d3aa6d]/10">
                  <MessageSquareText className="h-5 w-5 text-[#dfb881]" />
                </div>
                <div>
                  <div className="club-label text-[#d6b078]">Table Chat</div>
                  <div className="mt-1 text-lg font-semibold text-[#fff1de]">Premium room conversation</div>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {chatFeed.map((message, index) => (
                  <div key={`${message.user}-${index}-${message.text}`} className="rounded-[20px] border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-sm font-semibold text-[#f1deb9]">{message.user}</div>
                    <p className="mt-2 text-sm leading-7 text-[#eadcc9]/72">{message.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.92),rgba(9,4,7,0.96))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
              <div className="club-label text-[#d6b078]">Room Controls in Demo</div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button variant="ghost" onClick={() => onNavigate?.('spectator')}>
                  Spectator Mode
                </Button>
                <Button variant="ghost" onClick={() => onNavigate?.('admin-dashboard')}>
                  Host View
                </Button>
                <Button variant="ghost" onClick={() => handleAction('Double-board support callout shown in the side feed.')}>
                  Double-Board Demo
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {showRaiseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-md">
          <ChipSelector
            min={180}
            max={2200}
            onCancel={() => setShowRaiseModal(false)}
            onConfirm={(amount) => {
              handleAction(`Raise selected for ${amount}. Demo bet marker refreshed.`);
              setShowRaiseModal(false);
            }}
          />
        </div>
      )}

      {showChipRequestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-md">
          <div className="w-full max-w-xl rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.94),rgba(9,4,7,0.98))] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.48)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="club-label text-[#d6b078]">Chip Request Modal</div>
                <h2 className="club-display mt-3 text-4xl text-[#fff4e7]">Request fake demo chips</h2>
                <p className="mt-4 text-sm leading-7 text-[#eadcc9]/72">
                  In this showcase flow, players start at zero and request fake chips from the host. Nothing here is real-money logic.
                </p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d3aa6d]/16 bg-[#d3aa6d]/10">
                <WalletCards className="h-6 w-6 text-[#dfb881]" />
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[500, 1000, 2000].map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => {
                    handleAction(`Chip request submitted for ${amount}. Awaiting host approval.`);
                    setShowChipRequestModal(false);
                  }}
                  className="rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-5 text-left transition hover:-translate-y-0.5 hover:border-[#d3aa6d]/20 hover:bg-white/[0.07]"
                >
                  <div className="club-label text-[#d6b078]">Request</div>
                  <div className="club-display mt-3 text-3xl text-[#fff3e2]">${amount}</div>
                  <div className="mt-2 text-sm leading-6 text-[#eadcc9]/68">Fake-money demo stack</div>
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-[26px] border border-[#d3aa6d]/14 bg-[#d3aa6d]/10 p-4 text-sm leading-7 text-[#f1e4d0]">
              Host actions can approve, deny, add, or remove these demo chips from the admin panel instantly.
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Button variant="ghost" onClick={() => setShowChipRequestModal(false)}>
                Close
              </Button>
              <Button variant="primary" onClick={() => onNavigate?.('admin-dashboard')}>
                Open Admin Panel
              </Button>
            </div>
          </div>
        </div>
      )}
    </PremiumBackdrop>
  );
}
