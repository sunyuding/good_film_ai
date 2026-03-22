import { useTranslations } from "next-intl";
import { Wand2, Bot, Trophy } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  { titleKey: "feature1_title", descKey: "feature1_desc", icon: Wand2 },
  { titleKey: "feature2_title", descKey: "feature2_desc", icon: Bot },
  { titleKey: "feature3_title", descKey: "feature3_desc", icon: Trophy },
] as const;

export default function AIFilmSection() {
  const t = useTranslations("aifilm");

  return (
    <section id="aifilm" className="cinema-gradient section-padding">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} dark />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-gray-400">
            {t("description")}
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {features.map(({ titleKey, descKey, icon: Icon }, i) => (
            <ScrollReveal key={titleKey} delay={0.2 + i * 0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-gold/30 hover:bg-white/10">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10">
                  <Icon size={28} className="text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {t(titleKey)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
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
