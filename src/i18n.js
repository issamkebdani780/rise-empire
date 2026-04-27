import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      "enterprise": "Enterprise",
      "modules": "Modules",
      "security": "Sécurité",
      "tarifs": "Tarifs",
      "contact": "Contact",
      "demo": "Demander démo",
      "expert": "Parler à un expert",
      "hero_title": "Pilote plusieurs boutiques depuis un seul cockpit.",
      "hero_subtitle": "Commandes, équipes, marques, entrepôts, publicité, bénéfices : une seule vision globale pour diriger votre empire e-commerce.",
      "reserve_demo": "Réserver démo privée",
      "view_enterprise": "Voir version enterprise",
      "active_stores": "Boutiques Actives",
      "monthly_orders": "Commandes Mois",
      "warehouses": "Entrepôts",
      "employees": "Employés",
      "consolidated_profit": "Profit Consolidé Algérie / Afrique",
      "net_profit": "Profit Net",
      "active_sync": "Boutiques Sync",
      "growth_breaks_systems": "La croissance casse les systèmes faibles.",
      "chaos_description": "Plus vous grandissez, plus le chaos s'installe. Sans structure centralisée, l'empire s'effondre de l'intérieur.",
      "group_vision": "Une vue groupe, sans perdre le détail",
      "zoom_description": "La puissance de RiseManager réside dans sa capacité à zoomer sur une commande précise ou à dézoomer sur l'empire entier en un clic.",
      "dashboard_title": "Le centre de commandement RiseManager",
      "dashboard_desc": "Toutes vos unités commerciales, logistiques et financières unifiées dans un cockpit ultra-rapide.",
      "tab_group": "Groupe",
      "tab_brands": "Marques",
      "tab_warehouses": "Entrepôts",
      "tab_rh": "RH",
      "tab_ads": "Ads",
      "tab_finance": "Finance",
      "tab_map": "Carte",
      "everyone_sees": "Chacun voit ce qu'il doit voir",
      "hierarchy_desc": "Protégez vos secrets commerciaux. RiseManager implémente une hiérarchie granulaire pour que chaque membre de l'équipe soit focus sur son rôle.",
      "executive_alerts": "Le patron reçoit les vraies alertes",
      "automation_desc": "Ne cherchez plus l'information, elle vient à vous. RiseManager filtre le bruit pour ne vous présenter que les événements qui impactent votre rentabilité.",
      "sensitive_data": "Données sensibles, niveau sérieux",
      "security_desc": "Votre data est votre plus grand actif. Nous l'utilisons comme tel, avec une architecture conçue pour la sécurité maximale et la scalabilité sans limite.",
      "pricing_title": "Une offre à la hauteur de vos ambitions",
      "pricing_desc": "Pas de prix cachés, juste une solution taillée pour votre croissance.",
      "faq_title": "Questions fréquentes",
      "ready_for_empire": "Prêt à passer au niveau Empire ?",
      "lead_form_desc": "Laissez-nous vos coordonnées et un expert vous contactera sous 24h pour une démonstration personnalisée adaptée à votre structure.",
      "connect": "Se connecter",
      "start_free": "Démarrer gratuitement"
    }
  },
  en: {
    translation: {
      "enterprise": "Enterprise",
      "modules": "Modules",
      "security": "Security",
      "tarifs": "Pricing",
      "contact": "Contact",
      "demo": "Request Demo",
      "expert": "Talk to an Expert",
      "hero_title": "Control multiple stores from a single cockpit.",
      "hero_subtitle": "Orders, teams, brands, warehouses, ads, profits: one global vision to lead your e-commerce empire.",
      "reserve_demo": "Book Private Demo",
      "view_enterprise": "View Enterprise Version",
      "active_stores": "Active Stores",
      "monthly_orders": "Monthly Orders",
      "warehouses": "Warehouses",
      "employees": "Employees",
      "consolidated_profit": "Consolidated Profit Algeria / Africa",
      "growth_breaks_systems": "Growth breaks weak systems.",
      "chaos_description": "The more you grow, the more chaos sets in. Without a centralized structure, the empire collapses from within.",
      "group_vision": "A group view, without losing the detail",
      "zoom_description": "RiseManager's power lies in its ability to zoom in on a specific order or zoom out to the entire empire in one click.",
      "dashboard_title": "The RiseManager Command Center",
      "dashboard_desc": "All your commercial, logistical, and financial units unified in a lightning-fast cockpit.",
      "everyone_sees": "Everyone sees what they need to see",
      "hierarchy_desc": "Protect your trade secrets. RiseManager implements a granular hierarchy so each team member is focused on their role.",
      "executive_alerts": "The boss gets the real alerts",
      "automation_desc": "Stop looking for information; it comes to you. RiseManager filters the noise to present only the events impacting your profitability.",
      "sensitive_data": "Sensitive data, serious level",
      "security_desc": "Your data is your greatest asset. We treat it as such, with an architecture designed for maximum security and limitless scalability.",
      "pricing_title": "An offer matching your ambitions",
      "pricing_desc": "No hidden fees, just a solution tailored for your growth.",
      "faq_title": "Frequently Asked Questions",
      "ready_for_empire": "Ready to go to Empire level?",
      "lead_form_desc": "Leave us your contact details and an expert will contact you within 24 hours for a personalized demo adapted to your structure.",
      "connect": "Log In",
      "start_free": "Start for Free"
    }
  },
  ar: {
    translation: {
      "enterprise": "المؤسسات",
      "modules": "الوحدات",
      "security": "الأمان",
      "tarifs": "الأسعار",
      "contact": "اتصل بنا",
      "demo": "طلب عرض تجريبي",
      "expert": "تحدث مع خبير",
      "hero_title": "قم بقيادة متاجر متعددة من قمرة قيادة واحدة.",
      "hero_subtitle": "الطلبات، الفرق، العلامات التجارية، المستودعات، الإعلانات، الأرباح: رؤية عالمية واحدة لإدارة إمبراطوريتك للتجارة الإلكترونية.",
      "reserve_demo": "حجز عرض خاص",
      "view_enterprise": "عرض نسخة المؤسسات",
      "active_stores": "المتاجر النشطة",
      "monthly_orders": "الطلبات الشهرية",
      "warehouses": "المستودعات",
      "employees": "الموظفين",
      "consolidated_profit": "الأرباح المجمعة الجزائر / أفريقيا",
      "growth_breaks_systems": "النمو يكسر الأنظمة الضعيفة.",
      "chaos_description": "كلما كبرت، زادت الفوضى. بدون هيكل مركزي، تنهار الإمبراطورية من الداخل.",
      "group_vision": "رؤية المجموعة، دون فقدان التفاصيل",
      "zoom_description": "تكمن قوة RiseManager في قدرتها على التكبير على طلب محدد أو التصغير للإمبراطورية بأكملها بنقرة واحدة.",
      "dashboard_title": "مركز قيادة RiseManager",
      "dashboard_desc": "جميع وحداتك التجارية واللوجستية والمالية موحدة في قمرة قيادة فائقة السرعة.",
      "everyone_sees": "الكل يرى ما يجب أن يراه",
      "hierarchy_desc": "احمِ أسرارك التجارية. يطبق RiseManager تسلسلاً هرميًا دقيقًا ليكون كل عضو في الفريق مركزًا على دوره.",
      "executive_alerts": "المدير يتلقى التنبيهات الحقيقية",
      "automation_desc": "لا تبحث عن المعلومة، بل هي تأتي إليك. يقوم RiseManager بتصفية الضجيج ليقدم لك فقط الأحداث التي تؤثر على ربحيتك.",
      "sensitive_data": "بيانات حساسة، مستوى جدي",
      "security_desc": "بياناتك هي أعظم أصولك. نحن نتعامل معها على هذا النحو، مع بنية مصممة لأقصى درجات الأمان وقابلية توسع لا حدود لها.",
      "pricing_title": "عرض يليق بطموحاتك",
      "pricing_desc": "لا توجد رسوم خفية، فقط حل مصمم لنموك.",
      "faq_title": "الأسئلة الشائعة",
      "ready_for_empire": "هل أنت مستعد للانتقال إلى مستوى الإمبراطورية؟",
      "lead_form_desc": "اترك لنا بيانات الاتصال الخاصة بك وسيتواصل معك خبير في غضون 24 ساعة لتقديم عرض مخصص يتناسب مع هيكل عملك.",
      "connect": "تسجيل الدخول",
      "start_free": "ابدأ مجاناً"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
