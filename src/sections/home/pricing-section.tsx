import React from "react";

import { PricingSectionContent } from "@/contents/home-page-content";

function PricingSection() {
  return (
    <section id="pricing" className="section-padding-standard">
      <div className="layout-standard section-padding-standard">
        <div className="lg:mb-[6rem] mb-[4rem] relative flex flex-col text-center items-center w-full max-lg:gap-2">
          <h1 className="absolute text-[9rem] font-bold tracking-widest text-white/10 select-none -top-[4.2rem] max-lg:hidden">
            PRICING
          </h1>
          <h2 className="relative text-4xl md:text-5xl font-medium text-heading font-poppins">
            OUR PACKAGES
          </h2>
          <p className="text-lg font-medium text-heading max-w-3xl">
            Transparent pricing for quality design and development services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {PricingSectionContent.map((pkg, idx) => (
            <div
              key={idx}
              className={`border p-8 rounded-lg transition-colors ${
                pkg.popular
                  ? "border-white/30 bg-card relative"
                  : "border-border hover:border-primary"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white rounded-md text-black px-4 py-1 text-xs tracking-wider font-medium font-poppins">
                    POPULAR
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl text-foreground font-light tracking-wide mb-2">
                  {pkg.title}
                </h3>
                <div className="text-4xl font-medium mb-4 text-primary">
                  {pkg.price}
                </div>
                <p className="text-sm tracking-wider text-heading">
                  {pkg.subtitle}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 rounded-full text-sm tracking-wide uppercase transition-all ${
                  pkg.buttonType === "solid"
                    ? "bg-primary text-black font-semibold hover:bg-primary-hover"
                    : "bg-white hover:bg-white/80 text-black font-semibold"
                }`}
              >
                GET STARTED
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
