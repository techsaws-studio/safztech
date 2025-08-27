"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import FullScreenMenu from "./full-screen-menu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full bg-secondary-background backdrop-blur-sm z-40 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="layout-standard">
          <div className="flex justify-between items-center h-20">
            <button
              onClick={scrollToTop}
              className="font-light font-poppins text-2xl tracking-wider text-primary hover:text-primary-hover transition-opacity"
            >
              SAFZTECH
            </button>

            <nav className="hidden md:flex space-x-8 lg:translate-x-8">
              <Link
                href="/"
                className="text-heading hover:text-secondary transition-colors tracking-wide uppercase text-sm"
              >
                HOME
              </Link>
              <Link
                href="#projects"
                className="text-heading hover:text-secondary transition-colors tracking-wide uppercase text-sm"
              >
                PROJECTS
              </Link>
              <Link
                href="#about"
                className="text-heading hover:text-secondary transition-colors tracking-wide uppercase text-sm"
              >
                ABOUT
              </Link>
              <Link
                href="#pricing"
                className="text-heading hover:text-secondary transition-colors tracking-wide uppercase text-sm"
              >
                PRICING
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:block">
                <button
                  onClick={scrollToContact}
                  className="border-2 border-primary px-6 py-2 rounded-full text-sm tracking-wide uppercase hover:bg-primary hover:text-primary-foreground text-primary transition-all"
                >
                  AVAILABLE FOR PROJECTS
                </button>
              </div>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="flex flex-col justify-center items-center w-8 h-8 space-y-1 hover:opacity-70 transition-opacity"
                aria-label="Open menu"
              >
                <span className="w-6 h-0.5 bg-white"></span>
                <span className="w-6 h-0.5 bg-white"></span>
                <span className="w-6 h-0.5 bg-white"></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <FullScreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}

export default Header;
