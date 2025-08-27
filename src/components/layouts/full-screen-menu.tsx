"use client";

import React, { useEffect } from "react";

import { FullScreenMenuProps } from "@/interfaces/components.layouts-interfaces";

export default function FullScreenMenu({
  isOpen,
  onClose,
}: FullScreenMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  const handleItemClick = (href: string) => {
    onClose();
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 bg-secondary-background z-50 transition-all duration-500 ease-in-out ${
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
      style={{
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: "50px 50px",
      }}
    >
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-foreground text-2xl hover:rotate-90 transition-transform duration-300"
      >
        ×
      </button>

      <div className="absolute top-1/2 left-16 text-foreground text-2xl font-light">
        +
      </div>
      <div className="absolute top-1/2 right-16 text-foreground text-2xl font-light">
        +
      </div>

      <div className="flex items-center justify-center h-full">
        <nav className="text-center">
          {menuItems.map((item, index) => (
            <div key={item.name} className="mb-6">
              <button
                onClick={() => handleItemClick(item.href)}
                className="text-heading text-3xl md:text-4xl lg:text-4xl font-medium tracking-wider hover:text-primary transition-colors duration-300 block text-center w-full font-poppins"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isOpen
                    ? "menuOpen 0.6s ease-out forwards"
                    : "none",
                }}
              >
                {item.name}
              </button>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
