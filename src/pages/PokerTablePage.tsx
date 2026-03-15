import { startTransition, useEffect, useState } from 'react';
import { WalletCards } from 'lucide-react';
import PremiumBackdrop from '../components/common/PremiumBackdrop';
import PremiumNav from '../components/common/PremiumNav';
import Button from '../components/common/Button';
import ActionButtons from '../components/poker/ActionButtons';
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
    actionLine: 'Velvet Stack raises to 120 preflop.'
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
    actionLine: 'Flop: A♦ K♠ Q♣. Action is on you for 180.'
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
    actionLine: 'Turn: Guild Room tanks facing 320.'
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
    actionLine: 'River action returns to you for the final decision.'
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
      'guild-room': 'Replay available after the hand'
    },
    actionLine: 'Showdown complete. Hand captured for replay.'
  }
];

function formatMoney(amount: number) {
  return `$${amount.toLocaleString()}`;
}

function isRedCard(card: string) {
  return card.includes('♦') || card.includes('♥');
}

export default function PokerTablePage({ onNavigate, table }: PokerTablePageProps) {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(26);
  const [showRaiseModal, setShowRaiseModal] = useState(false);
  const [showChipRequestModal, setShowChipRequestModal] = useState(false);
  const [heroBanner, setHeroBanner] = useState(sceneSequence[0]?.actionLine ?? 'Seat live. Demo actions are available below.');

  const scene = sceneSequence[sceneIndex];

  useEffect(() => {
    setSecondsLeft(26);
    setHeroBanner(scene.actionLine);
  }, [scene.actionLine, sceneIndex]);

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

  const heroSeat = seats.find((seat) => seat.id === 'hero');
  const heroCards = heroSeat?.cards ?? ['A♥', 'A♠'];
  const highestBet = Math.max(0, ...Object.values(scene.bets));
  const canCheck = scene.activeSeatId !== 'hero' || highestBet === 0;
  const statusItems = [
    { label: 'Room code', value: table.roomCode ?? 'Private room' },
    { label: 'Bomb pot', value: table.bombPot ?? 'Off' },
    { label: 'Run mode', value: table.runMode ?? 'Run once' },
    { label: 'Seats', value: `${table.currentPlayers}/${table.maxPlayers} seated` }
  ];

  const handleAction = (label: string) => {
    setHeroBanner(label);
  };

  return (
    <PremiumBackdrop roomGlow="burgundy">
      <PremiumNav
        current="table"
        onNavigate={onNavigate}
        title={`${table.name} • ${table.stakes}`}
        subtitle="Private table experience"
        compact
      />

      <main className="mx-auto max-w-[1560px] px-4 pb-10 pt-5 sm:px-6 lg:px-10">
        <section className="relative overflow-hidden rounded-[42px] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(118,18,33,0.22),transparent_18%),linear-gradient(180deg,rgba(7,3,5,0.82),rgba(2,2,3,0.98))] px-3 pb-8 pt-4 shadow-[0_40px_130px_rgba(0,0,0,0.58)] sm:px-5 sm:pb-10 sm:pt-5 lg:px-8 lg:pb-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,219,162,0.06),transparent_36%),linear-gradient(180deg,transparent,rgba(0,0,0,0.38))]" />
          <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(255,221,168,0.14),transparent_72%)]" />

          <div className="relative z-10">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
              <div className="min-w-0">
                <div className="club-label text-[#d6b078]">Private Poker Room</div>
                <h1 className="club-display mt-3 text-3xl text-[#fff4e7] sm:text-4xl lg:text-5xl">{table.name}</h1>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#eadcc9]/76 sm:text-base">
                  {scene.announcement}. Discover the action on felt, make the call, and play through a cleaner premium table view.
                </p>
                <p className="mt-3 text-[0.72rem] uppercase tracking-[0.28em] text-[#d4af77]/74">
                  {table.gameType} • {table.blindsLabel} • {scene.label}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 xl:justify-end">
                <div className="flex items-center gap-4 rounded-full border border-white/10 bg-black/25 px-4 py-3 backdrop-blur-xl">
                  <div className="min-w-0">
                    <div className="club-label text-[#d4af77]">Action Clock</div>
                    <div className="mt-1 text-sm text-[#f4e6d2]">{scene.label} in progress</div>
                  </div>
                  <TimerRing seconds={secondsLeft} maxSeconds={26} />
                </div>

                <Button variant="ghost" onClick={() => onNavigate?.('lobby')}>
                  View Games
                </Button>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {statusItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-full border border-white/8 bg-white/[0.04] px-4 py-2.5 backdrop-blur-md"
                >
                  <span className="club-label text-[#d2aa72]">{item.label}</span>
                  <span className="ml-3 text-sm text-[#f5e9d7]">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <LuxuryPokerTable
                seats={seats}
                board={scene.board}
                pot={scene.pot}
                roomLabel={table.roomCode ?? 'Private room'}
                tableLabel={`${table.gameType} • ${table.stakes}`}
                announcement={scene.announcement}
                showHeader={false}
                immersive
                detachedSeatIds={['hero']}
                hiddenBetSeatIds={['hero']}
                className="mx-auto"
              />
            </div>

            <div className="relative z-20 -mt-8 sm:-mt-12">
              <div className="mx-auto flex max-w-[340px] items-end justify-center gap-4 sm:max-w-[400px]">
                {heroCards.map((card, index) => (
                  <div
                    key={`${card}-${index}`}
                    className={`luxury-card-face h-[108px] w-[78px] text-[1.65rem] shadow-[0_20px_44px_rgba(0,0,0,0.34)] sm:h-[124px] sm:w-[90px] sm:text-[1.9rem] ${
                      isRedCard(card) ? 'luxury-card-face--red' : ''
                    } ${index === 0 ? '-rotate-6 translate-y-3 sm:translate-y-4' : 'rotate-6'}`}
                  >
                    {card}
                  </div>
                ))}
              </div>

              <div className="mx-auto mt-4 w-fit rounded-full border border-[#d3aa6d]/18 bg-[linear-gradient(180deg,rgba(18,7,10,0.92),rgba(7,3,5,0.88))] px-4 py-2.5 shadow-[0_18px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl">
                <span className="club-label text-[#d4af77]">Your Hand</span>
                <span className="ml-3 text-sm text-[#fff1de]">{heroCards.join(' • ')}</span>
              </div>
            </div>

            <div className="mx-auto mt-6 max-w-[980px] rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(17,7,9,0.88),rgba(8,4,6,0.94))] p-4 shadow-[0_24px_64px_rgba(0,0,0,0.34)] sm:p-5">
              <div className="grid gap-4 md:grid-cols-[160px_160px_minmax(0,1fr)]">
                <div>
                  <div className="club-label text-[#d4af77]">Main Pot</div>
                  <div className="club-display mt-3 text-3xl text-[#fff4e7]">{formatMoney(scene.pot)}</div>
                </div>

                <div>
                  <div className="club-label text-[#d4af77]">To Call</div>
                  <div className="club-display mt-3 text-3xl text-[#fff4e7]">
                    {canCheck ? 'Check' : formatMoney(highestBet)}
                  </div>
                </div>

                <div className="min-w-0">
                  <div className="club-label text-[#d4af77]">Betting Strip</div>
                  <p className="mt-3 text-sm leading-7 text-[#f0e2ce]/78 sm:text-base">
                    {heroBanner}
                  </p>
                </div>
              </div>
            </div>

            <ActionButtons
              className="mx-auto mt-5 max-w-[1080px]"
              onFold={() => handleAction('Fold selected. The hand line updates and the next player takes over.')}
              onCheck={() => handleAction('Check selected. Action passes across the table without breaking the flow.')}
              onCall={() =>
                handleAction(
                  `Call ${highestBet > 0 ? formatMoney(highestBet) : formatMoney(0)} selected. Chips slide forward and the pot refreshes.`
                )
              }
              onRaise={() => setShowRaiseModal(true)}
              callAmount={highestBet}
              canCheck={canCheck}
            />

            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Button variant="ghost" onClick={() => setShowChipRequestModal(true)}>
                Request Chips
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleAction('Run-it-twice preference surfaced under the current hand state.')}
              >
                Run It Twice
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleAction('Replay marker pinned so this hand can be revisited after showdown.')}
              >
                Save Replay Marker
              </Button>
            </div>

            <div className="mx-auto mt-8 flex max-w-[1180px] flex-col gap-5 border-t border-white/8 pt-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="min-w-0">
                <div className="club-label text-[#d6b078]">Username</div>
                <div className="mt-3 text-xl font-semibold text-[#fff4e7] sm:text-2xl">{heroSeat?.name ?? 'You'}</div>
                <div className="mt-2 text-[0.72rem] uppercase tracking-[0.24em] text-[#d4af77]/68">
                  {heroSeat?.label ?? 'Seat live'} • Premium table seat
                </div>
              </div>

              <div className="sm:text-right">
                <div className="club-label text-[#d6b078]">Balance</div>
                <div className="club-display mt-3 text-4xl text-[#fff4e7] sm:text-5xl">
                  {formatMoney(heroSeat?.stack ?? 0)}
                </div>
                <div className="mt-2 text-[0.72rem] uppercase tracking-[0.24em] text-[#d4af77]/68">
                  On-table balance
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {showRaiseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-md">
          <ChipSelector
            min={180}
            max={2200}
            onCancel={() => setShowRaiseModal(false)}
            onConfirm={(amount) => {
              handleAction(`Raise selected for ${formatMoney(amount)}. Bet chips pulse forward and the table updates.`);
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
                <div className="club-label text-[#d6b078]">Chip Request</div>
                <h2 className="club-display mt-3 text-4xl text-[#fff4e7]">Refresh your demo stack</h2>
                <p className="mt-4 text-sm leading-7 text-[#eadcc9]/72">
                  Players can request extra demo chips without leaving the room. This modal stays lightweight so the table remains the star of the experience.
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
                    handleAction(`Chip request submitted for ${formatMoney(amount)}. Your demo balance update is pending.`);
                    setShowChipRequestModal(false);
                  }}
                  className="rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-5 text-left transition hover:-translate-y-0.5 hover:border-[#d3aa6d]/20 hover:bg-white/[0.07]"
                >
                  <div className="club-label text-[#d6b078]">Request</div>
                  <div className="club-display mt-3 text-3xl text-[#fff3e2]">{formatMoney(amount)}</div>
                  <div className="mt-2 text-sm leading-6 text-[#eadcc9]/68">Demo table balance</div>
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-[26px] border border-[#d3aa6d]/14 bg-[#d3aa6d]/10 p-4 text-sm leading-7 text-[#f1e4d0]">
              This flow stays player-first: quick stack top-up, close modal, and return to the hand without dashboard-style interruptions.
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Button variant="ghost" onClick={() => setShowChipRequestModal(false)}>
                Close
              </Button>
              <Button variant="primary" onClick={() => setShowChipRequestModal(false)}>
                Return to Table
              </Button>
            </div>
          </div>
        </div>
      )}
    </PremiumBackdrop>
  );
}
