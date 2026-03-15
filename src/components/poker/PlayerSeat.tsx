import { User } from 'lucide-react';

interface PlayerSeatProps {
  player?: {
    name: string;
    balance: number;
    bet: number;
    cards?: string[];
    isActive?: boolean;
    isFolded?: boolean;
    isDealer?: boolean;
  };
  position: number;
  totalSeats: number;
}

export default function PlayerSeat({ player }: PlayerSeatProps) {
  if (!player) {
    return (
      <div className="flex flex-col items-center gap-2">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-dashed border-gray-700/50 flex items-center justify-center backdrop-blur-sm">
          <User className="w-8 h-8 text-gray-600" />
        </div>
        <div className="text-xs text-gray-600">Empty Seat</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2 relative">
      {player.isDealer && (
        <div className="absolute -top-6 bg-amber-500 text-black text-xs font-bold px-2 py-1 rounded-full shadow-lg">
          D
        </div>
      )}

      <div className={`relative ${player.isActive ? 'animate-pulse' : ''}`}>
        <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${
          player.isFolded
            ? 'from-gray-700 to-gray-800 opacity-50'
            : player.isActive
            ? 'from-amber-500 via-amber-600 to-amber-700'
            : 'from-gray-700 via-gray-800 to-gray-900'
        } border-4 ${
          player.isActive ? 'border-amber-400 shadow-lg shadow-amber-500/50' : 'border-gray-600'
        } flex items-center justify-center`}>
          <User className={`w-10 h-10 ${player.isFolded ? 'text-gray-500' : 'text-white'}`} />
        </div>

        {player.isActive && (
          <div className="absolute -inset-1 rounded-full bg-amber-500/20 animate-ping" />
        )}
      </div>

      {player.cards && !player.isFolded && (
        <div className="flex gap-1 -mt-1">
          {player.cards.map((card, i) => (
            <div
              key={i}
              className="w-8 h-11 bg-white rounded shadow-lg border border-gray-300 flex items-center justify-center text-xs font-bold"
            >
              {card}
            </div>
          ))}
        </div>
      )}

      <div className={`bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border ${
        player.isActive ? 'border-amber-500/50' : 'border-white/10'
      } min-w-[100px] text-center`}>
        <div className={`text-sm font-semibold ${player.isFolded ? 'text-gray-500' : 'text-white'}`}>
          {player.name}
        </div>
        <div className={`text-xs ${player.isFolded ? 'text-gray-600' : 'text-amber-400'}`}>
          ${player.balance.toLocaleString()}
        </div>
      </div>

      {player.bet > 0 && !player.isFolded && (
        <div className="absolute -bottom-16 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 px-3 py-1.5 rounded-lg border border-amber-500/50 shadow-lg shadow-amber-900/50">
          <div className="text-sm font-bold text-white">${player.bet}</div>
        </div>
      )}
    </div>
  );
}
