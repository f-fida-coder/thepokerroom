import { Crown, Eye, Layers3, LockKeyhole, MoveRight, Sparkles, Users } from 'lucide-react';
import type { DemoTable } from '../../types/demo';
import Button from '../common/Button';

interface TableCardProps {
  table: DemoTable;
  parallelCount: number;
  onEnter: () => void;
  onPreview: () => void;
  onPrivateJoin?: () => void;
}

export default function TableCard({
  table,
  parallelCount,
  onEnter,
  onPreview,
  onPrivateJoin
}: TableCardProps) {
  const statusMap = {
    waiting: {
      label: 'Seats opening',
      tone: 'border-[#7f6c41]/18 bg-[#7f6c41]/10 text-[#f0ddb8]'
    },
    playing: {
      label: 'Playing live',
      tone: 'border-[#b68955]/18 bg-[#b68955]/10 text-[#f6e2bf]'
    },
    full: {
      label: 'View only',
      tone: 'border-[#5c5169]/18 bg-[#5c5169]/10 text-[#e4dbf7]'
    }
  } as const;

  const status = statusMap[table.status];
  const primaryLabel = table.status === 'full' ? 'View Table' : 'Enter a Table';
  const secondaryLabel = table.isPrivate ? 'Join Private Table' : 'Preview Table';

  return (
    <article className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.92),rgba(9,4,7,0.96))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.38)] transition duration-300 hover:-translate-y-1 hover:border-[#d3aa6d]/20">
      <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(211,162,93,0.14),transparent_72%)] blur-3xl transition duration-500 group-hover:scale-125" />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="club-display text-3xl text-[#fff3e3]">{table.name}</h3>
              {table.isVIP && <Crown className="h-5 w-5 text-[#e0ba84]" />}
              {table.isPrivate && <LockKeyhole className="h-4 w-4 text-[#d9b57a]" />}
            </div>
            <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[#d1aa71]/80">
              {table.gameType} • {table.stakes}
            </p>
          </div>
          <span className={`rounded-full border px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] ${status.tone}`}>
            {status.label}
          </span>
        </div>

        <div className="mt-6 rounded-[26px] border border-white/10 bg-black/18 p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#eadcc8]/68">
              <Users className="h-4 w-4 text-[#d2ac73]" />
              Seats filled
            </div>
            <div className="text-sm font-medium text-[#fff1dd]">
              {table.currentPlayers}/{table.maxPlayers}
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#eadcc8]/68">
              <Eye className="h-4 w-4 text-[#d2ac73]" />
              Watching live
            </div>
            <div className="text-sm font-medium text-[#fff1dd]">{table.spectators}</div>
          </div>
          <div className="mt-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#eadcc8]/68">
              <Sparkles className="h-4 w-4 text-[#d2ac73]" />
              Room style
            </div>
            <div className="text-right text-sm font-medium text-[#fff1dd]">{table.ambiance ?? 'Premium table floor'}</div>
          </div>
          <div className="mt-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#eadcc8]/68">
              <Layers3 className="h-4 w-4 text-[#d2ac73]" />
              Tables live
            </div>
            <div className="text-right text-sm font-medium text-[#fff1dd]">{parallelCount} rooms available</div>
          </div>
        </div>

        <div className="mt-5 grid gap-3">
          <div className="flex items-center justify-between rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-3">
            <span className="text-sm text-[#eadcc8]/66">Private room code</span>
            <span className="text-sm font-medium text-[#fff1de]">{table.roomCode}</span>
          </div>
          <div className="flex items-center justify-between rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-3">
            <span className="text-sm text-[#eadcc8]/66">Bomb pots</span>
            <span className="text-sm font-medium text-[#fff1de]">{table.bombPot}</span>
          </div>
          <div className="flex items-center justify-between rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-3">
            <span className="text-sm text-[#eadcc8]/66">Buy-in</span>
            <span className="text-sm font-medium text-[#fff1de]">{table.buyIn}</span>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full border border-[#d4af77]/16 bg-[#d4af77]/10 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.2em] text-[#e3c08b]">
            Player access ready
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.2em] text-[#eadcc8]/68">
            {table.status === 'playing' ? 'Open now' : table.status === 'waiting' ? 'Join queue forming' : 'Watch first'}
          </span>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button variant="primary" size="md" onClick={onEnter} className="flex-1">
            {primaryLabel}
            <MoveRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="md"
            onClick={table.isPrivate ? (onPrivateJoin ?? onPreview) : onPreview}
          >
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </article>
  );
}
