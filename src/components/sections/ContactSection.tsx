"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/forms/ContactForm";
import CalendlyEmbed from "@/components/ui/CalendlyEmbed";

export default function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="section-padding relative bg-cinema-dark">
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

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <ScrollReveal delay={0.1}>
            <div className="glass-card">
              <ContactForm />
            </div>
          </ScrollReveal>

          {/* Calendly */}
          <ScrollReveal delay={0.2}>
            <div className="glass-card">
              <h3 className="mb-2 text-xl font-semibold text-white">
                {t("book_title")}
              </h3>
              <p className="mb-6 text-gray-500">{t("book_desc")}</p>
              <CalendlyEmbed />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
