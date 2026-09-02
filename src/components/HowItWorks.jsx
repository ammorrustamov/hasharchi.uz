import { Download, FileText, MessageCircle, UserPlus, CreditCard, Briefcase } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';
import { m } from 'framer-motion';

const MotionDiv = m.div;

const clientIcons = [Download, FileText, MessageCircle];
const workerIcons = [UserPlus, CreditCard, Briefcase];

function StepCard({ number, icon: Icon, text, delay }) {
  const StepIcon = Icon;

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex items-start gap-4"
    >
      {/* Step number + icon */}
      <div className="flex flex-col items-center shrink-0">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-500 text-white font-bold">
          {number}
        </div>
        {number < 3 && (
          <div className="w-0.5 h-8 mt-2 bg-brand-500" />
        )}
      </div>

      {/* Text */}
      <div className="pt-2.5">
        <div className="flex items-center gap-2">
          <StepIcon className="w-4 h-4 text-brand-500 shrink-0" />
          <p className="text-brand-500 dark:text-[#D7E6F0] font-medium">{text}</p>
        </div>
      </div>
    </MotionDiv>
  );
}

export default function HowItWorks() {
  const { t } = useLanguage();

  const clientSteps = [
    { text: t('step_c1'), Icon: clientIcons[0] },
    { text: t('step_c2'), Icon: clientIcons[1] },
    { text: t('step_c3'), Icon: clientIcons[2] },
  ];

  const workerSteps = [
    { text: t('step_w1'), Icon: workerIcons[0] },
    { text: t('step_w2'), Icon: workerIcons[1] },
    { text: t('step_w3'), Icon: workerIcons[2] },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-white text-brand-500 dark:bg-[#071827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fadeUp">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-500 mb-4">
              How it works
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
              {t('how_title')}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Clients */}
          <ScrollReveal variant="slideRight">
            <div className="bg-[#F9FAFB] dark:bg-[#102A43] rounded-xl p-8 shadow-md dark:shadow-black/20 border-t-4 border-brand-500 dark:border-[#0EA5E9] h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-brand-500/10 dark:bg-[#0EA5E9]/15 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-brand-500" />
                </div>
                <h3 className="text-xl font-bold text-brand-500 dark:text-white">
                  {t('how_clients')}
                </h3>
              </div>
              <div className="space-y-2">
                {clientSteps.map((step, i) => (
                  <StepCard
                    key={i}
                    number={i + 1}
                    icon={step.Icon}
                    text={step.text}
                    delay={0.1 + i * 0.12}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Workers */}
          <ScrollReveal variant="slideLeft">
            <div className="bg-[#F9FAFB] dark:bg-[#102A43] rounded-xl p-8 shadow-md dark:shadow-black/20 border-t-4 border-brand-500 dark:border-[#0EA5E9] h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-brand-500/10 dark:bg-[#0EA5E9]/15 flex items-center justify-center">
                  <UserPlus className="w-5 h-5 text-brand-500" />
                </div>
                <h3 className="text-xl font-bold text-brand-500 dark:text-white">
                  {t('how_workers')}
                </h3>
              </div>
              <div className="space-y-2">
                {workerSteps.map((step, i) => (
                  <StepCard
                    key={i}
                    number={i + 1}
                    icon={step.Icon}
                    text={step.text}
                    delay={0.1 + i * 0.12}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
