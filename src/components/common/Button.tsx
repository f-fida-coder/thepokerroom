import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'relative overflow-hidden rounded-[18px] border font-semibold tracking-[0.02em] transition-all duration-300 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50';

  const variants = {
    primary:
      'border-[#f4d5a3]/25 bg-[linear-gradient(180deg,#f0c98a_0%,#c58a4e_48%,#8e5b31_100%)] text-[#1d1109] shadow-[0_16px_34px_rgba(157,98,46,0.35)] hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(157,98,46,0.45)]',
    secondary:
      'border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] text-[#f5ecdf] shadow-[0_14px_28px_rgba(0,0,0,0.22)] backdrop-blur-md hover:-translate-y-0.5 hover:border-[#d0a66a]/18 hover:bg-white/[0.08]',
    danger:
      'border-[#c06f61]/24 bg-[linear-gradient(180deg,#ad5549_0%,#7c2a26_48%,#4d1614_100%)] text-[#fff3ed] shadow-[0_16px_34px_rgba(94,24,22,0.34)] hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(94,24,22,0.44)]',
    success:
      'border-[#9e8551]/24 bg-[linear-gradient(180deg,#5c6b41_0%,#344123_48%,#1d2413_100%)] text-[#f3ebdc] shadow-[0_16px_34px_rgba(20,26,14,0.32)] hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(20,26,14,0.4)]',
    ghost: 'border-white/10 bg-white/[0.04] text-[#f5ecdf] backdrop-blur-md hover:-translate-y-0.5 hover:border-[#d0a66a]/25 hover:bg-white/[0.08]'
  };

  const sizes = {
    sm: 'px-4 py-2.5 text-sm',
    md: 'px-5 py-3 text-sm',
    lg: 'px-6 py-3.5 text-base'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent_45%,rgba(0,0,0,0.14))]" />
    </button>
  );
}
