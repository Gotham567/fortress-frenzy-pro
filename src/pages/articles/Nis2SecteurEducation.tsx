import ArticleLayout from "@/components/ArticleLayout";

const Nis2SecteurEducation = () => {
  return (
    <ArticleLayout
      title="NIS2 et enseignement supérieur : universités et établissements concernés en 2026"
      description="NIS2 dans l'enseignement supérieur : universités, grandes écoles et CROUS concernés, obligations de cybersécurité, programme CaRE ANSSI et mise en conformité des SI académiques."
      date="29 juin 2026"
      dateISO="2026-06-29"
      readTime="11 min"
      tag="NIS2 Éducation"
      slug="nis2-enseignement-superieur-universites"
    >
      <p>
        Le secteur de l'enseignement supérieur et de la recherche est l'une des cibles croissantes des cyberattaquants. Plusieurs universités françaises ont subi des incidents majeurs ces dernières années, compromettant des systèmes d'information académiques complexes, des données de recherche sensibles et des données personnelles d'étudiants. NIS2 et les réglementations françaises associées posent de nouvelles obligations pour les établissements d'enseignement supérieur.
      </p>

      <h2>Quels établissements sont soumis à NIS2 ?</h2>
      <p>
        La réponse dépend de la transposition française de NIS2 et de la classification des établissements :
      </p>
      <h3>Établissements potentiellement en entités importantes</h3>
      <p>
        Le secteur de l'administration publique est explicitement couvert par NIS2. En France, les universités et grandes écoles publiques relèvent a priori de la catégorie "administration publique régionale", soumise à des obligations NIS2. Les établissements concernés sont notamment :
      </p>
      <ul>
        <li>Les universités publiques (environ 80 en France métropolitaine)</li>
        <li>Les grandes écoles publiques (ENS, Polytechnique, CentraleSupélec, etc.)</li>
        <li>Les CROUS (Centres Régionaux des Œuvres Universitaires et Scolaires)</li>
        <li>Les organismes de recherche publics (CNRS, INSERM, CEA, INRIA)</li>
        <li>Les CHU et centres hospitaliers universitaires (déjà couverts au titre du secteur santé)</li>
      </ul>
      <h3>Établissements privés</h3>
      <p>
        Les établissements privés d'enseignement supérieur ne relèvent pas directement de NIS2 via la catégorie "administration publique". Cependant, s'ils fournissent des services numériques à grande échelle ou s'ils sont sous-traitants d'entités NIS2, ils peuvent être indirectement concernés.
      </p>
      <p>
        La loi de transposition française précisera les critères exacts (taille, budget, nombre d'étudiants) pour déterminer quels établissements entrent dans le périmètre NIS2. Les établissements sont encouragés à s'inscrire sur MonEspaceNIS2 pour vérifier leur éligibilité.
      </p>

      <h2>Les spécificités du SI académique</h2>
      <p>
        Les systèmes d'information des universités présentent des caractéristiques particulières qui complexifient la mise en sécurité :
      </p>
      <ul>
        <li><strong>Grande ouverture</strong> : les SI académiques sont conçus pour l'ouverture et le partage (accès depuis l'extérieur, collaboration internationale, données ouvertes), ce qui entre en tension avec les exigences de cloisonnement</li>
        <li><strong>Hétérogénéité</strong> : des centaines d'applications différentes, beaucoup développées localement, avec des standards de sécurité variables</li>
        <li><strong>Multiples populations</strong> : étudiants, enseignants-chercheurs, personnels administratifs, chercheurs invités, partenaires industriels — avec des droits d'accès très différents</li>
        <li><strong>Données de recherche sensibles</strong> : certaines recherches portent sur des données confidentielles (défense, santé, données personnelles) soumises à des exigences de protection spécifiques</li>
        <li><strong>Contraintes budgétaires</strong> : les budgets IT des universités sont souvent insuffisants face à l'étendue des SI à protéger</li>
      </ul>

      <h2>Menaces et incidents récents dans l'enseignement supérieur</h2>
      <p>
        Le secteur a été frappé par plusieurs incidents marquants :
      </p>
      <ul>
        <li><strong>Université de Montpellier (2023)</strong> : cyberattaque ayant perturbé les ENT (Espaces Numériques de Travail) pendant plusieurs semaines en période d'examens</li>
        <li><strong>Université Paris-Saclay (2020)</strong> : ransomware NetWalker ayant chiffré des serveurs de recherche, avec demande de rançon de 2,3 M€</li>
        <li><strong>Nombreux CHU et laboratoires</strong> : les données de recherche médicale sont particulièrement visées pour leur valeur scientifique et économique</li>
      </ul>
      <p>
        Les vecteurs d'attaque récurrents : phishing ciblant les étudiants et personnels, exploitation de VPN non patchés, accès RDP exposé, et compromission de comptes académiques réutilisés sur des services externes.
      </p>

      <h2>Le programme CaRE de l'ANSSI pour le secteur académique</h2>
      <p>
        L'ANSSI a inclus les établissements d'enseignement supérieur et de recherche dans son programme CaRE (Cybersécurité Accélération et Résilience des Établissements), initialement conçu pour la santé :
      </p>
      <ul>
        <li><strong>Diagnostics subventionnés</strong> : audits de sécurité partiellement financés via des dispositifs régionaux et nationaux</li>
        <li><strong>CERT-FR</strong> : accompagnement en cas d'incident, veille sur les menaces spécifiques au secteur</li>
        <li><strong>SEIS (Sécurité des ESR)</strong> : réseau de sécurité de l'enseignement supérieur et de la recherche, avec partage de threat intelligence entre établissements</li>
        <li><strong>RENATER</strong> : réseau national académique qui propose des services de sécurité mutualisés (filtrage DNS, SIEM partagé, SOC académique)</li>
      </ul>

      <h2>Obligations NIS2 pour les universités</h2>
      <p>
        Si votre établissement entre dans le périmètre NIS2, les obligations de l'article 21 s'appliquent :
      </p>
      <ul>
        <li><strong>PSSI formalisée</strong> : politique de sécurité validée par le conseil d'administration ou la présidence</li>
        <li><strong>Gestion des incidents</strong> : procédure de notification au CERT-FR et à l'ANSSI dans les délais NIS2</li>
        <li><strong>MFA généralisé</strong> : authentification multifacteur sur toutes les applications critiques (VPN, messagerie, applications administratives)</li>
        <li><strong>Sauvegardes testées</strong> : sauvegardes déconnectées des données critiques (données de recherche, données administratives, examens)</li>
        <li><strong>Sécurité de la chaîne d'approvisionnement</strong> : évaluation des prestataires IT et des logiciels utilisés</li>
        <li><strong>Gestion des vulnérabilités</strong> : processus de patch management pour les systèmes exposés</li>
        <li><strong>Formation</strong> : sensibilisation des personnels et formation des dirigeants (présidence, direction des SI)</li>
      </ul>

      <h2>Priorités pratiques pour les DSI académiques</h2>
      <p>
        Compte tenu des contraintes spécifiques du secteur, voici les priorités recommandées :
      </p>
      <ol>
        <li>Activer le MFA sur toutes les connexions VPN et messagerie (priorité absolue)</li>
        <li>Réaliser un inventaire des actifs et une cartographie des flux de données sensibles (données de recherche, données personnelles étudiants)</li>
        <li>Mettre en place des sauvegardes déconnectées testées pour les données critiques (résultats d'examens, données de recherche)</li>
        <li>Rejoindre le réseau SEIS et s'inscrire sur MonEspaceNIS2</li>
        <li>Former la présidence et le conseil d'administration sur les obligations NIS2</li>
        <li>Réaliser un audit de sécurité prioritaire sur les services exposés sur Internet (ENT, VPN, portails étudiants)</li>
      </ol>

      <h2>Conclusion</h2>
      <p>
        L'enseignement supérieur et la recherche sont face à un double défi : une surface d'attaque large par nature et des obligations réglementaires NIS2 croissantes. Les dispositifs mutualisés (RENATER, SEIS, programme CaRE) offrent des solutions adaptées au secteur. CyberConform accompagne les établissements d'enseignement supérieur dans leur démarche de conformité NIS2, depuis le diagnostic d'éligibilité jusqu'à la mise en place des mesures techniques et organisationnelles, avec une approche adaptée aux contraintes budgétaires et opérationnelles du secteur académique.
      </p>
    </ArticleLayout>
  );
};

export default Nis2SecteurEducation;
