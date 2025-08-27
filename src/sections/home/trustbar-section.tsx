"use client";

import { TrustbarSectionContent } from "@/contents/home-page-content";

export default function TrustbarSection() {
  return (
    <section className="py-20">
      <div className="layout-standard">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          {TrustbarSectionContent.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-light text-heading mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-semibold tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
