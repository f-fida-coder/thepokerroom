import type { CSSProperties, FormEvent } from 'react';
import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight, Club, LockKeyhole, Settings2, Spade } from 'lucide-react';

type Feature = {
  title: string;
  copy: string;
  icons: LucideIcon[];
};

type Seat = {
  name: string;
  stack: string;
  className: string;
  initials: string;
  tag: string;
  topColor: string;
  bottomColor: string;
};

type Chip = {
  left: string;
  top: string;
  size: number;
  tone: 'dark' | 'gold';
};

const features: Feature[] = [
  {
    title: 'Private Games',
    copy: 'Invite exclusive private games with invited players only.',
    icons: [LockKeyhole],
  },
  {
    title: 'Multiple Poker Modes',
    copy: "Play Texas Hold'em, Omaha, Five-Card Draw, and mixed games.",
    icons: [Club, Spade],
  },
  {
    title: 'Live Game Control',
    copy: 'The host can control blinds, limits, and deal game settings.',
    icons: [Settings2],
  },
];

const tableSeats: Seat[] = [
  {
    name: 'Sophia',
    stack: '60,700',
    className: 'player-seat--north-left',
    initials: 'S',
    tag: 'SB',
    topColor: '#f4d7aa',
    bottomColor: '#7a5731',
  },
  {
    name: 'Eric',
    stack: '58,400',
    className: 'player-seat--north-right',
    initials: 'E',
    tag: 'BB',
    topColor: '#edc89b',
    bottomColor: '#8a4532',
  },
  {
    name: 'Javier',
    stack: '60,700',
    className: 'player-seat--west',
    initials: 'J',
    tag: 'UTG',
    topColor: '#f7d7a9',
    bottomColor: '#4d5a76',
  },
  {
    name: 'Daniel',
    stack: '4,000',
    className: 'player-seat--east',
    initials: 'D',
    tag: 'BTN',
    topColor: '#d7b488',
    bottomColor: '#524742',
  },
];

const heroChips: Chip[] = [
  { left: '2%', top: '51%', size: 88, tone: 'dark' },
  { left: '7%', top: '57%', size: 92, tone: 'dark' },
  { left: '17%', top: '53%', size: 86, tone: 'gold' },
  { left: '14%', top: '64%', size: 80, tone: 'gold' },
  { left: '23%', top: '64%', size: 66, tone: 'dark' },
  { left: '8%', top: '66%', size: 76, tone: 'dark' },
  { left: '78%', top: '49%', size: 52, tone: 'dark' },
  { left: '84%', top: '47%', size: 58, tone: 'gold' },
];

const communityCards = [
  { rank: '7', suit: 'heart', symbol: '\u2665' },
  { rank: '2', suit: 'diamond', symbol: '\u2666' },
  { rank: '4', suit: 'spade', symbol: '\u2660' },
  { rank: '', suit: 'ghost', symbol: '' },
  { rank: '', suit: 'ghost', symbol: '' },
];

export default function Landing() {
  const [accessCode, setAccessCode] = useState('');
  const [status, setStatus] = useState<string>('');
  const securityMessage = status || 'Only invited players can enter this private room.';

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!accessCode.trim()) {
      setStatus('Enter a security code to continue.');
      return;
    }

    setStatus(`Demo access code "${accessCode.trim()}" accepted.`);
  };

  return (
    <div className="landing-page">
      <header className="topbar">
        <a className="brand-mark" href="#" aria-label="The poker room home">
          <img src="/site-icon.svg" alt="" />
        </a>

        <nav className="topbar-actions" aria-label="Primary">
          <a className="nav-button nav-button--ghost" href="#security">
            Login
          </a>
          <a className="nav-button" href="#security">
            Register
          </a>
        </nav>
      </header>

      <main className="landing-main">
        <section className="hero-section">
          <div className="hero-stage">
            <div className="hero-table" aria-hidden="true" />

            <div className="hero-copy">
              <p className="hero-kicker">Secure private poker</p>
              <h1>The poker room</h1>
              <p className="hero-subtitle">Play secure private games with friends.</p>
              <a className="hero-cta" href="#preview">
                Enter poker room
                <ArrowRight aria-hidden="true" />
              </a>
            </div>

            <div className="chip-cloud" aria-hidden="true">
              {heroChips.map((chip) => (
                <span
                  key={`${chip.left}-${chip.top}-${chip.size}`}
                  className={`chip chip--${chip.tone}`}
                  style={
                    {
                      left: chip.left,
                      top: chip.top,
                      width: `${chip.size}px`,
                      height: `${chip.size}px`,
                    } as CSSProperties
                  }
                />
              ))}
            </div>

            <div className="hero-card-burst" aria-hidden="true">
              <div className="floating-card floating-card--front">
                <span className="floating-card__rank">A</span>
                <span className="floating-card__suit">S</span>
              </div>
              <div className="floating-card floating-card--back">S</div>
            </div>

            <form className="security-card" id="security" onSubmit={handleSubmit}>
              <div className="security-accent" aria-hidden="true" />
              <p className="security-eyebrow">
                <LockKeyhole aria-hidden="true" />
                Security access
              </p>
              <h2>Enter your access code to continue</h2>

              <div className="security-row">
                <label className="security-input-shell">
                  <span className="security-input-icon" aria-hidden="true">
                    <LockKeyhole />
                  </span>
                  <input
                    aria-label="Security code"
                    autoComplete="off"
                    name="security-code"
                    onChange={(event) => setAccessCode(event.target.value)}
                    placeholder="Security Code"
                    value={accessCode}
                  />
                </label>
                <button type="submit">Submit</button>
              </div>

              <p className={`security-status ${status ? '' : 'security-status--hint'}`.trim()} aria-live="polite">
                {securityMessage}
              </p>
            </form>
          </div>
        </section>

        <section className="feature-section" aria-labelledby="features-title">
          <h2 className="section-title" id="features-title">
            Features
          </h2>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div
                  className={`feature-icon ${feature.icons.length > 1 ? 'feature-icon--pair' : ''}`}
                  aria-hidden="true"
                >
                  {feature.icons.map((Icon) => (
                    <Icon key={`${feature.title}-${Icon.displayName ?? Icon.name}`} strokeWidth={2.1} />
                  ))}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="preview-section" id="preview" aria-labelledby="preview-title">
          <p className="preview-label" id="preview-title">
            Poker table preview
          </p>

          <div className="preview-stage">
            <div className="preview-table">
              <div className="preview-table__felt" aria-hidden="true" />
              <div className="table-status-icons" aria-hidden="true">
                <span className="table-status-icon table-status-icon--blue">\u2666</span>
                <span className="table-status-icon table-status-icon--copper">\u2665</span>
                <span className="table-status-icon table-status-icon--gold">\u2660</span>
              </div>
              <div className="preview-pot">POT: 18,200</div>

              {tableSeats.map((seat) => (
                <div className={`player-seat ${seat.className}`} key={seat.name}>
                  <div
                    className="player-seat__avatar"
                    style={
                      {
                        '--avatar-top': seat.topColor,
                        '--avatar-bottom': seat.bottomColor,
                      } as CSSProperties
                    }
                  >
                    {seat.initials}
                  </div>
                  <div className="player-seat__meta">
                    <span className="player-seat__tag">{seat.tag}</span>
                    <span className="player-seat__name">{seat.name}</span>
                    <span className="player-seat__stack">{seat.stack}</span>
                  </div>
                </div>
              ))}

              <div className="community-cards" aria-label="Community cards">
                {communityCards.map((card, index) => (
                  <div
                    className={`board-card ${card.suit === 'ghost' ? 'board-card--ghost' : ''}`}
                    key={`${card.rank}-${index}`}
                  >
                    {card.suit === 'ghost' ? null : (
                      <>
                        <span className={`board-card__rank board-card__rank--${card.suit}`}>
                          {card.rank}
                        </span>
                        <span className={`board-card__suit board-card__suit--${card.suit}`}>
                          {card.symbol}
                        </span>
                      </>
                    )}
                  </div>
                ))}
              </div>

              <div className="dealer-pills" aria-hidden="true">
                <span />
                <span />
              </div>
            </div>

            <div className="preview-chip-pile" aria-hidden="true">
              <span className="chip chip--dark preview-chip preview-chip--1" />
              <span className="chip chip--gold preview-chip preview-chip--2" />
              <span className="chip chip--dark preview-chip preview-chip--3" />
              <span className="chip chip--dark preview-chip preview-chip--4" />
              <span className="chip chip--gold preview-chip preview-chip--5" />
            </div>

            <aside className="phone-mockup">
              <div className="phone-screen">
                <img src="/site-icon.svg" alt="" />
                <p className="phone-title">The poker room</p>

                <div className="phone-cards" aria-hidden="true">
                  <span className="phone-card phone-card--left">S</span>
                  <span className="phone-card phone-card--center">S</span>
                  <span className="phone-card phone-card--right">S</span>
                </div>

                <button className="phone-cta" type="button">
                  Join the game
                </button>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
