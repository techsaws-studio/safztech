"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

import { Phone, Mail, Clock, Globe } from "lucide-react";

function ContactUsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    agreeToComms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="section-padding-standard bg-secondary-background">
      <div className="layout-standard section-padding-standard">
        <div className="mb-[6rem] relative flex flex-col text-center items-center w-full">
          <h1 className="absolute text-[9rem] font-bold tracking-widest text-white/10 select-none -top-[3.8rem]">
            CONTACT
          </h1>
          <h2 className="relative text-4xl md:text-5xl font-medium text-heading font-poppins">
            BUILD YOUR VISION
          </h2>
          <p className="text-lg font-medium text-heading max-w-3xl">
            Reach out to our expert team for personalized solutions and
            top-notch web and app development services tailored to your brand.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-20">
          <div className="space-y-8 lg:col-span-2 col-span-1">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-medium text-heading font-poppins uppercase tracking-wider">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-input border-border border-2 text-white h-14 text-lg transition-colors"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-heading font-poppins uppercase tracking-wider">
                    Your Email
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-input border-border border-2 text-white h-14 text-lg transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-heading font-poppins uppercase tracking-wider">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="+x (xxx) xxx-xxxx"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="bg-input border-border border-2 text-white h-14 text-lg transition-colors"
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-heading font-poppins uppercase tracking-wider">
                  Service You&apos;re Interested In
                </label>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, service: value })
                  }
                >
                  <SelectTrigger className="bg-input border-border border-2 text-white h-14 text-sm">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-border text-heading">
                    <SelectItem value="web-development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="app-development">
                      App Development
                    </SelectItem>
                    <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                    <SelectItem value="branding">Branding</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-heading font-poppins uppercase tracking-wider">
                  Your Message
                </label>
                <Textarea
                  placeholder="Tell us about your project and requirements..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-input border-border border-2 text-white min-h-32 text-lg transition-colors resize-none"
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="agree"
                  checked={formData.agreeToComms}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      agreeToComms: checked as boolean,
                    })
                  }
                  className="border-border border-2 data-[state=checked]:bg-primary data-[state=checked]:text-black mt-1"
                />
                <label htmlFor="agree" className="text-sm leading-relaxed">
                  I agree to receive communications from CHRIS K. You can
                  unsubscribe at any time.See our{" "}
                  <Link
                    href={"/privacy-policy"}
                    className="text-white underline cursor-pointer"
                  >
                    Privacy Policy.
                  </Link>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full hover:bg-primary-hover h-14 text-base font-semibold tracking-wider uppercase transition-colors"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-semibold font-poppins text-white mb-12 tracking-tight">
                CONTACT INFORMATION
              </h3>
            </div>

            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 border border-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider mb-2">
                    Phone
                  </p>
                  <p className="text-xl font-medium text-heading mb-1">
                    +1 (419) 601-2734
                  </p>
                  <p className="text-foreground">Mon - Fri, 9am - 6pm EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 border border-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider mb-2">
                    Email
                  </p>
                  <p className="text-xl font-medium text-heading mb-1">
                    info@safztech.com
                  </p>
                  <p className="text-xl font-medium text-heading mb-1">
                    safztech13@gmail.com
                  </p>
                  <p className="text-foreground">
                    We&apos;ll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 border border-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider mb-2">
                    Hours
                  </p>
                  <p className="text-xl font-medium text-heading mb-1">
                    Monday - Friday
                  </p>
                  <p className="text-foreground">9:00 AM - 6:00 PM EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 border border-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider mb-2">
                    Platforms
                  </p>
                  <p className="text-xl font-medium text-heading mb-1">
                    Facebook -{" "}
                    <Link
                      href={"https://www.facebook.com/safztech"}
                      target="_blank"
                      className="underline"
                    >
                      safztech
                    </Link>
                  </p>
                  <p className="text-xl font-medium text-heading mb-1">
                    Instagram -{" "}
                    <Link
                      href={"https://www.instagram.com/safz.tech"}
                      target="_blank"
                      className="underline"
                    >
                      safz.tech
                    </Link>
                  </p>
                  <p className="text-xl font-medium text-heading mb-1">
                    LinkedIn -{" "}
                    <Link
                      href={"https://www.linkedin.com/company/safztech/"}
                      target="_blank"
                      className="underline"
                    >
                      safztech
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUsSection;
