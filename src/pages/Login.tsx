import { useState } from 'react';
import { ChevronRight, LockKeyhole, ShieldCheck, Sparkles } from 'lucide-react';
import PremiumBackdrop from '../components/common/PremiumBackdrop';
import PremiumNav from '../components/common/PremiumNav';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import type { DemoPage, DemoTable } from '../types/demo';

interface LoginProps {
  onNavigate?: (page: DemoPage) => void;
  onEnterTable?: (tableId: string) => void;
  table: DemoTable;
}

const accessSteps = [
  {
    title: 'Choose your room',
    description: 'Select the table that matches your stakes, game type, and room atmosphere.'
  },
  {
    title: 'Enter private access',
    description: 'Confirm your player alias and room code in one clean join step.'
  },
  {
    title: 'Take your seat',
    description: 'Move straight into the table UI without any extra setup between access and play.'
  }
];

export default function Login({ onNavigate, onEnterTable, table }: LoginProps) {
  const [displayName, setDisplayName] = useState('Velvet Guest');
  const [tableCode, setTableCode] = useState(table.roomCode ?? 'VR-205');
  const [accessCode, setAccessCode] = useState('CLUB-247');

  const handleEnterTable = () => {
    onEnterTable?.(table.id);
  };

  return (
    <PremiumBackdrop roomGlow="burgundy">
      <PremiumNav current="login" onNavigate={onNavigate} title="Private table access" compact />

      <main className="mx-auto flex min-h-[calc(100vh-96px)] max-w-[1440px] items-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid w-full gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(12,20,16,0.92),rgba(5,8,7,0.96))] p-7 shadow-[0_28px_90px_rgba(0,0,0,0.42)] sm:p-8">
            <div className="club-label text-[#d6b078]">Join Flow</div>
            <h1 className="club-display mt-4 max-w-[11ch] text-5xl text-[#fff4e8]">
              Enter the room and take your seat in one smooth step.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#eadcc9]/72">
              This is the player access moment in the journey: confirm your alias, add the room code, and move directly into {table.name}.
            </p>

            <div className="mt-8 rounded-[30px] border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="club-label text-[#d6b078]">Selected table</div>
                  <div className="mt-3 text-2xl font-semibold text-[#fff1de]">{table.name}</div>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[#d1aa71]/76">
                    {table.gameType} · {table.stakes}
                  </p>
                </div>
                <div className="rounded-full border border-[#d3aa6d]/16 bg-[#d3aa6d]/10 px-4 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-[#e4c089]">
                  {table.currentPlayers}/{table.maxPlayers} seated
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  ['Room code', table.roomCode ?? 'Private'],
                  ['Buy-in', table.buyIn ?? 'Curated'],
                  ['Atmosphere', table.ambiance ?? 'Premium private room']
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[22px] border border-white/10 bg-black/18 p-4">
                    <div className="club-label text-[#d6b078]">{label}</div>
                    <div className="mt-3 text-sm leading-7 text-[#fff1de]">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {accessSteps.map((step, index) => (
                <div key={step.title} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-start gap-4">
                    <div className="club-display mt-0.5 text-3xl text-[#f3d59f]">0{index + 1}</div>
                    <div>
                      <div className="text-lg font-semibold text-[#fff2df]">{step.title}</div>
                      <p className="mt-2 text-sm leading-7 text-[#eadcc9]/70">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.92),rgba(9,4,7,0.96))] p-7 shadow-[0_28px_90px_rgba(0,0,0,0.42)] sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="club-label text-[#d6b078]">Private Access</div>
                <h2 className="club-display mt-4 text-4xl text-[#fff4e7]">Player join form</h2>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d3aa6d]/16 bg-[#d3aa6d]/10">
                <LockKeyhole className="h-6 w-6 text-[#dfb881]" />
              </div>
            </div>

            <form
              className="mt-8 space-y-5"
              onSubmit={(event) => {
                event.preventDefault();
                handleEnterTable();
              }}
            >
              <Input
                label="Player alias"
                value={displayName}
                onChange={(event) => setDisplayName(event.target.value)}
                placeholder="Velvet Guest"
              />
              <Input
                label="Private table code"
                value={tableCode}
                onChange={(event) => setTableCode(event.target.value)}
                placeholder="VR-205"
              />
              <Input
                label="Access code"
                value={accessCode}
                onChange={(event) => setAccessCode(event.target.value)}
                placeholder="CLUB-247"
              />

              <div className="rounded-[22px] border border-[#d3aa6d]/14 bg-[#d3aa6d]/10 p-4 text-sm leading-7 text-[#f1e4d0]">
                Demo mode only. This step exists to make the player journey feel complete: browse tables, enter private access, then sit down and play.
              </div>

              <div className="flex flex-wrap gap-3">
                <Button variant="primary" size="lg" type="submit">
                  Enter Table
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="secondary" size="lg" type="button" onClick={() => onNavigate?.('lobby')}>
                  View Games
                </Button>
              </div>
            </form>

            <div className="mt-8 rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d3aa6d]/16 bg-[#d3aa6d]/10">
                  <ShieldCheck className="h-5 w-5 text-[#dfb881]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#fff2df]">Secure player entry</div>
                  <p className="mt-1 text-sm leading-6 text-[#eadcc9]/68">
                    Players see only the private access step they need before the table opens.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-4">
              <div className="flex items-center gap-3 text-sm text-[#eadcc9]/72">
                <Sparkles className="h-5 w-5 text-[#dfb881]" />
                Staff access stays separate from the public player journey.
              </div>
              <button
                type="button"
                onClick={() => onNavigate?.('admin-login')}
                className="text-sm font-medium text-[#f0c98c] transition hover:text-[#ffe0b0]"
              >
                Staff access
              </button>
            </div>
          </section>
        </div>
      </main>
    </PremiumBackdrop>
  );
}
