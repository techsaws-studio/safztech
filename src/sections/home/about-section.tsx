import React from "react";

import {
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function AboutSection() {
  return (
    <section
      id="about"
      className="layout-standard section-padding-standard border-t border-border"
    >
      <div className="section-padding-standard">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-32 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins tracking-tight mb-8">
              ABOUT SAFZTECH
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              SAFZTECH is a premium tech agency and software house specializing
              in creating custom websites, software solutions, and digital
              experiences that empower brands to grow online. Our approach
              combines strategic thinking with cutting-edge technology and
              creative execution to deliver solutions that resonate with users.
            </p>
            <p className="leading-relaxed mb-6">
              With over 15 years of experience serving startups, enterprises,
              and global brands, we translate complex ideas into intuitive,
              high-performance digital products.
            </p>
          </div>

          <div className="space-y-16">
            <div>
              <h3 className="text-xl mb-4 tracking-wide text-heading font-poppins font-semibold">
                CAPABILITIES
              </h3>
              <div className="space-y-2 text-white/70">
                <div>Frontend Development</div>
                <div>UI/UX Design</div>
                <div>Brand Identity</div>
                <div>Full-Stack Development</div>
                <div>Creative Direction</div>
                <div>Custom Software Solutions</div>
                <div>Enterprise Web Applications</div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl mb-4 tracking-wide text-heading font-poppins font-semibold">
                CONTACT
              </h3>
              <div className="space-y-2 text-white/70">
                <div className="flex items-center gap-2">
                  <FaEnvelope /> info@safztech.com
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope /> safztech13@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <FaPhone />{" "}
                  <a href="https://wa.me/14196012734">+1 (419) 601-2734</a>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <a
                    href="https://www.linkedin.com/company/safztech/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="hover:text-blue-600 transition-colors" />
                  </a>
                  <a
                    href="https://www.facebook.com/safztech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF className="hover:text-blue-500 transition-colors" />
                  </a>
                  <a
                    href="https://www.instagram.com/safz.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="hover:text-pink-500 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
