import React from 'react';
import { useTranslation } from 'react-i18next';
import { Bell, TrendingDown, Package, Clock, Zap, Trophy, ArrowRight } from 'lucide-react';

const AlertRow = ({ icon: Icon, title, status, color }) => (
  <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-white/5 rounded-lg border border-slate-100 dark:border-white/5 hover:border-slate-200 dark:hover:border-white/10 transition-all">
    <div className="flex items-center gap-4">
      <div className={`p-2 rounded-lg ${color}`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">{title}</h4>
        <p className="text-[10px] text-text-muted uppercase tracking-widest">{status}</p>
      </div>
    </div>
    <ArrowRight className="w-4 h-4 text-text-muted" />
  </div>
);

const ExecutiveAutomation = () => {
  const { t } = useTranslation();
  const alerts = [
    { icon: TrendingDown, title: "Chute Profit Boutique X", status: "Alerte Critique - Marge < 15%", color: "bg-red-500/20" },
    { icon: Package, title: "Stock Critique Produit Y", status: "Elite Electronics - 12 unités restantes", color: "bg-amber-500/20" },
    { icon: Clock, title: "Retard Dépôt Z", status: "82 commandes en attente > 24h", color: "bg-orange-500/20" },
    { icon: Zap, title: "Explosion CPA Campagne A", status: "Facebook Ads - CPA > 8€ (Seuil 5€)", color: "bg-purple-500/20" },
    { icon: Trophy, title: "Top Vendeur Semaine", status: "Agent Ahmed - 142 validations", color: "bg-emerald-500/20" },
  ];

  return (
    <section className="py-24 bg-linear-to-b from-transparent to-slate-50 dark:to-surface/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Bell className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">{t('executive_alerts')}</h2>
            <p className="text-lg text-text-muted">{t('automation_desc')}</p>
          </div>
          <div className="relative">
            <div className="glass-card p-2 border-slate-200 dark:border-white/10 bg-white dark:bg-black/60 shadow-2xl">
              <div className="p-4 border-b border-slate-100 dark:border-white/10 flex justify-between items-center">
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest">Centre d'Alertes Stratégiques</span>
                <span className="text-[10px] text-primary font-mono px-2 py-0.5 bg-primary/10 rounded">LIVE FEED</span>
              </div>
              <div className="p-4 space-y-3">
                {alerts.map((a, i) => <AlertRow key={i} {...a} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveAutomation;
