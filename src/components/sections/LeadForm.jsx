import React from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Phone, User, Building, Globe, ShoppingCart, Users, HelpCircle } from 'lucide-react';

const InputField = ({ icon: Icon, label, placeholder, type = "text" }) => (
  <div className="space-y-2">
    <label className="text-[10px] uppercase font-bold text-text-muted tracking-widest px-1">{label}</label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
        <Icon className="w-4 h-4" />
      </div>
      <input 
        type={type}
        placeholder={placeholder}
        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg py-3 pl-12 pr-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors text-sm"
      />
    </div>
  </div>
);

const LeadForm = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <div className="glass-card border-slate-200 dark:border-white/10 overflow-hidden grid lg:grid-cols-5 shadow-2xl bg-white dark:bg-surface">
          {/* Info Side */}
          <div className="lg:col-span-2 bg-primary p-12 text-white relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] -mr-32 -mt-32 rounded-full" />
            
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl font-bold leading-tight">{t('ready_for_empire')}</h2>
              <p className="text-white/80">
                {t('lead_form_desc')}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-white/60">{t('ligne_directe_expert')}</p>
                    <p className="font-bold">+213 (0) 555 00 00 00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 p-6 bg-black/10 rounded-xl mt-12 border border-white/10">
              <p className="text-sm italic">
                "{t('partner_growth')}"
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3 p-12 bg-white dark:bg-surface">
            <form className="grid md:grid-cols-2 gap-6">
              <InputField icon={User} label={t('nom_complet')} placeholder="Jean Dupont" />
              <InputField icon={Building} label={t('societe')} placeholder="Nom de votre holding" />
              <InputField icon={Phone} label={t('telephone')} placeholder="+213..." />
              <InputField icon={Globe} label={t('pays')} placeholder="Algérie, France, Maroc..." />
              <InputField icon={ShoppingCart} label={t('nombre_de_boutiques')} placeholder="Ex: 5" type="number" />
              <InputField icon={ShoppingCart} label={t('commandes_mois')} placeholder="Ex: 10 000" type="number" />
              <InputField icon={Users} label={t('nombre_employes')} placeholder="Ex: 50" type="number" />
              <InputField icon={HelpCircle} label={t('besoin_principal')} placeholder="Ex: Centralisation logistique" />
              
              <div className="md:col-span-2 pt-4">
                <button className="glow-button w-full py-4 text-lg font-bold flex items-center justify-center gap-2">
                  {t('expert')} <Send className="w-5 h-5" />
                </button>
                <p className="text-[10px] text-text-muted text-center mt-4 uppercase tracking-widest">
                  {t('donnees_protegees')}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
