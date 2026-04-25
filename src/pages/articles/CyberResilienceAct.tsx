import ArticleLayout from "@/components/ArticleLayout";

const CyberResilienceAct = () => {
  return (
    <ArticleLayout
      title="Cyber Resilience Act (CRA) : ce que les éditeurs et fabricants doivent savoir en 2026"
      description="Comprendre le Cyber Resilience Act européen : périmètre, obligations pour les produits avec éléments numériques, marquage CE cybersécurité, sanctions et plan de mise en conformité d'ici décembre 2027."
      date="22 avril 2026"
      dateISO="2026-04-22"
      readTime="16 min"
      tag="Cyber Resilience Act"
      slug="cyber-resilience-act-guide"
    >
      <p>
        Adopté définitivement le <strong>10 octobre 2024</strong> et entré en vigueur le <strong>10 décembre 2024</strong>, le <strong>Cyber Resilience Act</strong>
        (CRA) est le premier règlement européen qui impose des exigences de cybersécurité <strong>horizontales</strong> à l'ensemble des produits comportant des
        éléments numériques mis sur le marché de l'Union. À l'horizon <strong>11 décembre 2027</strong>, plus aucun produit non conforme ne pourra être commercialisé
        en Europe. Ce guide détaille les obligations, sanctions et le plan d'action à enclencher dès aujourd'hui.
      </p>

      <h2>Qu'est-ce que le Cyber Resilience Act ?</h2>
      <p>
        Le <strong>règlement (UE) 2024/2847</strong>, dit <strong>CRA</strong>, vise à garantir que tous les produits matériels et logiciels vendus dans l'Union
        européenne respectent des exigences essentielles de cybersécurité <strong>tout au long de leur cycle de vie</strong>. Il introduit la notion de
        <strong> marquage CE cybersécurité</strong> : sans conformité CRA, plus de mise sur le marché européen.
      </p>
      <p>
        Le CRA complète la directive NIS2 (qui vise les opérateurs) et le règlement DORA (secteur financier) en s'attaquant cette fois aux <strong>produits
        eux-mêmes</strong>, qu'il s'agisse d'objets connectés, de logiciels SaaS, d'applications mobiles ou de composants industriels.
      </p>

      <h2>Quels produits sont concernés ?</h2>
      <p>
        Le périmètre est volontairement large. Sont visés tous les <strong>« produits comportant des éléments numériques »</strong> (PEN) destinés à être connectés
        directement ou indirectement à un autre appareil ou réseau, notamment :
      </p>
      <ul>
        <li><strong>Logiciels grand public et professionnels</strong> : OS, navigateurs, suites bureautiques, ERP, CRM, applications mobiles.</li>
        <li><strong>Solutions SaaS et cloud</strong> dès qu'elles intègrent un composant logiciel livré au client.</li>
        <li><strong>Objets connectés (IoT)</strong> : caméras, montres, électroménager intelligent, jouets connectés.</li>
        <li><strong>Équipements industriels (IIoT, OT)</strong> : automates, capteurs, passerelles industrielles.</li>
        <li><strong>Composants matériels</strong> : routeurs, microcontrôleurs, modules de communication.</li>
        <li><strong>Bibliothèques logicielles et SDK</strong> distribués à des tiers.</li>
      </ul>
      <p>
        Sont exclus uniquement les produits déjà couverts par d'autres réglementations sectorielles équivalentes (dispositifs médicaux, aéronautique, automobile,
        défense). Les <strong>logiciels libres</strong> bénéficient d'un régime aménagé sauf lorsqu'ils sont fournis dans un cadre commercial.
      </p>

      <h2>Les 3 catégories de produits selon le CRA</h2>
      <p>Le CRA classe les produits selon leur niveau de criticité, ce qui détermine la procédure d'évaluation de la conformité.</p>
      <ul>
        <li><strong>Catégorie par défaut (~90 % des produits)</strong> : auto-évaluation par le fabricant.</li>
        <li><strong>Produits importants — classe I</strong> : navigateurs, gestionnaires de mots de passe, antivirus, VPN, pare-feux personnels, équipements réseau
          domestiques. Auto-évaluation possible avec recours à des normes harmonisées.</li>
        <li><strong>Produits importants — classe II</strong> : hyperviseurs, pare-feux d'entreprise, systèmes de détection d'intrusion, microprocesseurs sécurisés,
          cartes à puce. Évaluation par un organisme notifié obligatoire.</li>
        <li><strong>Produits critiques</strong> : HSM, smart meters, certains équipements de cybersécurité. Certification européenne obligatoire au titre du
          Cybersecurity Act.</li>
      </ul>

      <h2>Les obligations clés pour les fabricants</h2>

      <h3>1. Sécurité dès la conception</h3>
      <p>
        Chaque produit doit être conçu, développé et fabriqué de manière à garantir un niveau approprié de cybersécurité fondé sur une <strong>analyse des
        risques</strong>. Les exigences essentielles couvrent : configuration sécurisée par défaut, protection contre les accès non autorisés, intégrité des
        données, minimisation de la surface d'attaque, mécanismes de mise à jour sécurisés.
      </p>

      <h3>2. Gestion des vulnérabilités tout au long du cycle de vie</h3>
      <p>
        Le fabricant doit assurer la <strong>fourniture de mises à jour de sécurité gratuites pendant toute la durée de support</strong> du produit (au moins 5 ans
        par défaut). Il doit également :
      </p>
      <ul>
        <li>Maintenir un <strong>SBOM</strong> (Software Bill of Materials) à jour.</li>
        <li>Mettre en place une politique de divulgation coordonnée des vulnérabilités.</li>
        <li>Fournir des correctifs sans frais et de manière diligente.</li>
      </ul>

      <h3>3. Notification des vulnérabilités exploitées et incidents graves</h3>
      <p>
        Toute vulnérabilité activement exploitée et tout incident de sécurité grave doivent être notifiés à l'<strong>ENISA et au CSIRT national</strong> selon un
        calendrier strict :
      </p>
      <ul>
        <li><strong>Alerte précoce</strong> sous 24 heures.</li>
        <li><strong>Notification de vulnérabilité</strong> sous 72 heures.</li>
        <li><strong>Rapport final</strong> sous 14 jours pour les vulnérabilités, sous 1 mois pour les incidents.</li>
      </ul>

      <h3>4. Documentation technique et marquage CE</h3>
      <p>
        Le fabricant doit constituer un dossier technique complet (analyse de risques, conception, tests, gestion des vulnérabilités) et apposer le marquage CE
        attestant de la conformité. Une <strong>déclaration UE de conformité</strong> doit accompagner le produit.
      </p>

      <h2>Calendrier d'application du CRA</h2>
      <ul>
        <li><strong>10 décembre 2024</strong> : entrée en vigueur.</li>
        <li><strong>11 juin 2026</strong> : application des dispositions sur les organismes notifiés.</li>
        <li><strong>11 septembre 2026</strong> : obligation de notification des vulnérabilités et incidents.</li>
        <li><strong>11 décembre 2027</strong> : application complète. Plus aucun produit non conforme ne peut être mis sur le marché européen.</li>
      </ul>

      <h2>Sanctions encourues</h2>
      <p>Les sanctions sont alignées sur les régimes les plus sévères :</p>
      <ul>
        <li><strong>Non-respect des exigences essentielles de cybersécurité</strong> : jusqu'à <strong>15 millions d'euros ou 2,5 % du CA mondial</strong>.</li>
        <li><strong>Non-respect des autres obligations</strong> : jusqu'à 10 millions d'euros ou 2 % du CA mondial.</li>
        <li><strong>Informations inexactes aux autorités</strong> : jusqu'à 5 millions d'euros ou 1 % du CA mondial.</li>
        <li>Mesures correctrices : retrait, rappel ou interdiction de mise sur le marché.</li>
      </ul>

      <h2>Impact sur les éditeurs SaaS et les ESN</h2>
      <p>
        Contrairement à une idée répandue, le CRA <strong>ne se limite pas à l'IoT</strong>. Toute ESN qui édite ou distribue un logiciel commercial est concernée,
        de même que les éditeurs SaaS dès lors qu'un composant est déployé chez le client (agent, plugin, application desktop). Les principales conséquences :
      </p>
      <ul>
        <li>Mise en place d'un <strong>processus PSIRT</strong> (Product Security Incident Response Team).</li>
        <li>Formalisation d'une politique de cycle de vie produit avec engagement de support sécurité.</li>
        <li>Gouvernance des dépendances open source et publication d'un SBOM.</li>
        <li>Refonte des contrats clients pour intégrer les obligations CRA et la responsabilité associée.</li>
      </ul>

      <h2>Plan de mise en conformité CRA en 7 étapes</h2>
      <ol>
        <li><strong>Cartographier les produits</strong> : recensez l'ensemble de votre catalogue et classez chaque produit par catégorie CRA.</li>
        <li><strong>Réaliser une analyse d'écart</strong> par produit au regard des exigences essentielles de l'annexe I.</li>
        <li><strong>Construire les SBOM</strong> et structurer la gouvernance des composants tiers et open source.</li>
        <li><strong>Mettre en place un PSIRT</strong> avec processus de divulgation coordonnée des vulnérabilités.</li>
        <li><strong>Intégrer la sécurité dans le cycle de développement</strong> (Secure SDLC) : threat modeling, SAST/DAST, revue de code sécurité, tests
          d'intrusion produit.</li>
        <li><strong>Préparer la documentation technique</strong> et la déclaration UE de conformité.</li>
        <li><strong>Former les équipes produit, dev, support et juridiques</strong> aux exigences CRA et aux obligations de notification.</li>
      </ol>

      <h2>CRA, NIS2 et DORA : une approche cohérente</h2>
      <p>
        Les trois textes forment l'ossature de la stratégie cybersécurité européenne. NIS2 vise les <strong>opérateurs</strong>, DORA vise le <strong>secteur
        financier</strong>, et le CRA vise les <strong>produits</strong>. Pour un éditeur de logiciels qui vend à des opérateurs essentiels, les trois cadres
        s'appliquent simultanément : il devient indispensable de <strong>structurer un programme de conformité unifié</strong>.
      </p>

      <h2>Conclusion : anticiper pour préserver son accès au marché</h2>
      <p>
        Le CRA modifie en profondeur la responsabilité des fabricants et éditeurs de produits numériques. Les acteurs qui anticipent transformeront cette
        contrainte en avantage compétitif : confiance client, accès facilité aux marchés publics, valorisation de la qualité logicielle. À l'inverse, les
        retardataires risquent un retrait pur et simple du marché européen à partir de fin 2027.
      </p>
      <p>
        <strong>CyberConform</strong> accompagne éditeurs SaaS, fabricants d'objets connectés et industriels dans la mise en conformité CRA : cartographie produit,
        analyse de risques, mise en place du PSIRT, Secure SDLC, SBOM et constitution du dossier technique pour le marquage CE.
      </p>
    </ArticleLayout>
  );
};

export default CyberResilienceAct;