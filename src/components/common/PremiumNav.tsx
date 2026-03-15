import { LayoutDashboard, LockKeyhole, Spade, Table2 } from 'lucide-react';
import type { DemoPage } from '../../types/demo';

interface PremiumNavProps {
  current: DemoPage;
  onNavigate?: (page: DemoPage) => void;
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

function getNavItems(current: DemoPage, isAdminSurface: boolean) {
  if (isAdminSurface) {
    return [
      { label: 'Player Site', page: 'landing' as DemoPage },
      { label: 'Staff Access', page: 'admin-login' as DemoPage },
      { label: 'Dashboard', page: 'admin-dashboard' as DemoPage }
    ];
  }

  const items: { label: string; page: DemoPage }[] = [
    { label: 'Home', page: 'landing' },
    { label: 'View Games', page: 'lobby' },
    { label: 'Join Private Table', page: 'login' }
  ];

  if (current === 'table') {
    items.splice(2, 0, { label: 'Live Table', page: 'table' });
  }

  if (current === 'spectator') {
    items.splice(2, 0, { label: 'Table Preview', page: 'spectator' });
  }

  return items;
}

export default function PremiumNav({
  current,
  onNavigate,
  title,
  subtitle,
  compact = false
}: PremiumNavProps) {
  const isAdminSurface = current === 'admin-login' || current === 'admin-dashboard';
  const navItems = getNavItems(current, isAdminSurface);

  return (
    <div className="sticky top-0 z-40 border-b border-white/6 bg-[#120609]/78 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => onNavigate?.('landing')}
          className="flex items-center gap-3 whitespace-nowrap"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f1cf9b]/20 bg-[linear-gradient(180deg,rgba(125,53,37,0.96),rgba(50,16,14,0.96))] shadow-[0_12px_28px_rgba(0,0,0,0.38)]">
            <Spade className="h-5 w-5 text-[#f2c585]" />
          </div>
          <div className={compact ? 'hidden sm:block' : ''}>
            <div className="club-display text-2xl leading-none text-[#fff4e8]">Private Card Room</div>
            <div className="mt-1 text-[0.68rem] uppercase tracking-[0.34em] text-[#d2ae73]/70">
              {subtitle ?? (isAdminSurface ? 'Staff Access' : 'Premium Player Lounge')}
            </div>
          </div>
        </button>

        {!compact && (
          <div className="hide-scrollbar flex-1 overflow-x-auto">
            <div className="mx-4 flex min-w-max items-center gap-1 rounded-full border border-white/8 bg-white/[0.03] p-1.5">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => onNavigate?.(item.page)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    current === item.page
                      ? 'bg-[#d1a366]/16 text-[#fff0dd]'
                      : 'text-[#e9dcc9]/76 hover:bg-white/[0.06] hover:text-[#fff2df]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="ml-auto flex items-center gap-3">
          {title && !compact && (
            <div className="hidden text-right xl:block">
              <div className="club-label text-[#d7b27d]">{isAdminSurface ? 'Current Surface' : 'Current Room'}</div>
              <div className="mt-1 text-sm text-[#f2e5d2]">{title}</div>
            </div>
          )}

          {isAdminSurface ? (
            <>
              <button
                type="button"
                onClick={() => onNavigate?.('landing')}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium tracking-[0.02em] text-[#f5ecdf] backdrop-blur-md transition duration-300 hover:border-[#d0a66a]/25 hover:bg-white/[0.08]"
              >
                <Table2 className="h-4 w-4" />
                Player Site
              </button>
              <button
                type="button"
                onClick={() => onNavigate?.('admin-dashboard')}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f4d5a3]/25 bg-[linear-gradient(180deg,#f0c98a_0%,#c58a4e_48%,#8e5b31_100%)] px-5 py-2.5 text-sm font-semibold tracking-[0.02em] text-[#1d1109] shadow-[0_16px_34px_rgba(157,98,46,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(157,98,46,0.45)]"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => onNavigate?.('login')}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium tracking-[0.02em] text-[#f5ecdf] backdrop-blur-md transition duration-300 hover:border-[#d0a66a]/25 hover:bg-white/[0.08]"
              >
                <LockKeyhole className="h-4 w-4" />
                Join Private Table
              </button>
              <button
                type="button"
                onClick={() => onNavigate?.('lobby')}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f4d5a3]/25 bg-[linear-gradient(180deg,#f0c98a_0%,#c58a4e_48%,#8e5b31_100%)] px-5 py-2.5 text-sm font-semibold tracking-[0.02em] text-[#1d1109] shadow-[0_16px_34px_rgba(157,98,46,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(157,98,46,0.45)]"
              >
                <Table2 className="h-4 w-4" />
                Enter a Table
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
