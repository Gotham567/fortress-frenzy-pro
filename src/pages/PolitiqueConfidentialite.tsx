import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const PolitiqueConfidentialite = () => {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité — CyberConform</title>
        <meta name="description" content="Politique de confidentialité de CyberConform : collecte, traitement et protection de vos données personnelles conformément au RGPD." />
        <link rel="canonical" href="https://cyberconform.fr/politique-confidentialite" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Politique de Confidentialité</h1>

              <div className="space-y-8 text-muted-foreground leading-relaxed">
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">1. Responsable du traitement</h2>
                  <p>
                    Le responsable du traitement des données personnelles collectées sur le site <strong className="text-foreground">www.cyberconform.fr</strong> est CyberConform, SAS dont le siège social est situé au 75 Avenue des Champs-Élysées, 75008 Paris, France.
                  </p>
                  <p className="mt-2">
                    Contact : <a href="mailto:contact@cyberconform.fr" className="text-primary hover:underline">contact@cyberconform.fr</a>
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">2. Données collectées</h2>
                  <p>Nous collectons les données suivantes via notre formulaire de contact :</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li><strong className="text-foreground">Nom et prénom</strong> — pour vous identifier et personnaliser nos échanges</li>
                    <li><strong className="text-foreground">Adresse email</strong> — pour vous répondre</li>
                    <li><strong className="text-foreground">Contenu du message</strong> — pour comprendre votre demande</li>
                  </ul>
                  <p className="mt-2">
                    Ces données sont collectées sur la base de votre consentement (article 6.1.a du RGPD) lorsque vous soumettez le formulaire de contact.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">3. Finalités du traitement</h2>
                  <p>Vos données personnelles sont traitées pour les finalités suivantes :</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Répondre à vos demandes d'information ou de devis</li>
                    <li>Vous contacter dans le cadre d'un accompagnement en cybersécurité</li>
                    <li>Améliorer nos services et notre site internet</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">4. Durée de conservation</h2>
                  <p>
                    Vos données personnelles sont conservées pendant une durée de <strong className="text-foreground">3 ans</strong> à compter de votre dernière interaction avec CyberConform, conformément aux recommandations de la CNIL pour la prospection commerciale B2B.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">5. Destinataires des données</h2>
                  <p>
                    Vos données personnelles sont destinées uniquement à l'équipe CyberConform. Elles ne sont en aucun cas vendues, louées ou cédées à des tiers à des fins commerciales. Les données du formulaire de contact sont transmises par email via un service d'envoi sécurisé (Resend).
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">6. Vos droits</h2>
                  <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li><strong className="text-foreground">Droit d'accès</strong> — obtenir la confirmation que vos données sont traitées et en obtenir une copie</li>
                    <li><strong className="text-foreground">Droit de rectification</strong> — corriger des données inexactes ou incomplètes</li>
                    <li><strong className="text-foreground">Droit d'effacement</strong> — demander la suppression de vos données</li>
                    <li><strong className="text-foreground">Droit d'opposition</strong> — vous opposer au traitement de vos données</li>
                    <li><strong className="text-foreground">Droit à la portabilité</strong> — recevoir vos données dans un format structuré</li>
                    <li><strong className="text-foreground">Droit de retrait du consentement</strong> — retirer votre consentement à tout moment</li>
                  </ul>
                  <p className="mt-3">
                    Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@cyberconform.fr" className="text-primary hover:underline">contact@cyberconform.fr</a>
                  </p>
                  <p className="mt-2">
                    En cas de difficulté, vous pouvez adresser une réclamation à la <strong className="text-foreground">CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">7. Cookies</h2>
                  <p>
                    Le site CyberConform utilise un service de chat en ligne (Tawk.to) qui peut déposer des cookies fonctionnels nécessaires à son fonctionnement. Aucun cookie publicitaire ou de suivi n'est déposé par notre site.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">8. Sécurité des données</h2>
                  <p>
                    CyberConform met en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, altération, divulgation ou destruction. En tant que cabinet de cybersécurité, la protection des données est au cœur de notre métier et de nos pratiques.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">9. Modifications</h2>
                  <p>
                    CyberConform se réserve le droit de modifier la présente politique de confidentialité à tout moment. La date de dernière mise à jour est indiquée ci-dessous. Nous vous invitons à consulter régulièrement cette page.
                  </p>
                </section>

                <p className="text-sm text-muted-foreground/60 pt-4 border-t border-border">
                  Dernière mise à jour : mars 2026
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PolitiqueConfidentialite;
