import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "react-router-dom";

const EbiosRmMethode = () => {
  return (
    <ArticleLayout
      title="Méthode EBIOS Risk Manager : guide pratique pour analyser ses risques cyber en 2026"
      description="Maîtrisez la méthode EBIOS RM de l'ANSSI : 5 ateliers, livrables, exemples concrets, articulation avec NIS2, ISO 27001 et DORA. Guide complet pour une analyse de risques cyber réussie."
      date="28 avril 2026"
      dateISO="2026-04-28"
      readTime="17 min"
      tag="EBIOS RM"
      slug="ebios-rm-methode-analyse-risques"
    >
      <p>
        L'<strong>analyse de risques</strong> est la pierre angulaire de toute démarche de cybersécurité sérieuse. En France, la méthode de référence est{" "}
        <strong>EBIOS Risk Manager</strong> (EBIOS RM), publiée par l'<strong>ANSSI</strong> en 2018 et largement adoptée par les administrations,
        OIV, OSE et désormais par les <strong>entités essentielles et importantes au titre de NIS2</strong>. Ce guide explique comment conduire une
        analyse EBIOS RM pas à pas, avec des exemples concrets adaptés aux PME et ETI françaises.
      </p>

      <h2>Pourquoi adopter EBIOS Risk Manager ?</h2>
      <p>
        EBIOS RM est une méthode d'<strong>appréciation et de traitement des risques numériques</strong> qui combine deux approches complémentaires :
        une approche par <strong>conformité</strong> (socle de sécurité réglementaire) et une approche par <strong>scénarios</strong> (analyse des
        menaces ciblées). Elle est reconnue par l'ISO 31000, compatible ISO 27005, et constitue un excellent moyen de démontrer la « gestion des
        risques » exigée par <Link to="/actualites/directive-nis2" className="text-primary hover:underline">NIS2</Link>,{" "}
        <Link to="/actualites/dora-reglementation-secteur-financier" className="text-primary hover:underline">DORA</Link> et{" "}
        <Link to="/actualites/iso-27001-certification-guide" className="text-primary hover:underline">ISO 27001</Link>.
      </p>

      <h3>Les bénéfices concrets pour une organisation</h3>
      <ul>
        <li>Prioriser les investissements de sécurité sur les risques réellement critiques.</li>
        <li>Faciliter le dialogue entre la direction, le métier et la DSI/RSSI.</li>
        <li>Produire un livrable structuré exploitable pour un audit NIS2, ISO 27001 ou une cyber-assurance.</li>
        <li>Documenter la chaîne de décision et la responsabilité du dirigeant (sanctions personnelles NIS2).</li>
      </ul>

      <h2>Les 5 ateliers EBIOS RM</h2>
      <p>
        EBIOS RM s'organise en <strong>5 ateliers</strong> séquentiels, conduits avec une équipe pluridisciplinaire (direction, métier, DSI, RSSI,
        juridique). Chaque atelier produit des livrables qui alimentent le suivant.
      </p>

      <h3>Atelier 1 — Cadrage et socle de sécurité</h3>
      <ul>
        <li>Définir le <strong>périmètre métier et technique</strong> de l'étude (un SI, une activité, l'ensemble de l'organisation).</li>
        <li>Identifier les <strong>valeurs métier</strong> (processus essentiels, données sensibles) et les <strong>biens supports</strong> (serveurs, applications, prestataires).</li>
        <li>Lister les <strong>événements redoutés</strong> et leur gravité (perte d'exploitation, fuite RGPD, atteinte à la sûreté).</li>
        <li>Établir le <strong>socle de sécurité</strong> applicable : NIS2, RGPD, hygiène ANSSI, exigences clients.</li>
      </ul>

      <h3>Atelier 2 — Sources de risque et objectifs visés</h3>
      <p>
        L'objectif est d'identifier <strong>qui peut attaquer</strong> l'organisation et <strong>pourquoi</strong>. On distingue typiquement :
      </p>
      <ul>
        <li><strong>Cybercriminels organisés</strong> (ransomware, fraude au président) — motivation lucrative.</li>
        <li><strong>Hacktivistes</strong> — motivation idéologique, défacement, fuite.</li>
        <li><strong>États et APT</strong> — espionnage, sabotage (secteurs sensibles).</li>
        <li><strong>Concurrents</strong> — vol de propriété intellectuelle.</li>
        <li><strong>Insiders malveillants ou négligents</strong> — fuites internes, erreurs.</li>
      </ul>
      <p>Chaque couple « source de risque / objectif visé » est noté en pertinence (faible / moyenne / forte).</p>

      <h3>Atelier 3 — Scénarios stratégiques</h3>
      <p>
        On modélise les <strong>chemins d'attaque de haut niveau</strong> qu'une source de risque peut emprunter pour atteindre son objectif, en
        passant par les <strong>parties prenantes</strong> de l'écosystème (fournisseurs, clients, partenaires, hébergeurs). Cet atelier met
        souvent en lumière le <strong>risque tiers</strong>, désormais central dans NIS2 et DORA.
      </p>

      <h3>Atelier 4 — Scénarios opérationnels</h3>
      <p>
        On descend dans la technique : pour chaque scénario stratégique retenu, on décrit la <strong>kill chain</strong> (reconnaissance, intrusion
        initiale, élévation de privilèges, mouvement latéral, exfiltration, impact). On évalue ensuite la <strong>vraisemblance</strong> en
        fonction des mesures de sécurité existantes.
      </p>

      <h3>Atelier 5 — Traitement du risque</h3>
      <ul>
        <li>Croiser <strong>gravité</strong> (atelier 1) et <strong>vraisemblance</strong> (atelier 4) pour positionner les risques sur une matrice.</li>
        <li>Décider pour chaque risque : <strong>réduire, transférer (cyber-assurance), éviter ou accepter</strong>.</li>
        <li>Construire un <strong>plan d'amélioration de la sécurité (PACS)</strong> chiffré et planifié.</li>
        <li>Définir les <strong>risques résiduels</strong> validés formellement par la direction.</li>
      </ul>

      <h2>Exemple appliqué : PME industrielle de 80 personnes</h2>
      <p>
        Une PME française de mécanique de précision, sous-traitante d'un OIV, identifie en atelier 1 deux valeurs métier critiques : la{" "}
        <strong>continuité de production</strong> et la <strong>protection des plans clients</strong>. En atelier 2, deux sources de risque
        majeures émergent : un cybercriminel (ransomware) et un concurrent étranger (espionnage). Les ateliers 3 et 4 mettent en évidence un
        chemin d'attaque privilégié : compromission via un <strong>prestataire de maintenance</strong> disposant d'un VPN permanent. L'atelier 5
        priorise alors trois actions : durcissement des accès tiers (Zero Trust), sauvegardes immuables{" "}
        <Link to="/actualites/ransomware-pme-protection" className="text-primary hover:underline">anti-ransomware</Link> et{" "}
        <Link to="/actualites/cyber-assurance-pme-guide" className="text-primary hover:underline">cyber-assurance</Link> pour le risque résiduel.
      </p>

      <h2>Articulation avec les référentiels</h2>
      <ul>
        <li><strong>NIS2</strong> : EBIOS RM répond à l'article 21 (gestion des risques) et à l'obligation de gouvernance.</li>
        <li><strong>ISO 27001:2022</strong> : EBIOS RM est compatible avec l'annexe A et le clause 6.1 (appréciation des risques).</li>
        <li><strong>DORA</strong> : la méthode alimente le cadre de gestion des risques TIC et les tests de résilience.</li>
        <li><strong>RGPD</strong> : les scénarios « fuite de données » nourrissent directement les AIPD.</li>
      </ul>

      <h2>Combien de temps et de budget prévoir ?</h2>
      <ul>
        <li><strong>PME (50–250 salariés)</strong> : 5 à 8 jours-homme consultant + 4 à 6 ateliers de 3h. Budget 8 000 à 15 000 € HT.</li>
        <li><strong>ETI (250–5000)</strong> : 15 à 25 jours-homme. Budget 25 000 à 50 000 € HT.</li>
        <li><strong>Mise à jour annuelle</strong> recommandée : 2 à 4 jours-homme.</li>
      </ul>

      <h2>Erreurs fréquentes à éviter</h2>
      <ul>
        <li>Faire l'analyse uniquement entre informaticiens : le métier et la direction <strong>doivent</strong> participer.</li>
        <li>Confondre vulnérabilité et risque (un CVE n'est pas un risque tant qu'il n'est pas exploitable dans un scénario).</li>
        <li>Produire une étude trop volumineuse non maintenue : préférez une étude vivante, mise à jour à chaque changement majeur.</li>
        <li>Oublier l'écosystème : la majorité des attaques 2024–2026 passent par un tiers.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        EBIOS RM est aujourd'hui le standard français incontournable pour piloter la cybersécurité par les risques. Bien conduite, une analyse
        EBIOS RM transforme la sécurité d'un centre de coûts en un véritable outil de décision stratégique, indispensable pour répondre à NIS2,
        décrocher une cyber-assurance compétitive et rassurer ses grands comptes.
      </p>

      <p>
        <strong>CyberConform</strong> accompagne les PME et ETI dans la conduite d'analyses EBIOS RM, depuis le cadrage jusqu'au plan
        d'amélioration de la sécurité. <Link to="/#contact" className="text-primary hover:underline">Contactez nos experts</Link> pour un
        diagnostic gratuit de 15 minutes.
      </p>
    </ArticleLayout>
  );
};

export default EbiosRmMethode;