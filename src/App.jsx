import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, BriefcaseBusiness, Check, ChevronDown, Clock3, Download, Globe2, Headphones, Menu, Moon, Search, Send, ShieldCheck, Smartphone, Sun, Users, X, Zap } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { useLanguage } from './context/LanguageContext';
import { useTheme } from './context/ThemeContext';
import './App.css';

const Motion = motion;

const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=uz.developer.hasharchi';
const APP_STORE_URL = 'https://apps.apple.com/uz/app/hasharchi/id6755495405';
const navLinks = [
  { key: 'nav_features', href: '#features' },
  { key: 'nav_how', href: '#how-it-works' },
  { key: 'nav_why', href: '#why' },
  { key: 'nav_about', href: '#about' },
];
const languages = [{ key: 'ru', label: 'RU' }, { key: 'uz_lat', label: 'UZ' }, { key: 'uz_cyr', label: 'ЎЗ' }];

function StoreButton({ href, platform, compact = false }) {
  const isAndroid = platform === 'android';
  return <a className={`store-button ${compact ? 'store-button-compact' : ''}`} href={href} target="_blank" rel="noreferrer"><span className="store-icon">{isAndroid ? <Download size={compact ? 17 : 20} /> : <Smartphone size={compact ? 17 : 20} />}</span><span><small>{isAndroid ? 'GET IT ON' : 'DOWNLOAD ON THE'}</small><strong>{isAndroid ? 'Google Play' : 'App Store'}</strong></span><ArrowUpRight className="store-arrow" size={compact ? 14 : 16} /></a>;
}

function BrandMark() { return <img src="/hasharchi-logo.webp" alt="Hasharchi" className="brand-mark-img" style={{width: '28px', height: '28px', borderRadius: '6px', objectFit: 'contain', display: 'inline-block', verticalAlign: 'middle'}} />; }

function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const current = languages.find((item) => item.key === language) || languages[0];
  const goTo = (event, href) => { event.preventDefault(); setOpen(false); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }); };
  return <header className="site-nav"><div className="nav-wrap"><a href="#top" className="brand" onClick={(event) => goTo(event, '#top')}><BrandMark /><span>HASHARCHI</span></a><nav className="desktop-links">{navLinks.map((link) => <a key={link.key} href={link.href} onClick={(event) => goTo(event, link.href)}>{t(link.key)}</a>)}</nav><div className="nav-actions"><div className="language-picker"><button className="icon-text-button" onClick={() => setLanguageOpen(!languageOpen)}><Globe2 size={16} /> {current.label} <ChevronDown size={14} /></button><AnimatePresence>{languageOpen && <Motion.div className="language-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>{languages.map((item) => <button key={item.key} className={item.key === language ? 'selected' : ''} onClick={() => { setLanguage(item.key); setLanguageOpen(false); }}>{item.label}</button>)}</Motion.div>}</AnimatePresence></div><button className="icon-button" onClick={toggleTheme} aria-label="Toggle theme">{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button><a className="nav-cta" href="#download" onClick={(event) => goTo(event, '#download')}>{t('nav_download')} <ArrowUpRight size={16} /></a><button className="mobile-menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button></div></div><AnimatePresence>{open && <Motion.nav className="mobile-links" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>{navLinks.map((link) => <a key={link.key} href={link.href} onClick={(event) => goTo(event, link.href)}>{t(link.key)}</a>)}<div className="mobile-language-list">{languages.map((item) => <button key={item.key} className={item.key === language ? 'selected' : ''} onClick={() => { setLanguage(item.key); setOpen(false); }}>{item.label}</button>)}</div><a href="#download" onClick={(event) => goTo(event, '#download')}>{t('nav_download')} <ArrowUpRight size={16} /></a></Motion.nav>}</AnimatePresence></header>;
}

function Hero() {
  const { t } = useLanguage();
  return (
    <section id="top" className="hero-new relative overflow-hidden">
      <div className="hero-grid" />
      <div className="hero-inner relative z-10">
        <Motion.div className="hero-copy-new" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1>{t('hero_title')}</h1>
          <p>{t('hero_sub')}</p>
          <div className="hero-proof">
            <span className="proof-avatars"><i>U</i><i>I</i><i>H</i></span>
            <span><strong>24/7</strong><small>{t('icon_speed')}</small></span>
            <span className="proof-divider" />
            <span><strong>1 app</strong><small>{t('what_title')}</small></span>
          </div>
        </Motion.div>
        
        {/* Innovative Right Side */}
        <Motion.div 
          className="relative w-full max-w-[360px] mx-auto lg:ml-auto perspective-1000"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Animated Background Orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]">
            <Motion.div 
              animate={{ rotate: 360, scale: [1, 1.1, 1] }} 
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-brand-400/30 to-purple-500/30 blur-3xl rounded-full mix-blend-screen"
            />
            <Motion.div 
              animate={{ rotate: -360, scale: [1, 1.2, 1] }} 
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-l from-blue-400/20 to-teal-400/20 blur-3xl rounded-full mix-blend-screen"
            />
          </div>

          {/* Main Interactive Glass Card */}
          <Motion.div 
            whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative z-10 flex flex-col items-center justify-center p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-white/5 dark:from-[#1A2E44]/80 dark:to-[#0B1A2A]/80 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.3)] overflow-visible group"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
               <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
            </div>

            {/* Floating Red Warning Badge */}
            <Motion.div 
              animate={{ y: [-8, 8, -8] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 lg:-left-10 z-20 flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 shadow-2xl"
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 shadow-[0_0_10px_#ef4444]"></span>
              </div>
              <span className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase">{t('only_in_app')}</span>
            </Motion.div>

            {/* Floating Element Right */}
            <Motion.div 
              animate={{ y: [8, -8, 8] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-6 lg:-right-8 z-20 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-[0_15px_30px_rgba(14,165,233,0.4)] border border-white/20"
            >
              <Zap className="text-white w-8 h-8 drop-shadow-md" />
            </Motion.div>

            <div className="relative z-10 w-full text-center mt-2 mb-10">
              <h3 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-3 drop-shadow-sm">
                {t('download_app_now')}
              </h3>
              <p className="text-[#bae6fd] dark:text-slate-300 text-sm font-medium">
                {t('thousands_waiting')}
              </p>
            </div>
            
            <div className="flex flex-col gap-5 w-full">
              <Motion.a 
                whileHover={{ scale: 1.03, y: -2 }} 
                whileTap={{ scale: 0.97 }}
                href={GOOGLE_PLAY_URL} 
                target="_blank" 
                rel="noreferrer" 
                className="relative overflow-hidden flex items-center gap-4 w-full p-4 bg-[#111] text-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.4)] border border-white/10 group/btn"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover/btn:bg-white/20 transition-colors">
                  <Download className="text-brand-400 w-6 h-6" />
                </div>
                <div className="text-left flex-1">
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Get it on</div>
                  <div className="text-xl font-bold tracking-tight">Google Play</div>
                </div>
              </Motion.a>
              
              <Motion.a 
                whileHover={{ scale: 1.03, y: -2 }} 
                whileTap={{ scale: 0.97 }}
                href={APP_STORE_URL} 
                target="_blank" 
                rel="noreferrer" 
                className="relative overflow-hidden flex items-center gap-4 w-full p-4 bg-[#111] text-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.4)] border border-white/10 group/btn"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover/btn:bg-white/20 transition-colors">
                  <Smartphone className="text-white w-6 h-6" />
                </div>
                <div className="text-left flex-1">
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Download on the</div>
                  <div className="text-xl font-bold tracking-tight">App Store</div>
                </div>
              </Motion.a>
            </div>
          </Motion.div>
        </Motion.div>

      </div>
      <div className="hero-bottom-note relative z-10"><span>01</span><span className="hero-line" /><span>{t('what_title')}</span><a href="#features">{t('dashboard_explore')} <ArrowUpRight size={16} /></a></div>
    </section>
  );
}

function Features() {
  const { t } = useLanguage();
  const items = [{ icon: Users, title: t('icon_workers'), desc: t('icon_workers_desc'), stat: '01' }, { icon: BriefcaseBusiness, title: t('icon_orders'), desc: t('icon_orders_desc'), stat: '02' }, { icon: Zap, title: t('icon_speed'), desc: t('icon_speed_desc'), stat: '03' }];
  return <section id="features" className="features-new section-light"><div className="section-intro"><div><span className="section-number">01 / 04</span><h2>{t('what_title')}</h2></div><p>{t('what_desc')}</p></div><div className="feature-grid">{items.map((item) => { const FeatureIcon = item.icon; return <Motion.article className="feature-card" key={item.title} whileHover={{ y: -8 }}><div className="feature-card-top"><span className="feature-icon"><FeatureIcon size={22} /></span><span>{item.stat}</span></div><h3>{item.title}</h3><p>{item.desc}</p><a href="#download" aria-label={item.title}><ArrowUpRight size={18} /></a></Motion.article>; })}</div></section>;
}

function HowItWorks() {
  const { t } = useLanguage();
  const groups = [{ title: t('how_clients'), icon: BriefcaseBusiness, steps: ['step_c1', 'step_c2', 'step_c3'] }, { title: t('how_workers'), icon: Users, steps: ['step_w1', 'step_w2', 'step_w3'] }];
  return <section id="how-it-works" className="process-new"><div className="process-head"><span className="section-number">02 / 04</span><h2>{t('how_title')}</h2><p>{t('important_text')}</p></div><div className="process-grid">{groups.map((group) => { const GroupIcon = group.icon; return <div className="process-column" key={group.title}><div className="process-title"><span><GroupIcon size={20} /></span><h3>{group.title}</h3></div>{group.steps.map((step, index) => <div className="process-step" key={step}><strong>0{index + 1}</strong><div><p>{t(step)}</p><span>{index === 0 ? 'START HERE' : index === 1 ? 'NEXT STEP' : 'DONE'}</span></div><Check size={17} /></div>)}</div>; })}</div></section>;
}

function WhyHasharchi() {
  const { t } = useLanguage();
  const icons = [Clock3, Search, Smartphone, ShieldCheck, Zap];
  return <section id="why" className="why-new section-blue"><div className="why-heading"><span className="section-number light">03 / 04</span><h2>{t('why_title')}</h2><p>{t('hero_sub')}</p></div><div className="why-list">{[1, 2, 3, 4, 5].map((number, index) => { const Icon = icons[index]; return <div className="why-row" key={number}><span>0{number}</span><Icon size={22} /><strong>{t(`why_${number}`)}</strong><ArrowUpRight size={19} /></div>; })}</div></section>;
}

function DownloadSection() {
  const { t } = useLanguage();
  const [currentImg, setCurrentImg] = useState(0);
  const screenshots = [
    "https://play-lh.googleusercontent.com/j0y5dHDkl7uKZOvZzt-k_PKHIW-8E6myYenrzjV4bFLAmBfQLCnuj1XfWt3Tao8zer7585MTOvczz2Fk1qI1Dmo=w526-h296",
    "https://play-lh.googleusercontent.com/9l4_oNVDSDg0WCkJkf7T-SGPjSI67qMSLFAUodCTi3gYW_HTOklfF8FhXyVecRWpeLjQDirAVsA6QujLr34v=w526-h296",
    "https://play-lh.googleusercontent.com/fBlEfyVJKKmepUObWRmTwalh4_tFd96vulKJ5gntV3P384KFeyr9JbM5s0kPSq0TwaJlxNo83f7jN2hbZPT2nGo=w526-h296",
    "https://play-lh.googleusercontent.com/o1hQ7Jamms_RUDK5erMOpFiINBt0tbSEqcbsHCZ3JYvmYGeKyck0ESBSynxC4LBAZaZvP0p0IxI22nXeBxUdtw=w526-h296",
    "https://play-lh.googleusercontent.com/1welGkv6EmMhyk2isjWDkwy4270c_P7HkVsAto0K-h-kVQ98eSC-lSkjivXbpOOyziLNwCfBZg7wyGp_2sJB=w526-h296",
    "https://play-lh.googleusercontent.com/5ATuFQi6yQsl3dW265fhUoXGnHzd_6i-4F8eiiI7qiDTHte8qPXuiXzZBySW_RzWuM7nW-ND_TDz6W5rHegh2w=w526-h296"
  ];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % screenshots.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [screenshots.length]);

  return (
    <section id="download" className="download-new">
      <div className="download-card">
        <div className="download-copy">
          <span className="section-number">04 / 04</span>
          <h2>{t('download_title')}</h2>
          <p>{t('download_sub')}</p>
          <div className="download-buttons">
            <StoreButton href={GOOGLE_PLAY_URL} platform="android" compact />
            <StoreButton href={APP_STORE_URL} platform="ios" compact />
          </div>
        </div>
        <div className="download-orbit">
          <div className="orbit-ring orbit-ring-one" />
          <div className="orbit-ring orbit-ring-two" />
          <div className="download-phone relative overflow-hidden" style={{ width: '150px', height: '300px', padding: 0 }}>
            <AnimatePresence mode="wait">
              <Motion.img 
                key={currentImg}
                src={screenshots[currentImg]}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Hasharchi App Screenshot"
              />
            </AnimatePresence>
            <div className="absolute top-0 w-full flex justify-center mt-2 z-10">
              <div className="w-12 h-3 bg-black rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutContact() {
  const { t } = useLanguage();
  return <section id="about" className="about-new"><div className="about-copy"><span className="section-number">ABOUT HASHARCHI</span><h2>{t('about_title')}</h2><p>{t('about_text')}</p></div><div className="contact-new"><span className="section-number">CONTACT</span><h3>{t('contact_title')}</h3><a href="https://t.me/hasharchiuz" target="_blank" rel="noreferrer"><Send size={18} /> {t('contact_tg_channel')} <ArrowUpRight size={16} /></a><a href="https://t.me/hasharchiadmin" target="_blank" rel="noreferrer"><Headphones size={18} /> {t('contact_support')} <ArrowUpRight size={16} /></a><a href="https://www.instagram.com/hasharchi" target="_blank" rel="noreferrer"><Globe2 size={18} /> Instagram <ArrowUpRight size={16} /></a></div></section>;
}

function Footer() {
  const { t } = useLanguage();
  return <footer className="footer-new"><div className="footer-brand"><a href="#top" className="brand"><BrandMark /><span>HASHARCHI</span></a><p>{t('about_text').split('.')[0]}.</p></div><div className="footer-links"><a href="#features">{t('nav_features')}</a><a href="#how-it-works">{t('nav_how')}</a><a href="#why">{t('nav_why')}</a><a href="#download">{t('nav_download')}</a></div><div className="footer-bottom"><span>© 2026 HASHARCHI. {t('footer_rights')}</span><span>{t('footer_policy')} · {t('footer_terms')}</span></div></footer>;
}

function AppContent() {
  return (
    <div className="site-shell">
      <Navbar />
      <main><Hero /><Features /><HowItWorks /><WhyHasharchi /><DownloadSection /><AboutContact /><Footer /></main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider><LanguageProvider><AppContent /></LanguageProvider></ThemeProvider>
  );
}

export default App;
