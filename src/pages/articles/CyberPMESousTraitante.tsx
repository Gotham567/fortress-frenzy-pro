import ArticleLayout from "@/components/ArticleLayout";

const CyberPMESousTraitante = () => {
  return (
    <ArticleLayout
      title="Cybersécurité PME sous-traitante industrielle : NIS2, exigences et conformité"
      description="Votre PME est sous-traitante d'une entreprise industrielle ou d'un grand compte ? NIS2 vous impacte indirectement. Guide complet des exigences cyber pour les sous-traitants : obligations, questionnaires, audits et plan de mise en conformité."
      date="28 juin 2026"
      dateISO="2026-06-28"
      readTime="13 min"
      tag="Sous-traitance"
      slug="cybersecurite-pme-sous-traitante-industrie"
    >
      <p>
        Vous êtes équipementier automobile, fournisseur agroalimentaire, prestataire IT ou sous-traitant industriel. Vous pensez peut-être que NIS2 ne vous concerne pas car vous êtes en dessous des seuils. Détrompez-vous : vos donneurs d'ordre (eux-mêmes entités NIS2) sont légalement tenus de gérer les risques cyber dans leur chaîne d'approvisionnement. Ce qui vous sera demandé, c'est de démontrer que vous ne représentez pas un risque pour eux.
      </p>

      <h2>1. Pourquoi les sous-traitants sont dans le viseur de NIS2</h2>

      <h3>1.1. L'article 21.2d : la sécurité de la chaîne d'approvisionnement</h3>
      <p>
        La directive NIS2, article 21.2d, impose aux entités essentielles et importantes de mettre en place des mesures couvrant "la sécurité de la chaîne d'approvisionnement, y compris les aspects liés à la sécurité concernant les relations entre chaque entité et ses fournisseurs ou prestataires de services directs". En clair : votre grand compte doit vérifier que ses sous-traitants ne constituent pas un vecteur d'attaque.
      </p>

      <h3>1.2. Les incidents qui ont changé la donne</h3>
      <p>
        Les attaques via la chaîne d'approvisionnement ont explosé ces dernières années. SolarWinds (2020), Kaseya (2021), MOVEit (2023) ont montré qu'un seul fournisseur compromis peut faire des victimes chez des milliers de clients. Dans l'industrie automobile, des attaques chez des équipementiers de rang 2 ont paralysé des chaînes de production de constructeurs. Les RSSI des grands groupes ont reçu instruction de cartographier et sécuriser leur écosystème.
      </p>

      <h3>1.3. La répercussion contractuelle</h3>
      <p>
        Le mécanisme est simple : votre client grand compte (entité NIS2) intègre dans ses contrats fournisseurs des clauses de sécurité de plus en plus exigeantes. Ces clauses peuvent inclure : l'obligation de maintenir un niveau de sécurité conforme à NIS2 ou ISO 27001, le droit d'audit de la sécurité du sous-traitant, la communication d'un rapport de pentest annuel, la notification sous 24h de tout incident pouvant impacter le client, et l'obligation de MFA sur tous les accès aux systèmes du donneur d'ordre.
      </p>

      <h2>2. Quelles exigences concrètes vous seront imposées</h2>

      <h3>2.1. Le questionnaire de sécurité fournisseur</h3>
      <p>
        La plupart des grandes entreprises ont développé des questionnaires de sécurité pour évaluer leurs fournisseurs. Ces questionnaires (50 à 200 questions selon le secteur) couvrent : votre organisation de la sécurité (qui est responsable ?), vos mesures techniques (MFA, chiffrement, sauvegardes), votre gestion des incidents, votre conformité RGPD, et votre politique de sécurité des sous-traitants. Dans l'automobile, le standard TISAX (créé par l'association des constructeurs allemands VDA) est le référentiel dominant. Dans l'aéronautique, c'est CMMC aux États-Unis ou EN 9100 en Europe.
      </p>

      <h3>2.2. L'audit par le donneur d'ordre</h3>
      <p>
        Votre client peut se réserver le droit de faire auditer votre sécurité, soit directement par ses équipes, soit par un prestataire mandaté. Cet audit peut couvrir la revue documentaire (PSSI, procédures), l'évaluation technique (configuration des équipements, accès, logs), et les entretiens avec vos équipes. Refuser cet audit risque de remettre en cause votre contrat.
      </p>

      <h3>2.3. Les exigences techniques minimales</h3>
      <p>
        Les exigences techniques que vous seront imposées varient selon le secteur, mais convergent généralement sur : l'authentification multi-facteurs obligatoire sur tous les comptes ayant accès aux systèmes du client, le chiffrement des données du client au repos et en transit, les sauvegardes régulières avec tests de restauration documentés, un EDR ou équivalent sur tous les postes et serveurs, la gestion des correctifs avec délai maximal pour les correctifs critiques, et une procédure de notification d'incidents sous 24 à 72 heures.
      </p>

      <h2>3. Comment vous préparer : plan d'action pour sous-traitants</h2>

      <h3>3.1. Étape 1 : Dresser l'inventaire de vos exigences contractuelles</h3>
      <p>
        Commencez par lister tous vos clients qui vous ont déjà envoyé un questionnaire de sécurité ou des clauses de sécurité dans vos contrats. Évaluez le niveau d'exigence de chacun et identifiez les exigences communes. Cette cartographie vous donnera une vision consolidée de ce que vous devez faire.
      </p>

      <h3>3.2. Étape 2 : Évaluer votre niveau de maturité actuel</h3>
      <p>
        Réalisez une auto-évaluation ou mandatez un prestataire pour un audit de maturité. L'objectif est d'identifier les écarts entre votre posture actuelle et les exigences de vos clients. Concentrez-vous sur les points les plus fréquemment demandés dans les questionnaires fournisseurs.
      </p>

      <h3>3.3. Étape 3 : Mettre en place les mesures prioritaires</h3>
      <p>
        Les mesures suivantes sont demandées par 90 % des grands donneurs d'ordre et doivent être traitées en priorité absolue : déploiement du MFA sur tous les accès critiques (3 à 4 semaines de mise en œuvre), mise en place d'un EDR managé (2 à 4 semaines), politique de sauvegardes avec tests documentés (1 à 2 semaines), et rédaction d'une procédure de notification d'incidents (1 semaine).
      </p>

      <h3>3.4. Étape 4 : Documenter votre démarche</h3>
      <p>
        La documentation est aussi importante que les mesures elles-mêmes. Vos clients voudront des preuves, pas seulement votre parole. Rédigez et faites approuver par votre direction : une Politique de Sécurité des Systèmes d'Information (PSSI), une procédure de gestion des incidents, une liste des mesures techniques en place avec dates de mise en œuvre, et un plan de remédiation pour les points encore non conformes.
      </p>

      <h3>3.5. Étape 5 : Réaliser un audit tiers et obtenir les certifications adaptées</h3>
      <p>
        Pour certains secteurs, la seule voie pour satisfaire les exigences clients est la certification : ISO 27001 (standard universel), TISAX (automobile), EN 9100/AS 9100 (aéronautique). Ces certifications sont coûteuses (de 15 000 à 80 000 € selon la taille) mais deviennent un prérequis contractuel dans de nombreux secteurs. À défaut de certification, un rapport d'audit annuel réalisé par un prestataire qualifié PASSI est souvent accepté.
      </p>

      <h2>4. Le secteur automobile : le cas TISAX</h2>
      <p>
        TISAX (Trusted Information Security Assessment Exchange) est le standard de sécurité de l'industrie automobile créée par le VDA (association des constructeurs allemands). Si vous fournissez BMW, Volkswagen, Mercedes, Renault, PSA ou leurs sous-traitants de rang 1, vous serez très probablement soumis à TISAX. L'évaluation TISAX est réalisée par des auditeurs accrédités ENX. Niveaux d'évaluation : AL1 (auto-évaluation), AL2 (évaluation simplifiée), AL3 (évaluation approfondie pour les données hautement confidentielles ou les informations de prototypes).
      </p>
      <p>
        Pour un fournisseur de rang 2 ou 3, commencez par l'AL2. Délai d'obtention : 4 à 8 mois. Coût : 5 000 à 25 000 € selon la taille et le niveau. Les résultats sont partagés de façon confidentielle via la plateforme TISAX avec vos clients autorisés.
      </p>

      <h2>5. Transformer la contrainte en avantage commercial</h2>
      <p>
        Les PME sous-traitantes qui traitent proactivement leurs exigences cyber se distinguent sur plusieurs points : elles remportent plus facilement les appels d'offres car elles répondent favorablement aux questionnaires de sécurité, elles négocient de meilleures conditions car elles représentent moins de risque pour leurs clients, et elles peuvent accéder à de nouveaux donneurs d'ordre exigeants que leurs concurrents non conformes ne peuvent pas servir.
      </p>
      <p>
        La conformité cybersécurité est devenue un critère de sélection des fournisseurs au même titre que la qualité ou la capacité de livraison. Les sous-traitants qui l'ont compris transforment cette contrainte en différenciateur commercial.
      </p>
    </ArticleLayout>
  );
};

export default CyberPMESousTraitante;
