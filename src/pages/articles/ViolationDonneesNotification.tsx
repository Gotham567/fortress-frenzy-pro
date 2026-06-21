import ArticleLayout from "@/components/ArticleLayout";

const ViolationDonneesNotification = () => {
  return (
    <ArticleLayout
      title="Violation de données RGPD : notifier la CNIL dans les 72 heures — guide pratique"
      description="Procédure complète de notification d'une violation de données à la CNIL et aux personnes concernées : critères de déclenchement, délais, contenu de la notification, erreurs à éviter et outil Notif."
      date="16 juin 2026"
      dateISO="2026-06-16"
      readTime="12 min"
      tag="Violation de données"
      slug="violation-donnees-notification-cnil-72h"
    >
      <p>
        Une violation de données personnelles survient à tout moment : ransomware, phishing réussi,
        erreur d'envoi de mail, base de données exposée sur Internet. L'article 33 du RGPD impose de
        notifier la CNIL dans les <strong>72 heures</strong> — non pas après résolution de l'incident,
        mais après <em>prise de connaissance</em>. Ce délai très court nécessite une procédure préparée à l'avance.
      </p>

      <h2>Qu'est-ce qu'une violation de données au sens du RGPD ?</h2>
      <p>
        La définition du RGPD (art. 4§12) est large : toute violation de la sécurité entraînant,
        de manière accidentelle ou illicite, la <strong>destruction, la perte, l'altération, la divulgation
        ou l'accès non autorisé</strong> à des données personnelles. Trois catégories :
      </p>
      <ul>
        <li><strong>Violation de confidentialité</strong> : accès non autorisé à des données (ex: fuite de base de données, email envoyé au mauvais destinataire).</li>
        <li><strong>Violation d'intégrité</strong> : modification non autorisée de données (ex: altération malveillante d'un registre).</li>
        <li><strong>Violation de disponibilité</strong> : perte ou destruction de données (ex: ransomware sans sauvegarde, suppression accidentelle).</li>
      </ul>

      <h2>Faut-il toujours notifier ?</h2>
      <p>
        Non. L'obligation de notification à la CNIL s'applique uniquement si la violation est
        <strong>susceptible d'engendrer un risque pour les droits et libertés des personnes</strong>.
        Une matrice d'évaluation s'impose :
      </p>
      <ul>
        <li><strong>Risque nul ou négligeable</strong> : exemple — email perdu contenant uniquement le nom et la fonction d'une personne. Pas de notification CNIL requise mais inscription dans le registre interne des violations.</li>
        <li><strong>Risque modéré</strong> : exemple — accès non autorisé à une base de données clients chiffrée. Notification CNIL obligatoire, notification aux personnes non requise.</li>
        <li><strong>Risque élevé</strong> : exemple — fuite de données de santé, financières, ou mots de passe en clair. Notification CNIL ET aux personnes concernées obligatoires.</li>
      </ul>
      <p>
        Facteurs d'évaluation : nature des données (sensibles ou non), nombre de personnes concernées,
        nature de l'incident (accès vs destruction), facilité d'identification des personnes, conséquences probables.
      </p>

      <h2>Le délai de 72 heures : comment le compter</h2>
      <p>
        Le délai commence à courir à partir du moment où vous avez eu "<strong>connaissance</strong>" de la violation.
        La CNIL précise que vous avez "connaissance" dès qu'il est raisonnablement certain qu'un incident de sécurité s'est produit, pas nécessairement après investigation complète.
      </p>
      <ul>
        <li>J0 (heure de découverte) : début du délai de 72h.</li>
        <li>J+72h max : notification initiale à la CNIL, même incomplète (possibilité de notification en plusieurs phases).</li>
        <li>Si le délai ne peut pas être respecté : notifier dès que possible avec justification du retard.</li>
      </ul>
      <p>
        <strong>Important</strong> : en cas de doute sur l'existence d'une violation, ne pas attendre
        la fin de l'investigation. Notifier sous réserve et compléter la notification ultérieurement.
      </p>

      <h2>Que contient la notification CNIL (art. 33§3) ?</h2>
      <ul>
        <li><strong>Nature de la violation</strong> : type (confidentialité, intégrité, disponibilité), catégories et nombre approximatif de personnes concernées, catégories et nombre de fichiers concernés.</li>
        <li><strong>Coordonnées du DPO ou point de contact</strong> : pour que la CNIL puisse obtenir des informations complémentaires.</li>
        <li><strong>Conséquences probables</strong> de la violation pour les personnes concernées.</li>
        <li><strong>Mesures prises ou envisagées</strong> pour remédier à la violation et en atténuer les effets.</li>
        <li><strong>Si non-notification aux personnes</strong> : justification du faible risque ou des mesures compensatoires.</li>
      </ul>

      <h2>Notifier la CNIL : la procédure pratique</h2>
      <p>
        La notification se fait exclusivement via le <strong>portail Notif de la CNIL</strong> (notifications.cnil.fr),
        accessible avec FranceConnect Pro ou via la création d'un compte dédié.
      </p>
      <ul>
        <li>Créer un compte Notif en amont (ne pas attendre l'incident — créer le compte dès aujourd'hui).</li>
        <li>Compléter le formulaire en ligne (possibilité de sauvegarder en cours de rédaction).</li>
        <li>Attacher les preuves disponibles (logs, captures d'écran, rapport forensique préliminaire).</li>
        <li>Mettre à jour la notification au fur et à mesure des investigations.</li>
        <li>Conserver l'accusé de réception CNIL et toutes les correspondances.</li>
      </ul>

      <h2>Notification aux personnes concernées (art. 34)</h2>
      <p>
        Quand le risque pour les personnes est élevé, la notification aux personnes concernées est obligatoire,
        "dans les meilleurs délais" (sans délai fixe mais rapidement). Contenu :
      </p>
      <ul>
        <li>Description claire de la violation (sans jargon technique).</li>
        <li>Coordonnées du DPO ou du contact désigné.</li>
        <li>Conséquences probables pour la personne.</li>
        <li>Mesures prises pour remédier à la violation.</li>
        <li>Recommandations pratiques pour la personne (changer ses mots de passe, surveiller ses comptes bancaires).</li>
      </ul>
      <p>
        Exceptions : notification non requise si les données étaient chiffrées avec des clés non compromises,
        si des mesures ont rendu les données incompréhensibles, ou si la communication directe exigerait des efforts disproportionnés (notification publique alors requise).
      </p>

      <h2>Le registre interne des violations</h2>
      <p>
        Toutes les violations doivent être consignées dans un registre interne (art. 33§5),
        même celles ne nécessitant pas de notification CNIL. Ce registre inclut :
        description de la violation, effets et mesures correctives. Il est mis à disposition de la CNIL sur demande.
      </p>

      <h2>Préparer la procédure avant l'incident</h2>
      <ul>
        <li>Désigner un "incident coordinator" (DPO ou RSSI) avec les coordonnées de la CNIL disponibles 24/7.</li>
        <li>Créer le compte Notif en amont et tester la procédure lors d'exercices de crise.</li>
        <li>Préparer des modèles de notification CNIL et de communication aux personnes concernées.</li>
        <li>Définir la chaîne d'alerte interne : qui alerte qui, sous quel délai, avec quelle information.</li>
        <li>Contacter votre assureur cyber dès la découverte de l'incident (certaines polices couvrent les frais de notification).</li>
      </ul>
    </ArticleLayout>
  );
};

export default ViolationDonneesNotification;
