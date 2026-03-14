interface TimerRingProps {
  seconds: number;
  maxSeconds: number;
}

export default function TimerRing({ seconds, maxSeconds }: TimerRingProps) {
  const percentage = (seconds / maxSeconds) * 100;
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative h-24 w-24">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(211,162,93,0.22),transparent_70%)] blur-xl" />
      <svg className="transform -rotate-90 w-24 h-24">
        <circle
          cx="48"
          cy="48"
          r="45"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
          className="text-white/10"
        />
        <circle
          cx="48"
          cy="48"
          r="45"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={`transition-all duration-1000 ${
            seconds < 8 ? 'text-[#d67563]' : 'text-[#d2a365]'
          }`}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-2 flex items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.92),rgba(9,4,7,0.98))] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        <span className={`club-display text-3xl ${
          seconds < 8 ? 'text-[#f1cbc4]' : 'text-[#fff1de]'
        }`}>
          {seconds}
        </span>
      </div>
    </div>
  );
}
