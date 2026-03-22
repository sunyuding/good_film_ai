import { useTranslations } from "next-intl";
import { Film, Camera, Megaphone, Sparkles } from "lucide-react";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
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
    <section id="services" className="section-padding bg-cinema-light">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <ScrollReveal key={service.key} delay={i * 0.1}>
                <Card className="h-full text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                    <Icon size={28} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-cinema-black">
                    {t(`${service.key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {t(`${service.key}.description`)}
                  </p>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
