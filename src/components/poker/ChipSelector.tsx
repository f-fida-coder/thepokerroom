import { useState } from 'react';
import { Minus, Plus, Sparkles } from 'lucide-react';
import Button from '../common/Button';

interface ChipSelectorProps {
  min: number;
  max: number;
  onConfirm: (amount: number) => void;
  onCancel: () => void;
}

export default function ChipSelector({ min, max, onConfirm, onCancel }: ChipSelectorProps) {
  const [amount, setAmount] = useState(min);
  const chipValues = [min, Math.min(max, min * 2), Math.min(max, Math.max(min, 500)), Math.min(max, 1000), max];

  return (
    <div className="w-full max-w-xl rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.94),rgba(9,4,7,0.98))] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.48)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="club-label text-[#d6b078]">Raise Amount</div>
          <h3 className="club-display mt-3 text-4xl text-[#fff4e7]">Choose your raise</h3>
          <p className="mt-4 text-sm leading-7 text-[#eadcc9]/72">
            Set your raise size, confirm the amount, and return straight to the hand.
          </p>
        </div>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d3aa6d]/16 bg-[#d3aa6d]/10">
          <Sparkles className="h-6 w-6 text-[#dfb881]" />
        </div>
      </div>

      <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
        <div className="club-display text-center text-5xl text-[#fff2de]">${amount.toLocaleString()}</div>

        <div className="mt-6 flex items-center gap-4">
          <button
            type="button"
            onClick={() => setAmount((current) => Math.max(min, current - 20))}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/18 transition hover:border-[#d3aa6d]/20 hover:bg-white/[0.06]"
          >
            <Minus className="h-5 w-5 text-[#fff2de]" />
          </button>

          <input
            type="range"
            min={min}
            max={max}
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-[#c48b4f]"
          />

          <button
            type="button"
            onClick={() => setAmount((current) => Math.min(max, current + 20))}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/18 transition hover:border-[#d3aa6d]/20 hover:bg-white/[0.06]"
          >
            <Plus className="h-5 w-5 text-[#fff2de]" />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-[#eadcc9]/64">
          <span>${min}</span>
          <span>${max}</span>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-5">
        {chipValues.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setAmount(value)}
            className="rounded-[20px] border border-white/10 bg-white/[0.04] px-3 py-4 text-center transition hover:-translate-y-0.5 hover:border-[#d3aa6d]/20 hover:bg-white/[0.06]"
          >
            <div className="club-label text-[#d6b078]">Quick</div>
            <div className="mt-2 text-lg font-semibold text-[#fff1de]">${value}</div>
          </button>
        ))}
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <Button variant="ghost" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => onConfirm(amount)}>
          Confirm Raise
        </Button>
      </div>
    </div>
  );
}
