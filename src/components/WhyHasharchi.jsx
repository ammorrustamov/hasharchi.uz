import { Timer, MapPin, Smartphone, Star, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

const whyIcons = [Timer, MapPin, Smartphone, Star, ShieldCheck];
const whyColors = [
  { icon: 'text-brand-500 dark:text-brand-400', bg: 'bg-brand-50 dark:bg-brand-900/30', border: 'border-brand-200 dark:border-brand-800' },
  { icon: 'text-emerald-500 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-900/30', border: 'border-emerald-200 dark:border-emerald-800' },
  { icon: 'text-violet-500 dark:text-violet-400', bg: 'bg-violet-50 dark:bg-violet-900/30', border: 'border-violet-200 dark:border-violet-800' },
  { icon: 'text-amber-500 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-900/30', border: 'border-amber-200 dark:border-amber-800' },
  { icon: 'text-rose-500 dark:text-rose-400', bg: 'bg-rose-50 dark:bg-rose-900/30', border: 'border-rose-200 dark:border-rose-800' },
];

export default function WhyHasharchi() {
  const { t } = useLanguage();

  const whyItems = [
    t('why_1'), t('why_2'), t('why_3'), t('why_4'), t('why_5'),
  ];

  return (
    <section id="why" className="py-20 md:py-28 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fadeUp">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400 mb-4">
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
              {t('why_title')}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {whyItems.map((item, i) => {
            const Icon = whyIcons[i];
            const color = whyColors[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`group flex items-center gap-4 p-6 rounded-2xl border ${color.border} bg-slate-50 dark:bg-slate-800 hover:shadow-lg transition-all cursor-default`}
              >
                <div className={`shrink-0 flex items-center justify-center w-12 h-12 rounded-xl ${color.bg}`}>
                  <Icon className={`w-6 h-6 ${color.icon}`} />
                </div>
                <p className="text-base font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                  {item}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
