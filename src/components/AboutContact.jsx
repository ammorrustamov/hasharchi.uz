import { Send, Headphones, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';
import { m } from 'framer-motion';

const MotionLink = m.a;

// Instagram icon
function InstagramIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const contacts = [
  {
    href: 'https://t.me/hasharchiuz',
    Icon: Send,
    labelKey: 'contact_tg_channel',
    label: null,
    color: 'text-white',
    bg: 'bg-white/10',
    hover: 'hover:bg-white/10',
  },
  {
    href: 'https://t.me/hasharchiadmin',
    Icon: Headphones,
    labelKey: 'contact_support',
    label: null,
    color: 'text-white',
    bg: 'bg-white/10',
    hover: 'hover:bg-white/10',
  },
  {
    href: 'https://www.instagram.com/hasharchi',
    Icon: InstagramIcon,
    labelKey: null,
    label: 'Instagram',
    color: 'text-white',
    bg: 'bg-white/10',
    hover: 'hover:bg-white/10',
  },
  {
    href: 'https://www.youtube.com/@hasharchi',
    Icon: Youtube,
    labelKey: null,
    label: 'YouTube',
    color: 'text-white',
    bg: 'bg-white/10',
    hover: 'hover:bg-white/10',
  },
];

export default function AboutContact() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-brand-500 text-white dark:bg-[#0B2235] premium-section about-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* About */}
          <ScrollReveal variant="slideRight">
            <div className="about-copy-block">
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-white mb-4">
                About
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
                {t('about_title')}
              </h2>

              <p className="text-lg text-white/90 leading-relaxed">
                {t('about_text')}
              </p>

              <div className="mt-8 w-16 h-1 rounded-full bg-white" />
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal variant="slideLeft">
            <div id="contact">
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-white mb-4">
                Contact
              </span>

              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-5 leading-tight">
                {t('contact_title')}
              </h2>

              <div className="space-y-3 contact-stack">
                {contacts.map((contact, i) => {
                  const label = contact.labelKey
                    ? t(contact.labelKey)
                    : contact.label;

                  const Icon = contact.Icon;

                  return (
                    <MotionLink
                      key={i}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className={`flex items-center gap-3 p-3 rounded-xl border border-white/20 ${contact.hover} transition-all group`}
                    >
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-lg ${contact.bg}`}
                      >
                        <Icon
                          className={`w-5 h-5 ${contact.color}`}
                          aria-hidden="true"
                        />
                      </div>

                      <span className="font-semibold text-white group-hover:text-white transition-colors">
                        {label}
                      </span>

                      <svg
                        className="w-4 h-4 text-white/70 ml-auto group-hover:text-white transition-colors"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </MotionLink>
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