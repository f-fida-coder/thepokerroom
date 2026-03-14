interface CommunityCardsProps {
  cards: string[];
}

export default function CommunityCards({ cards }: CommunityCardsProps) {
  const emptyCards = 5 - cards.length;

  return (
    <div className="flex gap-3 justify-center">
      {cards.map((card, i) => (
        <div
          key={i}
          className="w-16 h-24 bg-white rounded-lg shadow-2xl border-2 border-gray-300 flex items-center justify-center text-2xl font-bold transform hover:scale-105 transition-transform"
          style={{
            animation: `slideIn 0.3s ease-out ${i * 0.1}s backwards`
          }}
        >
          {card}
        </div>
      ))}
      {Array.from({ length: emptyCards }).map((_, i) => (
        <div
          key={`empty-${i}`}
          className="w-16 h-24 bg-gradient-to-br from-red-900/20 to-red-950/20 rounded-lg border-2 border-dashed border-red-800/30 backdrop-blur-sm"
        />
      ))}
    </div>
  );
}
