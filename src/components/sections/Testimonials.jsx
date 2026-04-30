import React from 'react';
import { useTranslation } from 'react-i18next';
import { Quote, Star } from 'lucide-react';

const TestimonialCard = ({ quote, author, role, company }) => (
  <div className="glass-card p-8 border-slate-200 dark:border-white/5 relative bg-white dark:bg-transparent">
    <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
    </div>
    <p className="text-lg text-slate-900 dark:text-white mb-8 font-medium leading-relaxed italic">
      "{quote}"
    </p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-slate-100 dark:bg-white/10 rounded-full flex items-center justify-center font-bold text-primary">
        {author[0]}
      </div>
      <div>
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">{author}</h4>
        <p className="text-xs text-text-muted">{role}, {company}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const { t } = useTranslation();
  const reviews = [
    {
      quote: "On pilote 5 stores avec une seule équipe centrale. RiseManager nous a permis de réduire nos coûts opérationnels de 40% tout en doublant notre volume.",
      author: "Samir K.",
      role: "Fondateur",
      company: "Horizon Group"
    },
    {
      quote: "Les réunions sont devenues utiles. On n'est plus là pour discuter des chiffres (ils sont sous nos yeux), mais pour décider de la stratégie de la semaine.",
      author: "Yasmine L.",
      role: "Directrice Ops",
      company: "Moda Holding"
    },
    {
      quote: "On voit enfin où agir chaque matin. Le centre d'alertes est devenu notre premier réflexe. Plus d'erreurs de stock invisibles.",
      author: "Karim B.",
      role: "E-commerce Manager",
      company: "Elite Brands"
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/50 shadow-sm mx-auto">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-[10px] font-black tracking-widest uppercase text-slate-800 dark:text-slate-200">
              CONFIANCE & RÉSULTATS
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight max-w-4xl mx-auto">
            Ils construisent le futur du COD en Afrique avec nous.
          </h2>
          
          {/* Stats Pill */}
          <div className="mt-12 max-w-5xl mx-auto glass-card border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/40 rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 relative z-10 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-white/10">
              <div className="flex flex-col items-center justify-center space-y-2 py-4 md:py-0">
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">500+</h3>
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest text-center">UTILISATEURS ACTIFS</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 py-4 md:py-0">
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">2M+</h3>
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest text-center">COMMANDES GÉRÉES</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 py-4 md:py-0">
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">3.5x</h3>
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest text-center">ROI MOYEN CLIENT</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 py-4 md:py-0">
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">98%</h3>
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest text-center">TAUX DE SATISFACTION</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => <TestimonialCard key={i} {...r} />)}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
