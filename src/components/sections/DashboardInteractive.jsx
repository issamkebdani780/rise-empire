import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  LayoutGrid, ShoppingBag, Warehouse, Users, PieChart, 
  Landmark, Globe, Search, Filter, Bell, Download,
  TrendingUp, ArrowUpRight, ArrowDownRight, Package,
  DollarSign, CheckCircle2, Clock, AlertCircle
} from 'lucide-react';

const DashboardInteractive = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('Groupe');

  const tabs = [
    { id: 'Groupe', icon: LayoutGrid, label: t('tab_group') },
    { id: 'Marques', icon: ShoppingBag, label: t('tab_brands') },
    { id: 'Entrepôts', icon: Warehouse, label: t('tab_warehouses') },
    { id: 'RH', icon: Users, label: t('tab_rh') },
    { id: 'Ads', icon: PieChart, label: t('tab_ads') },
    { id: 'Finance', icon: Landmark, label: t('tab_finance') },
    { id: 'Carte', icon: Globe, label: t('tab_map') },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Groupe':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="glass-card p-4 border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/40">
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">CA Global</p>
                <div className="flex items-end justify-between">
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white">4.82M DA</h4>
                  <span className="text-[10px] font-bold text-emerald-500 flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" /> +12%
                  </span>
                </div>
              </div>
              <div className="glass-card p-4 border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/40">
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">Profit Net</p>
                <div className="flex items-end justify-between">
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white">1.24M DA</h4>
                  <span className="text-[10px] font-bold text-emerald-500 flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" /> +8.4%
                  </span>
                </div>
              </div>
              <div className="glass-card p-4 border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/40">
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">Commandes</p>
                <div className="flex items-end justify-between">
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white">12,482</h4>
                  <span className="text-[10px] font-bold text-red-500 flex items-center gap-1">
                    <ArrowDownRight className="w-3 h-3" /> -2.1%
                  </span>
                </div>
              </div>
              <div className="glass-card p-4 border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/40">
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">Taux Confirmation</p>
                <div className="flex items-end justify-between">
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white">84.2%</h4>
                  <span className="text-[10px] font-bold text-emerald-500 flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" /> +4%
                  </span>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/40 min-h-[300px]">
              <div className="flex justify-between items-center mb-10">
                <h5 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest">Performance Groupe (30j)</h5>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-text-muted">
                    <div className="w-2.5 h-2.5 rounded-sm bg-primary" /> CA
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-text-muted">
                    <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500" /> Profit
                  </div>
                </div>
              </div>
              <div className="h-48 flex items-end gap-2 sm:gap-4 px-2 relative">
                {/* Horizontal grid lines */}
                <div className="absolute inset-x-0 top-0 h-px bg-slate-100 dark:bg-white/5" />
                <div className="absolute inset-x-0 top-1/4 h-px bg-slate-100 dark:bg-white/5" />
                <div className="absolute inset-x-0 top-2/4 h-px bg-slate-100 dark:bg-white/5" />
                <div className="absolute inset-x-0 top-3/4 h-px bg-slate-100 dark:bg-white/5" />
                
                {[45, 60, 55, 80, 95, 70, 85, 65, 90, 75, 80, 100].map((h, i) => (
                  <div key={i} className="flex-1 relative group h-full flex items-end gap-1">
                    <div 
                      className="flex-1 bg-primary rounded-t-sm group-hover:brightness-110 transition-all duration-700 ease-out animate-in slide-in-from-bottom" 
                      style={{ height: `${h}%`, animationDelay: `${i * 50}ms` }} 
                    />
                    <div 
                      className="flex-1 bg-emerald-500 rounded-t-sm group-hover:brightness-110 transition-all duration-700 ease-out animate-in slide-in-from-bottom" 
                      style={{ height: `${h * 0.4}%`, animationDelay: `${(i * 50) + 100}ms` }} 
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-6 text-[9px] text-text-muted font-bold px-2 uppercase tracking-tighter">
                <span>Jan</span><span>Fev</span><span>Mar</span><span>Avr</span><span>Mai</span><span>Juin</span>
                <span>Juil</span><span>Aout</span><span>Sept</span><span>Oct</span><span>Nov</span><span>Dec</span>
              </div>
            </div>
          </div>
        );
      case 'Marques':
        return (
          <div className="glass-card overflow-hidden border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/40 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 dark:bg-white/5 text-[10px] uppercase tracking-widest text-text-muted font-black">
                  <th className="px-6 py-4">Boutique</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">CA (24h)</th>
                  <th className="px-6 py-4">Confirm.</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                {[
                  { name: 'Elite Electronics', status: 'Growing', ca: '842,000 DA', conf: '88%', color: 'text-emerald-500' },
                  { name: 'LuxDecor Boutique', status: 'Stable', ca: '412,500 DA', conf: '82%', color: 'text-primary' },
                  { name: 'Cosmetic Pro', status: 'Warning', ca: '124,000 DA', conf: '64%', color: 'text-amber-500' },
                  { name: 'Urban Fashion', status: 'Hot', ca: '984,200 DA', conf: '92%', color: 'text-rose-500' },
                  { name: 'Home Essentials', status: 'Stable', ca: '320,000 DA', conf: '78%', color: 'text-primary' },
                ].map((m, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/10 flex items-center justify-center font-black text-[10px]">{m.name[0]}</div>
                        <span className="text-xs font-bold text-slate-900 dark:text-white">{m.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-full bg-slate-100 dark:bg-white/5 ${m.color}`}>{m.status}</span>
                    </td>
                    <td className="px-6 py-4 text-xs font-bold text-slate-900 dark:text-white">{m.ca}</td>
                    <td className="px-6 py-4">
                      <div className="w-24 h-1.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                        <div className={`h-full ${m.color.replace('text-', 'bg-')}`} style={{ width: m.conf }} />
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary hover:underline text-[10px] font-bold">Ouvrir</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'Entrepôts':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="glass-card p-6 border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/40">
              <h5 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-6">Stock par Entrepôt</h5>
              <div className="space-y-6">
                {[
                  { name: 'Entrepôt Alger (Centre)', cap: 84, color: 'bg-primary' },
                  { name: 'Entrepôt Oran (Ouest)', cap: 42, color: 'bg-emerald-500' },
                  { name: 'Entrepôt Sétif (Est)', cap: 91, color: 'bg-rose-500' },
                ].map((e, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center text-[11px] font-bold">
                      <span className="text-slate-900 dark:text-white">{e.name}</span>
                      <span className="text-text-muted">{e.cap}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full ${e.color} shadow-[0_0_8px_var(--color-primary-glow)]`} style={{ width: `${e.cap}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="glass-card p-6 border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/40 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">Vitesse de Préparation</p>
                  <h4 className="text-2xl font-black text-primary">14.2 min</h4>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="glass-card p-6 border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/40 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">Alertes Stock Bas</p>
                  <h4 className="text-2xl font-black text-rose-500">12 SKUs</h4>
                </div>
                <div className="w-12 h-12 bg-rose-500/10 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-rose-500" />
                </div>
              </div>
            </div>
          </div>
        );
      case 'RH':
        return (
          <div className="glass-card overflow-hidden border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/40 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="p-4 border-b border-slate-100 dark:border-white/5 flex justify-between items-center bg-slate-50 dark:bg-white/5">
                <h5 className="text-[10px] font-black text-text-muted uppercase tracking-widest">Top Performers - Call Center</h5>
                <span className="text-[9px] font-bold text-primary">Live Sync</span>
             </div>
             <div className="divide-y divide-slate-100 dark:divide-white/5">
                {[
                  { name: 'Anissa H.', vol: 142, conf: '88%', deliv: '72%', trend: 'up' },
                  { name: 'Laila S.', vol: 128, conf: '82%', deliv: '68%', trend: 'up' },
                  { name: 'Sami K.', vol: 95, conf: '74%', deliv: '61%', trend: 'down' },
                  { name: 'Meriem B.', vol: 84, conf: '91%', deliv: '84%', trend: 'up' },
                ].map((a, i) => (
                  <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-[11px] font-black">{a.name[0]}</div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">{a.name}</div>
                        <div className="text-[10px] text-text-muted">{a.vol} traités</div>
                      </div>
                    </div>
                    <div className="flex gap-8">
                      <div className="text-right">
                        <div className="text-xs font-black text-emerald-500">{a.conf}</div>
                        <div className="text-[8px] font-bold text-text-muted uppercase">Conf.</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-black text-primary">{a.deliv}</div>
                        <div className="text-[8px] font-bold text-text-muted uppercase">Livr.</div>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${a.trend === 'up' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
                        {a.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        );
      case 'Ads':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="glass-card p-6 border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/40">
                <h5 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-6">Répartition par Canal</h5>
                <div className="space-y-4">
                  {[
                    { name: 'Facebook Ads', val: 45, spend: '420k DA', roas: '4.2x', color: 'bg-blue-600' },
                    { name: 'TikTok Ads', val: 35, spend: '310k DA', roas: '5.8x', color: 'bg-black' },
                    { name: 'Google Ads', val: 15, spend: '140k DA', roas: '3.1x', color: 'bg-red-500' },
                    { name: 'Snapchat', val: 5, spend: '45k DA', roas: '2.4x', color: 'bg-yellow-400' },
                  ].map((c, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className={`w-2 h-8 rounded-full ${c.color}`} />
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold text-slate-900 dark:text-white">{c.name}</span>
                          <span className="text-[10px] font-bold text-emerald-500">{c.roas} ROAS</span>
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-text-muted">
                          <span>{c.spend}</span>
                          <span>{c.val}% du budget</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
             <div className="glass-card p-6 border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/40 flex flex-col justify-center items-center text-center">
                <PieChart className="w-20 h-20 text-primary/10 mb-6" />
                <h4 className="text-3xl font-black text-slate-900 dark:text-white">914,500 DA</h4>
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mt-2">Dépense Totale (30j)</p>
                <div className="mt-6 flex gap-4">
                   <div className="px-4 py-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                      <p className="text-[9px] font-bold text-emerald-500 uppercase">CPA Moyen</p>
                      <p className="text-sm font-black text-slate-900 dark:text-white">142 DA</p>
                   </div>
                   <div className="px-4 py-2 bg-primary/10 rounded-xl border border-primary/20">
                      <p className="text-[9px] font-bold text-primary uppercase">ROAS Moyen</p>
                      <p className="text-sm font-black text-slate-900 dark:text-white">4.2x</p>
                   </div>
                </div>
             </div>
          </div>
        );
      case 'Finance':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card p-6 border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/40">
                  <h5 className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-6">Cashflow Projeté (7 jours)</h5>
                  <div className="flex items-end gap-3 h-32 px-2 relative">
                    <div className="absolute inset-x-0 top-0 h-px bg-slate-100 dark:bg-white/5" />
                    <div className="absolute inset-x-0 top-1/2 h-px bg-slate-100 dark:bg-white/5" />
                    {[30, 45, 60, 55, 80, 95, 100].map((h, i) => (
                      <div key={i} className="flex-1 bg-emerald-500 rounded-t-sm animate-in slide-in-from-bottom" style={{ height: `${h}%`, animationDelay: `${i * 50}ms` }} />
                    ))}
                  </div>
                  <div className="flex justify-between mt-4 text-[8px] font-bold text-text-muted uppercase px-1">
                    <span>Lun</span><span>Mar</span><span>Mer</span><span>Jeu</span><span>Ven</span><span>Sam</span><span>Dim</span>
                  </div>
                </div>
                <div className="glass-card p-8 bg-primary/5 border-primary/20 flex flex-col justify-center items-center text-center">
                   <Landmark className="w-12 h-12 text-primary mb-4" />
                   <h4 className="text-4xl font-black text-slate-900 dark:text-white">12,480,000 DA</h4>
                   <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mt-2">Trésorerie Globale Disponible</p>
                </div>
             </div>
             <div className="glass-card p-6 border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/40">
                <h5 className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-6">Derniers Transferts Entre-Boutiques</h5>
                <div className="space-y-4">
                   {[
                     { from: 'Elite Electronics', to: 'Groupe Holding', amount: '2.4M DA', type: 'Profit Distribution' },
                     { from: 'Groupe Holding', to: 'Cosmetic Pro', amount: '800k DA', type: 'Stock Re-investment' },
                   ].map((t, i) => (
                     <div key={i} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5">
                        <div className="flex items-center gap-4">
                           <TrendingUp className="w-4 h-4 text-primary" />
                           <div>
                              <div className="text-[11px] font-bold text-slate-900 dark:text-white">{t.from} &rarr; {t.to}</div>
                              <div className="text-[9px] text-text-muted">{t.type}</div>
                           </div>
                        </div>
                        <div className="text-xs font-black text-emerald-500">{t.amount}</div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        );
      case 'Carte':
        return (
          <div className="glass-card p-8 border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/40 h-[400px] relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                <Globe className="w-96 h-96 text-primary" />
             </div>
             <div className="relative z-10 flex flex-col h-full">
                <h5 className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-10">Expansion Géographique & Zones de Vente</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 flex-1">
                   <div className="space-y-6">
                      <div className="space-y-2">
                         <div className="flex items-center justify-between text-xs font-bold">
                            <span className="text-slate-900 dark:text-white">Algerie (Nord)</span>
                            <span className="text-emerald-500">68%</span>
                         </div>
                         <div className="w-full h-1.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500" style={{ width: '68%' }} />
                         </div>
                      </div>
                      <div className="space-y-2">
                         <div className="flex items-center justify-between text-xs font-bold">
                            <span className="text-slate-900 dark:text-white">Ouest & Est</span>
                            <span className="text-primary">24%</span>
                         </div>
                         <div className="w-full h-1.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-primary" style={{ width: '24%' }} />
                         </div>
                      </div>
                      <div className="space-y-2">
                         <div className="flex items-center justify-between text-xs font-bold">
                            <span className="text-slate-900 dark:text-white">Sud & Sahara</span>
                            <span className="text-amber-500">8%</span>
                         </div>
                         <div className="w-full h-1.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-500" style={{ width: '8%' }} />
                         </div>
                      </div>
                   </div>
                   <div className="flex flex-col items-center justify-center p-8 bg-slate-900 rounded-3xl text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                         <Globe className="w-8 h-8 text-primary animate-pulse" />
                      </div>
                      <h4 className="text-xl font-bold text-white uppercase tracking-tighter">Alger & Oran</h4>
                      <p className="text-[10px] text-primary font-bold uppercase mt-1">Top Hubs Logistiques</p>
                      <div className="mt-6 text-[9px] text-slate-400 leading-relaxed italic">
                        Les hubs de livraison en centre-ville montrent une réduction de 42% des délais sur le dernier trimestre.
                      </div>
                   </div>
                </div>
             </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-24 bg-slate-50/50 dark:bg-surface/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {t('dash_title')}
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Commandez votre empire e-commerce depuis une interface unifiée.
          </p>
        </div>

        {/* Dashboard Shell - macOS Style Window */}
        <div className="glass-card border-slate-200 dark:border-white/10 overflow-hidden bg-white dark:bg-black/40 shadow-2xl rounded-[32px] sm:rounded-[40px] flex flex-col h-[700px]">
          
          {/* Top Bar / Header */}
          <div className="h-16 border-b border-slate-100 dark:border-white/5 flex items-center justify-between px-6 bg-white dark:bg-slate-900/50">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <div className="h-8 w-px bg-slate-100 dark:bg-white/10 mx-2" />
              <div className="relative group">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                <input 
                  type="text" 
                  placeholder="Search empire data..." 
                  className="bg-slate-100 dark:bg-white/5 border-none rounded-full pl-9 pr-4 py-1.5 text-[11px] font-bold w-64 focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-text-muted hover:text-primary transition-colors relative">
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-rose-500 rounded-full border border-white dark:border-slate-900" />
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-white/5 rounded-full text-[10px] font-bold text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                <Download className="w-3.5 h-3.5" /> Export Data
              </button>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-[10px] font-black text-white shadow-lg shadow-primary/20">EM</div>
            </div>
          </div>

          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar / Tabs */}
            <div className="w-64 border-r border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-black/20 flex flex-col py-6">
              <p className="px-6 text-[10px] font-black text-text-muted uppercase tracking-widest mb-4">Command Cockpit</p>
              <div className="space-y-1 px-3">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                      activeTab === tab.id 
                        ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                        : 'text-text-muted hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                    {activeTab === tab.id && <div className="ml-auto w-1.5 h-1.5 bg-white rounded-full" />}
                  </button>
                ))}
              </div>
              
              <div className="mt-auto px-3">
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl">
                   <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <p className="text-[10px] font-black text-primary uppercase tracking-widest">Empire Sync</p>
                   </div>
                   <p className="text-[9px] text-text-muted leading-relaxed font-bold">All 12 stores are currently synchronized across 4 regions.</p>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-white dark:bg-transparent">
              <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">{activeTab} Overview</h3>
                    <p className="text-xs text-text-muted font-bold">Real-time data stream for your enterprise group.</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 border border-slate-200 dark:border-white/10 rounded-lg text-text-muted hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"><Filter className="w-4 h-4" /></button>
                    <button className="p-2 border border-slate-200 dark:border-white/10 rounded-lg text-text-muted hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"><Download className="w-4 h-4" /></button>
                  </div>
                </div>
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { 
          background: rgba(0, 162, 255, 0.1); 
          border-radius: 10px; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { 
          background: rgba(0, 162, 255, 0.3); 
        }
      `}</style>
    </section>
  );
};

export default DashboardInteractive;
