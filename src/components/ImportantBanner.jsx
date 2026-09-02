import { AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';

export default function ImportantBanner() {
  const { t } = useLanguage();

  return (
    <ScrollReveal variant="fadeIn">
      <section className="relative py-6 bg-gradient-to-r from-red-500 via-red-600 to-red-500 dark:from-red-900/80 dark:via-red-800/80 dark:to-red-900/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3">
            <AlertTriangle className="w-6 h-6 text-white shrink-0" />
            <h2 className="text-xl md:text-2xl font-bold text-white">
              {t('important_title')}
            </h2>
          </div>
          <p className="mt-2 text-base md:text-lg text-white/90 font-medium">
            {t('important_text')}
          </p>
        </div>
      </section>
    </ScrollReveal>
  );
}
