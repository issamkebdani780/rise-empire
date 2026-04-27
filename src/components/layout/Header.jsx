import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown, Sun, Moon, Globe } from 'lucide-react';
import Logo from '../ui/Logo';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
    localStorage.setItem('theme', theme);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 transition-all duration-300">
      <div className={`max-w-7xl mx-auto px-6 py-3 rounded-[24px] border transition-all duration-300 flex items-center justify-between ${isScrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-slate-200 dark:border-slate-800 shadow-lg'
          : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 shadow-sm'
        }`}>
        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#enterprise" className="text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-primary transition-colors uppercase tracking-tight">{t('enterprise')}</a>
          <a href="#modules" className="text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-primary transition-colors uppercase tracking-tight">{t('modules')}</a>
          <a href="#security" className="text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-primary transition-colors uppercase tracking-tight">{t('security')}</a>
          <a href="#tarifs" className="text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-primary transition-colors uppercase tracking-tight">{t('tarifs')}</a>
          <a href="#contact" className="text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-primary transition-colors uppercase tracking-tight">{t('contact')}</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-primary transition-all active:scale-95"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-primary" />}
          </button>

          {/* Lang Switcher */}
          <div className="hidden md:block relative group">
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-100 dark:border-slate-800 rounded-full bg-slate-50/50 dark:bg-slate-800/50 hover:bg-slate-100 transition-colors">
              <span className="text-[10px] font-black text-primary">{(i18n.language || 'fr').toUpperCase().substring(0, 2)}</span>
              <ChevronDown className="w-3 h-3 text-slate-400 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl rounded-2xl py-2 min-w-[120px]">
                <button onClick={() => changeLanguage('fr')} className="px-4 py-2 text-xs font-bold w-full text-left hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400">Français</button>
                <button onClick={() => changeLanguage('en')} className="px-4 py-2 text-xs font-bold w-full text-left hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400">English</button>
                <button onClick={() => changeLanguage('ar')} className="px-4 py-2 text-xs font-bold w-full text-left hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400">العربية</button>
              </div>
            </div>
          </div>

          <button className="hidden lg:block text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
            {t('connect')}
          </button>

          <button className="glow-button px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest">
            {t('expert')}
          </button>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-slate-900 dark:text-white">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] bg-white dark:bg-slate-950 p-8 flex flex-col items-center justify-center gap-8 animate-in fade-in zoom-in duration-300">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 p-2 bg-slate-50 dark:bg-slate-900 rounded-full">
            <X className="w-6 h-6 text-slate-500" />
          </button>
          <Logo />
          <nav className="flex flex-col items-center gap-6">
            <a href="#enterprise" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold dark:text-white">{t('enterprise')}</a>
            <a href="#modules" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold dark:text-white">{t('modules')}</a>
            <a href="#tarifs" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold dark:text-white">{t('tarifs')}</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold dark:text-white">{t('contact')}</a>
          </nav>
          <div className="flex gap-4">
            <button onClick={() => changeLanguage('fr')} className="px-4 py-2 bg-slate-100 dark:bg-slate-900 rounded-lg font-bold dark:text-white">FR</button>
            <button onClick={() => changeLanguage('en')} className="px-4 py-2 bg-slate-100 dark:bg-slate-900 rounded-lg font-bold dark:text-white">EN</button>
            <button onClick={() => changeLanguage('ar')} className="px-4 py-2 bg-slate-100 dark:bg-slate-900 rounded-lg font-bold dark:text-white">AR</button>
          </div>
          <button className="glow-button w-full max-w-xs py-4 rounded-2xl text-lg font-bold">
            {t('expert')}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
