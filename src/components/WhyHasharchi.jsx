import { Timer, MapPin, Smartphone, Star, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';
import { m } from 'framer-motion';

const MotionDiv = m.div;

const whyIcons = [Timer, MapPin, Smartphone, Star, ShieldCheck];
const whyColors = [
  { icon: 'text-white', bg: 'bg-white/10', border: 'border-transparent' },
  { icon: 'text-white', bg: 'bg-white/10', border: 'border-transparent' },
  { icon: 'text-white', bg: 'bg-white/10', border: 'border-transparent' },
  { icon: 'text-white', bg: 'bg-white/10', border: 'border-transparent' },
  { icon: 'text-white', bg: 'bg-white/10', border: 'border-transparent' },
];

export default function WhyHasharchi() {
  const { t } = useLanguage();

  const whyItems = [
    t('why_1'), t('why_2'), t('why_3'), t('why_4'), t('why_5'),
  ];

  return (
    <section id="why" className="py-16 md:py-20 bg-brand-500 text-white dark:bg-[#0B2235]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fadeUp">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-white mb-4">
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
              {t('why_title')}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {whyItems.map((item, i) => {
            const Icon = whyIcons[i];
            const color = whyColors[i];
            return (
              <MotionDiv
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`group flex items-center gap-4 p-6 rounded-lg ${color.border} bg-[#0284C7] dark:bg-[#102A43] hover:bg-[#0369A1] dark:hover:bg-[#163E5F] hover:shadow-lg transition-all cursor-default`}
              >
                <div className={`shrink-0 flex items-center justify-center w-12 h-12 rounded-xl ${color.bg}`}>
                  <Icon className={`w-6 h-6 ${color.icon}`} />
                </div>
                <p className="text-base font-semibold text-white leading-snug">
                  {item}
                </p>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
}
