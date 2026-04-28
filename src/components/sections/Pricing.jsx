import React from 'react';
import { useTranslation } from 'react-i18next';
import { Check, ArrowRight } from 'lucide-react';

const PricingCard = ({ title, price, subtitle, features, cta, popular, recommendedLabel }) => (
  <div className={`glass-card p-8 flex flex-col relative ${popular
      ? 'border-primary bg-primary/5 ring-1 ring-primary/20'
      : 'border-slate-200 dark:border-white/5 bg-white dark:bg-transparent shadow-lg dark:shadow-none'
    }`}>
    {popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-[10px] font-bold text-white rounded-full uppercase tracking-widest">{recommendedLabel}</span>}
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
      title: t('growth_group'),
      price: t('sur_devis'),
      subtitle: t('pour_les_structures'),
      features: [t('jusqu_3_boutiques'), t('dashboard_consolide'), t('multi_utilisateurs_5'), t('support_prioritaire')],
      cta: t('contacter_sales')
    },
    {
      title: t('business_group'),
      price: t('sur_devis'),
      subtitle: t('pour_les_holdings'),
      popular: true,
      features: [t('boutiques_illimitees'), t('dashboard_executive'), t('permissions_avancees_feat'), t('api_webhooks'), t('account_manager')],
      cta: t('demander_demo')
    },
    {
      title: t('enterprise_custom'),
      price: t('custom'),
      subtitle: t('besoins_specifiques'),
      features: [t('architecture_dediee'), t('migration_accompagnee'), t('developpement_sur_mesure'), t('sla_99_9'), t('white_label')],
      cta: t('parler_expert')
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
          {plans.map((p, i) => (
            <PricingCard key={i} {...p} recommendedLabel={t('recommande')} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;