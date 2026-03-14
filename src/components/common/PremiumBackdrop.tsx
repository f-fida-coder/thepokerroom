import type { ReactNode } from 'react';

interface PremiumBackdropProps {
  children: ReactNode;
  roomGlow?: 'amber' | 'burgundy';
}

export default function PremiumBackdrop({
  children,
  roomGlow = 'amber'
}: PremiumBackdropProps) {
  const glow =
    roomGlow === 'burgundy'
      ? 'bg-[radial-gradient(circle_at_top,rgba(168,41,63,0.14),transparent_18%),radial-gradient(circle_at_20%_16%,rgba(95,19,36,0.22),transparent_22%),radial-gradient(circle_at_84%_14%,rgba(96,53,43,0.18),transparent_26%),linear-gradient(180deg,#120508_0%,#080304_34%,#050203_100%)]'
      : 'bg-[radial-gradient(circle_at_top,rgba(255,211,142,0.12),transparent_18%),radial-gradient(circle_at_15%_20%,rgba(121,23,39,0.22),transparent_22%),radial-gradient(circle_at_85%_18%,rgba(119,78,42,0.18),transparent_22%),linear-gradient(180deg,#110508_0%,#070203_30%,#050203_100%)]';

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#060204] text-[#f5ebdc]">
      <div className={`pointer-events-none absolute inset-0 ${glow}`} />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[760px] bg-[linear-gradient(90deg,rgba(44,8,15,0.65),transparent_16%,transparent_84%,rgba(44,8,15,0.65))]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,216,154,0.16),rgba(255,216,154,0.03)_38%,transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute inset-0 opacity-30 luxury-noise" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
