import type { FormEvent } from 'react';
import { useLayoutEffect, useRef, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Club, LockKeyhole, Settings2, Spade } from 'lucide-react';
import tablePreviewImage from '../../ChatGPT Image Mar 17, 2026, 03_56_45 PM.png';
import heroBannerImage from '../../poker_banner.png';

type Feature = {
  title: string;
  copy: string;
  icons: LucideIcon[];
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

export default function Landing() {
  const [accessCode, setAccessCode] = useState('');
  const [status, setStatus] = useState<string>('');
  const topbarRef = useRef<HTMLElement>(null);
  const securityMessage = status || 'Only invited players can enter this private room.';

  useLayoutEffect(() => {
    const topbar = topbarRef.current;

    if (!topbar) {
      return undefined;
    }

    // Keep the fixed topbar from overlapping the hero as the nav height changes responsively.
    const syncTopbarOffset = () => {
      document.documentElement.style.setProperty('--topbar-offset', `${topbar.offsetHeight}px`);
    };

    syncTopbarOffset();

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', syncTopbarOffset);

      return () => {
        window.removeEventListener('resize', syncTopbarOffset);
        document.documentElement.style.removeProperty('--topbar-offset');
      };
    }

    const resizeObserver = new ResizeObserver(syncTopbarOffset);
    resizeObserver.observe(topbar);
    window.addEventListener('resize', syncTopbarOffset);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', syncTopbarOffset);
      document.documentElement.style.removeProperty('--topbar-offset');
    };
  }, []);

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
      <header className="topbar" ref={topbarRef}>
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
            <img className="hero-banner-image" src={heroBannerImage} alt="" aria-hidden="true" />

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
              <img className="preview-table-image" src={tablePreviewImage} alt="Poker table preview" />
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
