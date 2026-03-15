import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  subtitle?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: 'amber' | 'green' | 'blue' | 'red';
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  subtitle,
  trend,
  color = 'amber'
}: StatCardProps) {
  const tones = {
    amber: 'from-[#d7b27d]/12 to-transparent text-[#e4bf87]',
    green: 'from-[#8c9d67]/14 to-transparent text-[#d9e1c8]',
    blue: 'from-[#4b6178]/16 to-transparent text-[#cbd9ea]',
    red: 'from-[#8d4f47]/16 to-transparent text-[#efd7d1]'
  };
  const iconToneClass = tones[color].split(' ')[2] ?? 'text-[#e4bf87]';

  return (
    <article className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.92),rgba(9,4,7,0.96))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
      <div className={`pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] ${tones[color]} opacity-90`} />
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/18">
            <Icon className={`h-5 w-5 ${iconToneClass}`} />
          </div>
          {trend && (
            <div className={`rounded-full px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] ${trend.isPositive ? 'bg-[#8c9d67]/18 text-[#e3edd2]' : 'bg-[#8d4f47]/20 text-[#f2d5cf]'}`}>
              {trend.isPositive ? '+' : '-'}
              {trend.value}%
            </div>
          )}
        </div>

        <div className="mt-5 club-label text-[#d6b078]">{title}</div>
        <div className="mt-3 text-3xl font-semibold text-[#fff4e7]">{value}</div>
        {subtitle && <div className="mt-2 text-xs leading-6 text-[#eadcc9]/64">{subtitle}</div>}
      </div>
    </article>
  );
}
