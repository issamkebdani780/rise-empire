import React from 'react';
import { useTranslation } from 'react-i18next';
import { LayoutGrid, Users, Warehouse, TrendingUp, Globe, Box } from 'lucide-react';

const MetricCard = ({ icon: Icon, label, value, subvalue, trend }) => (
  <div className="glass-card p-4 flex flex-col gap-2 border-white/5 hover:border-primary/30 transition-all group">
    <div className="flex justify-between items-start">
      <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/10 transition-colors">
        <Icon className="w-5 h-5 text-text-muted group-hover:text-primary" />
      </div>
      {trend && <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">{trend}</span>}
    </div>
    <div>
      <p className="text-xs text-text-muted uppercase tracking-wider">{label}</p>
      <p className="text-xl font-bold text-slate-900 dark:text-white">{value}</p>
      {subvalue && <p className="text-[10px] text-text-muted">{subvalue}</p>}
    </div>
  </div>
);

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Blobs (matching Risemanager) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 dark:bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-primary/10 dark:bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[120px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {t('solution_enterprise')}
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white dark:text-gradient">
              {t('hero_title')}
            </h1>

            <p className="text-xl text-text-muted max-w-xl leading-relaxed">
              {t('hero_subtitle')}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="glow-button px-8 py-4 text-lg">
                {t('reserve_demo')}
              </button>
              <button className="px-8 py-4 text-lg font-medium border border-slate-200 dark:border-white/10 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-slate-700 dark:text-white">
                {t('view_enterprise')}
              </button>
            </div>
          </div>

          {/* Visual Cockpit */}
          <div className="relative">
            <div className="glass-card p-6 border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden bg-white/50 dark:bg-black/20">
              <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent pointer-events-none" />

              <div className="grid grid-cols-2 gap-4 relative z-10">
                <MetricCard
                  icon={LayoutGrid}
                  label={t('active_stores')}
                  value="7"
                  subvalue={t('multi_brand_sync')}
                />
                <MetricCard
                  icon={Box}
                  label={t('monthly_orders')}
                  value="12 482"
                  trend="+18.4%"
                />
                <MetricCard
                  icon={Warehouse}
                  label={t('warehouses')}
                  value="4"
                  subvalue={t('logistique_centrale')}
                />
                <MetricCard
                  icon={Users}
                  label={t('employees')}
                  value="83"
                  subvalue={`12 ${t('departements')}`}
                />
              </div>

              <div className="mt-6 glass-card p-4 border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-black/40">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-text-muted uppercase tracking-widest">{t('couverture_geographique')}</span>
                  <div className="flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] text-emerald-500 font-mono">{t('live_feed')}</span>
                  </div>
                </div>

                <div className="h-48 bg-slate-100 dark:bg-slate-900/50 rounded-lg relative overflow-hidden flex items-center justify-center">
                  <Globe className="w-32 h-32 text-primary/10 absolute animate-pulse-slow" />
                  <div className="relative w-full h-full p-4 flex items-center justify-center text-center">
                    <div className="space-y-1">
                      <p className="text-3xl font-bold text-emerald-500">94.2%</p>
                      <p className="text-[10px] text-text-muted uppercase tracking-tighter">{t('consolidated_profit')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating Elements - Responsive and RTL friendly */}
            <div className="absolute -top-6 md:-top-10 -left-4 md:-left-10 glass-card p-3 md:p-4 border-primary/20 bg-white/80 dark:bg-slate-900/80 shadow-2xl animate-bounce-slow z-20 flex items-center gap-2 md:gap-3 rtl:left-auto rtl:-right-4 rtl:md:-right-10">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-500/10 rounded-full flex items-center justify-center shrink-0">
                <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />
              </div>
              <div>
                <p className="text-[7px] md:text-[8px] text-text-muted uppercase font-bold tracking-widest">{t('net_profit')}</p>
                <p className="text-xs md:text-sm font-bold text-slate-900 dark:text-white">+28.4%</p>
              </div>
            </div>

            <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 glass-card p-3 md:p-4 border-primary/20 bg-white/80 dark:bg-slate-900/80 shadow-2xl animate-float z-20 flex items-center gap-2 md:gap-3 rtl:right-auto rtl:-left-4 rtl:md:-left-6">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <LayoutGrid className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <div>
                <p className="text-[7px] md:text-[8px] text-text-muted uppercase font-bold tracking-widest">{t('boutiques')}</p>
                <p className="text-xs md:text-sm font-bold text-slate-900 dark:text-white">{t('active_sync')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;