import { motion } from "framer-motion";
import { ShieldAlert, FileCheck, Scale, Building2, ArrowRight } from "lucide-react";

const complianceItems = [
  {
    icon: ShieldAlert,
    title: "Directive NIS2 — Êtes-vous concerné ?",
    description:
      "Depuis octobre 2024, la directive européenne NIS2 élargit les obligations de cybersécurité à plus de 15 000 entreprises françaises. PME, ETI et grands comptes de 18 secteurs critiques doivent se mettre en conformité NIS2 sous peine de sanctions pouvant atteindre 10 millions d'euros.",
    points: [
      "Analyse d'éligibilité NIS2 pour votre entreprise",
      "Audit d'écart et plan de mise en conformité NIS2",
      "Mise en place des mesures de sécurité exigées",
      "Notification d'incidents et obligations de reporting",
    ],
  },
  {
    icon: Scale,
    title: "Mise en conformité RGPD",
    description:
      "Le Règlement Général sur la Protection des Données impose aux entreprises de garantir la sécurité des données personnelles. CyberConform vous accompagne dans votre mise en conformité RGPD avec une approche pragmatique adaptée aux PME et ETI.",
    points: [
      "Audit RGPD et cartographie des traitements de données",
      "Analyse d'impact (DPIA) sur la vie privée",
      "Mise en place des mesures techniques et organisationnelles",
      "Formation DPO et sensibilisation des équipes",
    ],
  },
  {
    icon: FileCheck,
    title: "Certification ISO 27001",
    description:
      "Obtenez la certification ISO 27001, norme internationale de référence en management de la sécurité de l'information. Nous vous accompagnons de l'audit initial jusqu'à la certification.",
    points: [
      "Audit de maturité et analyse d'écart ISO 27001",
      "Définition du périmètre et de la politique SMSI",
      "Mise en œuvre des 93 mesures de l'Annexe A",
      "Préparation et accompagnement à l'audit de certification",
    ],
  },
  {
    icon: Building2,
    title: "PME concernées par NIS2",
    description:
      "Vous êtes une PME dans l'énergie, la santé, les transports, le numérique ou un autre secteur essentiel ? La directive NIS2 vous concerne probablement. Notre offre dédiée aux PME vous permet de vous mettre en conformité rapidement et à moindre coût.",
    points: [
      "Diagnostic NIS2 express pour PME (5 jours)",
      "Pack conformité PME à tarif adapté",
      "Accompagnement par un référent dédié",
      "Suivi trimestriel et tableau de bord conformité",
    ],
  },
];

const ComplianceSection = () => {
  return (
    <section
      id="conformite"
      className="py-28 bg-grid"
      aria-label="Conformité NIS2 et RGPD pour les entreprises"
    >
      <div className="container mx-auto px-6">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl mx-auto text-center"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary">
            // Conformité réglementaire
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Conformité{" "}
            <span className="text-gradient-cyber">NIS2</span> &{" "}
            <span className="text-gradient-cyber">RGPD</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            La directive NIS2 et le RGPD imposent des obligations de cybersécurité renforcées aux
            entreprises françaises. SentinelCyber accompagne les PME et ETI dans leur mise en
            conformité avec une méthodologie éprouvée et des résultats mesurables.
          </p>
        </motion.header>

        <div className="grid gap-6 md:grid-cols-2">
          {complianceItems.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-lg border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                {item.description}
              </p>
              <ul className="space-y-2" role="list">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-xs text-muted-foreground"
                  >
                    <span
                      className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
              <div
                className="absolute -bottom-1/2 -right-1/2 h-full w-full rounded-full bg-primary/5 opacity-0 blur-3xl transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              />
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
            aria-label="Demander un diagnostic de conformité NIS2 et RGPD"
          >
            Demander un diagnostic conformité gratuit
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ComplianceSection;
