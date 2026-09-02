import { Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Instagram icon (custom SVG)
function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

// YouTube icon (custom SVG)
function YoutubeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=uz.developer.hasharchi';
const APP_STORE_URL = 'https://apps.apple.com/uz/app/hasharchi/id6755495405';

const socials = [
  { href: 'https://t.me/hasharchiuz', Icon: Send, label: 'Telegram' },
  { href: 'https://www.instagram.com/hasharchi', Icon: InstagramIcon, label: 'Instagram' },
  { href: 'https://www.youtube.com/@hasharchi', Icon: YoutubeIcon, label: 'YouTube' },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="py-12 md:py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-slate-800">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="text-2xl font-extrabold text-white tracking-tight mb-3">
              HASHARCHI
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-5 max-w-xs">
              {t('about_text').split('.')[0] + '.'}
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand-600 text-slate-400 hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* App download */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
              {t('nav_download')}
            </h3>
            <div className="space-y-3">
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <svg className="w-4 h-4 shrink-0 text-brand-400 group-hover:text-brand-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.12 12l2.578-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                Google Play
              </a>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <svg className="w-4 h-4 shrink-0 text-slate-300 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { key: 'nav_features', href: '#features' },
                { key: 'nav_how', href: '#how-it-works' },
                { key: 'nav_why', href: '#why' },
                { key: 'nav_about', href: '#about' },
              ].map(({ key, href }) => (
                <li key={key}>
                  <a href={href} className="text-slate-400 hover:text-white transition-colors">
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  {t('footer_policy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  {t('footer_terms')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p className="text-slate-500">
            © 2026 HASHARCHI. {t('footer_rights')}
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-xs">
              {t('footer_policy')}
            </a>
            <span className="text-slate-700">·</span>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-xs">
              {t('footer_terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
