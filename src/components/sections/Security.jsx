import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldAlert, Fingerprint, Database, Lock, RefreshCcw, Layers } from 'lucide-react';

const SecurityFeature = ({ icon: Icon, title, description }) => (
  <div className="flex gap-6 group">
    <div className="shrink-0 w-12 h-12 bg-slate-50 dark:bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
      <Icon className="w-6 h-6 text-text-muted group-hover:text-primary" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-text-muted leading-relaxed">{description}</p>
    </div>
  </div>
);

const Security = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24" id="security">
      <div className="max-w-7xl mx-auto px-4">
        <div className="glass-card p-12 border-slate-200 dark:border-white/10 bg-white dark:bg-linear-to-br dark:from-surface dark:to-background overflow-hidden relative shadow-xl">
          <div className="relative z-10 grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">{t('sensitive_data')}</h2>
              <p className="text-lg text-text-muted">{t('security_desc')}</p>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-slate-900 dark:text-white">99.9%</span>
                  <span className="text-[10px] text-text-muted uppercase font-bold tracking-widest">{t('uptime_garanti')}</span>
                </div>
                <div className="w-px h-10 bg-slate-200 dark:bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-slate-900 dark:text-white">256-bit</span>
                  <span className="text-[10px] text-text-muted uppercase font-bold tracking-widest">{t('chiffrement_aes')}</span>
                </div>
              </div>
            </div>
            <div className="grid gap-8">
              <SecurityFeature icon={Fingerprint} title={t('acces_securises')} description={t('authentification_multifactor')} />
              <SecurityFeature icon={Layers} title={t('historique_actions')} description={t('chaque_modification_tracee')} />
              <SecurityFeature icon={Database} title={t('backups_automatiques')} description={t('sauvegarde_temps_reel')} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
