import PlayerSeat from './PlayerSeat';
import CommunityCards from './CommunityCards';
import PotDisplay from './PotDisplay';

interface Player {
  name: string;
  balance: number;
  bet: number;
  cards?: string[];
  isActive?: boolean;
  isFolded?: boolean;
  isDealer?: boolean;
}

interface PokerTableProps {
  players: (Player | null)[];
  communityCards: string[];
  pot: number;
}

export default function PokerTable({ players, communityCards, pot }: PokerTableProps) {
  const totalSeats = 9;
  const seats = [...players];
  while (seats.length < totalSeats) {
    seats.push(null);
  }

  const getSeatPosition = (index: number) => {
    const positions = [
      { top: '50%', left: '50%', transform: 'translate(-50%, 180px)' },
      { top: '50%', left: '50%', transform: 'translate(-180px, 140px)' },
      { top: '50%', left: '50%', transform: 'translate(-240px, 0)' },
      { top: '50%', left: '50%', transform: 'translate(-180px, -140px)' },
      { top: '50%', left: '50%', transform: 'translate(-50%, -180px)' },
      { top: '50%', left: '50%', transform: 'translate(80px, -180px)' },
      { top: '50%', left: '50%', transform: 'translate(140px, -140px)' },
      { top: '50%', left: '50%', transform: 'translate(200px, 0)' },
      { top: '50%', left: '50%', transform: 'translate(140px, 140px)' }
    ];
    return positions[index] || positions[0];
  };

  return (
    <div className="relative w-full h-full min-h-[700px] flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-950 to-black rounded-[200px] shadow-2xl border-8 border-amber-900/50">
            <div className="absolute inset-4 bg-gradient-to-br from-red-800/90 via-red-900/90 to-red-950/90 rounded-[180px] shadow-inner" />
            <div className="absolute inset-8 border-4 border-amber-700/30 rounded-[160px]" />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-6">
            <PotDisplay amount={pot} />
            <CommunityCards cards={communityCards} />
          </div>
        </div>
      </div>

      {seats.map((player, index) => {
        const position = getSeatPosition(index);
        return (
          <div
            key={index}
            className="absolute z-20"
            style={position}
          >
            <PlayerSeat
              player={player || undefined}
              position={index}
              totalSeats={totalSeats}
            />
          </div>
        );
      })}
    </div>
  );
}
