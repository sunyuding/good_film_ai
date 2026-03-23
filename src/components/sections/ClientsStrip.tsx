"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const CLIENTS = [
  { key: "bytedance", name: "ByteDance" },
  { key: "tetheria", name: "TetherIA" },
  { key: "riveroflife", name: "River of Life" },
  { key: "kah", name: "KAH Bay Area" },
] as const;

export default function ClientsStrip() {
  const t = useTranslations("clients");

  return (
    <section className="relative bg-cinema-black py-12">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
            {t("label")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {CLIENTS.map((client, i) => (
              <motion.span
                key={client.key}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-lg font-semibold tracking-wide text-white/20 transition-colors hover:text-white/40"
              >
                {client.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
