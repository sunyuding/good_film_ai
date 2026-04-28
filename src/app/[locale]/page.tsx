import HeroSection from "@/components/sections/HeroSection";
import ClientsStrip from "@/components/sections/ClientsStrip";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";

import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientsStrip />
      <AboutSection />
      <TeamSection />
      <ServicesSection />
      <PortfolioSection />

      <ContactSection />
    </>
  );
}
