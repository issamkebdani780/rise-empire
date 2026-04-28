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
      role: t('ceo_owner'),
      icon: Shield,
      description: t('vision_totale'),
      permissions: [t('acces_global_finance'), t('audit_complet'), t('gestion_managers'), t('export_data_groupe')]
    },
    {
      role: t('directeur_ops'),
      icon: Settings,
      description: t('logistique_flux'),
      permissions: [t('vue_multi_entrepots'), t('performance_stocks'), t('flux_de_commandes'), t('validations_rh')]
    },
    {
      role: t('manager_boutique'),
      icon: Briefcase,
      description: t('performance_marque'),
      permissions: [t('gestion_boutique_dediee'), t('kpis_vente_conversion'), t('support_client_local'), t('stock_dedie')]
    },
    {
      role: t('responsable_depot'),
      icon: Truck,
      description: t('logistique_terrain'),
      permissions: [t('preparation_commandes'), t('inventaires_live'), t('scanning_produits'), t('gestion_retours')]
    },
    {
      role: t('media_buyer'),
      icon: BarChart,
      description: t('acquisition'),
      permissions: [t('acces_ads_marketing'), t('tracking_pixels'), t('reporting_roi'), t('dashboards_publicitaires')]
    },
    {
      role: t('call_center'),
      icon: Phone,
      description: t('relation_client'),
      permissions: [t('gestion_appels'), t('validation_commandes'), t('suivi_colis'), t('historique_client')]
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
