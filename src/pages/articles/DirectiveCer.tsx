import ArticleLayout from "@/components/ArticleLayout";

const DirectiveCer = () => {
  return (
    <ArticleLayout
      title="Directive CER : résilience des entités critiques, le pendant physique de NIS2"
      description="Comprendre la directive européenne CER (Critical Entities Resilience) : périmètre, obligations, articulation avec NIS2, sanctions et plan de mise en conformité pour les entités critiques en France."
      date="24 avril 2026"
      dateISO="2026-04-24"
      readTime="15 min"
      tag="Directive CER"
      slug="directive-cer-resilience-entites-critiques"
    >
      <p>
        Adoptée le <strong>14 décembre 2022</strong> et transposée en droit français en 2024-2025, la <strong>directive (UE) 2022/2557</strong> dite
        <strong> CER</strong> (Critical Entities Resilience) impose aux entités critiques européennes de renforcer leur résilience face à un large spectre de
        menaces : catastrophes naturelles, terrorisme, sabotage, menaces hybrides, conflits armés. Souvent éclipsée par sa cousine NIS2, la CER constitue
        pourtant un pilier essentiel de la stratégie de sécurité européenne.
      </p>

      <h2>Qu'est-ce que la directive CER ?</h2>
      <p>
        La directive CER remplace la directive 2008/114/CE sur les infrastructures critiques européennes. Là où NIS2 se concentre sur la <strong>cybersécurité
        des réseaux et systèmes d'information</strong>, la CER traite de la <strong>résilience physique et organisationnelle</strong> des entités jugées critiques
        pour le maintien des fonctions sociétales et économiques essentielles.
      </p>
      <p>
        Les deux textes ont été pensés comme <strong>complémentaires</strong> : toute entité désignée critique au titre de la CER doit également respecter les
        obligations cyber de NIS2.
      </p>

      <h2>Quels secteurs et entités sont concernés ?</h2>
      <p>La directive CER cible <strong>11 secteurs</strong> jugés critiques :</p>
      <ul>
        <li><strong>Énergie</strong> : électricité, chauffage urbain, pétrole, gaz, hydrogène.</li>
        <li><strong>Transports</strong> : aérien, ferroviaire, routier, maritime, fluvial.</li>
        <li><strong>Banques et infrastructures de marché financier</strong>.</li>
        <li><strong>Santé</strong> : hôpitaux, fabrication de médicaments et de dispositifs médicaux critiques.</li>
        <li><strong>Eau potable et eaux usées</strong>.</li>
        <li><strong>Infrastructures numériques</strong> : datacenters, IXP, fournisseurs DNS.</li>
        <li><strong>Administration publique</strong>.</li>
        <li><strong>Espace</strong> : opérateurs de stations sol pour services satellitaires.</li>
        <li><strong>Production, transformation et distribution alimentaire</strong>.</li>
      </ul>
      <p>
        Les <strong>États membres désignent</strong> nominativement les entités critiques sur la base d'analyses de risques nationales. Une entité peut être
        également désignée comme <strong>critique d'importance européenne</strong> si elle fournit des services essentiels dans au moins 6 États membres. En
        France, la désignation est articulée avec le dispositif <strong>OIV</strong> (Opérateurs d'Importance Vitale) déjà existant.
      </p>

      <h2>Les principales obligations imposées par la CER</h2>

      <h3>1. Évaluation des risques au niveau national et au niveau de l'entité</h3>
      <p>
        Les États membres doivent réaliser une <strong>évaluation des risques nationale</strong> tous les 4 ans. Chaque entité critique doit en parallèle conduire
        sa propre <strong>évaluation des risques</strong> couvrant un large spectre de menaces : catastrophes naturelles, accidents technologiques, terrorisme,
        infiltration, sabotage, menaces hybrides, conflits armés.
      </p>

      <h3>2. Mesures de résilience à mettre en œuvre</h3>
      <p>Sur la base de cette analyse, l'entité doit déployer des mesures techniques, sécuritaires et organisationnelles, parmi lesquelles :</p>
      <ul>
        <li>Protection physique des sites critiques (contrôle d'accès, vidéosurveillance, sécurisation périmétrique).</li>
        <li>Gestion de la sécurité du personnel (criblage, formation, sensibilisation).</li>
        <li>Plans de continuité et de reprise d'activité testés régulièrement.</li>
        <li>Diversification des fournisseurs et redondance des chaînes critiques.</li>
        <li>Procédures de gestion de crise et coordination avec les autorités.</li>
        <li>Plans de gestion des incidents avec retours d'expérience.</li>
      </ul>

      <h3>3. Notification des incidents perturbateurs</h3>
      <p>
        Les entités critiques doivent notifier sans délai (au plus tard sous 24 heures) toute perturbation significative de leur service à l'autorité compétente.
        Un rapport détaillé doit suivre dans le mois.
      </p>

      <h3>4. Désignation d'un point de contact unique</h3>
      <p>
        Chaque entité doit désigner un <strong>responsable résilience</strong> au plus haut niveau, point de contact unique avec les autorités, garant du suivi
        des obligations CER.
      </p>

      <h3>5. Habilitation du personnel sensible</h3>
      <p>
        Pour les fonctions sensibles, des procédures de <strong>vérification d'antécédents</strong> peuvent être mises en place, dans le respect strict du droit
        national et du RGPD.
      </p>

      <h2>Calendrier d'application en France</h2>
      <ul>
        <li><strong>17 octobre 2024</strong> : date limite de transposition par les États membres.</li>
        <li><strong>17 janvier 2026</strong> : adoption de la stratégie nationale de résilience.</li>
        <li><strong>17 juillet 2026</strong> : première identification officielle des entités critiques.</li>
        <li><strong>9 mois après désignation</strong> : entrée en vigueur des obligations pour chaque entité critique.</li>
      </ul>
      <p>
        En France, la transposition s'appuie sur la <strong>loi de programmation militaire</strong>, le <strong>code de la défense</strong> (articles relatifs aux
        OIV) et de nouveaux textes spécifiques portés par le SGDSN et l'ANSSI.
      </p>

      <h2>Sanctions prévues</h2>
      <p>
        Chaque État membre fixe son régime de sanctions, qui doit être <strong>« effectif, proportionné et dissuasif »</strong>. En France, les sanctions s'inspirent
        du dispositif OIV existant et peuvent atteindre :
      </p>
      <ul>
        <li>Plusieurs centaines de milliers d'euros d'amende administrative.</li>
        <li>Sanctions pénales pour les manquements graves.</li>
        <li>Mesures coercitives : injonctions, contrôles renforcés, publication des sanctions.</li>
        <li>Mise en cause de la responsabilité personnelle des dirigeants.</li>
      </ul>

      <h2>CER et NIS2 : deux facettes d'une même résilience</h2>
      <table>
        <thead>
          <tr>
            <th>Critère</th>
            <th>CER</th>
            <th>NIS2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Objet</td>
            <td>Résilience physique et organisationnelle</td>
            <td>Cybersécurité des réseaux et SI</td>
          </tr>
          <tr>
            <td>Périmètre</td>
            <td>11 secteurs critiques, entités désignées</td>
            <td>18 secteurs, plus de 12 000 entités en France</td>
          </tr>
          <tr>
            <td>Désignation</td>
            <td>Nominative par l'État</td>
            <td>Auto-évaluation</td>
          </tr>
          <tr>
            <td>Autorité française</td>
            <td>SGDSN / ministères de tutelle</td>
            <td>ANSSI</td>
          </tr>
          <tr>
            <td>Notification incident</td>
            <td>24h / 1 mois (rapport)</td>
            <td>24h / 72h / 1 mois</td>
          </tr>
        </tbody>
      </table>

      <h2>Plan de mise en conformité CER en 6 étapes</h2>
      <ol>
        <li><strong>Confirmer le statut d'entité critique</strong> auprès de l'autorité de désignation.</li>
        <li><strong>Réaliser une analyse de risques tous risques</strong> incluant menaces physiques, hybrides, climatiques et chaîne d'approvisionnement.</li>
        <li><strong>Cartographier les services et actifs essentiels</strong> ainsi que leurs interdépendances.</li>
        <li><strong>Mettre à jour le plan de continuité et de reprise d'activité</strong> en intégrant les scénarios CER.</li>
        <li><strong>Renforcer la sécurité physique, la gouvernance de crise et la sécurité du personnel</strong>.</li>
        <li><strong>Désigner le responsable résilience</strong> et formaliser les procédures de notification d'incident.</li>
      </ol>

      <h2>Articulation avec les programmes existants (OIV, NIS2, DORA, ISO 22301)</h2>
      <p>
        Les entités déjà OIV ou ISO 22301 disposent d'un socle solide qui couvre une large partie des exigences CER. La valeur ajoutée d'un projet CER consiste
        à <strong>unifier les démarches</strong> de résilience cyber (NIS2/DORA) et de résilience opérationnelle (CER/ISO 22301) sous une gouvernance commune,
        portée au niveau du comité exécutif.
      </p>

      <h2>Conclusion : faire de la résilience un avantage stratégique</h2>
      <p>
        Dans un contexte géopolitique tendu, la directive CER consacre la <strong>résilience comme exigence stratégique</strong> au niveau européen. Pour les
        entités concernées, c'est l'occasion de structurer durablement leur capacité à absorber, résister et se rétablir face aux chocs, qu'ils soient cyber,
        physiques ou hybrides.
      </p>
      <p>
        <strong>CyberConform</strong> accompagne les opérateurs critiques (énergie, santé, transports, infrastructures numériques, agroalimentaire) dans leur
        mise en conformité combinée CER/NIS2 : analyse de risques tous risques, gouvernance de crise, plan de continuité, sécurité physique et coordination avec
        les autorités (SGDSN, ANSSI, ministères de tutelle).
      </p>
    </ArticleLayout>
  );
};

export default DirectiveCer;