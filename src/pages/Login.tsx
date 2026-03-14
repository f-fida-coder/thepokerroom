import { ShieldCheck, Sparkles } from 'lucide-react';
import PremiumBackdrop from '../components/common/PremiumBackdrop';
import PremiumNav from '../components/common/PremiumNav';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import type { DemoPage } from '../types/demo';

interface LoginProps {
  onNavigate?: (page: DemoPage) => void;
}

export default function Login({ onNavigate }: LoginProps) {
  return (
    <PremiumBackdrop roomGlow="burgundy">
      <PremiumNav current="login" onNavigate={onNavigate} title="Demo access" compact />

      <main className="mx-auto flex min-h-[calc(100vh-96px)] max-w-[1440px] items-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid w-full gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.92),rgba(9,4,7,0.96))] p-7 shadow-[0_28px_90px_rgba(0,0,0,0.42)] sm:p-8">
            <div className="club-label text-[#d6b078]">Player Access</div>
            <h1 className="club-display mt-4 text-5xl text-[#fff4e8]">Enter the private room demo.</h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#eadcc9]/72">
              Authentication is mocked for this showcase build. Use this screen as the premium player-entry moment,
              then move directly into the lobby and live table demo.
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Private-club styling and premium access flow',
                'Host-controlled room entry narrative',
                'Direct movement into tables, spectator mode, and admin panel'
              ].map((item) => (
                <div key={item} className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-[#eadcc9]/72">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.92),rgba(9,4,7,0.96))] p-7 shadow-[0_28px_90px_rgba(0,0,0,0.42)] sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="club-label text-[#d6b078]">Demo Login</div>
                <h2 className="club-display mt-4 text-4xl text-[#fff4e7]">Player sign-in shell</h2>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d3aa6d]/16 bg-[#d3aa6d]/10">
                <Sparkles className="h-6 w-6 text-[#dfb881]" />
              </div>
            </div>

            <form className="mt-8 space-y-5">
              <Input label="Username or email" placeholder="marble_ace" />
              <Input label="Password" type="password" placeholder="••••••••" />
              <div className="rounded-[22px] border border-[#d3aa6d]/14 bg-[#d3aa6d]/10 p-4 text-sm leading-7 text-[#f1e4d0]">
                Demo mode only. No real authentication is required to continue.
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" size="lg" onClick={() => onNavigate?.('lobby')} type="button">
                  Enter Lobby
                </Button>
                <Button variant="ghost" size="lg" onClick={() => onNavigate?.('admin-dashboard')} type="button">
                  Open Admin Panel
                </Button>
              </div>
            </form>

            <div className="mt-8 flex items-center gap-3 rounded-[22px] border border-white/10 bg-white/[0.04] p-4 text-sm text-[#eadcc9]/72">
              <ShieldCheck className="h-5 w-5 text-[#dfb881]" />
              Website code and table code flows can still be demonstrated visually later without blocking entry.
            </div>
          </section>
        </div>
      </main>
    </PremiumBackdrop>
  );
}
