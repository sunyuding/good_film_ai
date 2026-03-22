import { useTranslations } from "next-intl";
import { ExternalLink, Film, Play } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { PORTFOLIO_ITEMS } from "@/lib/constants";

export default function PortfolioSection() {
  const t = useTranslations("portfolio");

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <ScrollReveal key={item.key} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl bg-cinema-dark shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Image placeholder */}
                <div className="relative aspect-video overflow-hidden bg-cinema-gray">
                  <div className="flex h-full items-center justify-center text-gray-600">
                    <Film size={48} className="opacity-30" />
                  </div>

                  {/* Video link overlay */}
                  {item.videoUrl && (
                    <a
                      href={item.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100"
                      aria-label={`Watch ${t(`${item.key}.title`)}`}
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-cinema-black">
                        <Play size={24} fill="currentColor" />
                      </div>
                    </a>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-xs font-medium uppercase tracking-wider text-gold">
                    {t(`${item.key}.category`)}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {t(`${item.key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {t(`${item.key}.description`)}
                  </p>

                  {item.videoUrl && (
                    <a
                      href={item.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-colors hover:text-gold-light"
                    >
                      <Play size={14} />
                      Watch
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
