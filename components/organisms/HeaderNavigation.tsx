'use client';

import React, { useState } from 'react';
import NavigationItem from '../molecules/NavigationItem';
import Icon from '../atoms/Icon';
import Typography from '../atoms/Typography';

export interface HeaderNavigationProps {
  currentPath?: string;
}

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/hundred-islands', label: 'Hundred Islands' },
  { href: '/bolinao-lighthouse', label: 'Bolinao Lighthouse' },
  { href: '/balungao-hot-spring', label: 'Balungao Hot Spring' },
];

const HeaderNavigation: React.FC<HeaderNavigationProps> = ({ currentPath = '/' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50" role="banner">
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md p-1">
            <Icon name="compass" size="lg" className="text-primary-600 group-hover:rotate-12 transition-transform duration-300" ariaLabel="Pangasinan Heritage logo" />
            <Typography variant="h4" className="text-lg sm:text-xl md:text-2xl hidden sm:block">
              Pangasinan Heritage
            </Typography>
            <Typography variant="h4" className="text-lg sm:hidden">
              PH Heritage
            </Typography>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navigationLinks.map((link) => (
              <NavigationItem
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={currentPath === link.href}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-slate-700 hover:text-primary-600 hover:bg-primary-50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <Icon name={isMobileMenuOpen ? 'close' : 'menu'} size="lg" ariaLabel={isMobileMenuOpen ? 'Close menu' : 'Open menu'} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 animate-fade-in">
            <div className="flex flex-col space-y-1">
              {navigationLinks.map((link) => (
                <NavigationItem
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isActive={currentPath === link.href}
                  isMobile={true}
                />
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default HeaderNavigation;
