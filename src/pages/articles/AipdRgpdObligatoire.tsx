import ArticleLayout from "@/components/ArticleLayout";

const AipdRgpdObligatoire = () => {
  return (
    <ArticleLayout
      title="AIPD (analyse d'impact RGPD) : quand est-elle obligatoire et comment la réaliser ?"
      description="Guide complet sur l'Analyse d'Impact relative à la Protection des Données (AIPD/PIA) : traitements concernés, liste CNIL, méthodologie en 4 étapes, exceptions et conséquences d'une omission."
      date="28 juin 2026"
      dateISO="2026-06-28"
      readTime="13 min"
      tag="RGPD pratique"
      slug="aipd-analyse-impact-protection-donnees-rgpd"
    >
      <p>
        L'Analyse d'Impact relative à la Protection des Données (AIPD), aussi appelée PIA (Privacy Impact Assessment) dans les textes anglophones, est une obligation RGPD méconnue. Pourtant, son absence lors d'un contrôle CNIL ou d'une violation de données peut alourdir significativement la sanction. Ce guide répond aux deux questions essentielles : quand l'AIPD est-elle obligatoire ? Comment la réaliser correctement ?
      </p>

      <h2>Qu'est-ce qu'une AIPD ?</h2>
      <p>
        L'AIPD est un processus documenté d'évaluation des risques pour les droits et libertés des personnes concernées par un traitement de données personnelles. Elle est requise par l'article 35 du RGPD. Concrètement, une AIPD permet de : identifier et évaluer les risques liés au traitement (accès non autorisé, modification des données, perte de disponibilité), définir des mesures pour réduire ces risques à un niveau acceptable, et documenter le raisonnement du responsable de traitement.
      </p>
      <p>
        L'AIPD n'est pas une simple formalité administrative : c'est un outil de gestion des risques qui doit conduire à des décisions concrètes sur la conception et l'implémentation du traitement. Si l'analyse conclut à un risque résiduel élevé et que des mesures suffisantes ne peuvent être mises en place, le responsable de traitement doit consulter la CNIL avant de démarrer le traitement.
      </p>

      <h2>Quand l'AIPD est-elle obligatoire ?</h2>
      <p>
        L'article 35 du RGPD impose l'AIPD pour les traitements "susceptibles d'engendrer un risque élevé pour les droits et libertés des personnes physiques". Trois catégories sont explicitement mentionnées :
      </p>

      <h3>1. Évaluation systématique et approfondie d'aspects personnels</h3>
      <p>
        Traitements qui évaluent, analysent ou prédisent des aspects de la personnalité, du comportement ou des caractéristiques d'une personne, notamment par le profilage. Exemples : scoring de crédit automatisé, profilage marketing comportemental, évaluation de la performance professionnelle, analyse prédictive en ressources humaines.
      </p>

      <h3>2. Traitement à grande échelle de données sensibles</h3>
      <p>
        Traitement à grande échelle de données des catégories particulières (données de santé, génétiques, biométriques, origine raciale ou ethnique, opinions politiques, convictions religieuses, appartenance syndicale, orientation sexuelle) ou de données relatives à des condamnations pénales. Exemples : dossiers médicaux hospitaliers, données de géolocalisation d'une flotte de salariés, traitement RH incluant données syndicales.
      </p>

      <h3>3. Surveillance systématique à grande échelle</h3>
      <p>
        Surveillance, observation ou contrôle systématique d'une zone accessible au public à grande échelle. Exemples : vidéosurveillance intelligente avec analyse comportementale, suivi de localisation d'employés en temps réel, monitoring des communications des salariés à grande échelle.
      </p>

      <h2>La liste CNIL des traitements à risque élevé</h2>
      <p>
        La CNIL a publié une liste de 11 types de traitements pour lesquels une AIPD est systématiquement requise. Si votre traitement figure dans cette liste, l'AIPD est obligatoire sans qu'il soit nécessaire d'évaluer davantage les risques :
      </p>
      <ul>
        <li>Traitements de données biométriques aux fins de reconnaissance des personnes</li>
        <li>Traitements de données génétiques à des fins de diagnostic médical de masse</li>
        <li>Traitements impliquant le profilage géographique couplé à d'autres données</li>
        <li>Traitements de données de santé mis en œuvre par les établissements de santé</li>
        <li>Traitements ayant pour finalité de surveiller de manière constante l'activité des employés</li>
        <li>Traitements de données relatives aux infractions, condamnations pénales ou mesures de sûreté</li>
        <li>Traitements portant sur des données collectées lors d'opérations de renseignement économique</li>
        <li>Traitements d'alertes professionnelles (whistleblowing)</li>
        <li>Traitements comportant l'utilisation d'interconnexion ou de mise en relation de plusieurs bases de données</li>
        <li>Traitements de données de personnes vulnérables (mineurs, patients, personnes âgées)</li>
        <li>Applications mobiles impliquant la collecte massive de données de comportement</li>
      </ul>
      <p>
        La règle des deux critères : si votre traitement répond à au moins deux des neuf critères définis dans les lignes directrices du CEPD (Comité Européen de la Protection des Données), l'AIPD est obligatoire même s'il ne figure pas dans la liste CNIL.
      </p>

      <h2>Quand l'AIPD n'est-elle PAS obligatoire ?</h2>
      <p>
        L'AIPD n'est pas requise si le traitement est similaire à un traitement déjà évalué (vous pouvez réutiliser l'AIPD existante avec les adaptations nécessaires), si le traitement figure dans la liste des exceptions CNIL des traitements à faible risque, ou si le traitement ne répond à aucun critère de risque élevé. Attention : l'absence d'obligation ne dispense pas d'évaluer les risques — elle signifie simplement qu'une AIPD formelle n'est pas exigée.
      </p>

      <h2>Comment réaliser une AIPD en 4 étapes</h2>

      <h3>Étape 1 : Décrire le traitement</h3>
      <p>
        Documentez précisément le traitement : nature des données collectées, finalités, catégories de personnes concernées, destinataires, durées de conservation, transferts hors UE. Cette description est la base de l'analyse. Elle doit être suffisamment précise pour permettre l'évaluation des risques — une description vague produit une AIPD inutilisable.
      </p>

      <h3>Étape 2 : Évaluer la nécessité et la proportionnalité</h3>
      <p>
        Vérifiez que le traitement est nécessaire à la finalité poursuivie (minimisation des données), que la base légale est appropriée (consentement, contrat, intérêt légitime, obligation légale…), que les droits des personnes peuvent être exercés effectivement (accès, rectification, effacement), et que les durées de conservation sont proportionnées.
      </p>

      <h3>Étape 3 : Identifier et évaluer les risques</h3>
      <p>
        Pour chaque type de risque (accès illégitime, modification non désirée, disparition de données), évaluez la vraisemblance et la gravité selon une matrice 3×3 ou 4×4. Les menaces à considérer : sources de menaces (hackers, concurrents, employés malveillants), supports concernés (bases de données, sauvegardes, interfaces), impacts potentiels sur les personnes (atteinte à la vie privée, discrimination, préjudice financier, physique, moral).
      </p>

      <h3>Étape 4 : Mesures et décision</h3>
      <p>
        Listez les mesures techniques et organisationnelles en place ou à mettre en place pour réduire les risques. Réévaluez les risques résiduels après mesures. Si le risque résiduel reste élevé malgré des mesures appropriées, consultez la CNIL avant de lancer le traitement (consultation préalable, article 36 RGPD). Si le risque résiduel est acceptable, le traitement peut démarrer avec la documentation de l'AIPD signée par le DPO et le responsable du traitement.
      </p>

      <h2>L'outil CNIL PIA : la solution recommandée</h2>
      <p>
        La CNIL propose un logiciel open source gratuit, "PIA", qui guide pas à pas la réalisation d'une AIPD conforme aux recommandations du CEPD. Téléchargeable sur le site CNIL, il permet de structurer l'analyse, évaluer les risques avec une méthodologie standardisée, générer un rapport PDF utilisable comme preuve de conformité, et partager l'AIPD avec les parties prenantes (DPO, DSI, DPD). C'est l'outil recommandé pour les PME et ETI qui souhaitent réaliser des AIPD en interne.
      </p>

      <h2>Conséquences d'une AIPD manquante</h2>
      <p>
        L'absence d'AIPD pour un traitement qui l'exigeait peut entraîner : une amende pouvant atteindre 10 M€ ou 2 % du CA mondial (même régime que la violation de l'article 32), une injonction de cesser le traitement en attendant la réalisation de l'AIPD, une aggravation de la sanction en cas de violation de données survenant sur ce traitement. La CNIL contrôle de plus en plus la réalisation et la qualité des AIPD lors de ses missions de vérification.
      </p>
      <p>
        L'AIPD doit également être mise à jour : dès que le traitement évolue significativement (nouvelles données, nouvelles finalités, nouveau sous-traitant), et en cas d'incident de sécurité touchant ce traitement.
      </p>
      <div className="info-box">
        <h4>Accompagnement AIPD et conformité RGPD</h4>
        <p>CyberConform accompagne les responsables de traitement dans la réalisation de leurs AIPD : description du traitement, analyse des risques, identification des mesures techniques et consultation CNIL si nécessaire. À partir de 2 500 € HT par AIPD.</p>
      </div>
    </ArticleLayout>
  );
};

export default AipdRgpdObligatoire;
