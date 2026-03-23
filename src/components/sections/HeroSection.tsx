"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cinema-black film-grain"
    >
      {/* Ambient light effects */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          {t("tagline_line1")}
          <br />
          <span className="gold-gradient">{t("tagline_line2")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button variant="secondary" size="lg" href="#portfolio">
            {t("cta_portfolio")}
          </Button>
          <Button variant="outline" size="lg" href="#contact">
            {t("cta_contact")}
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
            Scroll
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
