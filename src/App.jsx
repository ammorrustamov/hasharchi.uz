import { lazy, Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { LazyMotion, domAnimation } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const ImportantBanner = lazy(() => import('./components/ImportantBanner'));
const Features = lazy(() => import('./components/Features'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const WhyHasharchi = lazy(() => import('./components/WhyHasharchi'));
const AppDownload = lazy(() => import('./components/AppDownload'));
const AboutContact = lazy(() => import('./components/AboutContact'));
const Footer = lazy(() => import('./components/Footer'));

function AppContent() {
  return (
    <div className="min-h-screen bg-brand-500 text-white dark:bg-[#071827]">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <ImportantBanner />
          <Features />
          <HowItWorks />
          <WhyHasharchi />
          <AppDownload />
          <AboutContact />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <ThemeProvider>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </ThemeProvider>
    </LazyMotion>
  );
}

export default App;
