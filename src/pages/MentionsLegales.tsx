import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const MentionsLegales = () => {
  return (
    <>
      <Helmet>
        <title>Mentions Légales — CyberConform</title>
        <meta name="description" content="Mentions légales du site CyberConform, cabinet de cybersécurité à Paris. Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation." />
        <link rel="canonical" href="https://cyberconform.fr/mentions-legales" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Mentions Légales</h1>

              <div className="space-y-8 text-muted-foreground leading-relaxed">
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">1. Éditeur du site</h2>
                  <p>Le site <strong className="text-foreground">www.cyberconform.fr</strong> est édité par :</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li><strong className="text-foreground">Raison sociale :</strong> CyberConform</li>
                    <li><strong className="text-foreground">Forme juridique :</strong> SAS (Société par Actions Simplifiée)</li>
                    <li><strong className="text-foreground">Siège social :</strong> 75 Avenue des Champs-Élysées, 75008 Paris, France</li>
                    <li><strong className="text-foreground">Téléphone :</strong> +33 1 42 68 53 00</li>
                    <li><strong className="text-foreground">Email :</strong> contact@cyberconform.fr</li>
                    <li><strong className="text-foreground">Directeur de la publication :</strong> Le représentant légal de CyberConform</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">2. Hébergement</h2>
                  <p>Le site est hébergé par :</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li><strong className="text-foreground">Hébergeur :</strong> Lovable (via Cloudflare)</li>
                    <li><strong className="text-foreground">Adresse :</strong> San Francisco, CA, États-Unis</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">3. Propriété intellectuelle</h2>
                  <p>
                    L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, logiciels, etc.) est la propriété exclusive de CyberConform ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
                  </p>
                  <p className="mt-2">
                    Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit est interdite sans l'autorisation écrite préalable de CyberConform.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">4. Limitation de responsabilité</h2>
                  <p>
                    CyberConform s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger le contenu à tout moment et sans préavis. Toutefois, CyberConform ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
                  </p>
                  <p className="mt-2">
                    En conséquence, CyberConform décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site, ainsi que pour tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à disposition sur ce site.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">5. Liens hypertextes</h2>
                  <p>
                    Le site peut contenir des liens hypertextes vers d'autres sites internet. CyberConform n'exerce aucun contrôle sur le contenu de ces sites tiers et décline toute responsabilité quant à leur contenu ou aux éventuels collectes et transmissions de données personnelles effectuées par ces sites.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">6. Droit applicable</h2>
                  <p>
                    Les présentes mentions légales sont soumises au droit français. En cas de litige, et après échec de toute tentative de recherche d'une solution amiable, les tribunaux français seront seuls compétents.
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

export default MentionsLegales;
