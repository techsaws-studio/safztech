import { Badge } from "@/components/ui/badge";
import React from "react";

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-secondary-background section-padding-standard"
    >
      <div className="layout-standard section-padding-standard">
        <div className="mb-[6rem] relative flex flex-col text-center items-center w-full">
          <h1 className="absolute text-[9rem] font-bold tracking-widest text-white/10 select-none -top-[4.2rem]">
            PORTFOLIO
          </h1>
          <h2 className="relative text-4xl md:text-5xl font-medium text-heading font-poppins">
            SELECTED WORK
          </h2>
          <p className="text-lg font-medium text-heading max-w-3xl">
            A curated collection of projects that showcase my approach to design
            and development.
          </p>
        </div>

        <div className="space-y-24">
          {/* PROJECT 01 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-video bg-white/5 rounded-lg"></div>
            <div>
              <h3 className="text-2xl font-light mb-4 tracking-wide text-heading font-poppins">
                E-COMMERCE PLATFORM
              </h3>
              <p className="mb-6 leading-relaxed">
                A comprehensive digital commerce solution focusing on user
                experience and conversion optimization.
              </p>
              <div className="flex gap-4 text-sm text-white/50 tracking-wider">
                <Badge>REACT</Badge>
                <span>NODE.JS</span>
                <span>POSTGRESQL</span>
              </div>
            </div>
          </div>

          {/* PROJECT 02 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="aspect-video bg-white/5 rounded-lg"></div>
            </div>
            <div className="lg:order-1">
              <h3 className="text-2xl font-light mb-4 tracking-wide text-heading font-poppins">
                TASK MANAGEMENT
              </h3>
              <p className="mb-6 leading-relaxed">
                Collaborative workspace designed for modern teams with real-time
                synchronization.
              </p>
              <div className="flex gap-4 text-sm text-white/50 tracking-wider">
                <Badge>NEXT.JS</Badge>
                <span>TYPESCRIPT</span>
                <span>SUPABASE</span>
              </div>
            </div>
          </div>

          {/* PROJECT 03 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-video bg-white/5 rounded-lg"></div>
            <div>
              <h3 className="text-2xl font-light mb-4 tracking-wide text-heading font-poppins">
                ANALYTICS DASHBOARD
              </h3>
              <p className="mb-6 leading-relaxed">
                Data visualization platform with interactive charts and
                comprehensive reporting.
              </p>
              <div className="flex gap-4 text-sm text-white/50 tracking-wider">
                <Badge>VUE.JS</Badge>
                <span>PYTHON</span>
                <span>MONGODB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
