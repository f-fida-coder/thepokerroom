import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  ChevronRight,
  Clock3,
  Crown,
  Eye,
  Gauge,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Spade,
  Users,
  WalletCards
} from 'lucide-react';
import { demoTables } from '../data/demoTables';
import type { DemoPage, DemoTable } from '../types/demo';

interface LandingProps {
  onNavigate?: (page: DemoPage) => void;
  onOpenTable?: (tableId: string, page?: DemoPage) => void;
}

interface NavItem {
  label: string;
  href: string;
}

interface GameShowcaseItem {
  title: string;
  subtitle: string;
  description: string;
  detail: string;
  cards: string[];
  tableId?: string;
}

interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
}

interface TrustCard {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
}

const navItems: NavItem[] = [
  { label: 'Games', href: '#games' },
  { label: 'Table Lobby', href: '#live-tables' },
  { label: 'Private Access', href: '#access' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Trust', href: '#features' }
];

const gameShowcase: GameShowcaseItem[] = [
  {
    title: "Texas Hold'em",
    subtitle: 'Signature cash tables',
    description: 'Classic deep-stack action with polished pacing, premium visuals, and player-first clarity from seat selection to showdown.',
    detail: 'Best for players who want a refined flagship room.',
    cards: ['A♠', 'K♠'],
    tableId: 'high-tide'
  },
  {
    title: 'Omaha',
    subtitle: 'Four-card pressure',
    description: 'High-energy PLO rooms that keep the atmosphere elegant while still delivering bigger decisions and richer post-flop texture.',
    detail: 'For players chasing bigger draws and bigger pots.',
    cards: ['A♥', 'A♣']
  },
  {
    title: 'Double-Board Omaha',
    subtitle: 'Feature-table drama',
    description: 'Two boards, split-pot tension, and cinematic reveals built for players who want a showcase experience instead of a basic table list.',
    detail: 'Ideal when you want premium action with extra spectacle.',
    cards: ['Q♦', 'Q♣'],
    tableId: 'ivory-circle'
  },
  {
    title: 'Crazy Pineapple',
    subtitle: 'Club-floor variety',
    description: 'A playful premium rotation pick with just enough unpredictability to make every entry feel like a fresh room on the casino floor.',
    detail: 'A standout pick for players who like a stylish change of pace.',
    cards: ['J♣', '10♥'],
    tableId: 'crown-pineapple'
  }
];

const howItWorks: HowItWorksStep[] = [
  {
    number: '01',
    title: 'Choose your game',
    description: 'Preview the room style, stakes, and format that fit your mood, from flagship Hold\'em to feature-table mixed action.'
  },
  {
    number: '02',
    title: 'Enter a table',
    description: 'Move from the homepage into a live seat or active lobby view with a single clear player-first path.'
  },
  {
    number: '03',
    title: 'Start playing',
    description: 'Settle into a premium table flow with smooth actions, elegant visuals, and the feel of a private high-end poker room.'
  }
];

const trustCards: TrustCard[] = [
  {
    icon: LockKeyhole,
    title: 'Private access',
    description: 'Invite-protected rooms keep the landing experience focused on players entering curated tables, not navigating a public cluttered lobby.',
    accent: 'Invite-only rooms'
  },
  {
    icon: Sparkles,
    title: 'Premium table atmosphere',
    description: 'From cinematic table previews to glassy surfaces and gold-lit details, the room feels like a private casino lounge from the first screen onward.',
    accent: 'Luxury visual language'
  },
  {
    icon: ShieldCheck,
    title: 'Secure session confidence',
    description: 'Clean access flow, protected table entry, and a trust-first presentation help players feel safe before the first card is dealt.',
    accent: 'Security-forward design'
  },
  {
    icon: Gauge,
    title: 'Smooth gameplay',
    description: 'The experience is tuned for quick discovery, responsive actions, and a polished mobile-to-desktop handoff without visual noise.',
    accent: 'Built for fluid play'
  }
];

const supportHighlights = [
  'Player access and table entry are kept clear and uncluttered.',
  'Featured tables surface stakes, seats, and ambiance before you click.',
  'The lobby preview keeps entry decisions quick on both desktop and mobile.'
];

const accessJourney = [
  {
    number: '01',
    title: 'Choose a table',
    description: 'Browse games, stakes, and room atmosphere from the homepage or live lobby.'
  },
  {
    number: '02',
    title: 'Enter private access',
    description: 'Confirm your alias and room code in one short join step.'
  },
  {
    number: '03',
    title: 'Open the table UI',
    description: 'Move straight into the live poker table once the room is unlocked.'
  }
];

const mobileFlow = [
  {
    title: 'Tap into the lobby',
    description: 'The primary CTA takes players directly from the homepage into the table browser.'
  },
  {
    title: 'Scan rooms quickly',
    description: 'On smaller screens, cards keep stakes, seats, and private access status readable at a glance.'
  },
  {
    title: 'Unlock and play',
    description: 'The access step stays short, so players reach the table without friction on mobile.'
  }
];

const footerLinks = ['Privacy-first access', 'Curated table support', 'Smooth live gameplay'];

const sectionFrame = 'mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8';

const surfacePanel =
  'relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(16,14,11,0.86),rgba(5,7,6,0.96))] shadow-[0_24px_90px_rgba(0,0,0,0.42)] backdrop-blur-2xl';

const primaryButton =
  'inline-flex items-center justify-center gap-2 rounded-full border border-[#f4d5a3]/25 bg-[linear-gradient(180deg,#f2cf94_0%,#d3a05d_48%,#8d5c2f_100%)] px-6 py-3 text-sm font-semibold tracking-[0.04em] text-[#1b120a] shadow-[0_18px_38px_rgba(157,98,46,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(157,98,46,0.42)]';

const secondaryButton =
  'inline-flex items-center justify-center gap-2 rounded-full border border-[#d4b27c]/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-6 py-3 text-sm font-medium tracking-[0.04em] text-[#f5ecdf] backdrop-blur-md transition duration-300 hover:border-[#d0a66a]/25 hover:bg-white/[0.08]';

const subtlePill =
  'rounded-full border border-[#d4b27c]/12 bg-[#f7e5bc]/[0.05] px-3 py-2 text-[0.68rem] uppercase tracking-[0.22em] text-[#dcbc86]';

function SectionIntro({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-[760px]">
      <span className="club-label text-[#d7b57d]">{eyebrow}</span>
      <h2 className="club-display mt-4 text-4xl leading-tight text-[#fbf4e8] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[#e7d9c8]/72 sm:text-lg">{description}</p>
    </div>
  );
}

function StatusPill({ status }: { status: DemoTable['status'] }) {
  const tone =
    status === 'playing'
      ? 'border-[#d7b27d]/18 bg-[#d7b27d]/12 text-[#f5d8ab]'
      : status === 'waiting'
        ? 'border-[#86c79b]/18 bg-[#86c79b]/12 text-[#9ae3b1]'
        : 'border-white/12 bg-white/[0.06] text-[#efe0cb]';

  const label =
    status === 'playing' ? 'Playing live' : status === 'waiting' ? 'Seats opening' : 'Waitlist';

  return (
    <span className={`rounded-full border px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.22em] ${tone}`}>
      {label}
    </span>
  );
}

function isRedCard(card: string) {
  return card.includes('♥') || card.includes('♦');
}

function openTableOrFallback(
  tableId: string | undefined,
  onOpenTable?: LandingProps['onOpenTable'],
  onNavigate?: LandingProps['onNavigate'],
  page: DemoPage = 'login'
) {
  if (tableId) {
    onOpenTable?.(tableId, page);
    return;
  }

  onNavigate?.('lobby');
}

export default function Landing({ onNavigate, onOpenTable }: LandingProps) {
  const openTables = demoTables.filter((table) => table.status !== 'full');
  const liveTables = openTables.filter((table) => table.status === 'playing');
  const featuredTable = liveTables[0] ?? openTables[0] ?? demoTables[0];
  const sideTables = openTables.filter((table) => table.id !== featuredTable.id).slice(0, 3);
  const seatedPlayers = demoTables.reduce((sum, table) => sum + table.currentPlayers, 0);
  const spectators = demoTables.reduce((sum, table) => sum + table.spectators, 0);

  const heroSeats = [
    {
      label: 'UTG',
      name: 'Velvet Ace',
      stack: '$6.4k',
      className: 'left-[4%] top-[22%] hidden xl:block'
    },
    {
      label: 'CO',
      name: 'Noir River',
      stack: '$4.1k',
      className: 'right-[5%] top-[18%] hidden lg:block'
    },
    {
      label: 'Button',
      name: 'You',
      stack: '$5.9k',
      className: 'bottom-[3%] left-1/2 w-[160px] -translate-x-1/2'
    }
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#040605] text-[#f5ecdf]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,210,148,0.12),transparent_18%),radial-gradient(circle_at_16%_18%,rgba(15,65,47,0.34),transparent_24%),radial-gradient(circle_at_85%_14%,rgba(101,69,35,0.18),transparent_24%),linear-gradient(180deg,#0b0f0c_0%,#050705_36%,#030403_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[900px] bg-[linear-gradient(90deg,rgba(8,18,14,0.9),transparent_14%,transparent_86%,rgba(8,18,14,0.9))]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,220,162,0.18),rgba(255,220,162,0.04)_38%,transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute inset-0 opacity-30 luxury-noise" />

      <div className="relative z-10">
        <header className="sticky top-0 z-40 border-b border-white/6 bg-[#0f120f]/78 backdrop-blur-2xl">
          <div className={`${sectionFrame} flex items-center gap-4 py-4`}>
            <a href="#home" className="flex items-center gap-3 whitespace-nowrap">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f1cf9b]/18 bg-[linear-gradient(180deg,rgba(44,69,54,0.96),rgba(13,20,17,0.96))] shadow-[0_12px_28px_rgba(0,0,0,0.38)]">
                <Spade className="h-5 w-5 text-[#f2c585]" />
              </div>
              <div>
                <div className="club-display text-2xl leading-none text-[#fff4e8]">The poker room</div>
                <div className="mt-1 text-[0.68rem] uppercase tracking-[0.34em] text-[#d2ae73]/70">
                  Premium Player Lounge
                </div>
              </div>
            </a>

            <nav className="hide-scrollbar hidden flex-1 overflow-x-auto lg:block">
              <div className="mx-6 flex min-w-max items-center gap-1 rounded-full border border-white/8 bg-white/[0.03] p-1.5">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-full px-4 py-2 text-sm font-medium text-[#e8dcc8]/74 transition hover:bg-white/[0.06] hover:text-[#fff2df]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>

            <div className="ml-auto flex items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate?.('login')}
                className="hidden rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium tracking-[0.02em] text-[#f5ecdf] backdrop-blur-md transition duration-300 hover:border-[#d0a66a]/25 hover:bg-white/[0.08] sm:inline-flex"
              >
                Join Private Table
              </button>
              <button
                type="button"
                onClick={() => onNavigate?.('lobby')}
                className={`${primaryButton} px-5 py-2.5 sm:px-6 sm:py-3`}
              >
                Enter a Table
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </header>

        <main>
          <section id="home" className="scroll-mt-28">
            <div className={`${sectionFrame} pb-20 pt-10 sm:pb-24 lg:pt-14`}>
              <div className={`${surfacePanel} isolate`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,221,168,0.12),transparent_20%),radial-gradient(circle_at_78%_34%,rgba(25,104,72,0.2),transparent_32%),linear-gradient(180deg,rgba(7,10,9,0.98),rgba(5,7,6,0.96))]" />
                <div className="absolute inset-y-0 left-0 w-full xl:w-[48%] bg-[linear-gradient(90deg,rgba(5,8,7,0.96),rgba(5,8,7,0.86),rgba(5,8,7,0.18),transparent)]" />
                <div className="absolute inset-y-0 right-0 hidden w-[62%] bg-[radial-gradient(circle_at_center,rgba(30,111,77,0.14),transparent_58%)] xl:block" />

                <div className="relative z-10 grid items-center gap-10 px-5 py-6 sm:px-8 sm:py-8 xl:grid-cols-[minmax(0,470px)_minmax(0,1fr)] xl:gap-12 xl:px-10 xl:py-10">
                  <div className="relative z-10 max-w-xl pt-2 sm:pt-6">
                    <span className="club-label text-[#d7b57d]">Exclusive Tables. Instant Entry.</span>
                    <h1 className="club-display mt-5 max-w-[11ch] text-5xl leading-[0.92] text-[#fff4e8] sm:text-6xl lg:text-[4.75rem]">
                      Step into a private poker room where premium tables are ready now.
                    </h1>
                    <p className="mt-6 max-w-[34rem] text-base leading-8 text-[#eadbc8]/76 sm:text-lg">
                      Discover live Hold'em, Omaha, and feature games, preview the room in seconds, and join a table instantly through a secure player-first experience.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => onNavigate?.('lobby')}
                        className={primaryButton}
                      >
                        Enter a Table
                        <ArrowRight className="h-4 w-4" />
                      </button>
                      <a href="#games" className={secondaryButton}>
                        View Games
                      </a>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-5 text-sm text-[#eadcca]/72">
                      <button
                        type="button"
                        onClick={() => onNavigate?.('login')}
                        className="inline-flex items-center gap-2 font-medium text-[#f3d4a0] transition hover:text-[#ffe3ba]"
                      >
                        Join Private Table
                        <ChevronRight className="h-4 w-4" />
                      </button>
                      <a href="#how-it-works" className="inline-flex items-center gap-2 font-medium text-[#eadcca]/72 transition hover:text-[#fff1de]">
                        Learn How It Works
                        <ChevronRight className="h-4 w-4" />
                      </a>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[#eadcca]/72">
                      {[
                        `${liveTables.length || 1} live tables right now`,
                        `${openTables.length} rooms open for entry`,
                        `${seatedPlayers} players already seated`
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md"
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="club-label text-[#d7b57d]">Featured entry</div>
                          <div className="mt-2 text-2xl font-semibold text-[#fff1df]">{featuredTable.name}</div>
                          <p className="mt-3 text-sm leading-7 text-[#eadcc9]/70">
                            {featuredTable.gameType} at {featuredTable.stakes}. Preview the room, feel the atmosphere, and enter the table the moment it feels right.
                          </p>
                        </div>
                        <StatusPill status={featuredTable.status} />
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {[featuredTable.buyIn ?? 'Curated buy-ins', `${featuredTable.currentPlayers}/${featuredTable.maxPlayers} seated`, `${spectators} watching live`].map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-black/18 px-3 py-2 text-xs uppercase tracking-[0.18em] text-[#f0dfc6]/74"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="relative overflow-hidden rounded-[32px] border border-white/8 bg-[linear-gradient(180deg,rgba(11,17,14,0.86),rgba(3,6,5,0.96))] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.44)] sm:p-6 lg:p-8">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,221,168,0.16),transparent_24%),radial-gradient(circle_at_48%_44%,rgba(30,111,77,0.22),transparent_38%),linear-gradient(180deg,rgba(8,16,13,0.92),rgba(3,6,5,0.96))]" />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.28))]" />
                      <div className="absolute inset-y-0 left-0 w-16 bg-[linear-gradient(90deg,rgba(8,29,21,0.9),transparent)] sm:w-24" />
                      <div className="absolute inset-y-0 right-0 w-16 bg-[linear-gradient(270deg,rgba(8,29,21,0.9),transparent)] sm:w-24" />
                      <div className="absolute left-[12%] top-8 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(247,214,156,0.18),transparent_70%)] blur-xl" />
                      <div className="absolute right-[12%] top-8 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(247,214,156,0.18),transparent_70%)] blur-xl" />

                      <div className="relative z-10">
                        <div className="flex flex-wrap items-center justify-between gap-3 rounded-full border border-white/8 bg-black/24 px-4 py-3 backdrop-blur-xl">
                          <div>
                            <div className="club-label text-[#d7b27d]">Live table preview</div>
                            <div className="mt-1 text-sm text-[#eadcca]/82">{featuredTable.name}</div>
                          </div>
                          <div className="flex flex-wrap items-center gap-2">
                            <StatusPill status={featuredTable.status} />
                            <span className="rounded-full border border-[#d7b27d]/14 bg-[#d7b27d]/10 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.22em] text-[#d7b27d]">
                              {featuredTable.stakes}
                            </span>
                          </div>
                        </div>

                        <div className="relative mt-8 min-h-[500px] sm:min-h-[620px]">
                          <div className="absolute inset-x-[5%] top-[16%] bottom-[14%] rounded-[50%] bg-[linear-gradient(180deg,#896035_0%,#513117_34%,#24140b_72%,#140b06_100%)] shadow-[0_46px_80px_rgba(0,0,0,0.5)]" />
                          <div className="absolute inset-x-[7%] top-[18%] bottom-[16%] rounded-[50%] bg-[linear-gradient(180deg,#a9804b_0%,#6b4421_42%,#30190d_100%)] shadow-[inset_0_8px_12px_rgba(255,241,212,0.18),0_0_0_1px_rgba(244,219,171,0.12)]" />
                          <div className="absolute inset-x-[11%] top-[23%] bottom-[21%] rounded-[50%] border border-[#edcf97]/10 bg-[radial-gradient(circle_at_50%_18%,rgba(255,237,202,0.14),transparent_24%),linear-gradient(180deg,#184f3b_0%,#12392b_50%,#081510_100%)] shadow-[inset_0_18px_22px_rgba(255,255,255,0.08),inset_0_-42px_50px_rgba(0,0,0,0.5),0_0_44px_rgba(48,124,90,0.16)]" />

                          <div className="absolute left-1/2 top-[24%] -translate-x-1/2 text-center">
                            <span className="club-label text-[#d7b27d]/78">Private cash table</span>
                            <div className="club-display mt-2 text-lg text-[#fff0d8]">
                              {featuredTable.gameType}
                            </div>
                          </div>

                          <div className="absolute left-[16%] top-[34%] hidden gap-2 md:flex">
                            <span className="club-chip club-chip--gold h-6 w-6" />
                            <span className="club-chip club-chip--cream h-6 w-6" />
                            <span className="club-chip club-chip--burgundy h-6 w-6" />
                          </div>
                          <div className="absolute right-[16%] top-[34%] hidden gap-2 md:flex">
                            <span className="club-chip club-chip--cream h-6 w-6" />
                            <span className="club-chip club-chip--gold h-6 w-6" />
                            <span className="club-chip club-chip--burgundy h-6 w-6" />
                          </div>

                          <div className="absolute left-1/2 top-[50%] z-[2] w-[78%] max-w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,10,0.78),rgba(19,26,22,0.9))] px-4 py-5 text-center shadow-[0_18px_48px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:px-6">
                            <span className="club-pot__label">Main pot</span>
                            <strong className="club-display mt-2 block text-[2rem] text-[#fff2df]">$4,820</strong>
                            <div className="club-board mt-4">
                              {['A♦', 'K♠', '10♣', '7♦', '2♠'].map((card) => (
                                <div
                                  key={card}
                                  className={`luxury-card-face ${isRedCard(card) ? 'luxury-card-face--red' : ''}`}
                                >
                                  {card}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="absolute bottom-[24%] left-1/2 z-[2] flex -translate-x-1/2 gap-3">
                            {['A♠', 'Q♠'].map((card) => (
                              <div key={card} className="luxury-card-face">
                                {card}
                              </div>
                            ))}
                          </div>

                          <div className="absolute left-4 top-10 hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,10,0.72),rgba(17,22,19,0.84))] p-4 shadow-[0_14px_32px_rgba(0,0,0,0.28)] backdrop-blur-xl md:block">
                            <div className="club-label text-[#d7b57d]">Enter-ready</div>
                            <div className="mt-2 text-lg font-semibold text-[#fff1de]">{featuredTable.currentPlayers} of {featuredTable.maxPlayers} seated</div>
                            <div className="mt-2 text-sm text-[#ebdec9]/68">Exclusive room with instant player entry and clear table visibility.</div>
                          </div>

                          <div className="absolute right-4 top-12 hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,10,0.72),rgba(17,22,19,0.84))] p-4 shadow-[0_14px_32px_rgba(0,0,0,0.28)] backdrop-blur-xl lg:block">
                            <div className="club-label text-[#d7b57d]">Secure access</div>
                            <div className="mt-2 text-lg font-semibold text-[#fff1de]">{featuredTable.buyIn}</div>
                            <div className="mt-2 text-sm text-[#ebdec9]/68">{featuredTable.roomCode} · {featuredTable.spectators} watching live</div>
                          </div>

                          {heroSeats.map((seat) => (
                            <div
                              key={`${seat.label}-${seat.name}`}
                              className={`absolute z-[3] rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,14,12,0.94),rgba(4,7,6,0.92))] px-4 py-3 shadow-[0_16px_30px_rgba(0,0,0,0.34)] backdrop-blur-xl ${seat.className}`}
                            >
                              <span className="club-seat__status">{seat.label}</span>
                              <strong className="mt-3 block text-sm text-[#fff1df]">{seat.name}</strong>
                              <span className="mt-1 block text-xs text-[#eadcc8]/64">{seat.stack} behind</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="games" className="scroll-mt-28">
            <div className={`${sectionFrame} py-20 sm:py-24`}>
              <SectionIntro
                eyebrow="Game Preview"
                title="Choose the table style that matches your night."
                description="The homepage now leads with discovery: premium game cards, room personality, and a fast path into the live tables that fit your pace."
              />

              <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
                {gameShowcase.map((game) => (
                  <article
                    key={game.title}
                    className={`${surfacePanel} p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d3aa6d]/20`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="club-label text-[#d7b57d]">{game.subtitle}</div>
                        <h3 className="club-display mt-3 text-3xl text-[#fff3e4]">{game.title}</h3>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d3aa6d]/16 bg-[#d3aa6d]/10">
                        <Crown className="h-5 w-5 text-[#e2bb81]" />
                      </div>
                    </div>

                    <div className="mt-6 flex gap-3">
                      {game.cards.map((card) => (
                        <div
                          key={card}
                          className={`luxury-card-face ${isRedCard(card) ? 'luxury-card-face--red' : ''}`}
                        >
                          {card}
                        </div>
                      ))}
                    </div>

                    <p className="mt-6 text-sm leading-7 text-[#ecdccb]/72">{game.description}</p>
                    <p className="mt-4 text-sm leading-7 text-[#d8c3a2]">{game.detail}</p>

                    <div className="mt-6 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => openTableOrFallback(game.tableId, onOpenTable, onNavigate)}
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#f4d5a3] transition hover:text-[#ffe3ba]"
                      >
                        {game.tableId ? 'Enter a Table' : 'View Games'}
                        <ChevronRight className="h-4 w-4" />
                      </button>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.22em] text-[#eadcc9]/66">
                        Player pick
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="live-tables" className="scroll-mt-28">
            <div className={`${sectionFrame} py-20 sm:py-24`}>
              <SectionIntro
                eyebrow="Table Lobby"
                title="Browse the live floor before you commit to a room."
                description="The public homepage now surfaces the real player decision points first: game type, stakes, seat count, private room code, and the next step into access and table entry."
              />

              <div className="mt-10 grid gap-6 xl:grid-cols-[1.04fr_0.96fr]">
                <article className={`${surfacePanel} p-7 sm:p-8`}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="club-label text-[#d7b57d]">Featured table</div>
                      <h3 className="club-display mt-3 text-4xl text-[#fff3e4]">{featuredTable.name}</h3>
                      <p className="mt-4 max-w-2xl text-base leading-8 text-[#eadcca]/72">
                        {featuredTable.ambiance ?? 'A polished premium table with a private-room feel and direct player entry.'}
                      </p>
                    </div>
                    <StatusPill status={featuredTable.status} />
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {[
                      { label: 'Stakes', value: featuredTable.stakes },
                      { label: 'Buy-in', value: featuredTable.buyIn ?? 'Curated' },
                      { label: 'Table code', value: featuredTable.roomCode ?? 'Private room' }
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[22px] border border-white/10 bg-white/[0.04] px-5 py-4"
                      >
                        <div className="club-label text-[#d7b57d]">{item.label}</div>
                        <div className="mt-3 text-lg font-semibold text-[#fff1de]">{item.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,15,13,0.84),rgba(3,5,4,0.94))] p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="club-label text-[#d7b57d]">Current board preview</div>
                      <div className="text-sm text-[#eadcca]/66">
                        {featuredTable.currentPlayers}/{featuredTable.maxPlayers} seated · {featuredTable.spectators} observing
                      </div>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {['Q♠', 'J♦', '10♣', '4♣', '2♥'].map((card) => (
                        <div
                          key={card}
                          className={`luxury-card-face ${isRedCard(card) ? 'luxury-card-face--red' : ''}`}
                        >
                          {card}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => openTableOrFallback(featuredTable.id, onOpenTable, onNavigate)}
                      className={primaryButton}
                    >
                      Enter a Table
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onNavigate?.('lobby')}
                      className={secondaryButton}
                    >
                      View Games
                    </button>
                  </div>
                </article>

                <div className="space-y-5">
                  {sideTables.map((table) => (
                    <article key={table.id} className={`${surfacePanel} p-6`}>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="club-label text-[#d7b57d]">{table.gameType}</div>
                          <h3 className="mt-3 text-2xl font-semibold text-[#fff1df]">{table.name}</h3>
                          <p className="mt-3 text-sm leading-7 text-[#eadcca]/70">
                            {table.ambiance ?? 'A premium table preview with clean table-entry flow.'}
                          </p>
                        </div>
                        <StatusPill status={table.status} />
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {[table.stakes, table.buyIn ?? 'Curated buy-ins', `${table.currentPlayers}/${table.maxPlayers} seated`].map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[0.7rem] uppercase tracking-[0.2em] text-[#eadcca]/68"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex items-center justify-between gap-3">
                        <div className="text-sm text-[#eadcca]/66">{table.spectators} watching the table</div>
                        <button
                          type="button"
                          onClick={() => openTableOrFallback(table.id, onOpenTable, onNavigate)}
                          className="inline-flex items-center gap-2 rounded-full border border-[#d4b27c]/18 bg-[#d4b27c]/10 px-4 py-2.5 text-sm font-medium text-[#f4d5a3] transition hover:border-[#d4b27c]/28 hover:bg-[#d4b27c]/14 hover:text-[#ffe4bc]"
                        >
                          Enter a Table
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="access" className="scroll-mt-28">
            <div className={`${sectionFrame} py-20 sm:py-24`}>
              <SectionIntro
                eyebrow="Private Access"
                title="A short join step keeps table entry secure without slowing players down."
                description="After players choose a table, the public site routes them through one simple access moment: confirm alias, enter room code, and open the table UI."
              />

              <div className="mt-10 grid gap-6 xl:grid-cols-[0.98fr_1.02fr]">
                <div className="grid gap-6">
                  {accessJourney.map((step) => (
                    <article key={step.number} className={`${surfacePanel} p-6`}>
                      <div className="flex items-start gap-4">
                        <div className="club-display text-4xl text-[#f3d59f]">{step.number}</div>
                        <div>
                          <div className="text-2xl font-semibold text-[#fff1de]">{step.title}</div>
                          <p className="mt-3 text-sm leading-7 text-[#eadcca]/72">{step.description}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <article className={`${surfacePanel} p-7 sm:p-8`}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="club-label text-[#d7b57d]">Join private table</div>
                      <h3 className="mt-3 text-3xl text-[#fff1de]">The access screen is part of the player journey now.</h3>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d3aa6d]/16 bg-[#d3aa6d]/10">
                      <LockKeyhole className="h-6 w-6 text-[#e1bb83]" />
                    </div>
                  </div>

                  <div className="mt-8 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,10,0.72),rgba(20,18,16,0.88))] p-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        ['Player alias', 'Velvet Guest'],
                        ['Room code', featuredTable.roomCode ?? 'VR-205'],
                        ['Access code', 'CLUB-247'],
                        ['Next step', 'Enter table']
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4">
                          <div className="club-label text-[#d7b57d]">{label}</div>
                          <div className="mt-3 text-sm font-medium text-[#fff1de]">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => onNavigate?.('login')}
                      className={primaryButton}
                    >
                      Join Private Table
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onNavigate?.('lobby')}
                      className={secondaryButton}
                    >
                      View Games
                    </button>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section id="how-it-works" className="scroll-mt-28">
            <div className={`${sectionFrame} py-20 sm:py-24`}>
              <SectionIntro
                eyebrow="How It Works"
                title="A simple three-step path from first visit to first hand."
                description="The information architecture now follows the actual player flow: discover games, pass private access, and enter the table UI without friction."
              />

              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {howItWorks.map((step) => (
                  <article key={step.number} className={`${surfacePanel} p-7`}>
                    <div className="flex items-center justify-between gap-4">
                      <span className="club-display text-4xl text-[#f5d59f]">{step.number}</span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d3aa6d]/16 bg-[#d3aa6d]/10">
                        {step.number === '01' ? (
                          <WalletCards className="h-5 w-5 text-[#e1bb83]" />
                        ) : step.number === '02' ? (
                          <Eye className="h-5 w-5 text-[#e1bb83]" />
                        ) : (
                          <Clock3 className="h-5 w-5 text-[#e1bb83]" />
                        )}
                      </div>
                    </div>
                    <h3 className="mt-8 text-2xl font-semibold text-[#fff1df]">{step.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#eadcca]/72">{step.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="features" className="scroll-mt-28">
            <div className={`${sectionFrame} py-20 sm:py-24`}>
              <SectionIntro
                eyebrow="Why Players Stay"
                title="Trust, privacy, and smooth play wrapped in a luxury casino mood."
                description="The public site now behaves like a premium poker product: clear table discovery, secure access, and a polished handoff into play on every device."
              />

              <div className="mt-10 grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
                <div className="grid gap-6 md:grid-cols-2">
                  {trustCards.map((card) => (
                    <article key={card.title} className={`${surfacePanel} p-6`}>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d3aa6d]/16 bg-[#d3aa6d]/10">
                        <card.icon className="h-6 w-6 text-[#e1bb83]" />
                      </div>
                      <div className="mt-6">
                        <div className="club-label text-[#d7b57d]">{card.accent}</div>
                        <h3 className="mt-3 text-2xl font-semibold text-[#fff1de]">{card.title}</h3>
                        <p className="mt-4 text-sm leading-7 text-[#eadcca]/72">{card.description}</p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className={`${surfacePanel} p-7 sm:p-8`}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="club-label text-[#d7b57d]">Player confidence</div>
                      <h3 className="mt-3 text-3xl text-[#fff1de]">A premium room should feel calm, clear, and trusted.</h3>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d3aa6d]/16 bg-[#d3aa6d]/10">
                      <Users className="h-6 w-6 text-[#e1bb83]" />
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    {supportHighlights.map((item) => (
                      <div
                        key={item}
                        className="rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-4 text-sm leading-7 text-[#eadcca]/74"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-[28px] border border-[#d3aa6d]/14 bg-[linear-gradient(180deg,rgba(211,170,109,0.14),rgba(14,20,17,0.38))] p-6">
                    <div className="club-label text-[#d7b57d]">What players get immediately</div>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      {[
                        'Room atmosphere preview',
                        'Visible stakes and buy-ins',
                        'Clear enter-table buttons',
                        'Fast access-to-seat handoff'
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-[20px] border border-white/10 bg-black/18 px-4 py-4 text-sm text-[#f3e6d4]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="mobile" className="scroll-mt-28">
            <div className={`${sectionFrame} py-20 sm:py-24`}>
              <SectionIntro
                eyebrow="Mobile Flow"
                title="The full journey still feels premium on a phone."
                description="The public site is structured mobile-first: strong hero CTA, scannable game cards, a short private-access step, and a direct handoff into the table UI."
              />

              <div className="mt-10 grid gap-6 xl:grid-cols-[0.96fr_1.04fr]">
                <article className={`${surfacePanel} p-7 sm:p-8`}>
                  <div className="mx-auto max-w-[320px] rounded-[36px] border border-[#d3aa6d]/16 bg-[linear-gradient(180deg,rgba(8,12,10,0.92),rgba(16,14,12,0.96))] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.44)]">
                    <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-4">
                      <div className="club-label text-[#d7b57d]">Mobile preview</div>
                      <div className="mt-4 space-y-3">
                        {[
                          'Enter a Table',
                          'Browse live rooms',
                          'Add room code',
                          'Play instantly'
                        ].map((item, index) => (
                          <div
                            key={item}
                            className="flex items-center gap-3 rounded-[18px] border border-white/10 bg-white/[0.04] px-4 py-3"
                          >
                            <div className="club-display text-2xl text-[#f3d59f]">0{index + 1}</div>
                            <div className="text-sm text-[#fff1de]">{item}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>

                <div className="grid gap-6 md:grid-cols-3">
                  {mobileFlow.map((item) => (
                    <article key={item.title} className={`${surfacePanel} p-6`}>
                      <div className="club-label text-[#d7b57d]">Mobile step</div>
                      <h3 className="mt-4 text-2xl font-semibold text-[#fff1de]">{item.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-[#eadcca]/72">{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/6 bg-[#070908]/80">
          <div className={`${sectionFrame} py-12`}>
            <div className={`${surfacePanel} p-8`}>
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f1cf9b]/18 bg-[linear-gradient(180deg,rgba(44,69,54,0.96),rgba(13,20,17,0.96))]">
                      <Spade className="h-5 w-5 text-[#f2c585]" />
                    </div>
                    <div>
                      <div className="club-display text-2xl text-[#fff4e8]">The poker room</div>
                      <div className="mt-1 text-[0.68rem] uppercase tracking-[0.32em] text-[#d2ae73]/70">
                        Premium Player Lounge
                      </div>
                    </div>
                  </div>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-[#eadcca]/72">
                    A polished player-first landing experience for discovering premium poker tables, previewing the room, and moving smoothly from public browse to private access and live play.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {footerLinks.map((item) => (
                      <span key={item} className={subtlePill}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="club-label text-[#d7b57d]">Trust and support</div>
                  <div className="mt-5 space-y-4">
                    {[
                      'Invite-protected player access',
                      'Elegant live table previews before entry',
                      'Supportive, low-friction path into the lobby'
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-[#f0e2ce]/76"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="club-label text-[#d7b57d]">Next move</div>
                  <h3 className="mt-4 text-2xl font-semibold text-[#fff1df]">Find your table and step in.</h3>
                  <p className="mt-4 text-sm leading-7 text-[#eadcca]/72">
                    Player access stays simple on every screen, with a fast route to the table lobby and a premium first impression throughout.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => onNavigate?.('lobby')}
                      className={primaryButton}
                    >
                      Enter a Table
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onNavigate?.('login')}
                      className={secondaryButton}
                    >
                      Join Private Table
                    </button>
                  </div>
                  <p className="mt-5 text-xs uppercase tracking-[0.22em] text-[#bda884]/60">
                    Demo experience · Fake-money tables only
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
