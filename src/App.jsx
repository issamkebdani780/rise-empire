import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import EmpireScale from './components/sections/EmpireScale';
import DashboardInteractive from './components/sections/DashboardInteractive';
import HierarchyPermissions from './components/sections/HierarchyPermissions';
import ExecutiveAutomation from './components/sections/ExecutiveAutomation';
import Security from './components/sections/Security';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import LeadForm from './components/sections/LeadForm';
import Footer from './components/layout/Footer';

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language || 'fr';
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-white dark:bg-background transition-colors duration-500 selection:bg-primary/30">
      <Header />
      <main>
        <Hero />
        <EmpireScale />
        <DashboardInteractive />
        <HierarchyPermissions />
        <ExecutiveAutomation />
        <Security />
        <Testimonials />
        <Pricing />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
