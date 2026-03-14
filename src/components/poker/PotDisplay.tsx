import { Coins } from 'lucide-react';

interface PotDisplayProps {
  amount: number;
}

export default function PotDisplay({ amount }: PotDisplayProps) {
  return (
    <div className="bg-gradient-to-br from-amber-600/90 via-amber-700/90 to-amber-800/90 backdrop-blur-md px-6 py-3 rounded-full border-2 border-amber-400/50 shadow-2xl shadow-amber-900/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      <div className="relative z-10 flex items-center gap-2">
        <Coins className="w-5 h-5 text-amber-200" />
        <div className="flex flex-col">
          <div className="text-xs font-medium text-amber-200">POT</div>
          <div className="text-xl font-bold text-white">${amount.toLocaleString()}</div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
    </div>
  );
}
