import React from 'react';

export interface NavigationItemProps {
  href: string;
  label: string;
  isActive?: boolean;
  isMobile?: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ 
  href, 
  label, 
  isActive = false,
  isMobile = false 
}) => {
  const baseStyles = 'font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md';
  
  const desktopStyles = 'px-4 py-2 text-slate-700 hover:text-primary-600 hover:bg-primary-50';
  const mobileStyles = 'block px-4 py-3 text-lg text-slate-700 hover:bg-slate-100 hover:text-primary-600 w-full text-left';
  
  const activeStyles = isActive 
    ? 'text-primary-600 bg-primary-50 font-semibold' 
    : '';

  return (
    <a
      href={href}
      className={`${baseStyles} ${isMobile ? mobileStyles : desktopStyles} ${activeStyles}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </a>
  );
};

export default NavigationItem;
