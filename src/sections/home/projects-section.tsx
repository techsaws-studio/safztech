"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";

import Project01Img from "../../../public/images/e-commerce-project-img.png";
import Project02Img from "../../../public/images/ai-chatbot-project-img.png";
import Project03Img from "../../../public/images/admin-dashboard-project-img.png";

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-secondary-background section-padding-standard"
    >
      <div className="layout-standard section-padding-standard">
        <div className="lg:mb-[6rem] mb-[4rem] relative flex flex-col text-center items-center w-full max-lg:gap-4">
          <h1 className="absolute text-[9rem] font-bold tracking-widest text-white/10 select-none -top-[4.2rem] max-lg:hidden">
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
            <div className="aspect-video rounded-lg overflow-hidden border-2 border-border relative">
              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: "-30%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full w-full"
              >
                <Image
                  src={Project01Img}
                  alt="E-commerce Website"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
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
              <div className="aspect-video rounded-lg overflow-hidden border-2 border-border relative">
                <motion.div
                  initial={{ y: 0 }}
                  whileHover={{ y: "-10%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="h-full w-full"
                >
                  <Image
                    src={Project02Img}
                    alt="AI Chatbot"
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </div>
            </div>
            <div className="lg:order-1">
              <h3 className="text-2xl font-light mb-4 tracking-wide text-heading font-poppins">
                AI CHATBOT
              </h3>
              <p className="mb-6 leading-relaxed">
                An intelligent conversational assistant powered by custom model
                training and real-time data. Designed to handle support,
                automate workflows, and provide human-like interactions that
                continuously improve with user feedback.
              </p>
              <div className="flex gap-4 text-sm text-white/50 tracking-wider">
                <Badge>OPENAI API</Badge>
                <span>SUPABASE</span>
                <span>PYTORCH</span>
              </div>
            </div>
          </div>

          {/* PROJECT 03 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-video rounded-lg overflow-hidden border-2 border-border relative">
              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: "-30%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full w-full"
              >
                <Image
                  src={Project03Img}
                  alt="Admin Dashboard"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
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
