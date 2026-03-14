import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'dark';
}

export default function Card({ children, className = '', variant = 'default' }: CardProps) {
  const variants = {
    default: 'bg-gradient-to-br from-gray-900 via-gray-900 to-black border-gray-700/50',
    glass: 'bg-black/40 backdrop-blur-xl border-white/10',
    dark: 'bg-black/60 border-gray-800/50'
  };

  return (
    <div className={`rounded-xl border shadow-2xl ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}
