"use client";

import React from "react";
import Image from "next/image";

import { OurServicesSectionContent } from "@/contents/home-page-content";

import { CometCard } from "@/components/partials/comet-card";

function OurServicesSection() {
  return (
    <section
      id="services"
      className="bg-secondary-background section-padding-standard"
    >
      <div className="layout-standard section-padding-standard">
        <div className="lg:mb-[6rem] mb-[4rem] relative flex flex-col text-center items-center w-full max-lg:gap-4">
          <h1 className="absolute text-[9rem] font-bold tracking-widest text-white/10 select-none -top-[4.2rem] max-lg:hidden">
            SERVICES
          </h1>
          <h2 className="relative text-4xl md:text-5xl font-medium text-heading font-poppins">
            WHAT WE DO
          </h2>
          <p className="text-lg font-medium text-heading max-w-4xl">
            We design, build, and launch digital products — from websites to
            apps — that help businesses grow.
          </p>
        </div>

        <div className="w-full flex items-center max-md:justify-center gap-8 flex-wrap">
          {OurServicesSectionContent.map((data, index) => (
            <CometCard key={index}>
              <div
                className="flex lg:w-[350px] w-[350px] cursor-pointer flex-col items-stretch rounded-[16px] border border-border bg-card p-2 md:p-4"
                aria-label="View invite F7RA"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "none",
                  opacity: 1,
                }}
              >
                <div className="mx-2 flex-1">
                  <div className="relative mt-2 aspect-[3/4] w-full">
                    <Image
                      loading="lazy"
                      className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover"
                      alt={data.title}
                      src={data.img}
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>
                <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-heading">
                  <div className="lg:text-base md:text-[15px] text-sm  font-normal font-poppins">
                    {data.title}
                  </div>
                </div>
              </div>
            </CometCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServicesSection;
