"use client";

import { useTranslations } from "next-intl";
import { Film, Camera, Megaphone, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  Film,
  Camera,
  Megaphone,
  Sparkles,
} as const;

export default function ServicesSection() {
  const t = useTranslations("services");

  return (
    <section id="services" className="section-padding relative bg-cinema-black">
      <div className="mx-auto max-w-6xl">
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <ScrollReveal key={service.key} delay={i * 0.1}>
                <div className="glass-card group h-full text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/10 bg-gold/5 transition-all duration-500 group-hover:border-gold/30 group-hover:bg-gold/10">
                    <Icon size={28} className="text-gold transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {t(`${service.key}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {t(`${service.key}.description`)}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
