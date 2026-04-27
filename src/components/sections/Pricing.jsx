import React from 'react';
import { useTranslation } from 'react-i18next';
import { Check, ArrowRight } from 'lucide-react';

const PricingCard = ({ title, price, subtitle, features, cta, popular }) => (
  <div className={`glass-card p-8 flex flex-col relative ${popular
      ? 'border-primary bg-primary/5 ring-1 ring-primary/20'
      : 'border-slate-200 dark:border-white/5 bg-white dark:bg-transparent shadow-lg dark:shadow-none'
    }`}>
    {popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-[10px] font-bold text-white rounded-full uppercase tracking-widest">Recommandé</span>}
    <div className="mb-8">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
      <p className="text-xs text-text-muted mb-4">{subtitle}</p>
      <div className="text-4xl font-bold text-slate-900 dark:text-white">{price}</div>
    </div>
    <ul className="space-y-4 mb-8 flex-1">
      {features.map((f, i) => (
        <li key={i} className="flex gap-3 text-sm text-text-muted">
          <Check className="w-4 h-4 text-emerald-500 shrink-0" /> {f}
        </li>
      ))}
    </ul>
    <button className={`w-full py-4 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 ${popular
        ? 'bg-primary text-white hover:shadow-[0_0_20px_var(--color-primary-glow)]'
        : 'bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10'
      }`}>
      {cta} <ArrowRight className="w-4 h-4" />
    </button>
  </div>
);

const Pricing = () => {
  const { t } = useTranslation();
  const plans = [
    {
      title: "Growth Group",
      price: "Sur Devis",
      subtitle: "Pour les structures en pleine accélération",
      features: ["Jusqu'à 3 boutiques", "Dashboard consolidé", "Multi-utilisateurs (5)", "Support prioritaire"],
      cta: "Contacter Sales"
    },
    {
      title: "Business Group",
      price: "Sur Devis",
      subtitle: "Pour les holdings e-commerce solides",
      popular: true,
      features: ["Boutiques illimitées", "Dashboard Executive", "Permissions avancées", "API & Webhooks", "Account Manager"],
      cta: "Demander démo"
    },
    {
      title: "Enterprise Custom",
      price: "Custom",
      subtitle: "Besoins spécifiques & gros volumes",
      features: ["Architecture dédiée", "Migration accompagnée", "Développement sur-mesure", "SLA 99.9%", "White label"],
      cta: "Parler à un expert"
    }
  ];

  return (
    <section className="py-24" id="tarifs">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white">{t('pricing_title')}</h2>
          <p className="text-text-muted max-w-2xl mx-auto">{t('pricing_desc')}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p, i) => <PricingCard key={i} {...p} />)}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
