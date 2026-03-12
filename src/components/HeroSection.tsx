import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-scan w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span className="text-xs font-mono uppercase tracking-wider text-primary">
              Cabinet français de cybersécurité
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-foreground">
            Protégez vos{" "}
            <span className="text-gradient-cyber">systèmes</span>
            <br />
            contre les menaces
            <br />
            <span className="text-gradient-cyber">numériques</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Tests d'intrusion, audits de sécurité, conseil stratégique et réponse aux incidents.
            Nous sécurisons votre infrastructure avec une expertise de pointe.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
            >
              Demander un audit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-md border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              Nos services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
