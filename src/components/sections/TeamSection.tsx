"use client";

import { useTranslations } from "next-intl";
import { ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TeamSection() {
  const t = useTranslations("team");

  return (
    <section className="section-padding relative bg-cinema-black">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

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

        <ScrollReveal delay={0.1}>
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-10">
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
              {/* Avatar placeholder */}
              <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-2 border-gold/30 bg-gold/10">
                <span className="font-display text-3xl font-bold text-gold">JL</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">{t("name")}</h3>
                <p className="mt-1 text-sm font-medium text-gold">{t("role")}</p>
                <p className="mt-4 text-base leading-relaxed text-gray-400">
                  {t("bio")}
                </p>
                <div className="mt-4 flex gap-4">
                  <a
                    href="https://www.imdb.com/name/nm10125009/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gold"
                  >
                    IMDb
                    <ExternalLink size={12} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/goodfilmai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gold"
                  >
                    LinkedIn
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
