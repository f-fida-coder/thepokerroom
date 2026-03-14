import { LayoutDashboard, ShieldCheck } from 'lucide-react';
import PremiumBackdrop from '../components/common/PremiumBackdrop';
import PremiumNav from '../components/common/PremiumNav';
import Button from '../components/common/Button';
import type { DemoPage } from '../types/demo';

interface AdminLoginProps {
  onNavigate?: (page: DemoPage) => void;
}

export default function AdminLogin({ onNavigate }: AdminLoginProps) {
  return (
    <PremiumBackdrop roomGlow="burgundy">
      <PremiumNav current="admin-login" onNavigate={onNavigate} title="Admin demo access" compact />

      <main className="mx-auto flex min-h-[calc(100vh-96px)] max-w-[920px] items-center px-4 py-10 sm:px-6 lg:px-8">
        <section className="w-full rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.94),rgba(9,4,7,0.98))] p-8 shadow-[0_28px_90px_rgba(0,0,0,0.42)] sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="club-label text-[#d6b078]">Admin Demo Mode</div>
              <h1 className="club-display mt-4 text-5xl text-[#fff4e8]">Direct dashboard access is enabled.</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#eadcc9]/72">
                This page remains only as a presentation step. For demo purposes there is no authentication wall, no password requirement, and no restricted admin entry. The panel opens directly.
              </p>
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-[#d3aa6d]/16 bg-[#d3aa6d]/10">
              <ShieldCheck className="h-7 w-7 text-[#dfb881]" />
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'Live table overview cards',
              'Chip requests and player controls',
              'Rake stats and suspicious activity preview',
              'Hand history and replay-oriented admin review'
            ].map((item) => (
              <div key={item} className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-[#eadcc9]/72">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="primary" size="lg" onClick={() => onNavigate?.('admin-dashboard')}>
              <LayoutDashboard className="mr-2 h-5 w-5" />
              Open Admin Dashboard
            </Button>
            <Button variant="ghost" size="lg" onClick={() => onNavigate?.('lobby')}>
              Return to Lobby
            </Button>
          </div>
        </section>
      </main>
    </PremiumBackdrop>
  );
}
