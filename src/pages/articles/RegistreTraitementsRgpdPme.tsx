import ArticleLayout from "@/components/ArticleLayout";

const RegistreTraitementsRgpdPme = () => {
  return (
    <ArticleLayout
      title="Registre des traitements RGPD pour les PME : comment le créer et le tenir à jour"
      description="Guide pratique pour créer et maintenir votre registre des traitements RGPD (article 30) : qui est concerné, que doit-il contenir, modèle Excel et erreurs fréquentes des PME."
      date="28 juin 2026"
      dateISO="2026-06-28"
      readTime="12 min"
      tag="RGPD PME"
      slug="registre-traitements-rgpd-pme-comment-faire"
    >
      <p>
        Le registre des activités de traitement est le document RGPD le plus concret et le plus contrôlé par la CNIL. Toute entreprise traitant des données personnelles doit le tenir (sauf exception marginale). Pourtant, c'est aussi l'un des documents les plus souvent absents ou incomplets lors des contrôles. Ce guide vous explique comment créer votre registre de A à Z.
      </p>

      <h2>Qui doit tenir un registre des traitements ?</h2>
      <p>
        L'article 30 du RGPD impose la tenue d'un registre à tous les responsables de traitement et sous-traitants, sauf si l'entreprise emploie moins de 250 personnes ET que le traitement est occasionnel ET ne porte pas sur des données sensibles ou des données susceptibles d'engendrer un risque pour les droits des personnes. En pratique, cette exception est rarissime : dès que vous traitez des données RH, clients, prospects, ou que votre traitement est régulier (une fois par semaine suffit), vous devez tenir un registre quelle que soit la taille de votre entreprise.
      </p>
      <p>
        La CNIL recommande d'ailleurs à toutes les entreprises de tenir un registre, même si elles pensent être exemptées. En cas de contrôle, l'absence de registre est systématiquement relevée comme manquement.
      </p>

      <h2>La structure du registre : les mentions obligatoires (article 30.1)</h2>
      <p>
        Chaque traitement doit faire l'objet d'une fiche distincte dans le registre. Voici les informations obligatoires pour chaque fiche :
      </p>

      <h3>Informations de base sur le traitement</h3>
      <ul>
        <li><strong>Nom du traitement :</strong> "Gestion de la paie", "CRM clients", "Vidéosurveillance des locaux", etc.</li>
        <li><strong>Finalité(s) du traitement :</strong> L'objectif précis poursuivi. Exemple : "Gestion administrative du personnel et respect des obligations légales en matière de paie".</li>
        <li><strong>Base légale :</strong> L'une des 6 bases légales du RGPD (consentement, contrat, obligation légale, intérêt vital, mission d'intérêt public, intérêt légitime). La base légale justifie votre droit de traiter.</li>
      </ul>

      <h3>Responsabilités et acteurs</h3>
      <ul>
        <li><strong>Responsable de traitement :</strong> Nom et coordonnées de votre entreprise (ou de votre représentant légal).</li>
        <li><strong>DPO (si désigné) :</strong> Coordonnées du Délégué à la Protection des Données.</li>
        <li><strong>Co-responsables (si applicable) :</strong> Si un autre organisme co-détermine les finalités avec vous.</li>
        <li><strong>Sous-traitants :</strong> Liste de tous les prestataires qui accèdent aux données (éditeurs SaaS, hébergeurs, comptables, etc.) avec leurs coordonnées et le pays d'hébergement des données.</li>
      </ul>

      <h3>Données et personnes concernées</h3>
      <ul>
        <li><strong>Catégories de personnes concernées :</strong> Employés, clients, prospects, visiteurs, fournisseurs, mineurs...</li>
        <li><strong>Catégories de données traitées :</strong> Identité, coordonnées, données financières, données de santé, données biométriques... Les données sensibles (art. 9) doivent être explicitement identifiées.</li>
        <li><strong>Durées de conservation :</strong> Pour chaque catégorie de données, la durée de conservation en base active, puis en archive intermédiaire, puis destruction ou anonymisation. Ces durées doivent être justifiées (obligations légales, délais de prescription, etc.).</li>
      </ul>

      <h3>Sécurité et transferts</h3>
      <ul>
        <li><strong>Mesures de sécurité :</strong> Description synthétique des mesures techniques et organisationnelles (chiffrement, contrôle d'accès, pseudonymisation, sauvegardes...).</li>
        <li><strong>Transferts hors UE :</strong> Si des données sont transférées vers des pays tiers (États-Unis, Inde...), le mécanisme de transfert utilisé (clauses contractuelles types, décision d'adéquation, BCR...).</li>
      </ul>

      <h2>Exemple de registre pour une PME de 30 salariés</h2>
      <p>
        Voici les traitements types qu'une PME industrielle de 30 salariés devrait recenser dans son registre :
      </p>
      <ul>
        <li><strong>Gestion du personnel :</strong> Recrutement, paie, gestion des congés, évaluations. Base légale : obligation légale (Code du travail) + contrat. Sous-traitants : logiciel de paie (Sage, Cegid, Silae), expert-comptable, mutuelle.</li>
        <li><strong>Gestion des clients :</strong> Devis, contrats, facturation, CRM. Base légale : exécution du contrat + intérêt légitime (prospection clients existants). Sous-traitants : CRM (Salesforce, HubSpot), ERP, comptabilité.</li>
        <li><strong>Prospection commerciale :</strong> E-mails marketing, LinkedIn. Base légale : consentement (B2C) ou intérêt légitime (B2B). Sous-traitants : outil d'emailing (Mailchimp, Brevo).</li>
        <li><strong>Vidéosurveillance :</strong> Caméras de sécurité des locaux. Base légale : intérêt légitime. Durée de conservation : 30 jours maximum. Information obligatoire des salariés.</li>
        <li><strong>Gestion des accès informatiques :</strong> Comptes utilisateurs, logs de connexion. Base légale : obligation légale (sécurité SI) + intérêt légitime.</li>
        <li><strong>Gestion des fournisseurs :</strong> Contacts, commandes, factures. Base légale : exécution du contrat.</li>
        <li><strong>Site web et cookies :</strong> Analytics, formulaires de contact. Base légale : consentement (cookies) + intérêt légitime (formulaire).</li>
      </ul>

      <h2>Comment tenir le registre à jour : organisation pratique</h2>

      <h3>Choisir le format du registre</h3>
      <p>
        Le RGPD n'impose pas de format spécifique. En pratique, les PME utilisent :
      </p>
      <ul>
        <li><strong>Tableur Excel/Google Sheets :</strong> Simple, gratuit, suffisant pour la plupart des PME. La CNIL met à disposition un modèle Excel téléchargeable.</li>
        <li><strong>Outil PIA CNIL :</strong> L'outil officiel permet aussi de gérer le registre et les AIPD.</li>
        <li><strong>Logiciels DPO (OneTrust, DPMANAGER, Privacyboard...) :</strong> Pour les entreprises avec de nombreux traitements ou un volume important de données. Coût de 2 000 à 15 000 €/an.</li>
      </ul>

      <h3>Désigner un responsable de la mise à jour</h3>
      <p>
        Le registre n'est utile que s'il est à jour. Désignez une personne responsable (DPO, DAF, responsable IT ou RSSI) et mettez en place un processus pour mettre à jour le registre à chaque nouveau traitement, modification substantielle d'un traitement existant, changement de sous-traitant, ou modification des durées de conservation.
      </p>

      <h3>Révision annuelle</h3>
      <p>
        Planifiez une revue annuelle du registre pour vérifier que tous les traitements sont toujours d'actualité, que les durées de conservation sont respectées en pratique, et que la liste des sous-traitants est complète.
      </p>

      <h2>Les 7 erreurs les plus fréquentes des PME</h2>
      <ul>
        <li><strong>Oublier les sous-traitants :</strong> Les outils SaaS (Microsoft 365, Salesforce, Mailchimp) sont des sous-traitants au sens RGPD. Beaucoup de PME oublient de les lister.</li>
        <li><strong>Ne pas distinguer les finalités :</strong> Regrouper "gestion client + marketing + analytics" dans un seul traitement est une erreur. Chaque finalité distincte = une fiche distincte.</li>
        <li><strong>Bases légales mal choisies :</strong> Mettre "consentement" comme base légale pour la paie des salariés (c'est une obligation légale) ou pour les achats (c'est un contrat).</li>
        <li><strong>Durées de conservation vides ou fantaisistes :</strong> "Durée indéterminée" ou "aussi longtemps que nécessaire" n'est pas acceptable. Chaque traitement doit avoir une durée précise et justifiée.</li>
        <li><strong>Oublier les transferts hors UE :</strong> Si vous utilisez Google Analytics, AWS, Salesforce... vos données peuvent être traitées aux États-Unis. Ces transferts doivent être documentés avec le mécanisme juridique approprié.</li>
        <li><strong>Registre non communiqué à la CNIL en cas de contrôle :</strong> Le registre doit être communicable immédiatement à la CNIL sur demande. Il ne doit pas être stocké sur un serveur inaccessible.</li>
        <li><strong>Confondre registre et politique de confidentialité :</strong> Le registre est un document interne. La politique de confidentialité est le document public destiné aux personnes concernées. Ce sont deux documents distincts.</li>
      </ul>

      <h2>Durées de conservation : le tableau de référence</h2>
      <p>
        Voici les durées légales ou recommandées pour les traitements les plus courants :
      </p>
      <ul>
        <li><strong>Données RH (bulletins de paie, contrats) :</strong> 5 ans après la fin du contrat de travail (délai de prescription prud'homale)</li>
        <li><strong>Données clients (factures) :</strong> 10 ans (obligation comptable) en archive</li>
        <li><strong>Données prospects (CRM) :</strong> 3 ans maximum après le dernier contact actif</li>
        <li><strong>Logs de connexion informatique :</strong> 1 an (recommandation CNIL)</li>
        <li><strong>Vidéosurveillance :</strong> 30 jours maximum (sauf enquête en cours)</li>
        <li><strong>Candidatures non retenues :</strong> 2 ans maximum</li>
        <li><strong>Données de santé (médecine du travail) :</strong> 50 ans (obligations spécifiques)</li>
        <li><strong>Cookies et traceurs :</strong> 13 mois maximum pour le consentement</li>
      </ul>

      <div className="info-box">
        <h4>Accompagnement RGPD pour PME</h4>
        <p>CyberConform vous accompagne dans la création et la mise à jour de votre registre des traitements RGPD : audit des traitements existants, cartographie des sous-traitants, détermination des durées de conservation et formation de vos équipes. Diagnostic gratuit sous 48h.</p>
      </div>
    </ArticleLayout>
  );
};

export default RegistreTraitementsRgpdPme;
