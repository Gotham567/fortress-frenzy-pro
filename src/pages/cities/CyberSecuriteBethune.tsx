import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuriteBethune = () => (
  <CityLandingPage
    data={{
      city: "Béthune",
      citySlug: "bethune",
      region: "Hauts-de-France",
      postalCode: "62400",
      intro: "CyberConform accompagne les entreprises de Béthune, Bruay-la-Buissière et de l'arrondissement Béthune-Bruay dans leur mise en conformité NIS2, RGPD et ISO 27001. Diagnostic d'éligibilité NIS2 gratuit pour les PME du Pas-de-Calais.",
      localContext: "L'arrondissement de Béthune regroupe un tissu économique diversifié : industries agroalimentaires, logistique, artisanat, commerces et professions libérales. Avec la transposition de NIS2 en droit français en 2026, les entreprises du Béthunois doivent évaluer leur éligibilité. Les sous-traitants industriels locaux sont particulièrement exposés : leurs donneurs d'ordre (grands groupes) leur imposeront contractuellement les exigences NIS2 via les clauses de sécurité de la chaîne d'approvisionnement. CyberConform intervient sur Béthune, Bruay-la-Buissière, Noeux-les-Mines, Barlin et dans tout le Pas-de-Calais.",
      sectors: [
        "Industrie agroalimentaire et manufacturière",
        "Sous-traitance industrielle",
        "Logistique et transport",
        "Professions libérales (avocats, experts-comptables)",
        "Établissements de santé et EHPAD",
        "Collectivités et mairies",
        "Commerce de gros et de détail",
        "BTP et promotion immobilière",
      ],
      neighborhoods: [
        "Béthune centre",
        "Bruay-la-Buissière",
        "Noeux-les-Mines",
        "Barlin",
        "Auchel",
        "Verquin",
        "Arrondissement Béthune-Bruay",
        "Pas-de-Calais (62) et Hauts-de-France",
      ],
      faq: [
        {
          q: "Mon entreprise de Béthune est-elle concernée par NIS2 ?",
          a: "Les entreprises de l'arrondissement de Béthune avec plus de 50 salariés ou 10 M€ de CA dans des secteurs comme l'agroalimentaire, le transport, la santé ou la logistique sont potentiellement soumises à NIS2. Nous réalisons un diagnostic d'éligibilité gratuit sous 48h.",
        },
        {
          q: "Combien coûte un audit RGPD à Béthune ?",
          a: "Un audit RGPD pour une PME de Béthune de 20 à 100 salariés varie entre 3 000 et 8 000 € HT, selon la complexité des traitements. Des aides régionales (Hauts-de-France) peuvent couvrir jusqu'à 50 % du coût. Devis gratuit sous 48h.",
        },
        {
          q: "Proposez-vous un DPO externalisé à Béthune ?",
          a: "Oui. Notre service de DPO (Délégué à la Protection des Données) externalisé est disponible à Béthune : tenue du registre des traitements, traitement des demandes d'exercice des droits, gestion des violations de données, interlocuteur CNIL. À partir de 800 € HT/mois.",
        },
        {
          q: "Intervenez-vous sur site dans l'arrondissement de Béthune ?",
          a: "Oui. Nous intervenons sur site à Béthune, Bruay-la-Buissière et dans tout le Pas-de-Calais pour les missions d'audit et de sensibilisation. La plupart des missions de conseil et de documentation sont réalisables à distance.",
        },
        {
          q: "Mon client grand compte me demande un audit de sécurité. Que faire ?",
          a: "C'est une exigence NIS2 sur la chaîne d'approvisionnement. Nous vous accompagnons pour répondre aux questionnaires de sécurité, réaliser l'audit demandé et constituer un dossier de conformité adapté aux exigences de votre donneur d'ordre.",
        },
      ],
    }}
  />
);

export default CyberSecuriteBethune;
