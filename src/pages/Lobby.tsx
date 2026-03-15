import { useDeferredValue, useState } from 'react';
import {
  Crown,
  Filter,
  LockKeyhole,
  Search,
  ShieldCheck,
  Sparkles,
  Users
} from 'lucide-react';
import PremiumBackdrop from '../components/common/PremiumBackdrop';
import PremiumNav from '../components/common/PremiumNav';
import TableCard from '../components/lobby/TableCard';
import Button from '../components/common/Button';
import { demoTables } from '../data/demoTables';
import type { DemoPage } from '../types/demo';

interface LobbyProps {
  onNavigate?: (page: DemoPage) => void;
  onOpenTable?: (tableId: string, page?: DemoPage) => void;
}

type TableFilter = 'all' | 'playing' | 'waiting' | 'vip' | 'private';

export default function Lobby({ onNavigate, onOpenTable }: LobbyProps) {
  const [filter, setFilter] = useState<TableFilter>('all');
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const activeTables = demoTables.filter((table) => table.status === 'playing').length;
  const openTables = demoTables.filter((table) => table.status !== 'full').length;
  const totalSpectators = demoTables.reduce((sum, table) => sum + table.spectators, 0);
  const liveFormats = Array.from(new Set(demoTables.map((table) => table.gameType)));
  const seatedPlayers = demoTables.reduce((sum, table) => sum + table.currentPlayers, 0);
  const privateTables = demoTables.filter((table) => table.isPrivate).length;

  const filteredTables = demoTables.filter((table) => {
    if (filter === 'playing' && table.status !== 'playing') {
      return false;
    }

    if (filter === 'waiting' && table.status !== 'waiting') {
      return false;
    }

    if (filter === 'vip' && !table.isVIP) {
      return false;
    }

    if (filter === 'private' && !table.isPrivate) {
      return false;
    }

    const searchTarget = `${table.name} ${table.gameType} ${table.stakes} ${table.mixedRotation ?? ''}`.toLowerCase();
    return searchTarget.includes(deferredQuery.toLowerCase());
  });

  const featuredTable = demoTables.find((table) => table.status !== 'full') ?? demoTables[0];

  return (
    <PremiumBackdrop roomGlow="burgundy">
      <PremiumNav current="lobby" onNavigate={onNavigate} title="Game lobby" />

      <main className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-8">
        <section className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <article className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(11,19,15,0.94),rgba(5,8,7,0.96))] p-7 shadow-[0_28px_90px_rgba(0,0,0,0.42)] sm:p-8">
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(211,162,93,0.20),transparent_70%)] blur-3xl" />
            <span className="club-label text-[#d7b27d]">Player Lobby</span>
            <h1 className="club-display mt-4 max-w-[12ch] text-4xl text-[#fff4e8] sm:text-5xl">
              Browse the live floor and enter a table in seconds.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#eadcca]/72">
              Discover game type, stakes, seat count, and room atmosphere before you commit. Open tables move through a simple private-access step before the poker table UI loads.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="primary" size="lg" onClick={() => onOpenTable?.(featuredTable.id, 'login')}>
                Enter a Table
              </Button>
              <Button variant="secondary" size="lg" onClick={() => onNavigate?.('login')}>
                Join Private Table
              </Button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                { label: 'Open tables', value: `${openTables}` },
                { label: 'Games live', value: `${liveFormats.length}` },
                { label: 'Players seated', value: `${seatedPlayers}` },
                { label: 'Watching live', value: `${totalSpectators}` }
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-5 py-5 shadow-[0_18px_40px_rgba(0,0,0,0.25)]"
                >
                  <div className="club-display text-3xl text-[#fff1dd]">{stat.value}</div>
                  <div className="mt-2 text-sm leading-6 text-[#eddcc9]/68">{stat.label}</div>
                </div>
              ))}
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.92),rgba(9,4,7,0.96))] p-7 shadow-[0_28px_90px_rgba(0,0,0,0.42)] sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="club-label text-[#d7b27d]">Featured table preview</div>
                <h2 className="club-display mt-4 text-4xl text-[#fff4e7]">{featuredTable.name}</h2>
              </div>
              <div className="rounded-full border border-[#d7b27d]/16 bg-[#d7b27d]/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#ddb985]">
                {featuredTable.stakes}
              </div>
            </div>

            <div className="mt-6 rounded-[30px] border border-white/10 bg-[#12070a]/90 p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-lg font-semibold text-[#fff2df]">{featuredTable.gameType}</div>
                  <div className="mt-1 text-sm text-[#eadcc8]/66">{featuredTable.ambiance}</div>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af77]/16 bg-[#d4af77]/10">
                  <Crown className="h-6 w-6 text-[#e7c38d]" />
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {[
                  ['Private room code', featuredTable.roomCode ?? 'Private room'],
                  ['Mixed flow', featuredTable.mixedRotation ?? "Hold'em only"],
                  ['Bomb pots', featuredTable.bombPot ?? 'Optional'],
                  ['Buy-in', featuredTable.buyIn ?? 'Curated']
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-4 rounded-[18px] border border-white/8 bg-black/18 px-4 py-3">
                    <span className="text-sm text-[#eadcc8]/60">{label}</span>
                    <span className="text-sm font-medium text-[#fff1de]">{value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="primary" onClick={() => onOpenTable?.(featuredTable.id, 'login')}>
                  Enter a Table
                </Button>
                <Button variant="secondary" onClick={() => onNavigate?.('login')}>
                  Join Private Table
                </Button>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-8 grid gap-6 xl:grid-cols-[0.33fr_0.67fr]">
          <aside className="space-y-6">
            <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.92),rgba(9,4,7,0.96))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
              <div className="club-label text-[#d6b078]">Find a Table</div>
              <div className="relative mt-5">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#d4af77]/60" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by table, game, or stakes"
                  className="w-full rounded-[20px] border border-white/10 bg-white/[0.04] py-3 pl-12 pr-4 text-sm text-[#fff2df] placeholder:text-[#c7b59f]/38 focus:border-[#d0a66a]/30 focus:outline-none focus:ring-2 focus:ring-[#c69354]/25"
                />
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-[#eadcc8]/66">
                <Filter className="h-4 w-4 text-[#d4af77]" />
                Filter by room type
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {([
                  ['all', 'All rooms'],
                  ['playing', 'Playing'],
                  ['waiting', 'Opening'],
                  ['vip', 'VIP'],
                  ['private', 'Private']
                ] as [TableFilter, string][]).map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setFilter(key)}
                    className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em] transition ${
                      filter === key
                        ? 'border border-[#d5b07b]/18 bg-[#d5b07b]/12 text-[#f1dfc6]'
                        : 'border border-white/10 bg-white/[0.04] text-[#eadcc8]/64 hover:bg-white/[0.07]'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.92),rgba(9,4,7,0.96))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
              <div className="club-label text-[#d6b078]">Player Signals</div>
              <div className="mt-5 space-y-4">
                {[
                  {
                    icon: LockKeyhole,
                    title: 'Private access',
                    copy: 'Open tables route through a clean room-code step before the player reaches the felt.'
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Secure room confidence',
                    copy: 'Players can see which rooms are private and which access codes they need before entering.'
                  },
                  {
                    icon: Users,
                    title: 'Seat visibility',
                    copy: 'Seat counts and live room status make it easy to decide where to play next.'
                  },
                  {
                    icon: Sparkles,
                    title: 'Premium presentation',
                    copy: 'Each room surfaces ambiance, format, and buy-in so the experience feels curated, not generic.'
                  }
                ].map((item) => (
                  <div key={item.title} className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d3aa6d]/16 bg-[#d3aa6d]/10">
                        <item.icon className="h-5 w-5 text-[#e1ba82]" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#fff2df]">{item.title}</div>
                        <p className="mt-1 text-sm leading-6 text-[#eadcc9]/68">{item.copy}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.92),rgba(9,4,7,0.96))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="club-label text-[#d6b078]">Access at a glance</div>
                  <div className="mt-3 text-xl font-semibold text-[#fff1de]">The join flow stays short and obvious.</div>
                </div>
                <div className="rounded-full border border-[#d3aa6d]/16 bg-[#d3aa6d]/10 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.22em] text-[#ddb985]">
                  {privateTables} private
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  ['1', 'Browse a game', 'Review stakes, seats, and room style.'],
                  ['2', 'Enter access', 'Add your alias and table code.'],
                  ['3', 'Play instantly', 'Open the poker table UI with no extra step between access and play.']
                ].map(([number, title, copy]) => (
                  <div key={title} className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-start gap-4">
                      <div className="club-display text-3xl text-[#f2d39e]">{number}</div>
                      <div>
                        <div className="text-sm font-semibold text-[#fff2df]">{title}</div>
                        <p className="mt-2 text-sm leading-7 text-[#eadcc9]/68">{copy}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[20px] border border-[#d3aa6d]/14 bg-[#d3aa6d]/10 px-4 py-4 text-sm leading-7 text-[#f1e4d2]/80">
                Player path: browse tables, choose a room, pass private access, then sit down.
              </div>
            </div>
          </aside>

          <section>
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="club-label text-[#d6b078]">Available Tables</div>
                <h2 className="club-display mt-3 text-4xl text-[#fff4e7]">Browse games and enter when the room feels right</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {liveFormats.slice(0, 5).map((format) => (
                    <span
                      key={format}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.18em] text-[#eadcc8]/70"
                    >
                      {format}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-sm text-[#eadcc8]/64">
                Showing {filteredTables.length} of {demoTables.length} rooms • {activeTables} live now
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {filteredTables.map((table) => (
                <TableCard
                  key={table.id}
                  table={table}
                  parallelCount={demoTables.length}
                  onEnter={() => onOpenTable?.(table.id, table.status === 'full' ? 'spectator' : 'login')}
                  onPreview={() => onOpenTable?.(table.id, 'spectator')}
                  onPrivateJoin={() => onOpenTable?.(table.id, 'login')}
                />
              ))}
            </div>
          </section>
        </section>
      </main>
    </PremiumBackdrop>
  );
}
