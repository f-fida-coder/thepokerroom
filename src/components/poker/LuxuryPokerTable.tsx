export interface LuxurySeat {
  id: string;
  name: string;
  stack: number;
  bet: number;
  position: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  label: string;
  note?: string;
  isDealer?: boolean;
  isHero?: boolean;
  isActive?: boolean;
  isFolded?: boolean;
  cards?: string[];
  cardsVisible?: boolean;
  showCardBacks?: boolean;
}

interface LuxuryPokerTableProps {
  seats: LuxurySeat[];
  board: string[];
  pot: number;
  roomLabel: string;
  tableLabel: string;
  announcement: string;
  tags?: string[];
  showHeader?: boolean;
  immersive?: boolean;
  detachedSeatIds?: string[];
  hiddenBetSeatIds?: string[];
  className?: string;
}

function formatMoney(amount: number) {
  return `$${amount.toLocaleString()}`;
}

function isRedCard(card: string) {
  return card.includes('♦') || card.includes('♥');
}

export default function LuxuryPokerTable({
  seats,
  board,
  pot,
  roomLabel,
  tableLabel,
  announcement,
  tags = [],
  showHeader = true,
  immersive = false,
  detachedSeatIds = [],
  hiddenBetSeatIds = [],
  className = ''
}: LuxuryPokerTableProps) {
  const detachedSeatSet = new Set(detachedSeatIds);
  const hiddenBetSeatSet = new Set(hiddenBetSeatIds);
  const wrapperClass = immersive
    ? 'relative overflow-hidden rounded-[42px] border border-white/8 bg-[linear-gradient(180deg,rgba(22,8,11,0.88),rgba(7,3,5,0.98))] shadow-[0_40px_140px_rgba(0,0,0,0.52)]'
    : 'relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(28,10,14,0.88),rgba(8,4,6,0.96))] shadow-[0_28px_90px_rgba(0,0,0,0.42)]';
  const stageClass = immersive
    ? 'club-stage club-stage--immersive relative isolate overflow-hidden rounded-[42px] px-3 pb-8 pt-3 sm:px-5 sm:pb-10 sm:pt-5 lg:px-8 lg:pb-12'
    : 'club-stage relative isolate overflow-hidden rounded-[34px] px-4 pb-6 pt-4 sm:px-6 sm:pt-6 lg:px-8 lg:pb-8';
  const contentClass = immersive ? 'relative z-10 mx-auto max-w-[1160px]' : 'relative z-10 mx-auto max-w-[980px]';

  return (
    <div className={`${wrapperClass} ${className}`}>
      <div className={stageClass}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,221,168,0.18),transparent_24%),linear-gradient(180deg,rgba(46,11,17,0.22),rgba(7,3,4,0.2))]" />
        <div className="absolute inset-y-0 left-0 w-16 bg-[linear-gradient(90deg,rgba(65,12,19,0.88),transparent)] sm:w-24" />
        <div className="absolute inset-y-0 right-0 w-16 bg-[linear-gradient(270deg,rgba(65,12,19,0.88),transparent)] sm:w-24" />
        <div className="club-chandelier left-[18%]" />
        <div className="club-chandelier left-1/2 -translate-x-1/2" />
        <div className="club-chandelier right-[18%]" />

        <div className={contentClass}>
          {showHeader && (
            <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-full border border-white/8 bg-black/20 px-4 py-3 backdrop-blur-xl">
              <div>
                <div className="club-label text-[#d7b27d]">{roomLabel}</div>
                <div className="mt-1 text-sm text-[#eadcca]/82">{tableLabel}</div>
              </div>
              <div className="flex flex-wrap gap-2 text-[0.72rem] uppercase tracking-[0.22em] text-[#d7b27d]">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#d7b27d]/14 bg-[#d7b27d]/10 px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className={`club-table ${immersive ? 'club-table--immersive' : ''}`}>
            <div className="club-table__ground" />
            <div className="club-table__underside" />
            <div className="club-table__rail" />
            <div className="club-table__trim" />
            <div className="club-table__felt">
              <div className="club-table__brand">
                <span>The poker room</span>
                <strong>{announcement}</strong>
              </div>

              <div className="club-chip-stack club-chip-stack--left">
                <span className="club-chip club-chip--gold" />
                <span className="club-chip club-chip--cream" />
                <span className="club-chip club-chip--burgundy" />
              </div>
              <div className="club-chip-stack club-chip-stack--right">
                <span className="club-chip club-chip--cream" />
                <span className="club-chip club-chip--gold" />
                <span className="club-chip club-chip--burgundy" />
              </div>

              <div className="club-pot">
                <span className="club-pot__label">Main pot</span>
                <strong>{formatMoney(pot)}</strong>
                <div className="club-board">
                  {board.length === 0
                    ? [0, 1, 2, 3, 4].map((slot) => (
                        <div key={slot} className="luxury-card-face luxury-card-face--back">
                          ?
                        </div>
                      ))
                    : board.map((card) => (
                        <div
                          key={card}
                          className={`luxury-card-face ${isRedCard(card) ? 'luxury-card-face--red' : ''}`}
                        >
                          {card}
                        </div>
                      ))}
                </div>
              </div>
            </div>

            {seats.map((seat) => {
              if (detachedSeatSet.has(seat.id)) {
                return null;
              }

              const seatClass = `club-seat club-seat--${seat.position}`;
              const betClass = `club-bet-marker club-bet-marker--${seat.position}`;

              return (
                <div key={seat.id}>
                  <div
                    className={`${seatClass} ${seat.isHero ? 'club-seat--hero' : ''} ${seat.isActive ? 'club-seat--active' : ''} ${
                      seat.isFolded ? 'club-seat--folded' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="club-seat__status">{seat.label}</span>
                      {seat.isDealer && <div className="club-seat__dealer">D</div>}
                    </div>
                    <strong>{seat.name}</strong>
                    <div className="club-seat__stack">{formatMoney(seat.stack)} behind</div>
                    {seat.note && <div className="club-seat__note">{seat.note}</div>}

                    {(seat.cardsVisible || seat.showCardBacks) && (
                      <div className="club-seat__cards">
                        {(seat.cards ?? ['?', '?']).map((card, index) => (
                          <div
                            key={`${seat.id}-${index}-${card}`}
                            className={`club-seat-card ${
                              seat.cardsVisible
                                ? isRedCard(card)
                                  ? 'club-seat-card--red'
                                  : ''
                                : 'club-seat-card--back'
                            }`}
                          >
                            {seat.cardsVisible ? card : '?'}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {seat.bet > 0 && !hiddenBetSeatSet.has(seat.id) && (
                    <div className={`${betClass} ${seat.isActive ? 'club-bet-marker--active' : ''}`}>
                      <div className="club-bet-marker__chips">
                        <span className="club-chip club-chip--gold" />
                        <span className="club-chip club-chip--cream" />
                        <span className="club-chip club-chip--burgundy" />
                      </div>
                      <strong>{formatMoney(seat.bet)}</strong>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
