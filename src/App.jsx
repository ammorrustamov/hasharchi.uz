import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImportantBanner from './components/ImportantBanner';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import WhyHasharchi from './components/WhyHasharchi';
import AppDownload from './components/AppDownload';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';

function AppContent() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ImportantBanner />
        <Features />
        <HowItWorks />
        <WhyHasharchi />
        <AppDownload />
        <AboutContact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
