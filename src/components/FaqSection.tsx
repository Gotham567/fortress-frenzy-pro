import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qu'est-ce qu'un test d'intrusion (pentest) ?",
    answer:
      "Un test d'intrusion est une simulation d'attaque contrôlée visant à identifier les vulnérabilités de vos systèmes, réseaux et applications. Nos experts certifiés OSCP reproduisent les techniques d'attaquants réels pour évaluer votre niveau de sécurité et vous fournir des recommandations concrètes de remédiation.",
  },
  {
    question: "Pourquoi réaliser un audit de sécurité informatique ?",
    answer:
      "Un audit de sécurité permet d'évaluer l'ensemble de votre posture de sécurité, de vérifier la conformité aux normes (ISO 27001, ANSSI, RGPD) et d'identifier les axes d'amélioration prioritaires. C'est une étape essentielle pour protéger vos données sensibles et prévenir les cyberattaques.",
  },
  {
    question: "Comment SentinelCyber intervient en cas d'incident de sécurité ?",
    answer:
      "Notre équipe SOC est disponible 24/7. En cas d'incident, nous intervenons rapidement pour contenir la menace, réaliser l'analyse forensique, éradiquer la compromission et mettre en place un plan de remédiation complet. Nous vous accompagnons également dans la communication de crise et les obligations réglementaires.",
  },
  {
    question: "Quelles certifications possèdent vos experts en cybersécurité ?",
    answer:
      "Nos consultants détiennent les certifications les plus reconnues du secteur : OSCP (Offensive Security Certified Professional), CEH (Certified Ethical Hacker), CISSP (Certified Information Systems Security Professional), ainsi que les qualifications ANSSI. Cette expertise garantit des prestations de très haut niveau.",
  },
  {
    question: "Êtes-vous conformes aux réglementations NIS2 et RGPD ?",
    answer:
      "Oui, nous accompagnons nos clients dans leur mise en conformité NIS2 et RGPD. Nos audits et notre conseil stratégique intègrent systématiquement ces exigences réglementaires européennes. Nous réalisons des analyses d'écart et définissons des plans d'action adaptés à votre contexte.",
  },
  {
    question: "Combien coûte un test d'intrusion ?",
    answer:
      "Le coût d'un pentest dépend du périmètre (application web, réseau, infrastructure cloud), de la complexité et de la durée de la mission. Contactez-nous pour obtenir un devis personnalisé gratuit adapté à vos besoins spécifiques en cybersécurité.",
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
