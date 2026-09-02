import { HardHat, ClipboardList, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';
import { m } from 'framer-motion';

const MotionDiv = m.div;

const featureIcons = [
  { key: 'workers', Icon: HardHat, color: 'text-white', bg: 'bg-white/10' },
  { key: 'orders', Icon: ClipboardList, color: 'text-white', bg: 'bg-white/10' },
  { key: 'speed', Icon: Zap, color: 'text-white', bg: 'bg-white/10' },
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
    <section id="features" className="py-16 md:py-20 bg-brand-500 text-white dark:bg-[#0B2235]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fadeUp">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-white mb-4">
              Platform
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              {t('what_title')}
            </h2>
            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              {t('what_desc')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <MotionDiv
              key={card.key}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative flex flex-col p-8 bg-[#0284C7] dark:bg-[#102A43] rounded-xl border border-white/20 dark:border-[#1F4A67] hover:bg-[#0369A1] dark:hover:bg-[#163E5F] hover:shadow-xl transition-all"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${card.bg} mb-6`}>
                <card.Icon className={`w-7 h-7 ${card.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {card.desc}
              </p>

              {/* Hover accent */}
              <div className="absolute inset-x-0 bottom-0 h-1 rounded-b-xl bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
