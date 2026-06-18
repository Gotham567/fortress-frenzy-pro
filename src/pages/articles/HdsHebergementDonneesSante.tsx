import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "react-router-dom";

const HdsHebergementDonneesSante = () => {
  return (
    <ArticleLayout
      title="Certification HDS (Hébergement de Données de Santé) : guide complet 2026"
      description="Tout savoir sur la certification HDS : périmètre, 6 activités, articulation avec ISO 27001 et HDS, processus, coûts, durée et obligations RGPD et NIS2 pour les acteurs de la santé."
      date="14 mai 2026"
      dateISO="2026-05-14"
      readTime="16 min"
      tag="HDS Santé"
      slug="hds-hebergement-donnees-sante-certification"
    >
      <p>
        En France, toute structure qui héberge des <strong>données de santé à caractère personnel</strong> pour le compte d'un tiers doit, depuis le décret n° 2018-137,
        être <strong>certifiée HDS</strong> (Hébergeur de Données de Santé). Cette obligation, inscrite à l'article L.1111-8 du Code de la santé publique, concerne aussi
        bien les éditeurs SaaS médicaux que les infogéreurs, les opérateurs cloud et les acteurs de la télémédecine. Elle s'articule avec le
        <Link to="/actualites/audit-rgpd-entreprises" className="text-primary hover:underline"> RGPD</Link>, la
        <Link to="/actualites/directive-nis2" className="text-primary hover:underline"> directive NIS2</Link> et la
        <Link to="/actualites/nis2-secteur-sante" className="text-primary hover:underline"> sectorisation santé NIS2</Link>.
      </p>

      <h2>Qu'est-ce qu'une donnée de santé ?</h2>
      <p>
        Au sens de l'article 4.15 du RGPD, une <strong>donnée de santé</strong> est une donnée à caractère personnel relative à la santé physique ou mentale d'une personne,
        y compris la prestation de services de santé, qui révèle des informations sur l'état de santé. Cela inclut :
      </p>
      <ul>
        <li>Dossiers patients, comptes-rendus, ordonnances, imagerie.</li>
        <li>Données issues d'objets connectés médicaux (DM, DMDIV).</li>
        <li>Données de rendez-vous médicaux nominatives.</li>
        <li>Données génétiques et biométriques à des fins d'identification unique.</li>
        <li>Numéros de sécurité sociale (NIR) associés à un soin.</li>
      </ul>

      <h2>Qui doit être certifié HDS ?</h2>
      <p>
        Toute personne physique ou morale qui <strong>héberge</strong>, pour le compte d'un responsable de traitement, des données de santé issues de prestations de soin.
        Concrètement :
      </p>
      <ul>
        <li><strong>Éditeurs SaaS médicaux</strong> (logiciels de cabinet, télémédecine, dossier patient).</li>
        <li><strong>Opérateurs cloud</strong> qui hébergent des données pour des structures de soin (AWS, Azure, OVHcloud, Outscale, Scaleway).</li>
        <li><strong>Infogéreurs</strong> qui exploitent les systèmes d'un établissement de santé.</li>
        <li><strong>Plateformes</strong> de prise de rendez-vous, de téléconsultation, de coordination de soins.</li>
        <li><strong>Laboratoires</strong>, sous-traitants d'imagerie, prestataires de DMP.</li>
      </ul>
      <p>
        Un établissement de santé qui héberge ses propres données <strong>pour son propre usage</strong> n'est pas soumis à la certification HDS — il reste soumis au RGPD,
        à la PGSSI-S et à NIS2.
      </p>

      <h2>Les 6 activités du référentiel HDS</h2>
      <ol>
        <li>Mise à disposition et maintien en condition opérationnelle des <strong>sites physiques</strong> d'hébergement (datacenters).</li>
        <li>Mise à disposition et maintien en condition opérationnelle de l'<strong>infrastructure matérielle</strong> du SI.</li>
        <li>Mise à disposition et maintien en condition opérationnelle de la <strong>plateforme d'hébergement applicative</strong> (PaaS, conteneurs).</li>
        <li>Mise à disposition et maintien en condition opérationnelle de l'<strong>infrastructure virtuelle</strong> (IaaS).</li>
        <li><strong>Infogérance</strong> du SI (administration et exploitation).</li>
        <li><strong>Sauvegarde externalisée</strong> des données de santé.</li>
      </ol>
      <p>
        L'organisme certifie son périmètre <strong>activité par activité</strong> (1 à 6). Un éditeur SaaS qui s'appuie sur AWS / Azure / OVH (déjà HDS sur 1-4) couvre
        typiquement les activités 5 et 6 sur son propre périmètre.
      </p>

      <h2>Le référentiel HDS : ISO 27001 + exigences spécifiques</h2>
      <p>
        Le référentiel HDS s'appuie sur la norme <Link to="/actualites/iso-27001-certification-guide" className="text-primary hover:underline">ISO/IEC 27001</Link>
        complétée par <strong>ISO 27018</strong> (protection des données personnelles dans le cloud) et par des <strong>exigences additionnelles</strong> propres à la santé :
      </p>
      <ul>
        <li>Localisation des données et des sauvegardes <strong>au sein de l'Union européenne</strong>.</li>
        <li>Réversibilité et restitution des données en fin de contrat.</li>
        <li>Notification d'incident dans des délais courts.</li>
        <li>Confidentialité renforcée : engagement des personnels, sous-traitants, partenaires.</li>
        <li>Continuité d'activité et <Link to="/actualites/plan-continuite-activite-cybersecurite" className="text-primary hover:underline">PRA</Link> documentés.</li>
        <li>Encadrement strict des accès distants et de l'administration.</li>
      </ul>

      <h2>Le processus de certification</h2>
      <ol>
        <li><strong>Cadrage</strong> : périmètre, activités visées, gap analysis vs ISO 27001 et HDS.</li>
        <li><strong>Mise en œuvre</strong> du SMSI : politiques, procédures, contrôles, journalisation.</li>
        <li><strong>Audit à blanc</strong> (souvent réalisé par un cabinet conseil).</li>
        <li><strong>Audit initial</strong> par un organisme certificateur accrédité COFRAC (LSTI, BSI, AFNOR, Bureau Veritas, etc.) :
          <ul>
            <li>Étape 1 : revue documentaire.</li>
            <li>Étape 2 : audit terrain (datacenter, processus, entretiens).</li>
          </ul>
        </li>
        <li><strong>Décision de certification</strong> — valable 3 ans.</li>
        <li><strong>Audits de surveillance</strong> annuels et <strong>renouvellement</strong> à 3 ans.</li>
      </ol>
      <p>
        <strong>Durée typique :</strong> 8 à 14 mois entre le lancement et l'obtention. <strong>Coûts indicatifs :</strong> 25 k€ à 80 k€ pour une PME éditrice (conseil + audit),
        plus le coût interne (RSSI, DPO, équipes ops).
      </p>

      <h2>Articulation avec le RGPD, NIS2 et la PGSSI-S</h2>
      <ul>
        <li><strong>RGPD</strong> : HDS ne remplace pas le RGPD. Vous devez toujours désigner un DPO, tenir un registre des traitements et signer un DPA avec le responsable de traitement.</li>
        <li><strong>NIS2</strong> : le secteur santé fait partie des secteurs hautement critiques. La certification HDS couvre une part importante des exigences techniques NIS2.</li>
        <li><strong>PGSSI-S</strong> : politique générale de sécurité des SI de santé (référentiel ANS). Compatible et complémentaire de HDS.</li>
        <li><strong>HDS + Ségur</strong> : les éditeurs labellisés Ségur du numérique en santé doivent être HDS ou s'appuyer sur un hébergeur HDS.</li>
        <li><strong>Cloud de confiance / SecNumCloud</strong> : pour les données les plus sensibles, certains acteurs combinent HDS et SecNumCloud (ANSSI).</li>
      </ul>

      <h2>Choisir un hébergeur HDS : les critères</h2>
      <ul>
        <li>Activités certifiées <strong>réellement</strong> couvertes (1 à 6) — exiger le certificat à jour.</li>
        <li>Localisation des données et des sauvegardes (UE, France).</li>
        <li>Souveraineté juridique : exposition au Cloud Act américain ?</li>
        <li>Engagements contractuels de réversibilité.</li>
        <li>Capacité à fournir les preuves d'audit (DPA, logs, rapports).</li>
        <li>Articulation avec votre <Link to="/actualites/cyber-assurance-pme-guide" className="text-primary hover:underline">cyber-assurance</Link>.</li>
      </ul>

      <h2>Erreurs fréquentes</h2>
      <ul>
        <li>Penser que l'hébergement chez un hyperscaler HDS suffit : vous restez responsable de votre propre périmètre applicatif et organisationnel.</li>
        <li>Sous-estimer la charge documentaire (politiques, procédures, preuves).</li>
        <li>Oublier le DPO et la cartographie RGPD.</li>
        <li>Ne pas inclure les sous-traitants dans le périmètre.</li>
        <li>Sauvegardes hors UE chez un acteur non HDS.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        La certification HDS est aujourd'hui un <strong>prérequis commercial</strong> pour tout acteur qui manipule des données de santé en France. Bien conduite, elle
        renforce non seulement la sécurité, mais aussi la confiance des établissements clients, des patients et des partenaires institutionnels (ANS, ARS, CNAM).
        Elle s'inscrit naturellement dans une démarche globale couvrant RGPD, NIS2 et ISO 27001, et constitue un investissement structurant pour la pérennité de l'activité.
      </p>
    </ArticleLayout>
  );
};

export default HdsHebergementDonneesSante;