import React, { useState } from "react";
import Button from "../Components/Button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "education" },  //Experience=education
  { href: "#projects", label: "Projects" },
  // { href: "#testimonials", label: "Testimonials" },
  { href: "#contactbtn", label: "Contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent py-5">
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold tracking-tight text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition"
        >
          BB <span className="text-[var(--color-primary)]">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 glass px-4 py-2 rounded-full">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm px-4 py-2 text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] rounded-full hover:bg-[var(--color-surface)] transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#contactbtn">
            <Button size="sm">Contact Me</Button>
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 text-[var(--color-foreground)]"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in relative z-50 border-t border-[var(--color-border)]">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)]"
              >
                {link.label}
              </a>
            ))}

            <Button onClick={() => alert("Contact clicked")}>
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;