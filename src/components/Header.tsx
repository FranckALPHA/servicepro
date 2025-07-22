import React, { useState } from 'react';
import { Settings, Menu, X } from 'lucide-react';

// Navigation items configuration
const NAV_ITEMS = [
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'À propos' },
  { id: 'pricing', label: 'Tarifs' },
  { id: 'testimonials', label: 'Témoignages' },
  { id: 'contact', label: 'Contact' }
] as const;

// Style constants
const HEADER_STYLES = {
  nav: 'bg-white shadow-lg sticky top-0 z-50',
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  flexContainer: 'flex justify-between h-16',
  logo: 'flex-shrink-0 flex items-center',
  logoIcon: 'text-purple-600 text-2xl mr-2',
  logoText: 'text-xl font-bold text-gray-900',
  desktopNav: 'hidden md:ml-6 md:flex md:items-center md:space-x-8',
  navLink: 'nav-link text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium relative transition-colors duration-300',
  navLinkHover: 'absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 hover:w-full',
  mobileMenuButton: 'text-gray-500 hover:text-gray-900 focus:outline-none',
  mobileMenu: 'md:hidden bg-white border-t border-gray-200',
  mobileMenuContent: 'px-2 pt-2 pb-3 space-y-1 sm:px-3',
  mobileMenuItem: 'block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:text-purple-600 hover:bg-gray-50'
} as const;

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.offsetTop - 80;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={HEADER_STYLES.nav}>
      <div className={HEADER_STYLES.container}>
        <div className={HEADER_STYLES.flexContainer}>
          <div className="flex items-center">
            <div className={HEADER_STYLES.logo}>
              <Settings className={HEADER_STYLES.logoIcon} />
              <span className={HEADER_STYLES.logoText}>ServicePro</span>
            </div>
          </div>
          
          <div className={HEADER_STYLES.desktopNav}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={HEADER_STYLES.navLink}
              >
                {item.label}
                <span className={HEADER_STYLES.navLinkHover}></span>
              </button>
            ))}
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={HEADER_STYLES.mobileMenuButton}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${HEADER_STYLES.mobileMenu} ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className={HEADER_STYLES.mobileMenuContent}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={HEADER_STYLES.mobileMenuItem}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;