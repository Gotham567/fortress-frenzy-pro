import ArticleLayout from "@/components/ArticleLayout";

const Nis2SecteurIndustriel = () => {
  return (
    <ArticleLayout
      title="NIS2 et secteur industriel : entités concernées, obligations OT/IT et mise en conformité"
      description="Guide NIS2 pour l'industrie : fabricants concernés, obligations de sécurité IT/OT, gestion des systèmes industriels (ICS/SCADA), chaîne d'approvisionnement et calendrier de mise en conformité."
      date="28 juin 2026"
      dateISO="2026-06-28"
      readTime="14 min"
      tag="NIS2 Industrie"
      slug="nis2-secteur-industriel-fabricants-obligations"
    >
      <p>
        La directive NIS2 inclut explicitement le secteur de la fabrication dans son périmètre. Contrairement à NIS1 qui se concentrait sur les opérateurs d'infrastructures critiques traditionnels, NIS2 étend ses obligations aux fabricants d'équipements critiques, aux industries agroalimentaires à grande échelle et aux producteurs de produits chimiques. Si vous êtes industriel, vous êtes probablement concerné.
      </p>

      <h2>Quels fabricants sont concernés par NIS2 ?</h2>
      <p>
        NIS2 distingue deux niveaux d'entités dans le secteur industriel. Les entreprises sont classées en fonction de leur secteur d'activité et de leur taille (au-delà des seuils : 250 salariés OU 50 M€ de CA et 43 M€ de bilan).
      </p>

      <h3>Entités importantes (EI) — Fabrication</h3>
      <p>
        Sont classées entités importantes dans le secteur "fabrication" les entreprises de plus de 50 salariés (ou 10 M€ de CA) dans les sous-secteurs suivants :
      </p>
      <ul>
        <li>Fabrication de dispositifs médicaux et dispositifs médicaux de diagnostic in vitro</li>
        <li>Fabrication de produits informatiques, électroniques et optiques</li>
        <li>Fabrication d'équipements électriques</li>
        <li>Fabrication de machines et équipements (n.c.a.)</li>
        <li>Construction de véhicules automobiles, remorques et semi-remorques</li>
        <li>Fabrication d'autres matériels de transport</li>
      </ul>

      <h3>Entités importantes — Produits chimiques et alimentaires</h3>
      <p>
        Les fabricants de substances chimiques et les entreprises de l'industrie alimentaire à grande échelle sont également classés entités importantes sous NIS2.
      </p>

      <h3>Entités essentielles — Énergie et eau</h3>
      <p>
        Les industriels opérant dans les secteurs de l'énergie (production, transport, distribution d'électricité, gaz, hydrogène) et de l'eau (eau potable, eaux usées) peuvent être classés entités essentielles, avec des obligations plus strictes et des contrôles ex ante.
      </p>

      <h2>La spécificité OT/IT : le défi des environnements industriels</h2>
      <p>
        La grande différence entre NIS2 dans l'industrie et NIS2 dans les secteurs de services, c'est la présence de systèmes OT (Operational Technology) : automates programmables (PLC), systèmes SCADA, DCS (Distributed Control Systems), ICS (Industrial Control Systems). Ces systèmes contrôlent les processus physiques (lignes de production, chaînes de montage, installations chimiques) et présentent des caractéristiques très différentes des systèmes IT traditionnels.
      </p>

      <h3>Caractéristiques des systèmes OT qui compliquent la conformité NIS2</h3>
      <ul>
        <li><strong>Longue durée de vie :</strong> Les PLC et automates ont des cycles de vie de 20-30 ans. Beaucoup fonctionnent sur des OS Windows XP ou Windows 7 qui ne reçoivent plus de mises à jour de sécurité.</li>
        <li><strong>Disponibilité prioritaire :</strong> Un arrêt d'une ligne de production pour patcher un système peut coûter des dizaines de milliers d'euros par heure. La disponibilité prime sur la sécurité dans la culture OT traditionnelle.</li>
        <li><strong>Protocoles propriétaires :</strong> Modbus, Profibus, DNP3, EtherNet/IP — des protocoles sans chiffrement ni authentification natifs.</li>
        <li><strong>Connectivité croissante :</strong> L'industrie 4.0 connecte de plus en plus les réseaux OT à Internet et aux systèmes IT, créant une surface d'attaque inédite.</li>
      </ul>

      <h2>Les obligations NIS2 appliquées à l'industrie</h2>

      <h3>1. Segmentation IT/OT</h3>
      <p>
        NIS2 impose la mise en place de mesures pour réduire la surface d'attaque. Dans un contexte industriel, la priorité est la segmentation entre le réseau IT (bureautique) et le réseau OT (production). Le modèle Purdue (ISA-95) reste la référence : zones IT, DMZ industrielle, zones OT de niveau 2, 1 et 0, avec des contrôles stricts aux frontières. NIS2 n'impose pas explicitement Purdue, mais la segmentation est implicitement requise par l'article 21.
      </p>

      <h3>2. Inventaire des actifs OT</h3>
      <p>
        Vous ne pouvez pas sécuriser ce que vous ne connaissez pas. NIS2 impose une cartographie des actifs et des risques. Dans un contexte industriel, cela signifie : inventaire de tous les équipements OT (PLC, HMI, SCADA, capteurs, actionneurs), identification des connexions IT/OT, cartographie des flux réseau entre zones, identification des versions firmware et OS de chaque équipement.
      </p>

      <h3>3. Détection des menaces OT</h3>
      <p>
        Les outils de détection traditionnels (EDR, antivirus) ne sont pas compatibles avec les systèmes OT. Des solutions spécialisées de monitoring passif du réseau OT sont nécessaires : Claroty, Nozomi Networks, Dragos, Tenable OT Security. Ces solutions analysent le trafic réseau industriel sans impact sur la disponibilité des équipements.
      </p>

      <h3>4. Gestion des vulnérabilités OT</h3>
      <p>
        Les patches sur les systèmes OT ne peuvent pas être appliqués à la même fréquence que sur les systèmes IT. Une approche adaptée inclut : priorisation des vulnérabilités critiques, patches lors des arrêts planifiés (maintenance annuelle), compensating controls pour les vulnérabilités non patchables (segmentation renforcée, monitoring, liste blanche applicative), collaboration avec les fabricants OEM pour les correctifs.
      </p>

      <h3>5. Continuité industrielle</h3>
      <p>
        NIS2 impose des plans de continuité. Dans l'industrie, cela signifie : procédures de basculement en mode dégradé (fonctionnement sans supervision numérique), sauvegardes des configurations des équipements OT (configurations PLC, recettes de production), procédures de restauration testées, formation des opérateurs aux procédures manuelles d'urgence.
      </p>

      <h2>NIS2 et la chaîne d'approvisionnement industrielle</h2>
      <p>
        NIS2 (article 21.2d) impose la gestion des risques liés à la chaîne d'approvisionnement. Dans l'industrie, cela crée une cascade d'exigences :
      </p>
      <ul>
        <li>Les grands groupes industriels (donneurs d'ordre) imposent à leurs fournisseurs (sous-traitants) des questionnaires de sécurité et des exigences contractuelles</li>
        <li>Les équipementiers OEM qui fournissent des PLC ou des automates sont des fournisseurs TIC au sens NIS2</li>
        <li>Les intégrateurs qui maintiennent les systèmes SCADA à distance créent un risque de "supply chain" numérique</li>
        <li>Les accès VPN des mainteneurs tiers doivent être sécurisés, limités et auditables</li>
      </ul>

      <h2>Calendrier et plan d'action NIS2 pour les industriels</h2>
      <p>
        La transposition française de NIS2 (en cours) prévoira un délai de mise en conformité, mais les entreprises doivent commencer maintenant. Le plan d'action recommandé en 5 étapes :
      </p>
      <ul>
        <li><strong>Mois 1-2 :</strong> Diagnostic d'éligibilité NIS2 et inventaire des actifs IT et OT. Identification des écarts les plus critiques.</li>
        <li><strong>Mois 3-4 :</strong> Mise en place des mesures de base : segmentation IT/OT si inexistante, déploiement du monitoring OT passif, revue des accès tiers (VPN mainteneurs).</li>
        <li><strong>Mois 5-8 :</strong> Formalisation des politiques (PSSI adaptée au contexte industriel, procédure de gestion des incidents, plan de continuité industrielle).</li>
        <li><strong>Mois 9-12 :</strong> Tests de résilience, formation des équipes de production, audit de conformité et enregistrement ANSSI.</li>
        <li><strong>Continu :</strong> Programme de gestion des vulnérabilités OT, revue annuelle de la posture de sécurité, amélioration continue.</li>
      </ul>

      <div className="info-box">
        <h4>Accompagnement NIS2 pour les industriels</h4>
        <p>CyberConform accompagne les entreprises industrielles dans leur mise en conformité NIS2 : diagnostic d'éligibilité, audit IT/OT, segmentation réseau industrielle, déploiement de monitoring OT et formation des équipes. Expérience dans l'automobile, l'agroalimentaire, la chimie et l'équipementier industriel. Devis gratuit sous 48h.</p>
      </div>
    </ArticleLayout>
  );
};

export default Nis2SecteurIndustriel;
