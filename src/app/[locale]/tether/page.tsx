import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import TetherContent from "./TetherContent";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "tether_page" });

  return {
    title: `${t("title")} — Good Film AI`,
    description: t("intro"),
    openGraph: {
      title: t("title"),
      description: t("intro"),
      siteName: "Good Film AI",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      type: "article",
    },
  };
}

export default function TetherPage() {
  return <TetherContent />;
}
