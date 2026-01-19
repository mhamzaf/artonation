
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') || localStorage.getItem('theme') === 'dark';
    }
    return false;
  });
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Referral', path: '/referral', badge: 'New' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="sticky top-0 z-[60] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-pink-100 dark:border-slate-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="bg-primary-500 text-white p-2 rounded-xl w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                  <i className="fa-solid fa-palette text-sm lg:text-base"></i>
                </div>
                <span className="text-xl lg:text-2xl font-black tracking-tighter text-gray-900 dark:text-white uppercase">Artistry</span>
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold transition-all relative group flex items-center gap-2 ${
                    isActive(link.path) ? 'text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400 hover:text-primary-500'
                  }`}
                >
                  {link.name}
                  {link.badge && (
                    <span className="bg-primary-500 text-white text-[8px] px-1.5 py-0.5 rounded-full font-black animate-pulse">
                      {link.badge}
                    </span>
                  )}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all group-hover:w-full ${isActive(link.path) ? 'w-full' : ''}`}></span>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2 lg:gap-4">
              <button 
                onClick={() => setIsDark(!isDark)}
                className="p-2.5 text-gray-500 dark:text-gray-400 hover:text-primary-500 transition-all bg-pink-50 dark:bg-slate-800 rounded-xl active:scale-90"
                aria-label="Toggle dark mode"
              >
                <i className={`fa-solid ${isDark ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
              </button>
              <Link
                to="/services"
                className="hidden sm:inline-block bg-primary-500 hover:bg-primary-600 text-white font-black py-2.5 px-6 rounded-full shadow-lg shadow-pink-500/20 transition-all hover:scale-105 active:scale-95 text-xs lg:text-sm uppercase tracking-widest"
              >
                Book Now
              </Link>
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden p-2.5 text-gray-600 dark:text-gray-300 bg-pink-50 dark:bg-slate-800 rounded-xl transition-all active:scale-90"
                aria-label="Open Menu"
              >
                <i className="fa-solid fa-bars-staggered text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <div 
        className={`fixed inset-0 z-[100] lg:hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-slate-950/40 backdrop-blur-md transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        ></div>
        
        {/* Drawer Panel */}
        <div className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-500 ease-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col p-6`}>
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-500 text-white rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-palette text-sm"></i>
              </div>
              <span className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Artistry</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-full bg-pink-50 dark:bg-slate-800 text-gray-400 flex items-center justify-center active:scale-90 transition-transform"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>

          <div className="flex flex-col gap-2 flex-grow overflow-y-auto">
            {navLinks.map((link, idx) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xl font-bold py-4 px-6 rounded-2xl flex items-center justify-between transition-all ${
                  isActive(link.path) 
                    ? 'bg-primary-500 text-white shadow-lg shadow-pink-500/20' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.name}
                {link.badge ? (
                  <span className="text-[10px] bg-white text-primary-500 px-2 py-0.5 rounded-full font-black">{link.badge}</span>
                ) : (
                  <i className={`fa-solid fa-chevron-right text-xs opacity-50 ${isActive(link.path) ? 'invisible' : ''}`}></i>
                )}
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-8 border-t border-pink-50 dark:border-slate-800">
            <Link
              to="/services"
              className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-2xl font-black flex items-center justify-center gap-3 active:scale-95 transition-transform"
            >
              BOOK YOUR SLOT 🐾
            </Link>
            
            <div className="flex justify-center gap-4 mt-8">
              {['twitter', 'instagram', 'discord'].map(social => (
                <a key={social} href="#" className="w-12 h-12 bg-pink-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-gray-500 hover:text-primary-500 transition-colors">
                  <i className={`fa-brands fa-${social} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
