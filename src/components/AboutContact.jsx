import { Send, Headphones } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

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

const contacts = [
  {
    href: 'https://t.me/hasharchiuz',
    Icon: Send,
    labelKey: 'contact_tg_channel',
    label: null,
    color: 'text-sky-500 dark:text-sky-400',
    bg: 'bg-sky-50 dark:bg-sky-900/20',
    hover: 'hover:bg-sky-100 dark:hover:bg-sky-900/40',
  },
  {
    href: 'https://t.me/hasharchiadmin',
    Icon: Headphones,
    labelKey: 'contact_support',
    label: null,
    color: 'text-brand-500 dark:text-brand-400',
    bg: 'bg-brand-50 dark:bg-brand-900/20',
    hover: 'hover:bg-brand-100 dark:hover:bg-brand-900/40',
  },
  {
    href: 'https://www.instagram.com/hasharchi',
    Icon: InstagramIcon,
    labelKey: null,
    label: 'Instagram',
    color: 'text-pink-500 dark:text-pink-400',
    bg: 'bg-pink-50 dark:bg-pink-900/20',
    hover: 'hover:bg-pink-100 dark:hover:bg-pink-900/40',
  },
  {
    href: 'https://www.youtube.com/@hasharchi',
    Icon: YoutubeIcon,
    labelKey: null,
    label: 'YouTube',
    color: 'text-red-500 dark:text-red-400',
    bg: 'bg-red-50 dark:bg-red-900/20',
    hover: 'hover:bg-red-100 dark:hover:bg-red-900/40',
  },
];

export default function AboutContact() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* About */}
          <ScrollReveal variant="slideRight">
            <div>
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400 mb-4">
                About
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                {t('about_title')}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('about_text')}
              </p>
              <div className="mt-8 w-16 h-1 rounded-full bg-gradient-to-r from-brand-400 to-accent-500" />
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal variant="slideLeft">
            <div id="contact">
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400 mb-4">
                Contact
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-8 leading-tight">
                {t('contact_title')}
              </h2>
              <div className="space-y-3">
                {contacts.map((contact, i) => {
                  const label = contact.labelKey ? t(contact.labelKey) : contact.label;
                  return (
                    <motion.a
                      key={i}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className={`flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-700 ${contact.hover} transition-all group`}
                    >
                      <div className={`flex items-center justify-center w-11 h-11 rounded-lg ${contact.bg}`}>
                        <contact.Icon className={`w-5 h-5 ${contact.color}`} />
                      </div>
                      <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                        {label}
                      </span>
                      <svg className="w-4 h-4 text-slate-400 dark:text-slate-500 ml-auto group-hover:text-brand-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
