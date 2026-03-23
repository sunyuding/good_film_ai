"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Trophy, Film, Globe, Calendar } from "lucide-react";

const highlights = [
  { titleKey: "highlight1_title", descKey: "highlight1_desc", icon: Trophy },
  { titleKey: "highlight2_title", descKey: "highlight2_desc", icon: Film },
  { titleKey: "highlight3_title", descKey: "highlight3_desc", icon: Globe },
] as const;

export default function FestivalContent() {
  const t = useTranslations("festival_page");

  return (
    <div className="min-h-screen bg-cinema-black pt-20">
      {/* Hero banner */}
      <section className="relative overflow-hidden px-6 py-20 md:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.04] blur-[100px]" />
        <div className="pointer-events-none absolute right-1/4 top-2/3 h-[300px] w-[300px] rounded-full bg-accent/[0.03] blur-[80px]" />

        <div className="relative mx-auto max-w-5xl">
          <motion.a
            href="/#aifilm"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gold"
          >
            <ArrowLeft size={16} />
            {t("back")}
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
              {t("subtitle")}
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold text-white md:text-6xl lg:text-7xl">
              {t("title")}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-400"
          >
            {t("intro")}
          </motion.p>

          {/* Event meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-10"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-600">
                {t("date_label")}
              </p>
              <p className="mt-1 text-lg font-medium text-white">
                {t("date")}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-600">
                {t("format_label")}
              </p>
              <p className="mt-1 text-lg font-medium text-white">
                {t("format")}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-600">
                {t("prize_label")}
              </p>
              <p className="mt-1 text-lg font-medium text-gold">
                {t("prize")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Co-founding story */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              {t("story_title")}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
              {t("story_desc")}
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-400">
              {t("story_desc2")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Highlights */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center font-display text-3xl font-bold text-white md:text-4xl"
          >
            {t("highlights_title")}
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-3">
            {highlights.map(({ titleKey, descKey, icon: Icon }, i) => (
              <motion.div
                key={titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 text-center transition-colors hover:border-gold/20"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/10 bg-gold/5">
                  <Icon size={28} className="text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {t(titleKey)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {t(descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Key dates */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 font-display text-3xl font-bold text-white md:text-4xl"
          >
            {t("dates_title")}
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-3">
            {(["deadline", "results", "ceremony"] as const).map((key, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-start gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-6"
              >
                <Calendar size={20} className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {t(`date_${key}_label`)}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    {t(`date_${key}`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* CTA */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              {t("cta_title")}
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              {t("cta_desc")}
            </p>
            <a
              href="https://goodaifilm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-cinema-black transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
            >
              {t("cta_button")}
              <ExternalLink size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
