import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Missions de cybersécurité réalisées" },
  { value: "99.8%", label: "Taux de satisfaction client" },
  { value: "24/7", label: "Disponibilité SOC et réponse incidents" },
  { value: "15+", label: "Années d'expertise en sécurité informatique" },
];

const StatsSection = () => {
  return (
    <section id="stats" className="relative border-y border-border py-20" aria-label="Chiffres clés CyberConform">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient-cyber font-mono" aria-label={stat.value}>
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
