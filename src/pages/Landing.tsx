import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  Ban,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Coins,
  Crown,
  Eye,
  EyeOff,
  Gauge,
  History,
  KeyRound,
  LayoutDashboard,
  Layers3,
  ListTodo,
  LockKeyhole,
  MessageSquareText,
  Monitor,
  Palette,
  Pause,
  Play,
  Radar,
  ScanEye,
  ScrollText,
  Settings2,
  ShieldCheck,
  Sparkles,
  Spade,
  UserRoundCheck,
  Users,
  Volume2,
  WalletCards,
  WifiOff
} from 'lucide-react';
import { demoTables } from '../data/demoTables';

type DemoDestination =
  | 'login'
  | 'register'
  | 'lobby'
  | 'table'
  | 'spectator'
  | 'admin-dashboard';

interface LandingProps {
  onNavigate?: (page: DemoDestination) => void;
}

interface NavItem {
  label: string;
  href: string;
}

interface FeatureCard {
  icon: LucideIcon;
  title: string;
  description: string;
  meta?: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Games', href: '#games' },
  { label: 'Features', href: '#features' },
  { label: 'Security', href: '#security' },
  { label: 'Spectator Mode', href: '#spectator-mode' },
  { label: 'Admin Control', href: '#admin-control' },
  { label: 'Chip Requests', href: '#chip-requests' },
  { label: 'Hand History', href: '#hand-history' },
  { label: 'Access', href: '#access' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' }
];

const heroStats = [
  { value: '5', label: 'Private-club game types' },
  { value: '3', label: 'All-in run options' },
  { value: '2-step', label: 'Invite and table access' },
  { value: 'Full', label: 'Host oversight on every hand' }
];

const gameModes = [
  {
    title: "Texas Hold'em",
    subtitle: 'Flagship private-club cash game',
    copy: 'Refined six-max and full-ring rooms with premium pacing, clean player actions, and live admin oversight.'
  },
  {
    title: 'Omaha',
    subtitle: 'Four-card depth with premium table control',
    copy: 'Structured for high-action tables, tailored blinds, host-enforced buy-ins, and exact pot tracking.'
  },
  {
    title: 'Double-Board Omaha',
    subtitle: 'Multi-board drama with replay-ready hand support',
    copy: 'Built to present two-board outcomes, split pots, and high-clarity post-hand review states.'
  },
  {
    title: 'Pineapple',
    subtitle: 'Private mixed-game flavor',
    copy: 'A club-style change of pace with curated rotations, admin-defined inclusion rules, and timer control.'
  },
  {
    title: 'Crazy Pineapple',
    subtitle: 'A premium mixed rotation staple',
    copy: 'Adds more texture to hosted sessions while staying visible in reporting, replay, and spectator workflows.'
  }
];

const specialFeatures: FeatureCard[] = [
  {
    icon: Sparkles,
    title: 'Bomb Pots',
    description: 'Enable standard or double-board bomb pots, set the frequency, and make them a defined part of the room identity.'
  },
  {
    icon: Layers3,
    title: 'Run It Once / Twice / Three Times',
    description: 'Present all-in run options cleanly with support for multi-board outcomes and replay-ready results.'
  },
  {
    icon: Eye,
    title: 'Spectator Mode',
    description: 'Allow observers to watch board cards and pot flow without exposing private player information.'
  },
  {
    icon: ListTodo,
    title: 'Waiting List',
    description: 'Keep premium rooms full with organized waitlists and admin-controlled player movement.'
  },
  {
    icon: Clock3,
    title: 'Action Timer',
    description: 'Per-player timing with visual urgency, auto-check, and auto-fold behaviors for hosted tables.'
  },
  {
    icon: WifiOff,
    title: 'Disconnection Protection',
    description: 'Reserve space for reconnect windows, seat protection logic, and clear auto-action handling.'
  },
  {
    icon: CircleDollarSign,
    title: 'Buy-In Limits',
    description: 'Set minimum and maximum buy-ins per room to keep stacks aligned with the host format.'
  },
  {
    icon: Settings2,
    title: 'Table Settings',
    description: 'Control blinds, speed, table size, spectator permissions, and room style from one premium console.'
  },
  {
    icon: History,
    title: 'Hand Replay',
    description: 'Replay boards, winner reveals, action sequences, and special-mode outcomes with polished clarity.'
  },
  {
    icon: WalletCards,
    title: 'Fake Chip Requests',
    description: 'Players start at zero, request chips, and receive admin-approved fake-money stacks throughout the session.'
  },
  {
    icon: ScanEye,
    title: 'Anti-Cheat Monitoring',
    description: 'Track unusual behavior, betting patterns, and full hand data with host-side visibility.'
  },
  {
    icon: LayoutDashboard,
    title: 'Live Admin Oversight',
    description: 'Supervisors monitor every hand, every seat, and every room state from a controlled dashboard.'
  }
];

const securitySteps = [
  {
    number: '01',
    title: 'Website security code',
    copy: 'Players enter the private platform through an invite-protected site access code before they ever see the lobby.',
    icon: LockKeyhole
  },
  {
    number: '02',
    title: 'Game or table code',
    copy: 'Individual rooms can require their own code for a second layer of curated, host-controlled entry.',
    icon: KeyRound
  },
  {
    number: '03',
    title: 'Admin-hosted approval flow',
    copy: 'Hosts control entry, remove spectators, and keep the environment limited to invited participants only.',
    icon: ShieldCheck
  }
];

const adminControls: FeatureCard[] = [
  {
    icon: Play,
    title: 'Start, pause, and stop tables',
    description: 'Control the entire session pace without leaving the host dashboard.'
  },
  {
    icon: Ban,
    title: 'Kick, mute, and ban players',
    description: 'Moderate player behavior immediately while preserving a premium room atmosphere.'
  },
  {
    icon: Spade,
    title: 'Set game type and mixed rotation',
    description: "Choose Hold'em, Omaha, Pineapple variants, or rotate them after a chosen hand count."
  },
  {
    icon: Gauge,
    title: 'Adjust blinds, table size, and buy-ins',
    description: 'Shape the table experience with exact room settings and stack controls.'
  },
  {
    icon: Eye,
    title: 'View all hole cards live',
    description: 'Hosts can inspect every seat for supervision, resolution, and anti-cheat purposes.'
  },
  {
    icon: Monitor,
    title: 'Monitor every action',
    description: 'Betting flow, chip state, spectator presence, and player activity stay visible in one place.'
  }
];

const chipFlow = [
  'Players enter with 0 chips in the room.',
  'A player submits a fake chip request to the host.',
  'Admin approves or denies the request.',
  'The player can request more chips later during the same session.'
];

const monitoringCards = [
  { label: 'Total rake', value: '$3,940', detail: 'Cross-room reporting' },
  { label: 'Rake by game', value: '5 modes', detail: 'Track by room format' },
  { label: 'Rake per session', value: '24 tables', detail: 'Session-level analysis' },
  { label: 'Hands played', value: '18,420', detail: 'Per player and per room' },
  { label: 'Chip transfers', value: '184', detail: 'Request and adjustment events' },
  { label: 'Suspicious events', value: '9', detail: 'Flagged for review' }
];

const faqItems = [
  {
    question: 'Is this built for real-money play?',
    answer: 'No. The landing page is positioned around a private, fake-money poker experience with host-managed chip approvals and premium room controls.'
  },
  {
    question: 'Can a host rotate games automatically?',
    answer: "Yes. The product messaging reflects mixed rotation support where the admin selects included games and sets the number of hands before the switch, such as 5 hands of Hold'em followed by 5 hands of Omaha."
  },
  {
    question: 'What do spectators see?',
    answer: 'Spectators can watch the community board, pot, and public action flow, but they do not see player hole cards. Admins can enable or remove spectators at any time.'
  },
  {
    question: 'Does the platform support oversight and anti-cheat review?',
    answer: 'Yes. The landing page communicates live host visibility, hole-card access for admins, hand history, replay support, suspicious activity logs, and full action timelines.'
  }
];

const accessTiers = [
  {
    title: 'Private Spectator Access',
    copy: 'Invite-only observation mode with public table data, no player hole cards, and host-enforced viewing permissions.'
  },
  {
    title: 'Player Seat Access',
    copy: 'A curated seat in a private room with controlled entry, fake chip approvals, action timers, and host-defined rules.'
  },
  {
    title: 'Admin Host Control',
    copy: 'Complete room authority with table settings, mixed rotation, oversight tools, chip approval, and reporting visibility.'
  }
];

const buttonPrimary =
  'inline-flex items-center justify-center gap-2 rounded-full border border-[#f4d5a3]/25 bg-[linear-gradient(180deg,#f0c98a_0%,#c58a4e_48%,#8e5b31_100%)] px-6 py-3 text-sm font-semibold tracking-[0.02em] text-[#1d1109] shadow-[0_16px_34px_rgba(157,98,46,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(157,98,46,0.45)]';

const buttonSecondary =
  'inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium tracking-[0.02em] text-[#f5ecdf] backdrop-blur-md transition duration-300 hover:border-[#d0a66a]/25 hover:bg-white/[0.08]';

const buttonAdmin =
  'inline-flex items-center justify-center gap-2 rounded-full border border-[#d4af77]/20 bg-[linear-gradient(180deg,rgba(211,170,109,0.18),rgba(96,44,27,0.42))] px-6 py-3 text-sm font-semibold tracking-[0.02em] text-[#f6ead7] shadow-[0_14px_32px_rgba(0,0,0,0.28)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[#e0bc87]/28 hover:bg-[linear-gradient(180deg,rgba(211,170,109,0.24),rgba(112,52,31,0.5))]';

const sectionSurface =
  'relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(28,10,14,0.86),rgba(9,4,7,0.96))] shadow-[0_24px_90px_rgba(0,0,0,0.42)] backdrop-blur-2xl';

const sectionFrame = 'mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8';

const sectionPadding = 'py-20 sm:py-24';

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
    <div className="max-w-[780px]">
      <span className="club-label text-[#d9b57a]">{eyebrow}</span>
      <h2 className="club-display mt-4 text-4xl text-[#fbf4eb] sm:text-5xl">{title}</h2>
      <p className="mt-5 max-w-[720px] text-base leading-8 text-[#e7d9c7]/74 sm:text-lg">{description}</p>
    </div>
  );
}

export default function Landing({ onNavigate }: LandingProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#060204] text-[#f5ebdc]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,211,142,0.12),transparent_18%),radial-gradient(circle_at_15%_20%,rgba(121,23,39,0.22),transparent_22%),radial-gradient(circle_at_85%_18%,rgba(119,78,42,0.18),transparent_22%),linear-gradient(180deg,#110508_0%,#070203_30%,#050203_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[760px] bg-[linear-gradient(90deg,rgba(44,8,15,0.65),transparent_16%,transparent_84%,rgba(44,8,15,0.65))]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,216,154,0.16),rgba(255,216,154,0.03)_38%,transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute inset-0 opacity-30 luxury-noise" />

      <nav className="sticky top-0 z-40 border-b border-white/6 bg-[#120609]/78 backdrop-blur-2xl">
        <div className={`${sectionFrame} flex items-center gap-4 py-4`}>
          <a href="#home" className="flex items-center gap-3 whitespace-nowrap">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f1cf9b]/20 bg-[linear-gradient(180deg,rgba(125,53,37,0.96),rgba(50,16,14,0.96))] shadow-[0_12px_28px_rgba(0,0,0,0.38)]">
              <Spade className="h-5 w-5 text-[#f2c585]" />
            </div>
            <div>
              <div className="club-display text-2xl leading-none text-[#fff4e8]">The poker room</div>
              <div className="mt-1 text-[0.68rem] uppercase tracking-[0.34em] text-[#d2ae73]/70">
                Private Poker Club
              </div>
            </div>
          </a>

          <div className="hide-scrollbar flex-1 overflow-x-auto">
            <div className="mx-4 flex min-w-max items-center gap-1 rounded-full border border-white/8 bg-white/[0.03] p-1.5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-[#e9dcc9]/76 transition hover:bg-white/[0.06] hover:text-[#fff2df]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <button type="button" onClick={() => onNavigate?.('login')} className="hidden lg:inline-flex rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium tracking-[0.02em] text-[#f5ecdf] backdrop-blur-md transition duration-300 hover:border-[#d0a66a]/25 hover:bg-white/[0.08]">
              Login
            </button>
            <button
              type="button"
              onClick={() => onNavigate?.('admin-dashboard')}
              className={`${buttonAdmin} h-11 w-11 px-0 sm:hidden`}
              aria-label="Admin Access"
            >
              <LayoutDashboard className="h-4 w-4" />
            </button>
            <button type="button" onClick={() => onNavigate?.('admin-dashboard')} className={`hidden sm:inline-flex ${buttonAdmin}`}>
              <LayoutDashboard className="h-4 w-4" />
              Admin Access
            </button>
            <button type="button" onClick={() => onNavigate?.('lobby')} className={`${buttonPrimary} px-5 py-2.5 sm:px-6 sm:py-3`}>
              Join Table
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <section id="home" className="scroll-mt-28">
          <div className={`${sectionFrame} pb-20 pt-10 sm:pb-24 lg:pt-14`}>
            <div className="grid items-center gap-8 xl:grid-cols-[minmax(0,470px)_minmax(0,1fr)] xl:gap-12">
              <div className="relative z-10">
                <span className="club-label text-[#d6b078]">Invite-Protected Poker Platform</span>
                <h1 className="club-display mt-5 max-w-[10ch] text-5xl leading-[0.92] text-[#fff4e8] sm:text-6xl lg:text-7xl">
                  Luxury poker rooms with real private-club presence.
                </h1>
                <p className="mt-6 max-w-xl text-base leading-8 text-[#eadbc8]/74 sm:text-lg">
                  A cinematic multi-game poker platform designed for admin-hosted private tables, mixed rotations,
                  spectator controls, replay-ready sessions, fake chip management, and elegant live oversight.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button type="button" onClick={() => onNavigate?.('lobby')} className={buttonPrimary}>
                    Enter Platform
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <a href="#features" className={buttonSecondary}>
                    View Features
                  </a>
                  <button type="button" onClick={() => onNavigate?.('admin-dashboard')} className={buttonSecondary}>
                    Host a Table
                  </button>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {['Fake money only', 'Mixed-game ready', 'Spectator controlled', 'Admin approval flow'].map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-[#d1aa71]/12 bg-[#f8e6c1]/[0.04] px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#dec08f]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {heroStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-5 py-5 shadow-[0_18px_40px_rgba(0,0,0,0.25)] backdrop-blur-md"
                    >
                      <div className="club-display text-3xl text-[#fff1dd]">{stat.value}</div>
                      <div className="mt-2 text-sm leading-6 text-[#eddcc9]/68">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={sectionSurface}>
                <div className="club-stage relative isolate overflow-hidden rounded-[32px] p-4 sm:p-6 lg:p-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,221,168,0.18),transparent_24%),linear-gradient(180deg,rgba(46,11,17,0.22),rgba(7,3,4,0.2))]" />
                  <div className="absolute inset-y-0 left-0 w-16 bg-[linear-gradient(90deg,rgba(65,12,19,0.88),transparent)] sm:w-24" />
                  <div className="absolute inset-y-0 right-0 w-16 bg-[linear-gradient(270deg,rgba(65,12,19,0.88),transparent)] sm:w-24" />
                  <div className="club-chandelier left-[18%]" />
                  <div className="club-chandelier left-1/2 -translate-x-1/2" />
                  <div className="club-chandelier right-[18%]" />

                  <div className="relative z-10 mx-auto max-w-[980px] pt-12 sm:pt-16 lg:pt-20">
                    <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-full border border-white/8 bg-black/20 px-4 py-3 backdrop-blur-xl">
                      <div className="flex items-center gap-3 text-sm text-[#eadcca]/78">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#d3a05d] shadow-[0_0_18px_rgba(214,161,85,0.7)]" />
                        The poker room Table 7
                      </div>
                      <div className="flex flex-wrap gap-2 text-[0.72rem] uppercase tracking-[0.22em] text-[#d7b27d]">
                        <span className="rounded-full border border-[#d7b27d]/14 bg-[#d7b27d]/10 px-3 py-1.5">
                          Double-board ready
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[#f6eadd]/78">
                          Admin hosted
                        </span>
                      </div>
                    </div>

                    <div className="club-table">
                      <div className="club-table__ground" />
                      <div className="club-table__underside" />
                      <div className="club-table__rail" />
                      <div className="club-table__trim" />
                      <div className="club-table__felt">
                        <div className="club-table__brand">
                          <span>The poker room</span>
                          <strong>Bomb pot in 3 hands</strong>
                        </div>

                        <div className="club-chip-stack club-chip-stack--left">
                          <span className="club-chip club-chip--gold" />
                          <span className="club-chip club-chip--cream" />
                          <span className="club-chip club-chip--burgundy" />
                        </div>
                        <div className="club-chip-stack club-chip-stack--right">
                          <span className="club-chip club-chip--cream" />
                          <span className="club-chip club-chip--gold" />
                          <span className="club-chip club-chip--burgundy" />
                        </div>

                        <div className="club-pot">
                          <span className="club-pot__label">Main pot</span>
                          <strong>$4,820</strong>
                          <div className="club-board">
                            <div className="luxury-card-face luxury-card-face--red">A♦</div>
                            <div className="luxury-card-face">K♠</div>
                            <div className="luxury-card-face">Q♣</div>
                            <div className="luxury-card-face luxury-card-face--red">8♥</div>
                            <div className="luxury-card-face">3♠</div>
                          </div>
                        </div>

                        <div className="club-pocket">
                          <div className="luxury-card-face luxury-card-face--red">A♥</div>
                          <div className="luxury-card-face">A♠</div>
                        </div>

                        <div className="club-dealer">D</div>
                      </div>

                      <div className="club-seat club-seat--top-left">
                        <span className="club-seat__status">UTG</span>
                        <strong>Marble Ace</strong>
                        <span>$6,240 behind</span>
                      </div>
                      <div className="club-seat club-seat--top-center">
                        <span className="club-seat__status">HJ</span>
                        <strong>Noir River</strong>
                        <span>$3,920 behind</span>
                      </div>
                      <div className="club-seat club-seat--top-right">
                        <span className="club-seat__status">CO</span>
                        <strong>Velvet Stack</strong>
                        <span>$7,180 behind</span>
                      </div>
                      <div className="club-seat club-seat--bottom-left">
                        <span className="club-seat__status">SB</span>
                        <strong>Chateau Pair</strong>
                        <span>$2,880 behind</span>
                      </div>
                      <div className="club-seat club-seat--bottom-center club-seat--hero">
                        <span className="club-seat__status">Button</span>
                        <strong>You</strong>
                        <span>$5,400 behind</span>
                      </div>
                      <div className="club-seat club-seat--bottom-right">
                        <span className="club-seat__status">BB</span>
                        <strong>Guild Room</strong>
                        <span>$4,600 behind</span>
                      </div>
                    </div>

                    <div className="mt-8 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                      <div className="rounded-[28px] border border-white/10 bg-[#1a0b10]/70 p-5 shadow-[0_14px_36px_rgba(0,0,0,0.28)] backdrop-blur-md">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <div className="club-label text-[#d5b07b]">Player Interface</div>
                            <div className="mt-2 text-lg font-semibold text-[#fff2de]">Private seat controls only</div>
                          </div>
                          <div className="rounded-full border border-[#d5b07b]/15 bg-[#d5b07b]/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-[#d5b07b]">
                            Seat view
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {['Hole cards', 'Board', 'Pot size', 'Fold / Check / Bet / Raise', 'Chat', 'Chip count'].map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-[#f0e2ce]/74"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-[28px] border border-white/10 bg-[#1a0b10]/70 p-5 shadow-[0_14px_36px_rgba(0,0,0,0.28)] backdrop-blur-md">
                        <div className="club-label text-[#d5b07b]">Host Monitoring</div>
                        <div className="mt-3 flex items-center justify-between gap-4">
                          <div>
                            <div className="text-lg font-semibold text-[#fff2de]">Full room visibility</div>
                            <p className="mt-2 text-sm leading-6 text-[#f0e2ce]/70">
                              Hole cards, suspicious actions, chip requests, table settings, and rake stay visible to the host.
                            </p>
                          </div>
                          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d5b07b]/18 bg-[#d5b07b]/10">
                            <ScanEye className="h-7 w-7 text-[#e4bd86]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="games" className="scroll-mt-28">
          <div className={`${sectionFrame} ${sectionPadding}`}>
            <SectionIntro
              eyebrow="Games and Rotation"
              title="Hosted game menus built for private cash sessions."
              description="Every room can be shaped around a single identity or rotated across multiple formats, keeping the experience premium, controlled, and visibly curated by the host."
            />

            <div className="mt-10 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {gameModes.map((game) => (
                  <article
                    key={game.title}
                    className={`${sectionSurface} p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c79a5f]/22`}
                  >
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#c79a5f]/15 bg-[#c79a5f]/10">
                        <Crown className="h-5 w-5 text-[#e2ba81]" />
                      </div>
                      <div className="club-label text-[#cfaa72]">Game Mode</div>
                    </div>
                    <h3 className="club-display text-3xl text-[#fff3e3]">{game.title}</h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[#cfaa72]/80">{game.subtitle}</p>
                    <p className="mt-5 text-sm leading-7 text-[#eadbc9]/72">{game.copy}</p>
                  </article>
                ))}
              </div>

              <article className={`${sectionSurface} p-7 sm:p-8`}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="club-label text-[#d4af77]">Mixed Game Rotation</span>
                    <h3 className="club-display mt-4 text-4xl text-[#fff4e6]">One room, multiple game identities.</h3>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af77]/16 bg-[#d4af77]/10">
                    <Layers3 className="h-6 w-6 text-[#e7c38d]" />
                  </div>
                </div>

                <p className="mt-5 max-w-2xl text-base leading-8 text-[#eddcca]/72">
                  The admin chooses which games are in rotation and exactly how many hands are played before the switch.
                  Example: 5 hands of Hold'em, then 5 hands of Omaha, before moving into a Pineapple segment for the same private table.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    ["Texas Hold'em", '5 hands', 'Classic opener with full table tone-setting'],
                    ['Omaha', '5 hands', 'High-action middle rotation with bigger pots'],
                    ['Crazy Pineapple', '3 hands', 'Feature segment for curated private-room energy']
                  ].map(([mode, hands, copy]) => (
                    <div
                      key={mode}
                      className="flex flex-col gap-3 rounded-[24px] border border-white/10 bg-white/[0.04] p-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <div className="text-lg font-semibold text-[#fff1df]">{mode}</div>
                        <div className="mt-1 text-sm text-[#eadcc9]/66">{copy}</div>
                      </div>
                      <div className="flex items-center gap-2 text-[#dbb57d]">
                        <span className="rounded-full border border-[#dbb57d]/16 bg-[#dbb57d]/10 px-4 py-2 text-xs uppercase tracking-[0.22em]">
                          {hands}
                        </span>
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="features" className="scroll-mt-28">
          <div className={`${sectionFrame} ${sectionPadding}`}>
            <SectionIntro
              eyebrow="Special Features"
              title="A premium room stack built for hosted, high-clarity poker sessions."
              description="The platform message goes beyond standard table play. It communicates the operational details a serious private club expects: configurable formats, oversight, timing, replay, and host-run table discipline."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {specialFeatures.map((feature) => (
                <article
                  key={feature.title}
                  className={`${sectionSurface} p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d3aa6d]/22`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d3aa6d]/15 bg-[#d3aa6d]/10">
                    <feature.icon className="h-6 w-6 text-[#e1bc84]" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-[#fff1df]">{feature.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#ecdccb]/72">{feature.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[0.98fr_1.02fr]">
              <article className={`${sectionSurface} p-7 sm:p-8`}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="club-label text-[#d6b078]">Room Experience Controls</div>
                    <h3 className="mt-3 text-2xl font-semibold text-[#fff1de]">Sound, auto rebuy, and table personalization stay presentation-ready.</h3>
                  </div>
                  <span className="rounded-full border border-[#d4af77]/16 bg-[#d4af77]/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#ddb985]">
                    Demo presentation
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d3aa6d]/16 bg-[#d3aa6d]/10">
                          <Volume2 className="h-6 w-6 text-[#e1bb83]" />
                        </div>
                        <div>
                          <div className="text-xl font-semibold text-[#fff1de]">Sound Effects</div>
                          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#eadcc9]/72">
                            Present polished chip betting clicks, card dealing sounds, timer warning beeps, and winning-pot cues as part of the premium room atmosphere.
                          </p>
                        </div>
                      </div>
                      <div className="rounded-full border border-[#d3aa6d]/16 bg-[#d3aa6d]/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#ddb985]">
                        Sound on
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {['Chip betting sound', 'Card dealing sound', 'Timer warning beep', 'Winning pot sound'].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-black/18 px-3 py-2 text-xs text-[#f0e2ce]/74"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 rounded-[20px] border border-white/10 bg-black/18 px-4 py-4">
                      <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-[#eadcc8]/66">
                        <span>Volume profile</span>
                        <span>72%</span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-white/[0.08]">
                        <div className="h-2 w-[72%] rounded-full bg-[linear-gradient(90deg,#f0c98a,#a86739)]" />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d3aa6d]/16 bg-[#d3aa6d]/10">
                            <Coins className="h-5 w-5 text-[#e1bb83]" />
                          </div>
                          <div>
                            <div className="text-lg font-semibold text-[#fff1de]">Auto Rebuy Option</div>
                            <p className="mt-2 text-sm leading-7 text-[#eadcc9]/72">
                              If a stack drops below 500 chips, the interface can prepare an automatic rebuy request while the host still approves every fake-money top-up.
                            </p>
                          </div>
                        </div>
                        <div className="rounded-full border border-[#d3aa6d]/16 bg-[#d3aa6d]/10 px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-[#ddb985]">
                          Enabled
                        </div>
                      </div>

                      <div className="mt-5 flex items-center justify-between rounded-[18px] border border-white/10 bg-black/18 px-4 py-3 text-sm text-[#eadcc9]/72">
                        <span>Rebuy trigger</span>
                        <span className="font-medium text-[#fff1de]">Below 500 chips</span>
                      </div>
                    </div>

                    <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d3aa6d]/16 bg-[#d3aa6d]/10">
                            <Palette className="h-5 w-5 text-[#e1bb83]" />
                          </div>
                          <div>
                            <div className="text-lg font-semibold text-[#fff1de]">Table Themes</div>
                            <p className="mt-2 text-sm leading-7 text-[#eadcc9]/72">
                              Hosts can preview table color, card styling, and chip design variations while the current luxury burgundy identity remains the flagship theme.
                            </p>
                          </div>
                        </div>
                        <div className="rounded-full border border-[#d3aa6d]/16 bg-[#d3aa6d]/10 px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-[#ddb985]">
                          Theme preview
                        </div>
                      </div>

                      <div className="mt-5 flex items-center gap-2">
                        {['#42111b', '#1e4a3c', '#19181d'].map((tone) => (
                          <span
                            key={tone}
                            className="h-10 w-10 rounded-full border border-white/10 shadow-[0_10px_18px_rgba(0,0,0,0.3)]"
                            style={{ background: tone }}
                          />
                        ))}
                      </div>
                      <div className="mt-4 rounded-[18px] border border-white/10 bg-black/18 px-4 py-3 text-sm text-[#eadcc9]/72">
                        Future implementation: backend theme persistence and room-level asset switching.
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className={`${sectionSurface} p-7 sm:p-8`}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="club-label text-[#d6b078]">Multiple Games at Once</div>
                    <h3 className="mt-3 text-2xl font-semibold text-[#fff1de]">The floor can host parallel rooms without losing the premium tone.</h3>
                  </div>
                  <span className="rounded-full border border-[#d3aa6d]/16 bg-[#d3aa6d]/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#ddb985]">
                    {demoTables.length} room program
                  </span>
                </div>

                <p className="mt-5 max-w-2xl text-sm leading-8 text-[#eadcc9]/72">
                  Lobby cards, admin telemetry, and direct table entry are all framed to show that Hold'em, Omaha, Double-Board Omaha, and Pineapple variants can run simultaneously as part of one hosted club environment.
                </p>

                <div className="mt-6 space-y-3">
                  {demoTables.slice(0, 4).map((table) => (
                    <div key={table.id} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <div className="text-lg font-semibold text-[#fff1de]">{table.name}</div>
                          <div className="mt-1 text-xs uppercase tracking-[0.2em] text-[#d4af77]/76">{table.gameType}</div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full border border-white/10 bg-black/18 px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-[#eadcc8]/72">
                            {table.status}
                          </span>
                          <span className="rounded-full border border-[#d3aa6d]/16 bg-[#d3aa6d]/10 px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-[#ddb985]">
                            {table.currentPlayers}/{table.maxPlayers} seated
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center justify-between gap-3 text-sm text-[#eadcc8]/66">
                        <span>{table.bombPot}</span>
                        <span>{table.spectators} spectators</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-[22px] border border-[#d3aa6d]/14 bg-[#d3aa6d]/10 px-4 py-4 text-sm leading-7 text-[#f1e4d2]/80">
                  Demo preview: future backend hook for cross-table orchestration, room balancing, and simultaneous live game monitoring.
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="security" className="scroll-mt-28">
          <div className={`${sectionFrame} ${sectionPadding}`}>
            <div className="grid gap-6 xl:grid-cols-[0.96fr_1.04fr]">
              <article className={`${sectionSurface} p-7 sm:p-8`}>
                <SectionIntro
                  eyebrow="Security and Access"
                  title="Private entry designed like a hosted room, not an open lobby."
                  description="Access is intentionally layered so the environment feels curated, secure, and controlled by the host from the first step."
                />

                <div className="mt-8 space-y-4">
                  {securitySteps.map((step) => (
                    <div
                      key={step.number}
                      className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] p-5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#d4af77]/14 bg-[#d4af77]/10">
                          <step.icon className="h-6 w-6 text-[#e7c38d]" />
                        </div>
                        <div>
                          <div className="club-label text-[#d6b078]">{step.number}</div>
                          <h3 className="mt-2 text-2xl font-semibold text-[#fff2e0]">{step.title}</h3>
                          <p className="mt-3 text-sm leading-7 text-[#eadbc8]/70">{step.copy}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <article className={`${sectionSurface} p-7 sm:p-8`}>
                <div className="club-label text-[#d6b078]">Protected Entry Flow</div>
                <h3 className="club-display mt-4 text-4xl text-[#fff4e6]">A secure route into every private game.</h3>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[#eadbc8]/72">
                  The landing experience communicates a deliberate two-stage entry model: first the platform invite, then the room-level gate. That keeps the product aligned with a private-club tone instead of a mass-market casino lobby.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {[
                    {
                      title: 'Website code accepted',
                      copy: 'Verified users reach the curated platform shell.',
                      icon: UserRoundCheck
                    },
                    {
                      title: 'Table code approved',
                      copy: 'Hosts limit access to the specific room or session.',
                      icon: ShieldCheck
                    },
                    {
                      title: 'Spectator permission',
                      copy: 'Observers enter only if the host allows public viewing.',
                      icon: Eye
                    },
                    {
                      title: 'Admin override',
                      copy: 'The host can remove or block access at any point.',
                      icon: Crown
                    }
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] p-5"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d4af77]/14 bg-[#d4af77]/10">
                        <item.icon className="h-5 w-5 text-[#e6bf87]" />
                      </div>
                      <h4 className="mt-4 text-lg font-semibold text-[#fff2df]">{item.title}</h4>
                      <p className="mt-2 text-sm leading-7 text-[#eadbc8]/70">{item.copy}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="admin-control" className="scroll-mt-28">
          <div className={`${sectionFrame} ${sectionPadding}`}>
            <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
              <article className={`${sectionSurface} overflow-hidden p-7 sm:p-8`}>
                <div className="club-label text-[#d6b078]">Admin Control Panel</div>
                <h3 className="club-display mt-4 text-4xl text-[#fff3e3]">The host runs the room with total authority.</h3>
                <p className="mt-5 max-w-xl text-base leading-8 text-[#eadbc9]/72">
                  This is not a passive table. The landing page frames the product as an operator-led poker environment where room settings, access, gameplay modes, and moderation are all controlled from one premium console.
                </p>

                <div className="mt-8 rounded-[30px] border border-white/10 bg-[#12070a]/90 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="text-lg font-semibold text-[#fff2df]">Floor dashboard</div>
                      <div className="mt-1 text-sm text-[#eadcc8]/68">Table 07 • Mixed rotation • Invite only</div>
                    </div>
                    <span className="rounded-full border border-[#d2ab72]/18 bg-[#d2ab72]/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#ddb985]">
                      Live control
                    </span>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
                      <div className="club-label text-[#d3ad75]">Table Modes</div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {['Hold\'em', 'Omaha', 'Bomb pot', 'Run twice', '6-max'].map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs text-[#f0e1cf]/74"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
                      <div className="club-label text-[#d3ad75]">Host Actions</div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {['Pause', 'Kick', 'Mute', 'Approve chips', 'Reveal review'].map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs text-[#f0e1cf]/74"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {[
                      ['Table status', 'High Tide Hold\'em • Running'],
                      ['Blinds', '$2 / $5 • Min 500 • Max 2,000'],
                      ['Run options', 'Run once, twice, or three times when valid'],
                      ['Surveillance', 'All hole cards visible to the host dashboard']
                    ].map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between gap-4 rounded-[18px] border border-white/8 bg-black/18 px-4 py-3">
                        <span className="text-sm text-[#eadcc8]/60">{label}</span>
                        <span className="text-sm font-medium text-[#fff1de]">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
                {adminControls.map((item) => (
                  <article key={item.title} className={`${sectionSurface} p-6`}>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d3aa6d]/16 bg-[#d3aa6d]/10">
                      <item.icon className="h-6 w-6 text-[#e1ba82]" />
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-[#fff1df]">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#eadbc9]/72">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="chip-requests" className="scroll-mt-28">
          <div className={`${sectionFrame} ${sectionPadding}`}>
            <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
              <article className={`${sectionSurface} p-7 sm:p-8`}>
                <SectionIntro
                  eyebrow="Chip Request Flow"
                  title="Fake-money chip handling with admin approval at every stage."
                  description="The platform message makes it clear that chips are not preloaded. Players begin at zero, request a stack, and can request additional fake chips later during the same room session."
                />

                <div className="mt-8 space-y-4">
                  {chipFlow.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-[24px] border border-white/10 bg-white/[0.04] p-4"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#d3aa6d]/16 bg-[#d3aa6d]/10 text-sm font-semibold text-[#e3be87]">
                        {index + 1}
                      </div>
                      <p className="pt-2 text-sm leading-7 text-[#eadcc9]/72">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[28px] border border-[#d3aa6d]/14 bg-[#d3aa6d]/10 p-5">
                  <div className="club-label text-[#d5b07b]">Important</div>
                  <p className="mt-3 text-sm leading-7 text-[#f0e3d1]/82">
                    All chips shown in this product framing are fake money only. The landing page communicates a hosted
                    club tool, not a public real-money casino.
                  </p>
                </div>
              </article>

              <article className={`${sectionSurface} p-7 sm:p-8`}>
                <div className="club-label text-[#d6b078]">Approval Console</div>
                <h3 className="club-display mt-4 text-4xl text-[#fff4e6]">Hosts approve, deny, add, or remove chips in-room.</h3>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[#eadbc9]/72">
                  The design language here mirrors a premium operations workflow. Requests feel controlled, intentional,
                  and visible, rather than an automatic wallet mechanic.
                </p>

                <div className="mt-8 grid gap-4">
                  {[
                    ['REQ-1042', 'Marble Ace', '$500', 'Pending', 'Approve / Deny'],
                    ['REQ-1043', 'Guild Room', '$1,000', 'Review', 'Escalate / Hold'],
                    ['REQ-1044', 'You', '$300', 'Approved', 'Delivered']
                  ].map(([request, player, amount, status, action]) => (
                    <div
                      key={request}
                      className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5"
                    >
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                          <div className="club-label text-[#d5b07b]">{request}</div>
                          <div className="mt-2 text-2xl font-semibold text-[#fff1df]">{player}</div>
                          <div className="mt-2 text-sm text-[#eadcc8]/66">Requested amount: {amount}</div>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full border border-[#d5b07b]/16 bg-[#d5b07b]/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#ddb985]">
                            {status}
                          </span>
                          <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#f0e2ce]/74">
                            {action}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="hand-history" className="scroll-mt-28">
          <div className={`${sectionFrame} ${sectionPadding}`}>
            <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
              <article className={`${sectionSurface} p-7 sm:p-8`}>
                <div className="club-label text-[#d6b078]">Hand History and Replay</div>
                <h3 className="club-display mt-4 text-4xl text-[#fff3e4]">Every meaningful hand can be replayed with clarity.</h3>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[#eadbc9]/72">
                  Boards, hole cards, action order, winners, pot outcomes, and special-mode logic are all represented as part of the landing page narrative. The result feels like a premium review tool, not a basic log dump.
                </p>

                <div className="mt-8 rounded-[30px] border border-white/10 bg-[#12070a]/90 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="text-lg font-semibold text-[#fff1de]">Hand #948220</div>
                      <div className="mt-1 text-sm text-[#eadcc8]/66">High Tide Hold'em • Replay mode</div>
                    </div>
                    <div className="flex gap-2">
                      <span className="rounded-full border border-[#d4af77]/16 bg-[#d4af77]/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#ddb985]">
                        Bomb pot
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#f1e2cf]/76">
                        Run twice
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {['A♦', 'K♠', '8♣', '8♥', '2♠'].map((card) => (
                      <div
                        key={card}
                        className={`luxury-card-face ${card.includes('♦') || card.includes('♥') ? 'luxury-card-face--red' : ''}`}
                      >
                        {card}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
                      <div className="club-label text-[#d4af77]">Winning hole cards</div>
                      <div className="mt-4 flex gap-3">
                        <div className="luxury-card-face luxury-card-face--red">A♥</div>
                        <div className="luxury-card-face">A♣</div>
                      </div>
                    </div>
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
                      <div className="club-label text-[#d4af77]">Action timeline</div>
                      <div className="mt-4 space-y-3 text-sm text-[#eadcc9]/72">
                        <div>Preflop: raise, call, call</div>
                        <div>Flop: check, bet, call</div>
                        <div>Turn: bet, fold</div>
                        <div>River: showdown and winner reveal</div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className={`${sectionSurface} p-7 sm:p-8`}>
                <div className="club-label text-[#d6b078]">Replay Support</div>
                <h3 className="club-display mt-4 text-4xl text-[#fff4e7]">Designed to support special modes without losing clarity.</h3>
                <div className="mt-6 grid gap-4">
                  {[
                    ['Board cards', 'Show all public cards in sequence and final state'],
                    ['Hole cards', 'Admin-visible, replay-visible, spectator-hidden where required'],
                    ['Pot logic', 'Surface main pots, side pots, and split outcomes clearly'],
                    ['Special modes', 'Supports bomb pots, double-board play, and repeated all-in runs']
                  ].map(([title, copy]) => (
                    <div key={title} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                      <div className="text-lg font-semibold text-[#fff1de]">{title}</div>
                      <p className="mt-2 text-sm leading-7 text-[#eadcc9]/72">{copy}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="spectator-mode" className="scroll-mt-28">
          <div className={`${sectionFrame} ${sectionPadding}`}>
            <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
              <article className={`${sectionSurface} p-7 sm:p-8`}>
                <SectionIntro
                  eyebrow="Spectator Mode"
                  title="Public table visibility without private hole-card exposure."
                  description="Spectators can watch the room unfold, see the board, read the pot, and follow the action arc without compromising the privacy of active players."
                />

                <div className="mt-8 grid gap-4">
                  {[
                    ['Visible', 'Board cards, pot size, public action, player seats'],
                    ['Hidden', 'Player hole cards and private decision prompts'],
                    ['Admin control', 'Hosts can enable, disable, or remove spectators in real time']
                  ].map(([title, copy]) => (
                    <div key={title} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                      <div className="text-lg font-semibold text-[#fff2df]">{title}</div>
                      <p className="mt-2 text-sm leading-7 text-[#eadcc9]/72">{copy}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className={`${sectionSurface} p-7 sm:p-8`}>
                <div className="club-label text-[#d6b078]">Public Table View</div>
                <h3 className="club-display mt-4 text-4xl text-[#fff4e7]">Spectators see the room, not the secrets.</h3>

                <div className="mt-8 rounded-[30px] border border-white/10 bg-[#12070a]/92 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="text-lg font-semibold text-[#fff2df]">Featured table broadcast</div>
                    <span className="rounded-full border border-[#d2ab72]/16 bg-[#d2ab72]/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#ddb985]">
                      Spectator enabled
                    </span>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                      <div className="club-label text-[#d4af77]">Board and pot</div>
                      <div className="mt-4 flex flex-wrap gap-3">
                        {['Q♠', 'Q♥', '9♣', '4♦', '3♠'].map((card) => (
                          <div
                            key={card}
                            className={`luxury-card-face ${card.includes('♥') || card.includes('♦') ? 'luxury-card-face--red' : ''}`}
                          >
                            {card}
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 rounded-[20px] border border-[#d4af77]/16 bg-[#d4af77]/10 px-4 py-4 text-sm text-[#f4e7d2]">
                        Main pot visible: $1,920
                      </div>
                    </div>
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                      <div className="club-label text-[#d4af77]">Private cards blocked</div>
                      <div className="mt-4 flex gap-3">
                        <div className="luxury-card-face luxury-card-face--back">?</div>
                        <div className="luxury-card-face luxury-card-face--back">?</div>
                      </div>
                      <div className="mt-5 flex items-center gap-3 rounded-[20px] border border-white/10 bg-black/18 px-4 py-4 text-sm text-[#eadcc8]/74">
                        <EyeOff className="h-5 w-5 text-[#d8af74]" />
                        Hole cards remain hidden from spectators.
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="monitoring" className="scroll-mt-28">
          <div className={`${sectionFrame} ${sectionPadding}`}>
            <SectionIntro
              eyebrow="Stats and Monitoring"
              title="Operational reporting built into the room story."
              description="The platform positioning covers more than cards on felt. It shows the host what happened at the table, how the room performed, and where any suspicious or unusual patterns deserve attention."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {monitoringCards.map((card) => (
                <article key={card.label} className={`${sectionSurface} p-6`}>
                  <div className="club-label text-[#d4af77]">{card.label}</div>
                  <div className="club-display mt-4 text-4xl text-[#fff3e1]">{card.value}</div>
                  <p className="mt-4 text-sm leading-7 text-[#eadcc9]/72">{card.detail}</p>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
              <article className={`${sectionSurface} p-7 sm:p-8`}>
                <div className="club-label text-[#d6b078]">What the host can track</div>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {[
                    'Player activity',
                    'Rake totals by room',
                    'Rake per session',
                    'Hands played',
                    'Wins and losses',
                    'Chip transfers',
                    'Suspicious activity',
                    'Table activity'
                  ].map((item) => (
                    <div key={item} className="rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-[#f0e2ce]/76">
                      {item}
                    </div>
                  ))}
                </div>
              </article>

              <article className={`${sectionSurface} p-7 sm:p-8`}>
                <div className="club-label text-[#d6b078]">Suspicious activity review</div>
                <div className="mt-6 space-y-4">
                  {[
                    ['Seat 4', 'Repeated disconnects during all-in spots'],
                    ['Table 11', 'Unusual chip adjustment pattern flagged for review'],
                    ['Session 204', 'High-frequency spectator joins before featured hands']
                  ].map(([title, copy]) => (
                    <div key={title} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#d4af77]/16 bg-[#d4af77]/10">
                          <Radar className="h-4 w-4 text-[#dfb982]" />
                        </div>
                        <div className="text-lg font-semibold text-[#fff1de]">{title}</div>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-[#eadcc9]/72">{copy}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="access" className="scroll-mt-28">
          <div className={`${sectionFrame} ${sectionPadding}`}>
            <SectionIntro
              eyebrow="Private Access"
              title="Choose how people enter the room: spectator, player, or host."
              description="Instead of public pricing language, the landing page frames access like a private club invitation. Different participants enter with different permissions and responsibilities."
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {accessTiers.map((tier) => (
                <article key={tier.title} className={`${sectionSurface} p-7`}>
                  <div className="club-label text-[#d4af77]">Access tier</div>
                  <h3 className="club-display mt-4 text-3xl text-[#fff3e1]">{tier.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-[#eadcc9]/72">{tier.copy}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm text-[#d4af77]">
                    <ChevronRight className="h-4 w-4" />
                    Admin-controlled entry
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-28">
          <div className={`${sectionFrame} ${sectionPadding}`}>
            <SectionIntro
              eyebrow="FAQ"
              title="Clear answers for a hosted, private-club poker platform."
              description="These answers reinforce the most important product signals: private access, fake chips, spectator controls, and full admin supervision."
            />

            <div className="mt-10 space-y-4">
              {faqItems.map((item, index) => (
                <details
                  key={item.question}
                  open={index === 0}
                  className={`${sectionSurface} group p-6`}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="text-lg font-semibold text-[#fff2df] sm:text-xl">{item.question}</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs uppercase tracking-[0.22em] text-[#d7b27d]">
                      Open
                    </span>
                  </summary>
                  <p className="mt-4 max-w-4xl text-sm leading-8 text-[#eadcc9]/72">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28">
          <div className={`${sectionFrame} ${sectionPadding}`}>
            <article className={`${sectionSurface} overflow-hidden p-7 sm:p-10`}>
              <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
                <div>
                  <span className="club-label text-[#d6b078]">Contact and Club Access</span>
                  <h2 className="club-display mt-4 text-4xl text-[#fff4e7] sm:text-5xl">
                    Present the platform like a premium hosted room from first click to first hand.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-[#eadcc9]/72">
                    Use this landing page to position the product for private games, premium demos, operator walkthroughs,
                    and club onboarding conversations.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <button type="button" onClick={() => onNavigate?.('login')} className={buttonPrimary}>
                      Login
                    </button>
                    <button type="button" onClick={() => onNavigate?.('admin-dashboard')} className={buttonAdmin}>
                      Admin Access
                    </button>
                    <button type="button" onClick={() => onNavigate?.('lobby')} className={buttonSecondary}>
                      Enter Platform
                    </button>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      icon: MessageSquareText,
                      title: 'Contact',
                      copy: 'club@thepokerroom.demo'
                    },
                    {
                      icon: ShieldCheck,
                      title: 'Privacy',
                      copy: 'Terms and privacy placeholders'
                    },
                    {
                      icon: Users,
                      title: 'Host onboarding',
                      copy: 'Private room setup and table configuration'
                    },
                    {
                      icon: ScrollText,
                      title: 'Platform info',
                      copy: 'Premium poker demo environment'
                    }
                  ].map((item) => (
                    <div key={item.title} className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d3aa6d]/16 bg-[#d3aa6d]/10">
                        <item.icon className="h-5 w-5 text-[#dfb881]" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-[#fff2df]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[#eadcc9]/72">{item.copy}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/6 bg-[#0a0305]/94">
        <div className={`${sectionFrame} py-10`}>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr_0.9fr_0.8fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f1cf9b]/20 bg-[linear-gradient(180deg,rgba(125,53,37,0.96),rgba(50,16,14,0.96))]">
                  <Spade className="h-5 w-5 text-[#f2c585]" />
                </div>
                <div>
                  <div className="club-display text-2xl text-[#fff4e8]">The poker room</div>
                  <div className="mt-1 text-[0.68rem] uppercase tracking-[0.34em] text-[#d2ae73]/70">
                    Private Poker Club
                  </div>
                </div>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-7 text-[#eadcc8]/68">
                A premium, fake-money, admin-hosted poker experience designed for private tables, spectator controls,
                replay-ready hands, and high-end room management.
              </p>
            </div>

            <div>
              <div className="club-label text-[#d5b07b]">Navigation</div>
              <div className="mt-5 space-y-3 text-sm text-[#eadcc8]/70">
                {navItems.slice(0, 6).map((item) => (
                  <a key={item.label} href={item.href} className="block transition hover:text-[#fff2df]">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="club-label text-[#d5b07b]">Platform</div>
              <div className="mt-5 space-y-3 text-sm text-[#eadcc8]/70">
                <a href="#monitoring" className="block transition hover:text-[#fff2df]">
                  Stats and Monitoring
                </a>
                <a href="#hand-history" className="block transition hover:text-[#fff2df]">
                  Hand History
                </a>
                <a href="#chip-requests" className="block transition hover:text-[#fff2df]">
                  Chip Requests
                </a>
                <a href="#security" className="block transition hover:text-[#fff2df]">
                  Private Access
                </a>
              </div>
            </div>

            <div>
              <div className="club-label text-[#d5b07b]">Entry</div>
              <div className="mt-5 flex flex-col gap-3">
                <button type="button" onClick={() => onNavigate?.('login')} className={buttonSecondary}>
                  Login
                </button>
                <button type="button" onClick={() => onNavigate?.('admin-dashboard')} className={buttonAdmin}>
                  Admin Access
                </button>
                <button type="button" onClick={() => onNavigate?.('lobby')} className={buttonPrimary}>
                  Enter Platform
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/6 pt-6 text-sm text-[#eadcc8]/55 sm:flex-row sm:items-center sm:justify-between">
            <div>© 2026 The poker room. Private-club visual concept.</div>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="transition hover:text-[#fff2df]">
                Contact
              </a>
              <a href="#contact" className="transition hover:text-[#fff2df]">
                Privacy
              </a>
              <a href="#contact" className="transition hover:text-[#fff2df]">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
