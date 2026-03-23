"use client";

import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StudioMap from "@/components/ui/StudioMap";

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden bg-cinema-dark"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
              {t("subtitle")}
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {t("title")}
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-gray-400">
            {t("description")}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-gray-400">
            {t("description2")}
          </p>
        </ScrollReveal>

        {/* Locations */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-3 text-gray-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 bg-gold/5">
                <MapPin size={18} className="text-gold" />
              </div>
              <span className="text-lg font-medium">{t("city_sv")}</span>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="flex items-center gap-3 text-gray-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 bg-gold/5">
                <MapPin size={18} className="text-gold" />
              </div>
              <span className="text-lg font-medium">{t("city_la")}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Map */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12">
            <StudioMap />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
