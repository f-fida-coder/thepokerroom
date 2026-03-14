import { Crown, UserPlus } from 'lucide-react';
import PremiumBackdrop from '../components/common/PremiumBackdrop';
import PremiumNav from '../components/common/PremiumNav';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import type { DemoPage } from '../types/demo';

interface RegisterProps {
  onNavigate?: (page: DemoPage) => void;
}

export default function Register({ onNavigate }: RegisterProps) {
  return (
    <PremiumBackdrop roomGlow="burgundy">
      <PremiumNav current="register" onNavigate={onNavigate} title="Player onboarding" compact />

      <main className="mx-auto flex min-h-[calc(100vh-96px)] max-w-[1440px] items-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid w-full gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.92),rgba(9,4,7,0.96))] p-7 shadow-[0_28px_90px_rgba(0,0,0,0.42)] sm:p-8">
            <div className="club-label text-[#d6b078]">Onboarding</div>
            <h1 className="club-display mt-4 text-5xl text-[#fff4e8]">Create a premium player profile for the demo.</h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#eadcc9]/72">
              This screen gives the showcase a complete club-style registration flow without needing any real backend work yet.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ['Invite profile', 'Reserved for website code and private access copy'],
                ['Display identity', 'Username, room alias, and table profile styling'],
                ['Session controls', 'Ready for future PIN, code, or approval state'],
                ['Demo continuity', 'Moves directly into the premium lobby experience']
              ].map(([title, copy]) => (
                <div key={title} className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-sm font-semibold text-[#fff1de]">{title}</div>
                  <p className="mt-2 text-sm leading-7 text-[#eadcc9]/70">{copy}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.92),rgba(9,4,7,0.96))] p-7 shadow-[0_28px_90px_rgba(0,0,0,0.42)] sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="club-label text-[#d6b078]">Registration Shell</div>
                <h2 className="club-display mt-4 text-4xl text-[#fff4e7]">Player onboarding card</h2>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d3aa6d]/16 bg-[#d3aa6d]/10">
                <UserPlus className="h-6 w-6 text-[#dfb881]" />
              </div>
            </div>

            <form className="mt-8 space-y-5">
              <Input label="Username" placeholder="velvet_river_guest" />
              <Input label="Email" type="email" placeholder="player@demo.club" />
              <Input label="Password" type="password" placeholder="Create a password" />
              <Input label="Invite or site code" placeholder="VR-PRIVATE" />
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" size="lg" type="button" onClick={() => onNavigate?.('lobby')}>
                  Continue to Lobby
                </Button>
                <Button variant="ghost" size="lg" type="button" onClick={() => onNavigate?.('login')}>
                  Back to Login
                </Button>
              </div>
            </form>

            <div className="mt-8 flex items-center gap-3 rounded-[22px] border border-white/10 bg-white/[0.04] p-4 text-sm text-[#eadcc9]/72">
              <Crown className="h-5 w-5 text-[#dfb881]" />
              The form is demo-only and exists to complete the premium product story visually.
            </div>
          </section>
        </div>
      </main>
    </PremiumBackdrop>
  );
}
