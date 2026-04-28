import React from 'react';
import { useTranslation } from 'react-i18next';
import { AlertCircle, EyeOff, Clock, Search, Link2, UserX, CheckCircle2, Users, Warehouse, ShieldCheck, BarChart3, Bell, LayoutGrid } from 'lucide-react';

const ProblemItem = ({ icon: Icon, title, description }) => (
  <div className="p-8 border-r border-b border-slate-100 dark:border-white/5 group hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors">
    <Icon className="w-10 h-10 text-red-500/50 mb-6 group-hover:text-red-500 transition-colors" />
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
    <p className="text-sm text-text-muted leading-relaxed">{description}</p>
  </div>
);

const PromiseCard = ({ icon: Icon, title, description }) => (
  <div className="glass-card p-8 border-slate-100 dark:border-white/5 hover:border-primary/30 hover:bg-slate-50 dark:hover:bg-primary/5 transition-all bg-white/50 dark:bg-transparent">
    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
    <p className="text-sm text-text-muted leading-relaxed">{description}</p>
  </div>
);

const EmpireScale = () => {
  const { t } = useTranslation();

  const problems = [
    { icon: EyeOff, title: t('donnees_dispersées').split(' ').slice(0,2).join(' '), description: t('donnees_dispersées') },
    { icon: UserX, title: t('managers_sans_vision').split(' ').slice(0,2).join(' '), description: t('managers_sans_vision') },
    { icon: Clock, title: t('reporting_lent').split(' ').slice(0,2).join(' '), description: t('reporting_lent') },
    { icon: Search, title: t('pertes_invisibles').split(' ').slice(0,2).join(' '), description: t('pertes_invisibles') },
    { icon: Link2, title: t('equipes_cloisonnées').split(' ').slice(0,2).join(' '), description: t('equipes_cloisonnées') },
    { icon: AlertCircle, title: t('patron_saturé').split(' ').slice(0,2).join(' '), description: t('patron_saturé') },
  ];

  const promises = [
    { icon: LayoutGrid, title: t('multi_boutiques').split(' ').slice(0,2).join(' '), description: t('multi_boutiques') },
    { icon: Users, title: t('multi_utilisateurs').split(' ').slice(0,2).join(' '), description: t('multi_utilisateurs') },
    { icon: Warehouse, title: t('multi_entrepots').split(' ').slice(0,2).join(' '), description: t('multi_entrepots') },
    { icon: ShieldCheck, title: t('permissions_avancees').split(' ').slice(0,2).join(' '), description: t('permissions_avancees') },
    { icon: BarChart3, title: t('reporting_consolide').split(' ').slice(0,2).join(' '), description: t('reporting_consolide') },
    { icon: Bell, title: t('alertes_intelligentes').split(' ').slice(0,2).join(' '), description: t('alertes_intelligentes') },
  ];

  return (
    <section className="py-24 space-y-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white">{t('growth_breaks_systems')}</h2>
          <p className="text-text-muted max-w-2xl mx-auto">{t('chaos_description')}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-100 dark:border-white/5">
          {problems.map((p, i) => <ProblemItem key={i} {...p} />)}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white">{t('group_vision')}</h2>
          <p className="text-text-muted max-w-2xl mx-auto">{t('zoom_description')}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promises.map((p, i) => <PromiseCard key={i} {...p} />)}
        </div>
      </div>
    </section>
  );
};

export default EmpireScale;
