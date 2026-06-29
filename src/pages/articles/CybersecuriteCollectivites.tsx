import ArticleLayout from "@/components/ArticleLayout";

const CybersecuriteCollectivites = () => {
  return (
    <ArticleLayout
      title="Cybersécurité des collectivités territoriales : mairies, conseils régionaux et OPSN"
      description="Obligations cybersécurité des collectivités territoriales sous NIS2 2026 : communes, intercommunalités, régions, OPSN — budget, ANSSI, Mon Aide Cyber, et stratégie."
      date="28 juin 2026"
      dateISO="2026-06-28"
      readTime="10 min"
      tag="Collectivités"
      slug="cybersecurite-collectivites-territoriales-mairies"
    >
      <p>
        Les collectivités territoriales françaises sont une cible croissante des cyberattaquants. En 2023-2024, des dizaines de communes, intercommunalités et conseils régionaux ont subi des attaques par ransomware avec des impacts opérationnels majeurs (services civiques interrompus, données citoyens compromises). La directive NIS2 et les nouvelles obligations ANSSI structurent maintenant la cybersécurité du secteur public local.
      </p>

      <h2>Quelle collectivités sont soumises à NIS2 ?</h2>
      <p>
        NIS2 prévoit explicitement un régime pour les administrations publiques (section 6 de l'Annexe I). En France, la transposition a introduit une classification spécifique pour les collectivités :
      </p>
      <h3>Entités essentielles (administrations centrales et régions)</h3>
      <ul>
        <li>Les administrations centrales de l'État (ministères, agences régaliennes)</li>
        <li>Les conseils régionaux (13 régions métropolitaines + Corse + DOM-TOM)</li>
        <li>Les grandes métropoles et agglomérations (Métropole du Grand Paris, Lyon Métropole, Aix-Marseille-Provence, etc.)</li>
        <li>Les services à compétences nationales critiques</li>
      </ul>
      <h3>Entités importantes (administrations publiques régionales et locales)</h3>
      <ul>
        <li>Les conseils départementaux</li>
        <li>Les intercommunalités (EPCI) de plus de 50 000 habitants</li>
        <li>Les grandes communes (plus de 30 000 habitants selon le décret de transposition)</li>
        <li>Les établissements publics de coopération intercommunale à fiscalité propre de taille significative</li>
      </ul>
      <h3>Collectivités hors périmètre NIS2 direct</h3>
      <p>
        Les communes de moins de 30 000 habitants ne sont pas dans le périmètre NIS2. Elles restent cependant exposées aux cybermenaces et peuvent bénéficier des dispositifs ANSSI (Mon Aide Cyber, CaRE) et des politiques régionales de cybersécurité.
      </p>

      <h2>Attaques récentes : bilan et leçons</h2>
      <p>
        Depuis 2021, les collectivités françaises ont subi de nombreuses cyberattaques avec des impacts sévères :
      </p>
      <ul>
        <li><strong>Ville de Caen (2023) :</strong> Ransomware, services numériques interrompus plusieurs semaines</li>
        <li><strong>Conseil Régional d'Île-de-France (2021) :</strong> Ransomware Pysa, données personnelles exfiltrées</li>
        <li><strong>Roubaix, Vincennes, et dizaines de communes :</strong> Attaques successives démontrant la vulnérabilité systémique</li>
        <li><strong>CHU, hôpitaux (Corbeil-Essonnes, Versailles) :</strong> Secteur santé public très touché</li>
      </ul>
      <p>
        Les vecteurs d'attaque récurrents : phishing ciblant les agents, systèmes d'information vieillissants non patchés, absence de sauvegarde déconnectée, et manque de segmentation réseau.
      </p>

      <h2>Le programme CaRE de l'ANSSI pour les collectivités</h2>
      <p>
        L'ANSSI a lancé le programme CaRE (Cybersécurité Accélération et Résilience des Établissements) spécifiquement pour les organisations publiques (collectivités, établissements de santé). CaRE propose :
      </p>
      <ul>
        <li><strong>Diagnostics de sécurité subventionnés :</strong> Diagnostics ANSSI cofinancés pour les collectivités</li>
        <li><strong>Parcours de montée en maturité :</strong> Formation, guides pratiques, accompagnement personnalisé</li>
        <li><strong>CERT-FR :</strong> Veille sur les menaces, alertes en temps réel, et réponse aux incidents pour les entités publiques</li>
        <li><strong>Mon Aide Cyber :</strong> Outil d'auto-évaluation de la posture cyber pour les collectivités (gratuit)</li>
      </ul>

      <h2>Obligations NIS2 pour les collectivités concernées</h2>
      <p>
        Les collectivités dans le périmètre NIS2 (régions, grandes métropoles, grandes communes) doivent respecter les mesures de l'article 21 :
      </p>
      <ul>
        <li><strong>Politique de sécurité des SI (PSSI) :</strong> Document formalisé décrivant les mesures de sécurité adoptées, approuvé par l'assemblée délibérante ou l'exécutif</li>
        <li><strong>Gestion des incidents :</strong> Procédure de détection, qualification et notification des incidents significatifs à l'ANSSI dans les délais NIS2 (alerte précoce 24h, notification 72h)</li>
        <li><strong>Plan de continuité et de reprise :</strong> PCA/PRA testé avec des exercices périodiques, sauvegardes déconnectées</li>
        <li><strong>Sécurité de la chaîne d'approvisionnement :</strong> Exigences cybersécurité imposées aux prestataires IT (hébergeurs, éditeurs de logiciels métiers)</li>
        <li><strong>Gestion des vulnérabilités :</strong> Processus de patch management, scan de vulnérabilités régulier</li>
        <li><strong>MFA :</strong> Authentification à plusieurs facteurs sur tous les accès sensibles (VPN, accès administrateurs, messagerie)</li>
      </ul>

      <h2>Budget cybersécurité : combien faut-il prévoir ?</h2>
      <p>
        Le budget cybersécurité d'une collectivité dépend de sa taille, de son niveau de maturité initial et de ses besoins spécifiques. Ordres de grandeur indicatifs :
      </p>
      <ul>
        <li><strong>Commune de 30 000-100 000 habitants :</strong> 50 000 à 150 000 €/an pour la sécurité SI (inclut outils, formation, prestataires, audits)</li>
        <li><strong>Intercommunalité de 100 000-500 000 habitants :</strong> 150 000 à 500 000 €/an</li>
        <li><strong>Conseil départemental :</strong> 300 000 à 1 M€/an selon la taille du SI</li>
        <li><strong>Conseil régional / Grande métropole :</strong> 1 M€+ par an</li>
      </ul>
      <p>
        Ces budgets peuvent être partiellement couverts par les fonds FEDER (volet numérique), les dotations de l'État (DETR, DSIL), et les subventions ANSSI dans le cadre des programmes spécifiques collectivités.
      </p>

      <h2>Bonnes pratiques prioritaires pour une commune</h2>
      <p>
        Pour une commune qui commence sa démarche cyber, CyberConform recommande ces actions prioritaires :
      </p>
      <ul>
        <li>1. Réaliser le diagnostic Mon Aide Cyber (ANSSI) — gratuit, 2 heures</li>
        <li>2. Activer le MFA sur tous les comptes d'administration et de messagerie</li>
        <li>3. Mettre en place des sauvegardes déconnectées (règle 3-2-1) et les tester</li>
        <li>4. Former les agents à la détection du phishing (exercice de phishing simulé)</li>
        <li>5. Mettre à jour tous les systèmes et clôturer les vulnérabilités critiques</li>
        <li>6. Rédiger une PSSI simplifiée adaptée aux collectivités</li>
        <li>7. Désigner un référent cybersécurité (interne ou RSSI mutualisé entre collectivités)</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Les collectivités territoriales sont face à un double défi : une menace cyber en forte hausse et des obligations réglementaires NIS2 nouvelles. L'ANSSI accompagne les collectivités via les programmes CaRE et Mon Aide Cyber. CyberConform propose des audits de sécurité adaptés aux contraintes budgétaires et organisationnelles des collectivités : diagnostic NIS2, PSSI, plan de remédiation priorisé, et formations des agents et élus.
      </p>
    </ArticleLayout>
  );
};

export default CybersecuriteCollectivites;
