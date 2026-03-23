"use client";

import { useTranslations } from "next-intl";
import { Wand2, Bot, Trophy } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const features = [
  { titleKey: "feature1_title", descKey: "feature1_desc", icon: Wand2 },
  { titleKey: "feature2_title", descKey: "feature2_desc", icon: Bot },
  { titleKey: "feature3_title", descKey: "feature3_desc", icon: Trophy },
] as const;

export default function AIFilmSection() {
  const t = useTranslations("aifilm");

  return (
    <section id="aifilm" className="section-padding relative overflow-hidden bg-cinema-black">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.03] blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-accent/[0.03] blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
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

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map(({ titleKey, descKey, icon: Icon }, i) => (
            <ScrollReveal key={titleKey} delay={0.2 + i * 0.1}>
              <div className="glass-card group text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/10 bg-gold/5 transition-all duration-500 group-hover:border-gold/30 group-hover:bg-gold/10 group-hover:shadow-lg group-hover:shadow-gold/5">
                  <Icon size={28} className="text-gold transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {t(titleKey)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {t(descKey)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
