import React from 'react';

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption' | 'small';
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const Typography: React.FC<TypographyProps> = ({ 
  variant = 'body', 
  children, 
  className = '',
  as 
}) => {
  const styles = {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight',
    h2: 'text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight',
    h3: 'text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-snug',
    h4: 'text-xl md:text-2xl lg:text-3xl font-semibold text-slate-900 leading-snug',
    body: 'text-base md:text-lg text-slate-700 leading-relaxed',
    caption: 'text-sm md:text-base text-slate-600 leading-relaxed',
    small: 'text-xs md:text-sm text-slate-500',
  };
  
  const Tag = as || (variant.startsWith('h') ? variant : 'p') as keyof JSX.IntrinsicElements;
  
  return React.createElement(
    Tag,
    { className: `${styles[variant]} ${className}` },
    children
  );
};

export default Typography;
