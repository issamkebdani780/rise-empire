import React from 'react';
import { useTranslation } from 'react-i18next';
import { User, Shield, Briefcase, Truck, Phone, BarChart, Settings, Check } from 'lucide-react';

const RoleCard = ({ role, icon: Icon, description, permissions }) => (
  <div className="glass-card p-6 border-slate-200 dark:border-white/5 hover:border-primary/20 transition-all group bg-white dark:bg-transparent">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 bg-slate-50 dark:bg-white/5 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
        <Icon className="w-6 h-6 text-text-muted group-hover:text-primary" />
      </div>
      <div>
        <h3 className="font-bold text-slate-900 dark:text-white">{role}</h3>
        <p className="text-[10px] text-text-muted uppercase tracking-widest">{description}</p>
      </div>
    </div>
    <ul className="space-y-3">
      {permissions.map((p, i) => (
        <li key={i} className="flex items-center gap-2 text-xs text-text-muted">
          <Check className="w-3 h-3 text-emerald-500" /> {p}
        </li>
      ))}
    </ul>
  </div>
);

const HierarchyPermissions = () => {
  const { t } = useTranslation();
  const roles = [
    {
      role: "CEO / Owner",
      icon: Shield,
      description: "Vision Totale",
      permissions: ["Accès global finance", "Audit complet", "Gestion des managers", "Export data groupe"]
    },
    {
      role: "Directeur Ops",
      icon: Settings,
      description: "Logistique & Flux",
      permissions: ["Vue multi-entrepôts", "Performance stocks", "Flux de commandes", "Validations RH"]
    },
    {
      role: "Manager Boutique",
      icon: Briefcase,
      description: "Performance Marque",
      permissions: ["Gestion boutique dédiée", "Kpis vente / conversion", "Support client local", "Stock dédié"]
    },
    {
      role: "Responsable Dépôt",
      icon: Truck,
      description: "Logistique Terrain",
      permissions: ["Préparation commandes", "Inventaires live", "Scanning produits", "Gestion retours"]
    },
    {
      role: "Media Buyer",
      icon: BarChart,
      description: "Acquisition",
      permissions: ["Accès Ads / Marketing", "Tracking pixels", "Reporting ROI", "Dashboards publicitaires"]
    },
    {
      role: "Call Center",
      icon: Phone,
      description: "Relation Client",
      permissions: ["Gestion appels", "Validation commandes", "Suivi colis", "Historique client"]
    }
  ];

  return (
    <section className="py-24" id="hierarchy">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white">{t('everyone_sees')}</h2>
          <p className="text-text-muted max-w-2xl mx-auto">{t('hierarchy_desc')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((r, i) => <RoleCard key={i} {...r} />)}
        </div>
      </div>
    </section>
  );
};

export default HierarchyPermissions;
