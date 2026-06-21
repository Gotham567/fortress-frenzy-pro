import ArticleLayout from "@/components/ArticleLayout";

const RegistreTraitements = () => {
  return (
    <ArticleLayout
      title="Registre des traitements RGPD : obligations, structure et modèle 2026"
      description="Guide complet sur le registre des traitements RGPD (art. 30) : qui doit le tenir, que doit-il contenir, comment le structurer, erreurs fréquentes et modèle téléchargeable pour PME."
      date="18 juin 2026"
      dateISO="2026-06-18"
      readTime="14 min"
      tag="RGPD pratique"
      slug="registre-traitements-rgpd-modele-guide"
    >
      <p>
        L'article 30 du RGPD impose à la quasi-totalité des organisations de tenir un <strong>registre des activités de traitement</strong>.
        C'est le document central de votre conformité RGPD : il cartographie tous les traitements de données personnelles,
        justifie leur base légale et permet de démontrer votre conformité en cas de contrôle CNIL.
        Pourtant, la CNIL constate régulièrement que les registres sont incomplets, obsolètes ou inexistants.
      </p>

      <h2>Qui est obligé de tenir un registre ?</h2>
      <p>
        En principe, le registre est obligatoire pour tous les responsables de traitement et sous-traitants,
        sauf exception très limitée :
      </p>
      <ul>
        <li><strong>Organisations de moins de 250 salariés</strong> : exemptées de l'obligation générale <em>sauf si</em> leurs traitements sont susceptibles de comporter des risques pour les droits et libertés, ne sont pas occasionnels, ou portent sur des données sensibles ou relatives à des condamnations pénales.</li>
        <li><strong>En pratique</strong> : cette exception est très étroite — toute organisation avec des traitements RH, une base clients ou des cookies de traçage est soumise à l'obligation.</li>
      </ul>
      <p>
        <strong>Recommandation CNIL</strong> : tenir un registre complet quel que soit la taille, car l'exemption est difficile à faire valoir et le registre est de toute façon un outil de pilotage indispensable.
      </p>

      <h2>Ce que doit contenir le registre (art. 30 RGPD)</h2>

      <h3>Côté responsable de traitement</h3>
      <p>Pour chaque traitement, le registre doit mentionner :</p>
      <ul>
        <li><strong>Nom et coordonnées</strong> du responsable et, le cas échéant, du DPO et du représentant UE.</li>
        <li><strong>Finalités du traitement</strong> : pourquoi les données sont collectées (ex: "gestion des ressources humaines — paie et congés").</li>
        <li><strong>Catégories de personnes concernées</strong> : employés, clients, prospects, fournisseurs, visiteurs.</li>
        <li><strong>Catégories de données</strong> : état civil, données financières, données de santé, données biométriques, etc.</li>
        <li><strong>Destinataires</strong> : internes (services) et externes (partenaires, sous-traitants, autorités).</li>
        <li><strong>Transferts hors UE</strong> : pays de destination et garanties (SCCs, décision d'adéquation, BCRs).</li>
        <li><strong>Durées de conservation</strong> : délais de conservation en base active et en archivage intermédiaire.</li>
        <li><strong>Mesures de sécurité</strong> : description générale des mesures techniques et organisationnelles.</li>
        <li><strong>Base légale</strong> : consentement, contrat, obligation légale, intérêt légitime, mission d'intérêt public.</li>
      </ul>

      <h3>Côté sous-traitant</h3>
      <p>
        Les sous-traitants tiennent un registre distinct listant les catégories de traitements effectués
        pour chaque responsable de traitement, avec les transferts hors UE et les mesures de sécurité.
      </p>

      <h2>Structure recommandée : les 3 registres en 1</h2>
      <p>
        La CNIL recommande de structurer le registre en 3 volets :
      </p>
      <ul>
        <li><strong>Registre RT (Responsable de Traitement)</strong> : tous les traitements en tant que RT (RH, clients, marketing, vidéosurveillance, etc.).</li>
        <li><strong>Registre ST (Sous-Traitant)</strong> : traitements réalisés pour le compte de clients ou partenaires.</li>
        <li><strong>Registre des violations de données</strong> : journalisation de toutes les violations détectées (même si non notifiées), avec description, gravité et mesures prises.</li>
      </ul>

      <h2>Inventaire type pour une PME de 50 à 200 salariés</h2>
      <p>Traitements typiques à recenser dans le registre d'une PME :</p>
      <ul>
        <li><strong>RH</strong> : gestion des salariés (paie, congés, formation, évaluations), recrutement, accès physique et logique.</li>
        <li><strong>Clients</strong> : gestion des contrats, facturation, service client, historique de commandes.</li>
        <li><strong>Prospection commerciale</strong> : base de prospects, campagnes email, CRM, tracking web.</li>
        <li><strong>Fournisseurs</strong> : gestion des contrats et contacts fournisseurs.</li>
        <li><strong>Sécurité</strong> : vidéosurveillance, logs d'accès, SIEM, gestion des incidents.</li>
        <li><strong>Site web</strong> : analytics, cookies, formulaires de contact, newsletter.</li>
        <li><strong>Comptabilité</strong> : gestion des données financières et fiscales.</li>
        <li><strong>Santé au travail</strong> : données médicales, déclarations AT, inaptitudes (traitement sensible).</li>
      </ul>

      <h2>Les erreurs les plus fréquentes dans les registres</h2>
      <ul>
        <li><strong>Durées de conservation vagues</strong> : "aussi longtemps que nécessaire" n'est pas acceptable — indiquer une durée précise (ex: "3 ans après la fin du contrat client").</li>
        <li><strong>Bases légales mal choisies</strong> : l'intérêt légitime utilisé pour la prospection commerciale directe nécessite en réalité un opt-in ou opt-out selon le canal.</li>
        <li><strong>Sous-traitants oubliés</strong> : chaque outil cloud (CRM, RH, messagerie, analytics) est un sous-traitant qui doit figurer dans le registre et avoir signé un DPA (Data Processing Agreement).</li>
        <li><strong>Registre non mis à jour</strong> : tout nouveau traitement ou modification substantielle doit être ajouté sans délai. Le registre doit être "vivant".</li>
        <li><strong>Mesures de sécurité non décrites</strong> : une case vide ou un renvoi générique ("mesures de sécurité appropriées") ne suffit pas.</li>
      </ul>

      <h2>Outils pour tenir votre registre</h2>
      <ul>
        <li><strong>Modèle Excel CNIL</strong> : disponible gratuitement sur le site de la CNIL, point de départ idéal pour les PME.</li>
        <li><strong>Logiciels DPO</strong> : OneTrust, Didomi, DASTRA, Privasee — solutions SaaS avec workflows de mise à jour et génération automatique de rapports.</li>
        <li><strong>Notion / Confluence</strong> : pour les organisations ayant une culture documentation, un template partagé peut suffire si structuré correctement.</li>
      </ul>

      <h2>Le registre comme outil de pilotage</h2>
      <p>
        Au-delà de l'obligation réglementaire, le registre est un outil précieux pour :
      </p>
      <ul>
        <li>Identifier les traitements nécessitant une AIPD (Analyse d'Impact relative à la Protection des Données).</li>
        <li>Piloter les contrats avec les sous-traitants (DPA à signer, audit de conformité).</li>
        <li>Répondre rapidement aux demandes d'exercice des droits (savoir où sont les données d'une personne).</li>
        <li>Préparer un contrôle CNIL en 24 heures (le registre est le premier document demandé).</li>
      </ul>
    </ArticleLayout>
  );
};

export default RegistreTraitements;
