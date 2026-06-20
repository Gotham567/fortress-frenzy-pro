import { motion } from "framer-motion";
import { Shield, Star, Clock, Users } from "lucide-react";

const stats = [
  { icon: Shield, value: "500+", label: "Missions réalisées", sub: "Audits, pentests & conseils" },
  { icon: Star, value: "99.8%", label: "Satisfaction client", sub: "Noté par nos clients" },
  { icon: Clock, value: "24/7", label: "Disponibilité CERT", sub: "Réponse aux incidents" },
  { icon: Users, value: "15+", label: "Années d'expertise", sub: "En cybersécurité" },
];

const StatsSection = () => {
  return (
    <section id="stats" className="relative py-20" aria-label="Chiffres clés CyberConform">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.03] to-background pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-2">Chiffres clés</p>
          <h2 className="text-2xl font-extrabold text-foreground">Une expertise qui fait la différence</h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-primary/20 bg-card/60 backdrop-blur-sm p-6 text-center hover:border-primary/40 hover:shadow-[var(--shadow-glow)] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <stat.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <div className="text-3xl font-extrabold text-gradient-cyber font-mono mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
