import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';

const MotionDiv = m.div;
import { Menu, X, Sun, Moon, ChevronDown, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const langOptions = [
  { key: 'ru', label: 'RU' },
  { key: 'uz_lat', label: 'UZ' },
  { key: 'uz_cyr', label: 'ЎЗ' },
];

const navLinks = [
  { key: 'nav_features', href: '#features' },
  { key: 'nav_how', href: '#how-it-works' },
  { key: 'nav_why', href: '#why' },
  { key: 'nav_download', href: '#download' },
  { key: 'nav_about', href: '#about' },
];

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const currentLang = langOptions.find((l) => l.key === language) || langOptions[0];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#E0F2FE]/70 dark:bg-slate-950/55 border-b border-[#BAE6FD]/70 dark:border-white/10 backdrop-blur-md shadow-lg shadow-[#BAE6FD]/30 dark:shadow-[0_10px_30px_rgba(15,23,42,0.35)]'
          : 'bg-white dark:bg-slate-950'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 nav-inner">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2.5 text-xl md:text-2xl font-extrabold tracking-tight text-[#0EA5E9] hover:text-[#0284C7] transition-colors nav-logo"
          >
            <img
              src="https://play-lh.googleusercontent.com/oWFG4w2K4BU7EXdA1kZ_RKrD4zCo7vIgkdS1u5PgMISw5vCubK6ygdOb-uAfyre-BBKHGxBLAKt5zra5MR2h7IE=w480-h960-rw"
              alt="Hasharchi"
              width="40"
              height="40"
              loading="eager"
              decoding="async"
              className="h-9 w-9 md:h-10 md:w-10 shrink-0 rounded-full object-contain transition-transform duration-200 group-hover:scale-[1.04]"
            />
            HASHARCHI
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#0EA5E9] dark:text-slate-300 dark:hover:text-[#0EA5E9] rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              >
                {t(link.key)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                onBlur={() => setTimeout(() => setIsLangOpen(false), 150)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-sm font-semibold rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-[#0284C7] transition-all"
                aria-label="Select language"
                aria-expanded={isLangOpen}
              >
                <span className="flex items-center justify-center w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-200">
                  <Languages className="w-3.5 h-3.5" />
                </span>
                <span className="hidden sm:inline">{currentLang.label}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <MotionDiv
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-36 bg-white dark:bg-slate-800 rounded-xl shadow-xl shadow-black/10 dark:shadow-black/30 border border-slate-200 dark:border-slate-700 overflow-hidden z-50"
                  >
                    {langOptions.map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => { setLanguage(opt.key); setIsLangOpen(false); }}
                        className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium transition-all ${
                          language === opt.key
                            ? 'bg-[#0EA5E9] text-white'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-[#0284C7]'
                        }`}
                      >
                        <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-100 dark:bg-slate-700 text-[10px] font-bold text-slate-700 dark:text-slate-200">
                          {opt.label.slice(0, 2)}
                        </span>
                        <span>{opt.label}</span>
                      </button>
                    ))}
                  </MotionDiv>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-[#0284C7] transition-all"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <MotionDiv key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Sun className="w-4.5 h-4.5" />
                  </MotionDiv>
                ) : (
                  <MotionDiv key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Moon className="w-4.5 h-4.5" />
                  </MotionDiv>
                )}
              </AnimatePresence>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-[#0284C7] transition-all"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <a
              href="#download"
              onClick={(e) => handleNavClick(e, '#download')}
              className="hidden lg:inline-flex items-center px-5 py-2 text-sm font-semibold text-white bg-[#0EA5E9] hover:bg-[#0284C7] rounded-lg shadow-md shadow-[#0EA5E9]/25 hover:shadow-lg hover:shadow-[#0284C7]/25 transition-all active:scale-95"
            >
              {t('nav_download')}
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MotionDiv
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-4 py-3 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-[#0EA5E9] dark:hover:text-[#0EA5E9] hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-all"
                >
                  {t(link.key)}
                </a>
              ))}
              <a
                href="#download"
                onClick={(e) => handleNavClick(e, '#download')}
                className="block mt-3 px-4 py-3 text-center text-base font-semibold text-white bg-[#0EA5E9] hover:bg-[#0284C7] rounded-lg transition-all"
              >
                {t('nav_download')}
              </a>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </nav>
  );
}
