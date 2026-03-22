import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";
import CalendlyEmbed from "@/components/ui/CalendlyEmbed";

export default function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="section-padding bg-cinema-light">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <ScrollReveal delay={0.1}>
            <ContactForm />
          </ScrollReveal>

          {/* Calendly */}
          <ScrollReveal delay={0.2}>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-cinema-black">
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
