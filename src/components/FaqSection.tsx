import { motion } from "framer-motion";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, FileCheck, AlertTriangle, Search, HelpCircle } from "lucide-react";

const categories = [
  { id: "all", label: "Toutes", icon: HelpCircle },
  { id: "nis2", label: "NIS2", icon: Shield },
  { id: "rgpd", label: "RGPD", icon: FileCheck },
  { id: "services", label: "Services", icon: Search },
  { id: "risques", label: "Risques & Sanctions", icon: AlertTriangle },
];

const faqs = [
  {
    category: "nis2",
    question: "Qu'est-ce que la directive NIS2 et quelles entreprises sont concernées ?",
    answer:
      "La directive européenne NIS2 (Network and Information Security 2), en vigueur depuis octobre 2024, élargit considérablement les obligations de cybersécurité. Elle concerne désormais les PME et ETI de 18 secteurs critiques (énergie, santé, transports, numérique, eau, alimentation, etc.) à partir de 50 employés ou 10 millions d'euros de chiffre d'affaires. CyberConform vous aide à déterminer si votre PME est concernée par NIS2 et à vous mettre en conformité.",
  },
  {
    category: "nis2",
    question: "Comment se mettre en conformité NIS2 quand on est une PME ?",
    answer:
      "La mise en conformité NIS2 pour une PME passe par plusieurs étapes : diagnostic d'éligibilité, analyse d'écart par rapport aux exigences, mise en place des mesures de sécurité techniques et organisationnelles, formation des équipes et mise en place du processus de notification d'incidents. Notre pack conformité NIS2 dédié aux PME permet de réaliser cette mise en conformité en 3 à 6 mois avec un budget maîtrisé.",
  },
  {
    category: "nis2",
    question: "Quels sont les délais pour se conformer à NIS2 ?",
    answer:
      "Les États membres devaient transposer la directive NIS2 en droit national avant le 17 octobre 2024. En France, la transposition est en cours via le projet de loi Résilience. Les entreprises concernées ont tout intérêt à anticiper dès maintenant : un programme de conformité prend en moyenne 3 à 6 mois. CyberConform recommande de démarrer par un diagnostic d'éligibilité gratuit pour évaluer votre situation.",
  },
  {
    category: "rgpd",
    question: "Quelle est la différence entre conformité NIS2 et conformité RGPD ?",
    answer:
      "Le RGPD protège les données personnelles de vos clients et employés. NIS2 sécurise l'ensemble de vos réseaux et systèmes d'information. Les deux sont complémentaires : un incident de sécurité NIS2 implique souvent une violation RGPD. Mettre en place les deux conformités simultanément permet de mutualiser les efforts (cartographie des actifs, analyse de risques, gouvernance). CyberConform accompagne les entreprises sur les deux volets.",
  },
  {
    category: "rgpd",
    question: "Combien coûte une mise en conformité RGPD pour une PME ?",
    answer:
      "Le coût dépend de la taille de l'entreprise, du volume de données traitées et du niveau de maturité actuel. Pour une PME, comptez entre 5 000 et 20 000 € pour un accompagnement complet incluant le registre des traitements, l'analyse d'impact (AIPD), la mise à jour des contrats et la formation des équipes. Contactez-nous pour un diagnostic RGPD gratuit et un devis personnalisé.",
  },
  {
    category: "rgpd",
    question: "Ai-je besoin d'un DPO (Délégué à la Protection des Données) ?",
    answer:
      "La désignation d'un DPO est obligatoire pour les organismes publics, les entreprises dont l'activité principale implique un suivi régulier et systématique des personnes, ou celles traitant des données sensibles à grande échelle. Même si ce n'est pas obligatoire pour votre PME, un DPO externalisé reste fortement recommandé. CyberConform propose un service de DPO externalisé adapté aux budgets des PME.",
  },
  {
    category: "services",
    question: "Qu'est-ce qu'un test d'intrusion (pentest) et à quelle fréquence le faire ?",
    answer:
      "Un test d'intrusion est une simulation d'attaque contrôlée visant à identifier les vulnérabilités de vos systèmes, réseaux et applications. Nos experts certifiés OSCP reproduisent les techniques d'attaquants réels. Nous recommandons un pentest au minimum une fois par an, et après chaque changement majeur d'infrastructure. Un rapport détaillé avec plan de remédiation priorisé vous est remis sous 10 jours.",
  },
  {
    category: "services",
    question: "Pourquoi réaliser un audit de sécurité informatique ?",
    answer:
      "Un audit de sécurité évalue l'ensemble de votre posture de sécurité : infrastructure réseau, configuration des serveurs, gestion des accès, politiques de sauvegarde, plan de continuité. Il vérifie la conformité aux normes (ISO 27001, ANSSI, RGPD, NIS2) et identifie les axes d'amélioration prioritaires. C'est le point de départ indispensable de toute démarche de sécurisation.",
  },
  {
    category: "services",
    question: "Comment CyberConform intervient en cas d'incident de sécurité ?",
    answer:
      "Notre équipe SOC est disponible 24/7. En cas d'incident, nous intervenons en 4 phases : confinement immédiat de la menace, analyse forensique pour comprendre le vecteur d'attaque, éradication et restauration des systèmes, puis plan de remédiation pour éviter toute récidive. Nous vous accompagnons également dans la communication de crise et les notifications obligatoires (ANSSI sous 24h pour NIS2, CNIL sous 72h pour le RGPD).",
  },
  {
    category: "services",
    question: "Qu'est-ce qu'un RSSI externalisé et quand en ai-je besoin ?",
    answer:
      "Un RSSI externalisé (Responsable de la Sécurité des Systèmes d'Information) assure la gouvernance de votre cybersécurité sans les coûts d'un recrutement à temps plein. Il définit la stratégie de sécurité, pilote les projets de conformité NIS2/RGPD, supervise les audits et gère les incidents. C'est la solution idéale pour les PME de 50 à 500 salariés qui n'ont pas les moyens d'un RSSI interne (80-120k€/an) mais en ont l'obligation.",
  },
  {
    category: "risques",
    question: "Quelles sont les sanctions en cas de non-conformité NIS2 ?",
    answer:
      "Les sanctions NIS2 sont dissuasives : jusqu'à 10 millions d'euros ou 2% du CA mondial pour les entités essentielles, 7 millions ou 1,4% du CA pour les entités importantes. La grande nouveauté : la responsabilité personnelle des dirigeants peut être engagée, avec possibilité d'interdiction temporaire d'exercer des fonctions de direction. Il est crucial de lancer votre mise en conformité sans attendre.",
  },
  {
    category: "risques",
    question: "Mon entreprise a été piratée, que faire en urgence ?",
    answer:
      "Les premières heures sont critiques. Étape 1 : isolez les systèmes compromis du réseau (ne les éteignez pas). Étape 2 : contactez immédiatement notre cellule de crise au +33 7 69 32 30 19 (24/7). Étape 3 : ne payez jamais de rançon. Étape 4 : préservez toutes les preuves numériques. Nous prenons en charge la suite : analyse forensique, restauration, notification aux autorités (ANSSI, CNIL) et plan de reprise d'activité.",
  },
  {
    category: "risques",
    question: "Comment sensibiliser mes collaborateurs aux risques cyber ?",
    answer:
      "90% des cyberattaques commencent par un email de phishing. CyberConform propose des programmes de sensibilisation sur-mesure : campagnes de phishing simulé avec analyse des résultats, formations en présentiel ou e-learning, exercices de gestion de crise. Nous adaptons le contenu à votre secteur d'activité et au niveau technique de vos équipes. Un programme annuel permet de maintenir la vigilance dans la durée.",
  },
];

const FaqSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFaqs = activeCategory === "all"
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  return (
    <section id="faq" className="py-28" aria-label="Questions fréquentes sur la cybersécurité">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 text-center"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary">
            // FAQ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-wrap-balance">
            Questions fréquentes sur la{" "}
            <span className="text-gradient-cyber">cybersécurité</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Retrouvez les réponses aux questions les plus posées par nos clients sur la conformité NIS2, le RGPD, les tests d'intrusion et nos services de cybersécurité.
          </p>
        </motion.header>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                aria-pressed={isActive}
                className={`
                  inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium
                  transition-all duration-200 ease-out
                  active:scale-[0.97]
                  ${isActive
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                  }
                `}
              >
                <Icon className="w-3.5 h-3.5" />
                {cat.label}
                {cat.id !== "all" && (
                  <span className={`text-xs ${isActive ? "text-primary-foreground/70" : "text-muted-foreground/50"}`}>
                    ({faqs.filter(f => f.category === cat.id).length})
                  </span>
                )}
              </button>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {filteredFaqs.map((faq, i) => (
              <motion.div
                key={`${activeCategory}-${i}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              >
                <AccordionItem
                  value={`faq-${i}`}
                  className="rounded-lg border border-border bg-card px-6 transition-all duration-200 hover:border-primary/30 hover:shadow-sm"
                >
                  <AccordionTrigger className="text-sm font-medium text-foreground text-left py-5 hover:no-underline gap-3">
                    <span className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </span>
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5 pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA after FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.97]"
          >
            Contactez nos experts
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
