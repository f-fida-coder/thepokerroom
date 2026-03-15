import { useState } from 'react';
import {
  Activity,
  AlertTriangle,
  Eye,
  Layers3,
  Palette,
  PlayCircle,
  ReceiptText,
  RefreshCcw,
  Table2,
  TrendingUp,
  Users,
  Volume2,
  WalletCards
} from 'lucide-react';
import PremiumBackdrop from '../components/common/PremiumBackdrop';
import PremiumNav from '../components/common/PremiumNav';
import Sidebar from '../components/admin/Sidebar';
import StatCard from '../components/admin/StatCard';
import Button from '../components/common/Button';
import { demoTables } from '../data/demoTables';
import type { DemoPage } from '../types/demo';

interface AdminDashboardProps {
  onNavigate?: (page: DemoPage) => void;
  onOpenTable?: (tableId: string, page?: DemoPage) => void;
}

const surfaceClass =
  'rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.92),rgba(9,4,7,0.96))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.38)]';

const panelClass = 'rounded-[22px] border border-white/10 bg-white/[0.04] p-4';

const pillClass =
  'rounded-full border border-white/10 bg-black/18 px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-[#eadcc9]/72';

const fieldClass = 'flex items-center justify-between gap-3 rounded-[18px] border border-white/8 bg-black/18 px-4 py-3';

const toneBadgeClass = {
  green: 'border-[#8c9d67]/18 bg-[#8c9d67]/10 text-[#e4ecd6]',
  blue: 'border-[#4b6178]/18 bg-[#4b6178]/10 text-[#d7e4f2]',
  amber: 'border-[#d3aa6d]/18 bg-[#d3aa6d]/10 text-[#f2dfc0]',
  red: 'border-[#8d4f47]/18 bg-[#8d4f47]/10 text-[#f1d4ce]'
} as const;

const playerRows = [
  { name: 'Marble Ace', chips: '$6,240', actions: ['Add', 'Kick', 'Mute'] },
  { name: 'Noir River', chips: '$3,920', actions: ['Mute', 'Flag', 'Review'] },
  { name: 'Velvet Stack', chips: '$7,180', actions: ['Ban', 'View', 'History'] },
  { name: 'Guild Room', chips: '$4,600', actions: ['Manage', 'Add', 'Track'] }
];

const chipRequests = [
  { id: 'REQ-1042', player: 'Marble Ace', amount: '$500', status: 'Pending', actions: ['Approve', 'Deny'] },
  { id: 'REQ-1043', player: 'Guild Room', amount: '$1,000', status: 'Review', actions: ['Approve', 'Hold'] },
  { id: 'REQ-1044', player: 'Noir River', amount: '$300', status: 'Approved', actions: ['Add', 'Track'] }
];

const playerStats = [
  ['Marble Ace', '148', '92', '421', 'Clear'],
  ['Noir River', '130', '102', '398', 'Watch'],
  ['Velvet Stack', '101', '111', '366', 'Review'],
  ['Guild Room', '116', '98', '340', 'Clear']
];

export default function AdminDashboard({ onNavigate, onOpenTable }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const tablesRunning = demoTables.filter((table) => table.status === 'playing').length;
  const liveFormats = Array.from(new Set(demoTables.map((table) => table.gameType)));
  const totalSpectators = demoTables.reduce((sum, table) => sum + table.spectators, 0);
  const pendingChipRequests = 6;
  const suspiciousAlerts = 3;
  const disconnectedPlayers = 2;
  const timerWarnings = 4;
  const waitingListCounts: Record<string, number> = {
    'high-tide': 1,
    'brass-lantern': 3,
    'river-rotation': 2,
    'ivory-circle': 2,
    'crown-pineapple': 2,
    'noir-salon': 1
  };
  const waitingListPlayers = Object.values(waitingListCounts).reduce((sum, count) => sum + count, 0);
  const tablesNeedingAttention = demoTables.filter((table) => table.status !== 'playing').length;

  const summaryCards = [
    {
      title: 'Players Online',
      value: '146',
      icon: Users,
      subtitle: '34 seated across live rooms',
      trend: { value: 12, isPositive: true },
      color: 'green' as const
    },
    {
      title: 'Active Tables',
      value: `${tablesRunning}`,
      icon: Table2,
      subtitle: '2 additional rooms opening',
      trend: { value: 5, isPositive: true },
      color: 'blue' as const
    },
    {
      title: 'Hands Per Hour',
      value: '214',
      icon: Activity,
      subtitle: 'Across High Tide and River Rotation',
      trend: { value: 6, isPositive: true },
      color: 'amber' as const
    },
    {
      title: 'Rake Per Hour',
      value: '$612',
      icon: TrendingUp,
      subtitle: 'Peak pace led by Omaha tables',
      trend: { value: 8, isPositive: true },
      color: 'green' as const
    },
    {
      title: 'Pending Chip Requests',
      value: `${pendingChipRequests}`,
      icon: WalletCards,
      subtitle: '2 need approval right now',
      trend: { value: 2, isPositive: false },
      color: 'amber' as const
    },
    {
      title: 'Spectators Online',
      value: `${totalSpectators}`,
      icon: Eye,
      subtitle: 'Public boards visible across all rooms',
      trend: { value: 9, isPositive: true },
      color: 'blue' as const
    },
    {
      title: 'Suspicious Alerts',
      value: `${suspiciousAlerts}`,
      icon: AlertTriangle,
      subtitle: '1 high priority review pending',
      trend: { value: 1, isPositive: false },
      color: 'red' as const
    },
    {
      title: 'Active Formats',
      value: `${liveFormats.length}`,
      icon: Layers3,
      subtitle: "Hold'em, Omaha, rotation, and feature games",
      trend: { value: 3, isPositive: true },
      color: 'amber' as const
    }
  ];

  const platformStatusCards = [
    {
      title: 'Platform Status',
      value: 'Operational',
      note: 'Lobby, table, and spectator surfaces responding cleanly.',
      badge: 'Live',
      tone: 'green' as const,
      icon: Activity
    },
    {
      title: 'Real-Time Engine',
      value: 'Streaming',
      note: 'Seat highlights, timers, and public actions syncing.',
      badge: 'Socket',
      tone: 'blue' as const,
      icon: PlayCircle
    },
    {
      title: 'Table Engine',
      value: 'Stable',
      note: `${tablesRunning} live tables with dealing and pot visuals active.`,
      badge: 'Tables',
      tone: 'green' as const,
      icon: Table2
    },
    {
      title: 'Demo Sync',
      value: 'Enabled',
      note: 'Mock state flows are active with direct admin entry.',
      badge: 'Demo',
      tone: 'amber' as const,
      icon: Layers3
    },
    {
      title: 'Admin Controls',
      value: 'Ready',
      note: 'Moderation, chip desk, and room controls are available.',
      badge: 'Control',
      tone: 'amber' as const,
      icon: Users
    },
    {
      title: 'Sound System',
      value: 'Enabled',
      note: 'Chip, deal, timer, and win cues are loaded.',
      badge: 'Audio',
      tone: 'amber' as const,
      icon: Volume2
    },
    {
      title: 'Theme System',
      value: 'Velvet',
      note: 'Luxury burgundy tables and polished card assets are live.',
      badge: 'Theme',
      tone: 'blue' as const,
      icon: Palette
    },
    {
      title: 'Replay Monitoring',
      value: 'Recording',
      note: 'Hand history markers and alert logs are available.',
      badge: 'Replay',
      tone: 'green' as const,
      icon: ReceiptText
    }
  ];

  const tableActivityRows = [
    {
      id: 'high-tide',
      name: "High Tide Hold'em",
      mode: "Texas Hold'em",
      blinds: '$2 / $5',
      seats: '5 / 6',
      spectators: 18,
      waitlist: waitingListCounts['high-tide'],
      liveLabel: 'Live',
      liveTone: 'green' as const,
      note: 'Dealing on turn'
    },
    {
      id: 'brass-lantern',
      name: 'Brass Lantern PLO',
      mode: 'Omaha',
      blinds: '$5 / $10',
      seats: '6 / 6',
      spectators: 26,
      waitlist: waitingListCounts['brass-lantern'],
      liveLabel: 'Full',
      liveTone: 'blue' as const,
      note: 'Spectator entry only'
    },
    {
      id: 'river-rotation',
      name: 'River Rotation',
      mode: "Hold'em / Omaha / Pineapple",
      blinds: '$10 / $20',
      seats: '6 / 8',
      spectators: 11,
      waitlist: waitingListCounts['river-rotation'],
      liveLabel: 'Live',
      liveTone: 'green' as const,
      note: 'Rotation hand 3 of 5'
    },
    {
      id: 'ivory-circle',
      name: 'Ivory Circle',
      mode: 'Double-Board Omaha',
      blinds: '$3 / $6',
      seats: '4 / 6',
      spectators: 9,
      waitlist: waitingListCounts['ivory-circle'],
      liveLabel: 'Queue',
      liveTone: 'amber' as const,
      note: 'Needs two seats'
    },
    {
      id: 'crown-pineapple',
      name: 'Crown Pineapple',
      mode: 'Crazy Pineapple',
      blinds: '$2 / $5',
      seats: '4 / 7',
      spectators: 7,
      waitlist: waitingListCounts['crown-pineapple'],
      liveLabel: 'Queue',
      liveTone: 'amber' as const,
      note: 'Buy-ins open'
    }
  ];

  const experienceModules = [
    {
      mode: 'sound' as const,
      icon: Volume2,
      title: 'Sound Suite',
      meta: 'Enabled',
      note: 'Bet, deal, timer, and win cues ready.',
      items: ['Chip', 'Deal', 'Warning', 'Win'],
      tone: 'amber' as const
    },
    {
      mode: 'rebuy' as const,
      icon: RefreshCcw,
      title: 'Auto Rebuy',
      meta: 'Below 500',
      note: 'Auto request prepared, admin approves.',
      items: ['Toggle', 'Threshold', 'Queue', 'Approve'],
      tone: 'green' as const
    },
    {
      mode: 'theme' as const,
      icon: Palette,
      title: 'Theme Controls',
      meta: 'Preview',
      note: 'Felt, cards, and chips ready for theme swap.',
      items: ['Felt', 'Cards', 'Chips', 'Room'],
      tone: 'blue' as const
    }
  ];

  const quickActions = [
    { title: 'Start Game', group: 'Table', tone: 'green' as const },
    { title: 'Pause Game', group: 'Table', tone: 'amber' as const },
    { title: 'Stop Game', group: 'Table', tone: 'red' as const },
    { title: 'Create Table', group: 'Room', tone: 'blue' as const },
    { title: 'Approve Chips', group: 'Chip Desk', tone: 'green' as const },
    { title: 'Deny Chips', group: 'Chip Desk', tone: 'red' as const },
    { title: 'Add Chips', group: 'Chip Desk', tone: 'amber' as const },
    { title: 'Remove Chips', group: 'Chip Desk', tone: 'red' as const },
    { title: 'Kick Player', group: 'Moderation', tone: 'amber' as const },
    { title: 'Ban Player', group: 'Moderation', tone: 'red' as const },
    { title: 'View Hand History', group: 'Review', tone: 'blue' as const },
    { title: 'Open Monitoring', group: 'Review', tone: 'green' as const }
  ];

  const monitoringSnapshot = [
    {
      label: 'Suspicious activity',
      value: `${suspiciousAlerts}`,
      note: '1 premium hand flagged',
      tone: 'red' as const
    },
    {
      label: 'Disconnected players',
      value: `${disconnectedPlayers}`,
      note: 'Reconnect windows active',
      tone: 'amber' as const
    },
    {
      label: 'Pending chip requests',
      value: `${pendingChipRequests}`,
      note: '2 awaiting host approval',
      tone: 'amber' as const
    },
    {
      label: 'Tables needing attention',
      value: `${tablesNeedingAttention}`,
      note: 'Queue or fill-state changes',
      tone: 'blue' as const
    },
    {
      label: 'Waiting list players',
      value: `${waitingListPlayers}`,
      note: 'Across private and feature rooms',
      tone: 'blue' as const
    },
    {
      label: 'Timer warnings',
      value: `${timerWarnings}`,
      note: 'Action clocks nearing auto-check',
      tone: 'red' as const
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'tables':
        return (
          <div className="grid gap-5 xl:grid-cols-2">
            {demoTables.map((table) => (
              <article key={table.id} className={surfaceClass}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="club-label text-[#d6b078]">{table.gameType}</div>
                    <h3 className="mt-2 text-xl font-semibold text-[#fff1de]">{table.name}</h3>
                  </div>
                  <span className={pillClass}>{table.status}</span>
                </div>

                <div className="mt-4 grid gap-3">
                  {[
                    ['Blinds', table.blindsLabel],
                    ['Bomb', table.bombPot ?? 'Off'],
                    ['Run', table.runMode ?? 'Once'],
                    ['Seats', `${table.currentPlayers}/${table.maxPlayers}`]
                  ].map(([label, value]) => (
                    <div key={label} className={fieldClass}>
                      <span className="text-xs uppercase tracking-[0.16em] text-[#eadcc8]/56">{label}</span>
                      <span className="text-sm font-medium text-[#fff1de]">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Button variant="primary" onClick={() => onOpenTable?.(table.id, 'table')}>
                    Open
                  </Button>
                  <Button variant="secondary" onClick={() => onOpenTable?.(table.id, 'spectator')}>
                    Spectate
                  </Button>
                  <Button variant="ghost" onClick={() => setActiveTab('history')}>
                    History
                  </Button>
                </div>
              </article>
            ))}
          </div>
        );
      case 'players':
        return (
          <div className="grid gap-5 xl:grid-cols-[0.92fr_1.08fr]">
            <article className={surfaceClass}>
              <div className="club-label text-[#d6b078]">Players</div>
              <div className="mt-4 space-y-3">
                {playerRows.map((player) => (
                  <div key={player.name} className={panelClass}>
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold text-[#fff1de]">{player.name}</div>
                        <div className="mt-1 text-xs text-[#d9b57a]">{player.chips}</div>
                      </div>
                      <div className="flex flex-wrap justify-end gap-2">
                        {player.actions.map((action) => (
                          <span key={action} className={pillClass}>
                            {action}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className={surfaceClass}>
              <div className="club-label text-[#d6b078]">Stats</div>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[520px] border-separate border-spacing-y-3">
                  <thead>
                    <tr className="text-left text-[0.68rem] uppercase tracking-[0.18em] text-[#d6b078]">
                      <th className="px-4">Player</th>
                      <th className="px-4">Wins</th>
                      <th className="px-4">Losses</th>
                      <th className="px-4">Hands</th>
                      <th className="px-4">Flag</th>
                    </tr>
                  </thead>
                  <tbody>
                    {playerStats.map(([player, wins, losses, hands, flag]) => (
                      <tr key={player} className="bg-white/[0.04] text-sm text-[#eadcc9]/76">
                        <td className="rounded-l-[18px] px-4 py-3 text-[#fff1de]">{player}</td>
                        <td className="px-4 py-3">{wins}</td>
                        <td className="px-4 py-3">{losses}</td>
                        <td className="px-4 py-3">{hands}</td>
                        <td className="rounded-r-[18px] px-4 py-3">{flag}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          </div>
        );
      case 'chips':
        return (
          <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
            <article className={surfaceClass}>
              <div className="club-label text-[#d6b078]">Chip Requests</div>
              <div className="mt-4 space-y-3">
                {chipRequests.map((request) => (
                  <div key={request.id} className={panelClass}>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <div className="club-label text-[#d6b078]">{request.id}</div>
                        <div className="mt-2 text-sm font-semibold text-[#fff1de]">{request.player}</div>
                        <div className="mt-1 text-xs text-[#d9b57a]">{request.amount}</div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className={pillClass}>{request.status}</span>
                        {request.actions.map((action) => (
                          <span key={action} className={pillClass}>
                            {action}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className={surfaceClass}>
              <div className="club-label text-[#d6b078]">Chip Controls</div>
              <div className="mt-4 grid gap-3">
                {[
                  'Start 0 chips',
                  'Approve request',
                  'Deny request',
                  'Add chips',
                  'Remove chips',
                  'Auto rebuy queue'
                ].map((item) => (
                  <div key={item} className={`${panelClass} text-sm text-[#eadcc9]/74`}>
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        );
      case 'history':
        return (
          <div className="grid gap-5 xl:grid-cols-[1.02fr_0.98fr]">
            <article className={surfaceClass}>
              <div className="club-label text-[#d6b078]">Hand History</div>
              <div className={`${panelClass} mt-4`}>
                <div className="text-sm font-semibold text-[#fff1de]">Hand #948220</div>
                <div className="mt-2 text-sm text-[#eadcc9]/72">Board A♦ K♠ 8♣ 8♥ 2♠</div>
                <div className="mt-4 grid gap-3">
                  {['Raise', 'Call', 'Bet', 'Showdown'].map((step) => (
                    <div key={step} className="rounded-[16px] border border-white/10 bg-black/18 px-4 py-3 text-sm text-[#eadcc9]/72">
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article className={surfaceClass}>
              <div className="club-label text-[#d6b078]">Support</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Bomb Pot', 'Run Twice', 'Double Board', 'Replay', 'Hole Cards', 'Timeline'].map((item) => (
                  <span key={item} className={pillClass}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
        );
      case 'security':
        return (
          <div className="grid gap-5 xl:grid-cols-2">
            <article className={surfaceClass}>
              <div className="club-label text-[#d6b078]">Alerts</div>
              <div className="mt-4 space-y-3">
                {[
                  ['Seat 4', 'Disconnect pattern'],
                  ['Table 11', 'Chip spike'],
                  ['Session 204', 'Spectator burst']
                ].map(([title, copy]) => (
                  <div key={title} className={panelClass}>
                    <div className="text-sm font-semibold text-[#fff1de]">{title}</div>
                    <div className="mt-1 text-xs text-[#eadcc9]/72">{copy}</div>
                  </div>
                ))}
              </div>
            </article>

            <article className={surfaceClass}>
              <div className="club-label text-[#d6b078]">Oversight</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Hole Cards', 'Hand Review', 'Action Log', 'Session Token', 'Join Code', 'Anti Cheat'].map((item) => (
                  <span key={item} className={pillClass}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
        );
      case 'stats':
        return (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              ['Players', '146'],
              ['Tables', `${tablesRunning}`],
              ['Hands / Hr', '214'],
              ['Rake / Hr', '$612'],
              ['Spectators', `${totalSpectators}`],
              ['Formats', `${liveFormats.length}`]
            ].map(([label, value]) => (
              <article key={label} className={surfaceClass}>
                <div className="club-label text-[#d6b078]">{label}</div>
                <div className="mt-3 text-3xl font-semibold text-[#fff4e7]">{value}</div>
              </article>
            ))}
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {summaryCards.map((card) => (
                <StatCard key={card.title} {...card} />
              ))}
            </div>

            <div className="grid gap-5 xl:grid-cols-[1.14fr_0.86fr]">
              <div className="space-y-5">
                <article className={surfaceClass}>
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="club-label text-[#d6b078]">Live Platform Overview</div>
                      <h2 className="mt-2 text-xl font-semibold text-[#fff1de]">Operational status across the full poker suite</h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Command center', 'Luxury room theme', 'Demo mode live'].map((item) => (
                        <span key={item} className={pillClass}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    {platformStatusCards.map((item) => (
                      <div key={item.title} className={`${panelClass} min-h-[164px]`}>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d3aa6d]/16 bg-[#d3aa6d]/10">
                            <item.icon className="h-4 w-4 text-[#dfb881]" />
                          </div>
                          <span className={`rounded-full border px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] ${toneBadgeClass[item.tone]}`}>
                            {item.badge}
                          </span>
                        </div>

                        <div className="mt-4 text-[0.68rem] uppercase tracking-[0.16em] text-[#d6b078]">{item.title}</div>
                        <div className="mt-2 text-lg font-semibold text-[#fff4e7]">{item.value}</div>
                        <div className="mt-2 text-sm leading-6 text-[#eadcc9]/68">{item.note}</div>
                      </div>
                    ))}
                  </div>
                </article>

                <article className={surfaceClass}>
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <div className="club-label text-[#d6b078]">Live Table Activity</div>
                      <h2 className="mt-2 text-xl font-semibold text-[#fff1de]">Premium table management at a glance</h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className={pillClass}>{tablesRunning} live</span>
                      <span className={pillClass}>{waitingListPlayers} waiting</span>
                      <span className={pillClass}>{liveFormats.length} formats</span>
                    </div>
                  </div>

                  <div className="mt-5 overflow-x-auto">
                    <div className="min-w-[920px] space-y-3">
                      <div className="grid grid-cols-[1.55fr_1.25fr_0.85fr_0.8fr_0.8fr_0.8fr_0.95fr] gap-3 px-4 text-[0.68rem] uppercase tracking-[0.16em] text-[#d6b078]">
                        <div>Table</div>
                        <div>Current Mode</div>
                        <div>Blinds</div>
                        <div>Seats</div>
                        <div>Spectators</div>
                        <div>Waitlist</div>
                        <div>Status</div>
                      </div>

                      {tableActivityRows.map((table) => (
                        <div key={table.id} className="grid grid-cols-[1.55fr_1.25fr_0.85fr_0.8fr_0.8fr_0.8fr_0.95fr] gap-3 rounded-[20px] border border-white/10 bg-black/18 px-4 py-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className={`h-2.5 w-2.5 rounded-full ${table.liveTone === 'green' ? 'bg-[#8c9d67]' : table.liveTone === 'blue' ? 'bg-[#7b92ae]' : 'bg-[#d3aa6d]'} shadow-[0_0_14px_rgba(210,171,114,0.5)]`} />
                              <div className="text-sm font-semibold text-[#fff1de]">{table.name}</div>
                            </div>
                            <div className="mt-1 text-xs text-[#eadcc9]/62">{table.note}</div>
                          </div>

                          <div className="text-sm text-[#fff1de]">{table.mode}</div>
                          <div className="text-sm text-[#eadcc9]/74">{table.blinds}</div>
                          <div className="text-sm text-[#eadcc9]/74">{table.seats}</div>
                          <div className="text-sm text-[#eadcc9]/74">{table.spectators}</div>
                          <div className="text-sm text-[#eadcc9]/74">{table.waitlist}</div>
                          <div className="flex justify-start">
                            <span className={`rounded-full border px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] ${toneBadgeClass[table.liveTone]}`}>
                              {table.liveLabel}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </div>

              <div className="space-y-5">
                <article className={surfaceClass}>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="club-label text-[#d6b078]">Feature Experience</div>
                      <div className="mt-1 text-lg font-semibold text-[#fff1de]">Demo controls and presentation systems</div>
                    </div>
                    <span className={pillClass}>Preview panel</span>
                  </div>

                  <div className="mt-5 space-y-3">
                    {experienceModules.map((module) => (
                      <div key={module.title} className={`${panelClass} min-h-[150px]`}>
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#d3aa6d]/16 bg-[#d3aa6d]/10">
                              <module.icon className="h-4 w-4 text-[#dfb881]" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-[#fff1de]">{module.title}</div>
                              <div className="mt-1 text-xs text-[#eadcc9]/62">{module.note}</div>
                            </div>
                          </div>
                          <span className={`rounded-full border px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] ${toneBadgeClass[module.tone]}`}>
                            {module.meta}
                          </span>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {module.items.map((item) => (
                            <span key={item} className={pillClass}>
                              {item}
                            </span>
                          ))}
                        </div>

                        {module.mode === 'sound' && (
                          <div className="mt-4">
                            <div className="mb-2 flex items-center justify-between text-[0.68rem] uppercase tracking-[0.16em] text-[#eadcc9]/56">
                              <span>Room Mix</span>
                              <span>72%</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/[0.08]">
                              <div className="h-2 w-[72%] rounded-full bg-[linear-gradient(90deg,#f0c98a,#a86739)]" />
                            </div>
                          </div>
                        )}

                        {module.mode === 'rebuy' && (
                          <div className="mt-4 flex items-center justify-between rounded-[18px] border border-white/10 bg-black/18 px-4 py-3 text-sm text-[#eadcc9]/72">
                            <span>Trigger</span>
                            <span className="font-medium text-[#fff1de]">Below 500 chips</span>
                          </div>
                        )}

                        {module.mode === 'theme' && (
                          <div className="mt-4 flex items-center gap-2">
                            {['#42111b', '#1e4a3c', '#19181d'].map((tone) => (
                              <span
                                key={tone}
                                className="h-8 w-8 rounded-full border border-white/10 shadow-[0_8px_18px_rgba(0,0,0,0.28)]"
                                style={{ background: tone }}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </article>

                <article className={surfaceClass}>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="club-label text-[#d6b078]">Quick Admin Actions</div>
                      <div className="mt-1 text-lg font-semibold text-[#fff1de]">Fast room control and moderation</div>
                    </div>
                    <span className={pillClass}>12 actions</span>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {quickActions.map((action) => (
                      <button
                        key={action.title}
                        type="button"
                        className={`rounded-[18px] border p-4 text-left transition hover:-translate-y-0.5 hover:border-[#d3aa6d]/22 ${
                          action.tone === 'red'
                            ? 'border-[#8d4f47]/16 bg-[linear-gradient(180deg,rgba(141,79,71,0.14),rgba(0,0,0,0.12))]'
                            : action.tone === 'green'
                              ? 'border-[#8c9d67]/16 bg-[linear-gradient(180deg,rgba(140,157,103,0.12),rgba(0,0,0,0.12))]'
                              : action.tone === 'blue'
                                ? 'border-[#4b6178]/16 bg-[linear-gradient(180deg,rgba(75,97,120,0.14),rgba(0,0,0,0.12))]'
                                : 'border-white/10 bg-black/18'
                        }`}
                      >
                        <div className="text-[0.68rem] uppercase tracking-[0.16em] text-[#d6b078]">{action.group}</div>
                        <div className="mt-2 text-sm font-semibold text-[#fff1de]">{action.title}</div>
                      </button>
                    ))}
                  </div>
                </article>

                <article className={surfaceClass}>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="club-label text-[#d6b078]">Monitoring Snapshot</div>
                      <div className="mt-1 text-lg font-semibold text-[#fff1de]">Alerts, queues, and attention points</div>
                    </div>
                    <span className={pillClass}>Need review</span>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
                    {monitoringSnapshot.map((item) => (
                      <div key={item.label} className={panelClass}>
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="text-sm font-semibold text-[#fff1de]">{item.label}</div>
                            <div className="mt-1 text-xs text-[#eadcc9]/62">{item.note}</div>
                          </div>
                          <span className={`rounded-full border px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] ${toneBadgeClass[item.tone]}`}>
                            {item.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <PremiumBackdrop roomGlow="burgundy">
      <PremiumNav current="admin-dashboard" onNavigate={onNavigate} title="Admin panel" subtitle="Direct demo access" compact />

      <main className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-8">
        <div className={`${surfaceClass} mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between`}>
          <div>
            <div className="club-label text-[#d6b078]">Admin Control Panel</div>
            <h1 className="mt-2 text-3xl font-semibold text-[#fff4e7]">Host dashboard</h1>
          </div>

          <div className="flex flex-wrap gap-2">
            {['Manage tables', 'Approve chips', 'Review hands', 'See hole cards'].map((item) => (
              <span key={item} className={pillClass}>
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <Button variant="ghost" onClick={() => onNavigate?.('landing')}>
              Home
            </Button>
            <Button variant="secondary" onClick={() => onNavigate?.('lobby')}>
              Lobby
            </Button>
            <Button variant="primary" onClick={() => setActiveTab('tables')}>
              Tables
            </Button>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[260px_minmax(0,1fr)]">
          <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
          <section className="space-y-5">{renderTabContent()}</section>
        </div>
      </main>
    </PremiumBackdrop>
  );
}
