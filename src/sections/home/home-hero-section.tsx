"use client";

import React from "react";

import { ChevronDown } from "lucide-react";

function HomeHeroSection() {
  return (
    <section className="relative lg:min-h-[80vh] min-h-screen flex flex-col justify-center overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src="/videos/home-hero-bg-vido.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-5"></div>

      <div className="layout-standard h-full relative z-10">
        <div className="mb-8">
          <span className="text-foreground text-sm tracking-wider">
            01/05 — SCROLL ↓
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-none mb-8 font-poppins text-heading">
            {" "}
            MULTI- <br /> DISCIPLINARY <br />{" "}
            <span className="font-extralight">DEVELOPERS</span>{" "}
          </h1>

          <div className="lg:text-right">
            <p className="text-heading text-lg leading-relaxed max-w-md lg:ml-auto uppercase">
              A premium tech agency crafting websites
              <br />
              software solutions that elevate brands.
              <br />
              Partner with us to transform your ideas
              <br />
              client-converting digital realities.
            </p>
          </div>
        </div>

        <div
          onClick={() =>
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="absolute -bottom-[40%] left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-3 cursor-pointer"
        >
          <div className="w-10 h-16 border-2 border-primary rounded-full flex items-start justify-center relative">
            <div className="w-2 h-2 bg-primary rounded-full animate-scroll" />
          </div>
          <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
}

export default HomeHeroSection;
