import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qu'est-ce que la directive NIS2 et quelles entreprises sont concernées ?",
    answer:
      "La directive européenne NIS2 (Network and Information Security 2), en vigueur depuis octobre 2024, élargit considérablement les obligations de cybersécurité. Elle concerne désormais les PME et ETI de 18 secteurs critiques (énergie, santé, transports, numérique, eau, alimentation, etc.) à partir de 50 employés ou 10 millions d'euros de chiffre d'affaires. CyberConform vous aide à déterminer si votre PME est concernée par NIS2 et à vous mettre en conformité.",
  },
  {
    question: "Comment se mettre en conformité NIS2 quand on est une PME ?",
    answer:
      "La mise en conformité NIS2 pour une PME passe par plusieurs étapes : diagnostic d'éligibilité, analyse d'écart par rapport aux exigences, mise en place des mesures de sécurité techniques et organisationnelles, formation des équipes et mise en place du processus de notification d'incidents. Notre pack conformité NIS2 dédié aux PME permet de réaliser cette mise en conformité en 3 à 6 mois avec un budget maîtrisé.",
  },
  {
    question: "Quelle est la différence entre conformité NIS2 et conformité RGPD ?",
    answer:
      "Le RGPD (Règlement Général sur la Protection des Données) concerne la protection des données personnelles, tandis que la directive NIS2 porte sur la sécurité des réseaux et systèmes d'information. Les deux sont complémentaires : la mise en conformité RGPD protège les données de vos clients et employés, la conformité NIS2 sécurise votre infrastructure globale. CyberConform accompagne les entreprises sur les deux volets.",
  },
  {
    question: "Qu'est-ce qu'un test d'intrusion (pentest) ?",
    answer:
      "Un test d'intrusion est une simulation d'attaque contrôlée visant à identifier les vulnérabilités de vos systèmes, réseaux et applications. Nos experts certifiés OSCP reproduisent les techniques d'attaquants réels pour évaluer votre niveau de sécurité et vous fournir des recommandations concrètes de remédiation.",
  },
  {
    question: "Pourquoi réaliser un audit de sécurité informatique ?",
    answer:
      "Un audit de sécurité permet d'évaluer l'ensemble de votre posture de sécurité, de vérifier la conformité aux normes (ISO 27001, ANSSI, RGPD, NIS2) et d'identifier les axes d'amélioration prioritaires. C'est une étape essentielle pour protéger vos données sensibles et répondre aux exigences réglementaires de la directive NIS2.",
  },
  {
    question: "Comment CyberConform intervient en cas d'incident de sécurité ?",
    answer:
      "Notre équipe SOC est disponible 24/7. En cas d'incident, nous intervenons rapidement pour contenir la menace, réaliser l'analyse forensique, éradiquer la compromission et mettre en place un plan de remédiation complet. Nous vous accompagnons également dans la communication de crise et les obligations de notification NIS2 et RGPD.",
  },
  {
    question: "Quelles sont les sanctions en cas de non-conformité NIS2 ?",
    answer:
      "Les sanctions pour non-conformité NIS2 peuvent atteindre 10 millions d'euros ou 2% du chiffre d'affaires mondial pour les entités essentielles, et 7 millions d'euros ou 1,4% du CA pour les entités importantes. Au-delà des amendes, la responsabilité personnelle des dirigeants peut être engagée. Il est crucial de lancer votre mise en conformité NIS2 dès maintenant.",
  },
  {
    question: "Combien coûte une mise en conformité RGPD pour une PME ?",
    answer:
      "Le coût d'une mise en conformité RGPD dépend de la taille de l'entreprise, du volume de données traitées et du niveau de maturité actuel. Pour une PME, comptez entre 5 000 et 20 000 € pour un accompagnement complet. Contactez-nous pour un diagnostic RGPD gratuit et un devis personnalisé.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-28" aria-label="Questions fréquentes sur la cybersécurité">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary">
            // FAQ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Questions fréquentes sur la{" "}
            <span className="text-gradient-cyber">cybersécurité</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Retrouvez les réponses aux questions les plus posées par nos clients sur nos services
            de tests d'intrusion, audits de sécurité et conseil en cybersécurité.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-lg border border-border bg-card px-6 transition-colors hover:border-primary/30"
              >
                <AccordionTrigger className="text-sm font-medium text-foreground text-left py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
