"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function KahContent() {
  const t = useTranslations("kah_page");

  return (
    <div className="min-h-screen bg-cinema-black pt-20">
      {/* Hero banner */}
      <section className="relative overflow-hidden px-6 py-20 md:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.04] blur-[100px]" />

        <div className="relative mx-auto max-w-5xl">
          <motion.a
            href="/#portfolio"
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

          {/* Project meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-10"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-600">
                {t("client_label")}
              </p>
              <p className="mt-1 text-lg font-medium text-white">
                {t("client")}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-600">
                {t("role_label")}
              </p>
              <p className="mt-1 text-lg font-medium text-white">{t("role")}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-600">
                {t("year_label")}
              </p>
              <p className="mt-1 text-lg font-medium text-white">{t("year")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Content section */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 font-display text-3xl font-bold text-white md:text-4xl"
          >
            {t("video_title")}
          </motion.h2>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-16"
          >
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
              <div className="aspect-video">
                <video
                  src="https://pub-f21eb9a068d14465b07fb0f35726ac26.r2.dev/videos/KAH-LA-Jan2025.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full"
                  title={t("video_heading")}
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  {t("video_heading")}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-400">
                  {t("video_desc")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Impact stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-3"
          >
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 text-center">
              <p className="font-display text-3xl font-bold text-gold">
                72,360
              </p>
              <p className="mt-1 text-sm text-gray-500">{t("stat_meals")}</p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 text-center">
              <p className="font-display text-3xl font-bold text-gold">
                228,096
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {t("stat_delivered")}
              </p>
            </div>
            <div className="col-span-2 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 text-center md:col-span-1">
              <p className="font-display text-3xl font-bold text-gold">2</p>
              <p className="mt-1 text-sm text-gray-500">{t("stat_days")}</p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <p className="max-w-3xl text-lg leading-relaxed text-gray-400">
              {t("description")}
            </p>
          </motion.div>

          {/* About the client */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8"
          >
            <h3 className="text-lg font-bold text-white">
              {t("about_client")}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-gray-400">
              {t("about_desc")}
            </p>
            <a
              href="https://kahbayarea.org"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-colors hover:text-gold-light"
            >
              {t("visit_site")}
              <ExternalLink size={14} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
