"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";

const socialLinks = [
  {
    icon: Github,
    href: SITE_CONFIG.links.github,
    label: "GitHub",
    color: "rgba(78, 205, 196, 0.2)",
  },
  {
    icon: Linkedin,
    href: SITE_CONFIG.links.linkedin,
    label: "LinkedIn",
    color: "rgba(216, 178, 242, 0.2)",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Gradient wave separator */}
      <div className="relative h-24 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-24">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 w-full h-full"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(78, 205, 196, 0.1)" />
                <stop offset="50%" stopColor="rgba(216, 178, 242, 0.1)" />
                <stop offset="100%" stopColor="rgba(78, 205, 196, 0.1)" />
              </linearGradient>
            </defs>
            <path
              d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
              fill="url(#waveGradient)"
            />
          </svg>
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 w-full h-full"
          >
            <path
              d="M0,80 C300,40 600,100 900,60 C1050,40 1150,70 1200,80 L1200,120 L0,120 Z"
              fill="rgba(78, 205, 196, 0.05)"
            />
          </svg>
        </div>
      </div>

      <footer className="relative mt-0 border-t border-white/5 bg-background overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-[600px] h-[600px] rounded-full opacity-[0.03]"
            style={{
              background: "radial-gradient(circle, rgba(78,205,196,0.5) 0%, transparent 70%)",
              bottom: "-200px",
              left: "-100px",
            }}
          />
          <div
            className="absolute w-[500px] h-[500px] rounded-full opacity-[0.03]"
            style={{
              background: "radial-gradient(circle, rgba(216,178,242,0.5) 0%, transparent 70%)",
              bottom: "-150px",
              right: "-100px",
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              <h3 className="font-display text-lg font-bold gradient-text">
                Ujjwal Shukla
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                CS undergrad who enjoys designing and shipping things for the web.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <h3 className="font-semibold">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.div>

            {/* Contact & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3"
            >
              <h3 className="font-semibold">Connect</h3>
              <div className="flex flex-col space-y-2">
                <a
                  href={`mailto:${SITE_CONFIG.links.email}`}
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 group"
                >
                  <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span>Email</span>
                </a>
                <a
                  href={`tel:${SITE_CONFIG.links.phone}`}
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 group"
                >
                  <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span>Phone</span>
                </a>
              </div>

              {/* Social icons with animated hover */}
              <div className="flex space-x-3 pt-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-10 h-10 rounded-full flex items-center justify-center border border-white/10 text-muted-foreground hover:text-primary transition-all duration-300 overflow-hidden group"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: social.color }}
                      />
                      <Icon className="h-4.5 w-4.5 relative z-10" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 border-t border-white/5 pt-8 text-center"
          >
            <p className="text-sm text-muted-foreground">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Built with Next.js, Tailwind CSS, and Framer Motion
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
}