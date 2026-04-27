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
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white">Validé par les leaders du marché</h2>
          <p className="text-text-muted max-w-2xl mx-auto">Ils ont arrêté de gérer des boutiques pour commencer à piloter un empire.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => <TestimonialCard key={i} {...r} />)}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
