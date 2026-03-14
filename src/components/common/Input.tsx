import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block text-sm font-medium tracking-[0.02em] text-[#ebdcc9]/76">
          {label}
        </label>
      )}
      <input
        className={`w-full rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] px-4 py-3 text-[#fff3e4] placeholder:text-[#c7b59f]/36 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md transition-all focus:border-[#d0a66a]/30 focus:outline-none focus:ring-2 focus:ring-[#c69354]/30 ${error ? 'border-red-500/50' : ''} ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-400">{error}</p>
      )}
    </div>
  );
}
