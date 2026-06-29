import ArticleLayout from "@/components/ArticleLayout";

const QuestionsAuditCybersecurite = () => {
  return (
    <ArticleLayout
      title="20 questions à poser avant un audit cybersécurité (et ce que les réponses révèlent)"
      description="Avant de signer avec un prestataire d'audit cybersécurité, posez ces 20 questions essentielles. Les réponses vous révèlent la qualité du prestataire, la pertinence de la méthodologie et les pièges à éviter."
      date="28 juin 2026"
      dateISO="2026-06-28"
      readTime="12 min"
      tag="Guide achat"
      slug="questions-poser-avant-audit-cybersecurite"
    >
      <p>
        Choisir un prestataire d'audit cybersécurité est une décision importante. Une prestation mal cadrée peut vous coûter plusieurs milliers d'euros pour un résultat inutilisable. Ces 20 questions, organisées par thème, vous permettront d'évaluer précisément la qualité d'un prestataire avant de signer.
      </p>

      <h2>1. Questions sur les qualifications et l'expertise</h2>

      <h3>1.1. Êtes-vous qualifié PASSI par l'ANSSI ?</h3>
      <p>
        La qualification PASSI (Prestataire d'Audit de la Sécurité des Systèmes d'Information) est délivrée par l'ANSSI après un processus rigoureux de vérification des compétences et de la méthodologie. Un prestataire qualifié PASSI offre des garanties de sérieux que les autres n'ont pas. Pour certains contextes réglementaires (OIV, NIS2 pour certaines entités), le recours à un prestataire PASSI peut être obligatoire. <strong>Ce que révèle la réponse :</strong> un "non" n'est pas éliminatoire, mais exige que vous vérifiiez les certifications individuelles des consultants.
      </p>

      <h3>1.2. Quelles certifications détiennent vos consultants ?</h3>
      <p>
        Demandez les certifications des personnes qui interviendront réellement sur votre dossier, pas seulement de l'entreprise. Les certifications pertinentes pour un pentest : OSCP (Offensive Security), CEH (EC-Council), GPEN (GIAC), CREST CRT. Pour un audit organisationnel : CISA, ISO 27001 Lead Auditor, CISSP. <strong>Ce que révèle la réponse :</strong> si le prestataire ne peut pas citer les certifications des auditeurs qui interviendront, c'est un signal d'alarme.
      </p>

      <h3>1.3. Avez-vous des références dans mon secteur d'activité ?</h3>
      <p>
        Un prestataire qui a audité plusieurs entreprises dans votre secteur connaît les enjeux spécifiques, les réglementations applicables et les vulnérabilités typiques. Un auditeur industriel connaît les systèmes SCADA, un auditeur santé connaît les contraintes HDS. <strong>Ce que révèle la réponse :</strong> demandez des références contactables. Un prestataire sérieux peut en fournir sous accord de confidentialité.
      </p>

      <h2>2. Questions sur la méthodologie</h2>

      <h3>2.1. Sur quelle méthodologie votre audit est-il basé ?</h3>
      <p>
        Les bonnes réponses incluent des références à des frameworks reconnus : PTES (Penetration Testing Execution Standard), OWASP Testing Guide, NIST SP 800-115, guide PASSI ANSSI, CIS Controls, ISO 27001/27002. Un prestataire qui répond "notre méthode maison" sans référence à des standards reconnus mérite davantage d'investigation. <strong>Ce que révèle la réponse :</strong> une méthodologie rigoureuse est le gage d'une couverture exhaustive et d'un rapport comparable à l'état de l'art.
      </p>

      <h3>2.2. Quel est le périmètre exact de l'audit proposé ?</h3>
      <p>
        Le périmètre doit être clairement défini dans le devis : adresses IP testées, applications web incluses, réseaux couverts, systèmes exclus, approche (boîte noire/grise/blanche). Un périmètre flou conduit invariablement à des facturations supplémentaires ou à un rapport partiel. <strong>Ce que révèle la réponse :</strong> un bon prestataire cadre précisément le périmètre dès le devis.
      </p>

      <h3>2.3. Comment gérez-vous les risques de disponibilité durant les tests ?</h3>
      <p>
        Les tests d'intrusion peuvent impacter la disponibilité de vos systèmes. Un prestataire sérieux propose des plages horaires adaptées (nuit, week-end), une procédure d'escalade en cas d'incident involontaire, et des tests préalables sur des environnements de recette si possible. <strong>Ce que révèle la réponse :</strong> si le prestataire minimise ce risque, méfiez-vous.
      </p>

      <h2>3. Questions sur les livrables</h2>

      <h3>3.1. Que contient le rapport d'audit ?</h3>
      <p>
        Un bon rapport de pentest doit inclure : un résumé exécutif pour les non-techniciens, une description détaillée de chaque vulnérabilité avec preuve (screenshot, log), une cotation CVSS v3.1, un impact métier estimé, et des recommandations de remédiation concrètes et priorisées. Demandez un exemple de rapport anonymisé avant de signer. <strong>Ce que révèle la réponse :</strong> si le prestataire refuse de montrer un exemple de rapport, passez à autre chose.
      </p>

      <h3>3.2. Y a-t-il une réunion de restitution incluse dans le prix ?</h3>
      <p>
        La restitution est aussi importante que le rapport. Elle permet de discuter des findings, de clarifier les points techniques et de prioriser les corrections avec votre équipe. Certains prestataires la facturent en supplément — vérifiez ce qui est inclus. <strong>Ce que révèle la réponse :</strong> un prestataire qui n'inclut pas de restitution livre des résultats sans vous aider à les comprendre.
      </p>

      <h3>3.3. Proposez-vous un audit de vérification post-remédiation ?</h3>
      <p>
        Après avoir corrigé les vulnérabilités, il est recommandé de vérifier que les corrections sont effectives. Certains prestataires incluent un "re-test" gratuit ou à tarif réduit dans les 3 mois. C'est un service à valeur ajoutée réelle. <strong>Ce que révèle la réponse :</strong> un prestataire qui propose ce service montre qu'il s'intéresse à votre sécurité réelle, pas seulement à facturer.
      </p>

      <h2>4. Questions sur le cadre légal et la confidentialité</h2>

      <h3>4.1. Signez-vous une convention d'autorisation d'audit (lettre d'engagement) ?</h3>
      <p>
        Pour réaliser un pentest légalement en France, le prestataire doit disposer d'une autorisation écrite explicite de votre part, définissant le périmètre et la durée. Sans ce document, les tests d'intrusion peuvent être qualifiés d'accès frauduleux à un STAD (article 323-1 du Code pénal). <strong>Ce que révèle la réponse :</strong> un prestataire qui ne demande pas de lettre d'engagement ne respecte pas le cadre légal.
      </p>

      <h3>4.2. Comment protégez-vous les données sensibles collectées pendant l'audit ?</h3>
      <p>
        Durant un audit, les consultants accèdent à des informations très sensibles (mots de passe, données clients, architecture réseau). Demandez leur politique de sécurisation des données collectées : chiffrement, durée de conservation, destruction en fin de mission. Un accord de non-divulgation (NDA) doit être signé avant le démarrage. <strong>Ce que révèle la réponse :</strong> l'absence de procédure formalisée est un risque réel pour votre entreprise.
      </p>

      <h3>4.3. Votre assurance responsabilité civile professionnelle couvre-t-elle les tests d'intrusion ?</h3>
      <p>
        Un prestataire de pentest sans assurance RCP couvrant les tests d'intrusion vous expose à un risque financier si un incident involontaire se produit. Demandez à voir l'attestation d'assurance et vérifiez que l'activité pentest est explicitement couverte. <strong>Ce que révèle la réponse :</strong> l'incapacité à fournir cette attestation est un signal d'alarme majeur.
      </p>

      <h2>5. Questions sur le prix et le planning</h2>

      <h3>5.1. Votre devis est-il au forfait ou en régie ?</h3>
      <p>
        Un devis au forfait vous protège contre les dépassements de budget. Un devis en régie (tarif journalier × nombre de jours estimés) peut générer des surcoûts si l'audit prend plus de temps que prévu. Privilégiez le forfait avec un périmètre clairement défini. <strong>Ce que révèle la réponse :</strong> un prestataire qui propose un devis en régie sur un périmètre flou est à risque de coûts supplémentaires.
      </p>

      <h3>5.2. Quel est le délai entre la signature et le démarrage ?</h3>
      <p>
        Les bons prestataires sont en général occupés. Un délai de 3 à 6 semaines est normal et signe de sérieux. Un prestataire disponible immédiatement peut l'être parce qu'il manque de clients. À l'inverse, un délai de 6 mois ou plus est incompatible avec vos besoins urgents. <strong>Ce que révèle la réponse :</strong> renseignez-vous sur la charge de travail et l'équipe disponible pour votre mission.
      </p>

      <h3>5.3. Qui sont les consultants qui interviendront réellement ?</h3>
      <p>
        Certains prestataires vendent sur la réputation de leurs seniors mais font intervenir des juniors sur le terrain. Demandez les CV et certifications des personnes qui travailleront réellement sur votre dossier. <strong>Ce que révèle la réponse :</strong> si le prestataire refuse de vous nommer les intervenants avant la signature, demandez une clause contractuelle le garantissant.
      </p>

      <h2>6. Questions spécifiques à votre contexte</h2>

      <h3>6.1. Connaissez-vous les obligations réglementaires de mon secteur ?</h3>
      <p>
        NIS2, DORA (finance), HDS (santé), LPM (opérateurs critiques), TISAX (automobile) : chaque secteur a ses spécificités. Un auditeur qui ne connaît pas ces réglementations ne pourra pas orienter son audit vers les exigences réglementaires qui vous concernent. <strong>Ce que révèle la réponse :</strong> la connaissance du contexte réglementaire est différenciante.
      </p>

      <h3>6.2. Votre rapport peut-il être utilisé comme preuve de conformité NIS2 ou RGPD ?</h3>
      <p>
        Pour certaines réglementations, le rapport doit être réalisé par un prestataire qualifié et respecter certains standards méthodologiques. Vérifiez que le rapport produit sera accepté par votre autorité de contrôle (ANSSI, CNIL, ARS selon le cas). <strong>Ce que révèle la réponse :</strong> un prestataire qualifié PASSI peut généralement répondre "oui" à cette question.
      </p>

      <h3>6.3. Pouvez-vous m'aider à prioriser les corrections selon mon budget ?</h3>
      <p>
        Après un audit, vous n'aurez pas forcément le budget pour tout corriger immédiatement. Un bon prestataire propose une priorisation intelligente des corrections : corriger d'abord ce qui présente le risque maximal avec le coût de remédiation le plus faible. <strong>Ce que révèle la réponse :</strong> un prestataire centré sur votre sécurité réelle, pas seulement sur la livraison d'un rapport.
      </p>

      <h2>Résumé : les signaux d'alarme à prendre au sérieux</h2>
      <p>
        Au terme de ces échanges, si vous observez plusieurs des signaux suivants, envisagez un autre prestataire : refus de partager un exemple de rapport anonymisé, incapacité à nommer les consultants intervenants, absence d'assurance RCP couvrant les tests, méconnaissance du cadre légal (lettre d'engagement), promesse de "tout tester" sur un périmètre flou à prix très bas, ou réticence à signer un NDA.
      </p>
      <p>
        À l'inverse, les bons prestataires sont transparents, référencés, certifiés, assurés et prennent le temps de comprendre votre contexte avant de proposer un devis. La cybersécurité n'est pas un domaine où le moins-disant est une bonne stratégie.
      </p>
    </ArticleLayout>
  );
};

export default QuestionsAuditCybersecurite;
