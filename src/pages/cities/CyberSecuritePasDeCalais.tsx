import CityLandingPage from "@/components/CityLandingPage";

const CyberSecuritePasDeCalais = () => (
  <CityLandingPage
    data={{
      city: "Pas-de-Calais",
      citySlug: "pas-de-calais",
      region: "Hauts-de-France",
      postalCode: "62",
      intro: "CyberSecure est votre expert cybersécurité Pas-de-Calais (62) : pentest, audit NIS2, conformité RGPD et protection contre les cyberattaques pour les entreprises de Calais, Arras, Lens, Béthune, Boulogne-sur-Mer, Saint-Omer et tout le département.",
      localContext: "Le Pas-de-Calais est un département en reconversion après la fermeture des mines (bassin minier UNESCO). Getlink exploite le tunnel sous la Manche depuis Coquelles — infrastructure critique NIS2 soumise aux exigences les plus strictes en Europe. Le port de Boulogne-sur-Mer est le premier port de pêche français avec des systèmes portuaires numérisés. L'agro-industrie est dense : Roquette Frères à Lestrem (leader mondial de l'amidon, site Seveso), McCain à Harnes. Le secteur logistique est stratégique (Calais-Dover, hubs e-commerce). Arras est le chef-lieu administratif avec un tissu de PME de services. Le bassin minier dispose de sites industriels en reconversion avec des automates anciens.",
      sectors: [
        "Infrastructure critique (Getlink/Eurotunnel Coquelles — NIS2, OT ferroviaire, sécurité tunnel)",
        "Port maritime (Boulogne-sur-Mer — systèmes portuaires, pêche, logistique maritime)",
        "Agro-industrie (Roquette Frères Lestrem — amidon, bioéthanol, OT/SCADA Seveso)",
        "Agroalimentaire (McCain Harnes, sucreries — ERP, traçabilité, IFS/BRC)",
        "Logistique (hubs Calais-Dover, e-commerce — WMS, RGPD, sécurité entrepôts)",
        "Industrie reconvertie (bassin minier 62 — OT anciens, numérisation, Seveso)",
        "Collectivités (Arras, CD62, Lens-Liévin — cloud souverain, e-administration)",
        "PME artois (Béthune, Saint-Omer — Microsoft 365, NIS2, cybersécurité PME)",
      ],
      neighborhoods: [
        "Calais – Coquelles (62100/62231)",
        "Arras (62000)",
        "Lens – Liévin (62300/62800)",
        "Béthune – Bruay-la-Buissière (62400)",
        "Boulogne-sur-Mer (62200)",
        "Saint-Omer (62500)",
        "Harnes – Hénin-Beaumont (62440)",
        "Lestrem – Laventie (62136)",
      ],
      faq: [
        {
          q: "Couvrez-vous tout le Pas-de-Calais (62) ?",
          a: "Oui, CyberSecure intervient dans tout le 62 : Calais, Arras, Lens-Liévin, Béthune, Boulogne-sur-Mer, bassin minier. Nous intervenons aussi bien sur les PME de services artoisiens que sur les grandes industries (agro, logistique, infrastructure critique). CERT d'urgence 24/7.",
        },
        {
          q: "Getlink (Eurotunnel) exploite le tunnel sous la Manche : comment sécuriser une infrastructure critique NIS2 de cette envergure ?",
          a: "Getlink est opérateur d'importance vitale (OIV) dans la catégorie transports. En tant qu'infrastructure critique transnationale (France-Royaume-Uni), Getlink est soumis à NIS2 et aux directives ANSSI les plus strictes. La sécurisation d'un OT ferroviaire de cette taille passe par : architecture de sécurité multicouche (séparation OT/IT stricte, DMZ industrielle), surveillance SCADA 24/7 avec SOC dédié, red team ferroviaire (tests d'intrusion sur signalisation, contrôle-commande), et coordination avec les autorités françaises et britanniques. CyberSecure intervient sur les audits OT des opérateurs d'infrastructure critique de transport.",
        },
        {
          q: "Roquette Frères à Lestrem est un site Seveso : quelles exigences de cybersécurité industrielle ?",
          a: "Roquette Frères (2e site mondial d'amidon de maïs) est classé Seveso seuil haut — c'est un OIV dans la catégorie industrie chimique/alimentaire. Les exigences : PSSI-OIV (Plan de Sécurité des Systèmes d'Information), audits PASSI ANSSI, et protection spécifique des systèmes de contrôle des fermenteurs et des tours de séchage (SCADA, DCS Emerson/Honeywell). En cas de cyberattaque sur un système de process amidon, le risque de pollution de la Lys ou d'emballement thermique est réel. CyberSecure réalise des audits OT ICS/SCADA sur les sites agro-industriels Seveso.",
        },
        {
          q: "Le port de Boulogne-sur-Mer est le premier port de pêche français : comment sécuriser ses systèmes informatiques portuaires ?",
          a: "Un port de pêche comme Boulogne-Calais dispose de plusieurs systèmes à protéger : le Système d'Information Portuaire (SIP) gérant les escales et les droits de quai, les systèmes de contrôle des grues et équipements portuaires (OT maritime), les systèmes de traçabilité des produits de la mer (exigences sanitaires EU), et les systèmes de paiement des mareyeurs (PCI DSS). NIS2 s'applique aux ports maritimes européens dans la catégorie 'transports'. CyberSecure accompagne les opérateurs portuaires dans leur conformité NIS2 et la sécurisation de leurs systèmes OT.",
        },
        {
          q: "Quels financements pour un audit cyber dans le Pas-de-Calais ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La CCI Artois et la CCI Côte d'Opale — diagnostics numériques PME. Le Département du Pas-de-Calais — accompagnement numérique des entreprises. BPI France Hauts-de-France — prêts et aides à l'innovation. La Région Hauts-de-France et Rev3 (troisième révolution industrielle) accompagnent les PME en transition numérique. Diagnostic cyber gratuit chez CyberSecure.",
        },
      ],
    }}
  />
);

export default CyberSecuritePasDeCalais;
