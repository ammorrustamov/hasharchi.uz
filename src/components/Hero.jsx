import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { SiAppstore } from 'react-icons/si';

const Motion = motion;

const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=uz.developer.hasharchi';

const APP_STORE_URL =
  'https://apps.apple.com/uz/app/hasharchi/id6755495405';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-16 md:pt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-brand-500 dark:bg-[#071827]" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-white/5" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 md:py-24">

        {/* Title */}
        <Motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md"
        >
          {t('hero_title')}
        </Motion.h1>

        {/* Subtitle */}
        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
        >
          {t('hero_sub')}
        </Motion.p>

        {/* Warning badge */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8"
        >
          <span className="inline-flex items-center px-4 py-2 text-sm font-bold text-brand-500 bg-white rounded-full shadow-lg uppercase tracking-wide">
            {t('hero_warn')}
          </span>
        </Motion.div>

        {/* App information */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8"
        >
          <p className="text-sm sm:text-base text-white/80 font-medium">
            {t('only_in_app')}
          </p>

          <p className="mt-2 text-xl sm:text-2xl font-bold text-white">
            {t('download_app_now')}
          </p>

          <p className="mt-2 text-sm sm:text-base text-white/70">
            {t('thousands_waiting')}
          </p>
        </Motion.div>

        {/* Store buttons */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >

          {/* Google Play */}
          <a
            href={GOOGLE_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Hasharchi from Google Play"
            className="group flex items-center gap-3.5 px-7 py-3.5 bg-black/80 hover:bg-black dark:bg-[#102A43] dark:hover:bg-[#163E5F] text-white rounded-xl shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] w-64 justify-center backdrop-blur-sm"
          >
            {/* Google Play multicolor icon */}
            <svg
              className="w-9 h-9 shrink-0 transition-transform duration-300 group-hover:scale-110"
              viewBox="0 0 48 48"
              fill="none"
              aria-hidden="true"
            >
              <path
                fill="#00D639"
                d="M6.3 4.7C5.5 5.5 5 6.8 5 8.5v31c0 1.7.5 3 1.3 3.8L27 24 6.3 4.7z"
              />

              <path
                fill="#00A8FF"
                d="M34.3 31.3 27 24 6.3 43.3c.8.8 2.1.9 3.6.1l24.4-12.1z"
              />

              <path
                fill="#FFCE00"
                d="M41.2 20.7 34.3 17 27 24l7.3 7.3 6.9-3.7c2-1.1 2-5.8 0-6.9z"
              />

              <path
                fill="#FF3A44"
                d="M9.9 4.6c-1.5-.8-2.8-.7-3.6.1L27 24l7.3-7.3L9.9 4.6z"
              />
            </svg>

            <div className="text-left">
              <div className="text-[10px] font-medium tracking-wide uppercase opacity-80">
                {t('google_play_label')}
              </div>

              <div className="text-lg font-bold leading-tight -mt-0.5">
                Google Play
              </div>
            </div>
          </a>

          {/* App Store */}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Hasharchi from App Store"
            className="group flex items-center gap-3.5 px-7 py-3.5 bg-black/80 hover:bg-black dark:bg-[#102A43] dark:hover:bg-[#163E5F] text-white rounded-xl shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] w-64 justify-center backdrop-blur-sm"
          >
            {/* App Store icon */}
            <SiAppstore
              className="w-9 h-9 shrink-0 transition-transform duration-300 group-hover:scale-110"
              color="#ffffff"
              aria-hidden="true"
            />

            <div className="text-left">
              <div className="text-[10px] font-medium tracking-wide uppercase opacity-80">
                {t('app_store_label')}
              </div>

              <div className="text-lg font-bold leading-tight -mt-0.5">
                App Store
              </div>
            </div>
          </a>

        </Motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-12 md:h-20"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z"
            className="fill-white dark:fill-[#071827]"
          />
        </svg>
      </div>
    </section>
  );
}