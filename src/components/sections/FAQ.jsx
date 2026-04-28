import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 dark:border-white/5 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-primary transition-colors"
      >
        <span className="font-bold text-slate-900 dark:text-white">{question}</span>
        {isOpen ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-text-muted" />}
      </button>
      {isOpen && (
        <div className="pb-6 animate-in slide-in-from-top-2 duration-300">
          <p className="text-text-muted text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const { t } = useTranslation();
  const questions = [
    {
      question: "Combien de boutiques peut-on connecter ?",
      answer: "Dans la version Enterprise, il n'y a pas de limite technique."
    },
    {
      question: "Peut-on séparer les équipes par boutique ?",
      answer: "Absolument. Vous pouvez assigner des membres d'équipes spécifiques."
    },
    {
      question: "Une API est-elle disponible ?",
      answer: "Oui, nous offrons une API REST complète."
    },
    {
      question: "White label possible ?",
      answer: "Oui, la solution peut être personnalisée à votre image avec votre propre branding."
    },
    {
      question: "Support dédié ?",
      answer: "Oui, un account manager et une équipe de support dédiée sont attribués à chaque client Enterprise."
    },
    {
      question: "Migration accompagnée ?",
      answer: "Absolument. Nous proposons un accompagnement complet lors de la migration avec une équipe technique dédiée."
    }
  ];

  return (
    <section className="py-24 bg-slate-50/50 dark:bg-surface/20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">{t('faq_title')}</h2>
        <div className="glass-card p-8 border-slate-200 dark:border-white/10 bg-white dark:bg-transparent">
          {questions.map((q, i) => <FAQItem key={i} {...q} />)}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
