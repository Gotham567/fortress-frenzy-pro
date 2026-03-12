import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-28 bg-grid">
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
              <span className="text-gradient-cyber">infrastructure</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Prenez contact avec nos experts pour discuter de vos besoins en cybersécurité. Nous vous répondons sous 24h.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Mail, text: "contact@sentinelcyber.fr" },
                { icon: Phone, text: "+33 1 42 68 53 00" },
                { icon: MapPin, text: "75 Avenue des Champs-Élysées, 75008 Paris" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Icon className="h-4 w-4 text-primary" />
                  {text}
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
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Nom
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                  placeholder="Dupont"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Prénom
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                  placeholder="Jean"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                placeholder="jean.dupont@entreprise.fr"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 resize-none"
                placeholder="Décrivez votre besoin en cybersécurité..."
              />
            </div>
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
            >
              Envoyer la demande
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
