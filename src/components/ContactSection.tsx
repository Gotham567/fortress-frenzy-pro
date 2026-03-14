import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Clock, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      nom: formData.get("nom") as string,
      prenom: formData.get("prenom") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const { data: result, error } = await supabase.functions.invoke("send-contact-email", {
        body: data,
      });

      if (error) throw error;

      toast({
        title: "Message envoyé ✅",
        description: "Nous vous répondrons sous 24h.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      toast({
        title: "Erreur",
        description: "L'envoi a échoué. Réessayez ou contactez-nous par téléphone.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-grid" aria-label="Contactez CyberConform">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary">
              // Contact
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
              Sécurisez votre{" "}
              <span className="text-gradient-cyber">infrastructure</span> dès maintenant
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Prenez contact avec nos experts en cybersécurité pour discuter de vos besoins :
              test d'intrusion, audit de sécurité, mise en conformité RGPD/NIS2 ou réponse aux incidents.
              Nous vous répondons sous 24h avec une proposition personnalisée.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Mail, text: "contact@sentinelcyber.fr", label: "Email de contact" },
                { icon: Phone, text: "+33 1 42 68 53 00", label: "Téléphone" },
                { icon: MapPin, text: "75 Avenue des Champs-Élysées, 75008 Paris", label: "Adresse" },
                { icon: Clock, text: "Lun-Ven 9h-18h • SOC 24/7", label: "Horaires" },
              ].map(({ icon: Icon, text, label }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span aria-label={label}>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-5 rounded-lg border border-border bg-card p-8"
            onSubmit={handleSubmit}
            aria-label="Formulaire de demande d'audit cybersécurité"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-nom" className="mb-1.5 block text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Nom
                </label>
                <input
                  id="contact-nom"
                  type="text"
                  name="nom"
                  autoComplete="family-name"
                  className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                  placeholder="Dupont"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-prenom" className="mb-1.5 block text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Prénom
                </label>
                <input
                  id="contact-prenom"
                  type="text"
                  name="prenom"
                  autoComplete="given-name"
                  className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                  placeholder="Jean"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-1.5 block text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Email professionnel
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                autoComplete="email"
                className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                placeholder="jean.dupont@entreprise.fr"
                required
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-1.5 block text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Décrivez votre besoin
              </label>
              <textarea
                id="contact-message"
                rows={4}
                name="message"
                className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 resize-none"
                placeholder="Test d'intrusion, audit de sécurité, mise en conformité RGPD..."
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)] disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  Demander un devis gratuit
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
