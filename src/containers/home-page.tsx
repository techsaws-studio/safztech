import React from "react";

import ProjectsSection from "@/sections/home/projects-section";
import HomeHeroSection from "@/sections/home/home-hero-section";
import PricingSection from "@/sections/home/pricing-section";
import TrustbarSection from "@/sections/home/trustbar-section";
import AboutSection from "@/sections/home/about-section";
import OurServicesSection from "@/sections/home/our-services-section";
import ContactUsSection from "@/sections/home/contact-us-section";

function HomePage() {
  return (
    <main>
      <HomeHeroSection />
      <TrustbarSection />
      <AboutSection />
      <OurServicesSection />
      <ProjectsSection />
      <PricingSection />
      <ContactUsSection />
    </main>
  );
}

export default HomePage;
