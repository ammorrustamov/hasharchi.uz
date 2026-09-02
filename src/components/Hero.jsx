import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=uz.developer.hasharchi';
const APP_STORE_URL = 'https://apps.apple.com/uz/app/hasharchi/id6755495405';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 dark:from-brand-900 dark:via-slate-900 dark:to-slate-950" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-400/20 dark:bg-brand-500/10 blur-3xl animate-pulse-soft" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent-500/15 dark:bg-accent-500/5 blur-3xl animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-white/5 blur-2xl animate-float" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 md:py-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight"
        >
          {t('hero_title')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl text-white/85 max-w-3xl mx-auto leading-relaxed font-light"
        >
          {t('hero_sub')}
        </motion.p>

        {/* Warning badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8"
        >
          <span className="inline-flex items-center px-5 py-2.5 text-sm font-bold text-brand-700 dark:text-brand-300 bg-white/95 dark:bg-slate-800/90 rounded-full shadow-lg shadow-black/10 uppercase tracking-wider backdrop-blur-sm">
            {t('hero_warn')}
          </span>
        </motion.div>

        {/* Store buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={GOOGLE_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3.5 px-7 py-3.5 bg-black/80 hover:bg-black text-white rounded-xl shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all hover:scale-[1.03] active:scale-[0.98] w-64 justify-center backdrop-blur-sm"
          >
            <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.12 12l2.578-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
            </svg>
            <div className="text-left">
              <div className="text-[10px] font-medium tracking-wide uppercase opacity-80">GET IT ON</div>
              <div className="text-lg font-bold leading-tight -mt-0.5">Google Play</div>
            </div>
          </a>

          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3.5 px-7 py-3.5 bg-black/80 hover:bg-black text-white rounded-xl shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all hover:scale-[1.03] active:scale-[0.98] w-64 justify-center backdrop-blur-sm"
          >
            <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-[10px] font-medium tracking-wide uppercase opacity-80">Download on the</div>
              <div className="text-lg font-bold leading-tight -mt-0.5">App Store</div>
            </div>
          </a>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 md:h-20" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none">
          <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" className="fill-white dark:fill-slate-900" />
        </svg>
      </div>
    </section>
  );
}
