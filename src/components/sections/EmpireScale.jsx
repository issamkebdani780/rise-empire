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
    { icon: EyeOff, title: "Données Dispersées", description: "Naviguer entre 5 onglets différents pour comprendre votre CA global est une perte de temps stratégique." },
    { icon: UserX, title: "Managers sans Vision", description: "Vos responsables d'équipes n'ont pas accès aux KPIs dont ils ont besoin pour agir en autonomie." },
    { icon: Clock, title: "Reporting Lent", description: "Le temps de compiler les chiffres, l'opportunité est déjà passée. Vous pilotez dans le rétroviseur." },
    { icon: Search, title: "Pertes Invisibles", description: "Des erreurs de stock ou des baisses de profit qui passent inaperçues jusqu'à ce qu'il soit trop tard." },
    { icon: Link2, title: "Équipes Cloisonnées", description: "Le Call Center ne sait pas ce que font les Media Buyers. L'information ne circule pas." },
    { icon: AlertCircle, title: "Patron Saturé", description: "Vous devenez le goulot d'étranglement car chaque décision opérationnelle doit passer par vous." },
  ];

  const promises = [
    { icon: LayoutGrid, title: "Multi-boutiques", description: "Centralisez Shopify, WooCommerce et vos boutiques personnalisées sur un seul écran." },
    { icon: Users, title: "Multi-utilisateurs", description: "Gérez des dizaines d'employés avec des espaces de travail dédiés et sécurisés." },
    { icon: Warehouse, title: "Multi-entrepôts", description: "Vision temps réel des stocks répartis sur plusieurs zones géographiques." },
    { icon: ShieldCheck, title: "Permissions Avancées", description: "Contrôlez précisément qui voit quoi. Protégez vos données sensibles." },
    { icon: BarChart3, title: "Reporting Consolidé", description: "Tableaux de bord automatiques pour le groupe, par marque ou par employé." },
    { icon: Bell, title: "Alertes Intelligentes", description: "Notifications push pour les anomalies critiques nécessitant votre attention immédiate." },
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
