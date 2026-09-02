import { HardHat, ClipboardList, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

const featureIcons = [
  { key: 'workers', Icon: HardHat, color: 'text-brand-500 dark:text-brand-400', bg: 'bg-brand-50 dark:bg-brand-900/30' },
  { key: 'orders', Icon: ClipboardList, color: 'text-accent-500 dark:text-accent-400', bg: 'bg-accent-50 dark:bg-accent-900/30' },
  { key: 'speed', Icon: Zap, color: 'text-emerald-500 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-900/30' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Features() {
  const { t } = useLanguage();

  const cards = [
    { ...featureIcons[0], title: t('icon_workers'), desc: t('icon_workers_desc') },
    { ...featureIcons[1], title: t('icon_orders'), desc: t('icon_orders_desc') },
    { ...featureIcons[2], title: t('icon_speed'), desc: t('icon_speed_desc') },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fadeUp">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400 mb-4">
              Platform
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {t('what_title')}
            </h2>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('what_desc')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.key}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative flex flex-col p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-brand-300 dark:hover:border-brand-600 hover:shadow-xl hover:shadow-brand-500/10 dark:hover:shadow-brand-500/5 transition-all"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${card.bg} mb-6`}>
                <card.Icon className={`w-7 h-7 ${card.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {card.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {card.desc}
              </p>

              {/* Hover accent */}
              <div className="absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-gradient-to-r from-brand-400 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
