import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-card)] border-t border-[var(--color-border)] mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo / Name */}
          <h2 className="text-xl font-bold text-[var(--color-foreground)]">
            BB <span className="text-[var(--color-primary)]">.</span>
          </h2>

          {/* Nav Links */}
          <div className="flex gap-6 text-sm text-[var(--color-muted-foreground)]">
            <a href="#about" className="hover:text-[var(--color-primary)] transition">About</a>
            <a href="#projects" className="hover:text-[var(--color-primary)] transition">Projects</a>
            <a href="#contact" className="hover:text-[var(--color-primary)] transition">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://github.com/bhaskar22b" 
            target="_blank" className="p-2 rounded-full bg-[var(--color-surface)] hover:bg-[var(--color-primary)]/10 transition">
              <FaGithub className="w-5 h-5 text-[var(--color-foreground)] hover:text-[var(--color-primary)]" />
            </a>
            <a href="https://www.linkedin.com/in/bhaskar-bhushan-b37609349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank" className="p-2 rounded-full bg-[var(--color-surface)] hover:bg-[var(--color-primary)]/10 transition">
              <FaLinkedin className="w-5 h-5 text-[var(--color-foreground)] hover:text-[var(--color-primary)]" />
            </a>
            <a href="https://www.instagram.com/bhaskar_b09?igsh=MXEycmw0NTRxMWYzMA==" 
            target="_blank" className="p-2 rounded-full bg-[var(--color-surface)] hover:bg-[var(--color-primary)]/10 transition">
              <FaInstagram className="w-5 h-5 text-[var(--color-foreground)] hover:text-[var(--color-primary)]" />
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-center text-sm text-[var(--color-muted-foreground)] mt-8  border-t border-[var(--color-border)] pt-6">
          © {new Date().getFullYear()} Bhaskar Bhushan. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;