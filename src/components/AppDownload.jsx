import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';
import { m } from 'framer-motion';

const MotionLink = m.a;

const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=uz.developer.hasharchi';
const APP_STORE_URL = 'https://apps.apple.com/uz/app/hasharchi/id6755495405';

function StoreButton({ href, platform }) {
  const isAndroid = platform === 'android';

  return (
    <MotionLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="group flex items-center gap-4 px-7 py-4 bg-brand-500 text-white rounded-xl shadow-lg hover:bg-brand-600 dark:bg-[#102A43] dark:hover:bg-[#163E5F] border border-brand-500 dark:border-[#1F4A67] w-full sm:w-auto justify-center sm:justify-start transition-all min-w-[200px]"
      aria-label={isAndroid ? 'Download on Google Play' : 'Download on App Store'}
    >
      {isAndroid ? (
        <svg className="w-8 h-8 shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.12 12l2.578-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
        </svg>
      ) : (
        <svg className="w-8 h-8 shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      )}
      <div className="text-left">
        <div className="text-[10px] font-medium tracking-wide uppercase text-slate-500 dark:text-[#A8C0D1]">
          {isAndroid ? 'GET IT ON' : 'Download on the'}
        </div>
        <div className="text-lg font-bold leading-tight -mt-0.5 text-white">
          {isAndroid ? 'Google Play' : 'App Store'}
        </div>
      </div>
    </MotionLink>
  );
}

export default function AppDownload() {
  const { t } = useLanguage();
  const sub = t('download_sub');

  return (
    <section id="download" className="py-16 md:py-20 bg-white text-brand-500 dark:bg-[#071827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden p-2 md:p-8 text-center">
          <div className="relative z-10">
            <ScrollReveal variant="fadeUp">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-500 dark:text-white mb-8">
                {t('download_title')}
              </h2>
              {sub && (
                <p className="text-xl text-[#FF3B30] max-w-3xl mx-auto mb-8 font-medium">
                  {sub}
                </p>
              )}
            </ScrollReveal>

            <ScrollReveal variant="scaleIn" delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <StoreButton href={GOOGLE_PLAY_URL} platform="android" />
                <StoreButton href={APP_STORE_URL} platform="ios" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
