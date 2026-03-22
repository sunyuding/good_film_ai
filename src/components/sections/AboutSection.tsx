import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  { value: "50+", labelKey: "stat_projects" },
  { value: "2", labelKey: "stat_cities" },
  { value: "30+", labelKey: "stat_clients" },
] as const;

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="section-padding bg-white">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-gray-600">
            {t("description")}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-relaxed text-gray-600">
            {t("description2")}
          </p>
        </ScrollReveal>

        {/* Locations */}
        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-gray-500">
              <MapPin size={18} className="text-gold" />
              <span>{t("city_sv")}</span>
            </div>
            <div className="h-4 w-px bg-gray-300" />
            <div className="flex items-center gap-2 text-gray-500">
              <MapPin size={18} className="text-gold" />
              <span>{t("city_la")}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 grid grid-cols-3 gap-6">
            {stats.map(({ value, labelKey }) => (
              <div key={labelKey} className="text-center">
                <p className="text-3xl font-bold text-cinema-black md:text-4xl">
                  {value}
                </p>
                <p className="mt-1 text-sm text-gray-500">{t(labelKey)}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
