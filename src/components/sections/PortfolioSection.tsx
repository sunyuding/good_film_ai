"use client";

import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, ExternalLink, Film } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import type { PortfolioItem } from "@/types";

const PAGE_ROUTES: Record<string, string> = {
  trae: "/trae",
  tether: "/tether",
  nonprofit: "/river-of-life",
  kah: "/kah",
};

export default function PortfolioSection() {
  const t = useTranslations("portfolio");
  const locale = useLocale();

  return (
    <section id="portfolio" className="section-padding relative bg-cinema-dark">
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

        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <ScrollReveal key={item.key} delay={i * 0.08}>
              <PortfolioCard item={item} locale={locale} t={t} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({
  item,
  locale,
  t,
}: {
  readonly item: PortfolioItem;
  readonly locale: string;
  readonly t: ReturnType<typeof useTranslations<"portfolio">>;
}) {
  const pageRoute = PAGE_ROUTES[item.key];
  const href = pageRoute
    ? `/${locale}${pageRoute}`
    : (item.externalUrl ?? undefined);
  const isExternal = !pageRoute && !!item.externalUrl;

  const content = (
    <>
      <div className="relative aspect-video overflow-hidden bg-cinema-gray">
        {item.videoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&mute=1&loop=1&playlist=${item.videoId}&rel=0&modestbranding=1&controls=0&showinfo=0`}
            className="h-full w-full pointer-events-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title={t(`${item.key}.title`)}
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Film size={36} className="text-white/10" />
          </div>
        )}
      </div>

      <div className="p-5">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
          {t(`${item.key}.category`)}
        </span>
        <h3 className="mt-1.5 text-lg font-semibold text-white">
          {t(`${item.key}.title`)}
          {isExternal && (
            <ExternalLink size={12} className="ml-1.5 inline text-gray-600" />
          )}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-500">
          {t(`${item.key}.description`)}
        </p>
        {pageRoute && (
          <div className="mt-3 flex items-center gap-1 text-sm font-medium text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {t(`${item.key}.cta` as Parameters<typeof t>[0], {
              defaultValue: "View Case Study",
            }) || "View Case Study"}
            <ArrowRight size={14} />
          </div>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="glass-card group block overflow-hidden !p-0 transition-all duration-500 hover:border-gold/20"
      >
        {content}
      </a>
    );
  }

  return <div className="glass-card group overflow-hidden !p-0">{content}</div>;
}
