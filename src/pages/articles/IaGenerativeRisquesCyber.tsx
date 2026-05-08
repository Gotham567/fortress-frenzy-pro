import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "react-router-dom";

const IaGenerativeRisquesCyber = () => {
  return (
    <ArticleLayout
      title="IA générative et cybersécurité en entreprise : risques, gouvernance et mise en conformité IA Act"
      description="Shadow AI, fuite de données vers ChatGPT, deepfakes, prompt injection : risques de l'IA générative en entreprise et plan de gouvernance conforme à l'AI Act, NIS2 et RGPD."
      date="4 mai 2026"
      dateISO="2026-05-04"
      readTime="17 min"
      tag="IA & Cybersécurité"
      slug="ia-generative-risques-cybersecurite-entreprise"
    >
      <p>
        En 2026, plus de <strong>78 % des collaborateurs français</strong> utilisent une IA générative (ChatGPT, Copilot, Gemini, Claude,
        Mistral) pour leurs tâches quotidiennes — souvent <strong>sans validation de la DSI</strong>. Cette « <strong>Shadow AI</strong> »
        crée des risques cyber et juridiques massifs que NIS2, le RGPD et l'<strong>AI Act</strong> européen encadrent désormais
        strictement. Voici comment reprendre le contrôle.
      </p>

      <h2>Les 7 risques majeurs de l'IA générative en entreprise</h2>
      <h3>1. Fuite de données confidentielles</h3>
      <p>
        Coller un contrat, un fichier RH ou du code propriétaire dans un LLM grand public peut équivaloir à une <strong>publication</strong> :
        certains modèles s'entraînent sur les prompts utilisateurs. Un incident notable en 2023 (Samsung) a conduit à l'interdiction pure et
        simple de ChatGPT en interne.
      </p>

      <h3>2. Shadow AI</h3>
      <p>
        Les collaborateurs utilisent en moyenne <strong>4 à 7 outils d'IA</strong> non référencés. La DSI ne sait pas quelles données partent,
        vers quels modèles, ni où elles sont stockées (souvent hors UE).
      </p>

      <h3>3. Prompt injection et jailbreak</h3>
      <p>
        Un attaquant peut piéger un agent IA via un email, un PDF ou une page web contenant des instructions cachées qui détournent le modèle
        (exfiltration, exécution d'actions). C'est la <strong>vulnérabilité n°1 du Top 10 OWASP for LLM 2025</strong>.
      </p>

      <h3>4. Deepfakes et fraude au président version 2026</h3>
      <p>
        Les <strong>deepfakes audio et vidéo</strong> permettent désormais d'imiter la voix d'un dirigeant en moins de 30 secondes
        d'enregistrement. En 2024, une multinationale hongkongaise a perdu <strong>25 millions de dollars</strong> via une fausse
        visioconférence du CFO. Les PME françaises sont exposées au même type de fraude.
      </p>

      <h3>5. Hallucinations et décisions erronées</h3>
      <p>
        Un LLM peut produire avec assurance des informations <strong>fausses</strong> (références juridiques inventées, calculs erronés,
        diagnostics médicaux faux). Tout usage non encadré dans un contexte réglementé (RH, juridique, santé, finance) expose à un risque
        de responsabilité.
      </p>

      <h3>6. Empoisonnement de données et chaîne d'approvisionnement IA</h3>
      <p>
        Les modèles open source téléchargés depuis des hubs publics peuvent être <strong>backdoorés</strong> ou <strong>biaisés</strong>. La
        chaîne d'approvisionnement IA est devenue un nouveau vecteur d'attaque (équivalent du SolarWinds pour l'IA).
      </p>

      <h3>7. Violations RGPD et propriété intellectuelle</h3>
      <p>
        Données personnelles transférées hors UE, droits d'auteur non respectés sur les sorties générées, biais discriminatoires : la CNIL
        et l'AI Office surveillent activement ces usages.
      </p>

      <h2>Le cadre réglementaire : ce qui change en 2026</h2>
      <ul>
        <li><strong>AI Act (Règlement UE 2024/1689)</strong> : entré en application progressive depuis février 2025, pleinement applicable au 2 août 2026 pour les obligations IA générale, et au 2 août 2027 pour les systèmes à haut risque.</li>
        <li><strong>Interdictions</strong> : notation sociale, manipulation cognitive, reconnaissance émotionnelle au travail/à l'école.</li>
        <li><strong>Systèmes à haut risque</strong> : RH (CV/scoring), crédit, biométrie, éducation, infrastructures critiques → étude d'impact, journalisation, supervision humaine, marquage CE.</li>
        <li><strong>Modèles à usage général (GPAI)</strong> : transparence, documentation technique, respect du droit d'auteur, mesures de sûreté pour les modèles à risque systémique.</li>
        <li><strong>NIS2</strong> : la sécurité des systèmes IA entre dans le périmètre de gestion des risques.</li>
        <li><strong>RGPD</strong> : base légale, AIPD obligatoire, droits des personnes (article 22 sur les décisions automatisées).</li>
        <li><strong>Sanctions AI Act</strong> : jusqu'à <strong>35 M€ ou 7 %</strong> du CA mondial annuel.</li>
      </ul>

      <h2>Plan de gouvernance IA en 8 étapes</h2>
      <ol>
        <li><strong>Cartographier les usages IA</strong> existants (questionnaire collaborateurs + analyse réseau / proxy / CASB).</li>
        <li><strong>Classer les cas d'usage</strong> par criticité (faible / limité / élevé / inacceptable au sens AI Act).</li>
        <li><strong>Adopter une charte IA</strong> opposable annexée au règlement intérieur.</li>
        <li><strong>Mettre à disposition une IA d'entreprise validée</strong> (Copilot Microsoft 365, ChatGPT Enterprise, Mistral Le Chat Pro, déploiement souverain) — c'est le meilleur antidote au Shadow AI.</li>
        <li><strong>Bloquer ou contrôler</strong> les LLM grand public via DLP, CASB et navigateur d'entreprise.</li>
        <li><strong>Conduire une AIPD</strong> (RGPD) et une <strong>analyse d'impact AI Act</strong> pour chaque cas à haut risque.</li>
        <li><strong>Sensibiliser et former</strong> tous les collaborateurs (deepfakes, prompt injection, hygiène prompts).</li>
        <li><strong>Auditer et journaliser</strong> les interactions IA (logs prompts/réponses, supervision humaine).</li>
      </ol>

      <h2>Bonnes pratiques techniques par cas d'usage</h2>
      <ul>
        <li><strong>Productivité bureautique</strong> : Microsoft 365 Copilot avec Sensitivity Labels et Purview DLP pour empêcher l'exposition de données « Confidentiel ».</li>
        <li><strong>Code & Dev</strong> : GitHub Copilot Business / Mistral Codestral avec exclusion de fichiers sensibles, scan SAST des sorties.</li>
        <li><strong>Service client / RAG interne</strong> : architecture RAG souveraine (Mistral, Llama hébergés en UE), filtrage des sorties, garde-fous anti prompt injection.</li>
        <li><strong>RH / scoring</strong> : éviter tout système automatisé décisionnel ou prévoir une supervision humaine documentée (article 22 RGPD + AI Act).</li>
        <li><strong>Anti-deepfake</strong> : procédures de double validation pour tout virement &gt; 10 000 €, mots de passe vocaux entre dirigeants.</li>
      </ul>

      <h2>Détection des deepfakes : 5 réflexes simples</h2>
      <ul>
        <li>Toujours rappeler la personne sur un numéro de téléphone connu (jamais celui fourni dans l'appel).</li>
        <li>Demander une information personnelle non publique en début d'échange.</li>
        <li>Méfiance sur les visioconférences avec qualité vidéo dégradée et caméra fixe.</li>
        <li>Procédure formelle de validation à 4 yeux pour les paiements et changements de RIB.</li>
        <li>Sensibilisation régulière (cf. notre guide{" "}
          <Link to="/actualites/sensibilisation-cybersecurite-entreprise" className="text-primary hover:underline">sensibilisation cybersécurité</Link>).
        </li>
      </ul>

      <h2>Articulation avec votre programme cyber existant</h2>
      <ul>
        <li>Intégrer les risques IA dans votre <Link to="/actualites/ebios-rm-methode-analyse-risques" className="text-primary hover:underline">analyse EBIOS RM</Link>.</li>
        <li>Étendre votre <Link to="/actualites/iso-27001-certification-guide" className="text-primary hover:underline">SMSI ISO 27001</Link> aux contrôles ISO/IEC 42001 (management de l'IA).</li>
        <li>Inclure le périmètre IA dans le <Link to="/actualites/pentest-test-intrusion-guide" className="text-primary hover:underline">pentest annuel</Link> (red teaming LLM).</li>
        <li>Adapter votre charte informatique et votre plan de formation NIS2.</li>
      </ul>

      <h2>Combien ça coûte de mettre en gouvernance ?</h2>
      <ul>
        <li><strong>PME (50–250 salariés)</strong> : 8 000 à 20 000 € HT pour l'audit, la charte, l'AIPD et la formation initiale.</li>
        <li><strong>Licences IA d'entreprise</strong> : 20 à 35 € HT / utilisateur / mois selon la solution.</li>
        <li><strong>ETI</strong> : 25 000 à 80 000 € HT, plus mission de DPO/AI Officer (souvent mutualisée).</li>
      </ul>

      <h2>Erreurs à ne pas commettre</h2>
      <ul>
        <li><strong>Tout interdire</strong> : crée du Shadow AI massif et fait perdre l'avantage compétitif.</li>
        <li><strong>Tout autoriser sans charte</strong> : exposition juridique et fuite de données garanties.</li>
        <li>Confondre <strong>ChatGPT grand public</strong> et <strong>ChatGPT Enterprise</strong> (politiques de confidentialité opposées).</li>
        <li>Ignorer la chaîne d'approvisionnement (modèles open source, plugins).</li>
        <li>Ne pas désigner de responsable IA / AI Officer.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        L'IA générative est un levier de productivité considérable mais aussi une nouvelle <strong>surface d'attaque réglementée</strong>.
        Les entreprises qui auront, dès 2026, une gouvernance IA claire, une plateforme validée et des collaborateurs formés prendront une
        avance décisive sur leurs concurrents — tout en évitant les amendes record de l'AI Act.
      </p>

      <p>
        <strong>CyberConform</strong> accompagne les PME et ETI dans leur mise en conformité AI Act, RGPD et NIS2 sur le périmètre IA :
        cartographie, charte, AIPD, choix d'outils souverains et formation.{" "}
        <Link to="/#contact" className="text-primary hover:underline">Contactez nos experts</Link> pour un diagnostic gratuit de 15 minutes.
      </p>
    </ArticleLayout>
  );
};

export default IaGenerativeRisquesCyber;