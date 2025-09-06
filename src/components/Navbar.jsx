import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Profiles", href: "#profiles" },
  { name: "Contact", href: "#contact" },
];

function DesktopNavbar({ activeSection }) {
  return (
    <div className="hidden md:flex space-x-8 items-center">
      {navItems.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          className={cn(
            "transition-colors duration-300 relative group",
            activeSection === item.href.slice(1)
              ? "text-primary font-semibold"
              : "text-foreground/80 hover:text-primary"
          )}
        >
          {item.name}
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
        </a>
      ))}
    </div>
  );
}

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detect scroll & active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      let current = "hero";
      navItems.forEach((item) => {
        const el = document.querySelector(item.href);
        if (el) {
          const rect = el.getBoundingClientRect();
          const offset = 120;
          if (rect.top <= offset && rect.bottom > offset) {
            current = item.href.slice(1);
          }
        }
      });
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close menu on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <header
        className={cn(
          "fixed top-0 w-full z-40 transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-md shadow-xl"
            : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a
            className="text-xl font-bold text-primary flex items-center"
            href="#hero"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground"> Jay Aditya </span>{" "}
              Portfolio
            </span>
          </a>

          {/* Desktop Nav */}
          <DesktopNavbar activeSection={activeSection} />

          {/* ThemeToggle + Mobile Button */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle always visible */}
            <ThemeToggle />

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="p-2 text-foreground md:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      {/* Mobile fullscreen menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 z-50 flex flex-col items-center justify-center transition-all duration-500 ease-in-out",
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        {/* Close button inside overlay */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-5 right-5 p-2 text-foreground"
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        <nav className="flex flex-col space-y-10 text-2xl font-semibold items-center">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "transition-colors duration-200",
                activeSection === item.href.slice(1)
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary"
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Theme toggle in mobile menu */}
        <ThemeToggle className="mt-12 md:hidden" />
      </div>

    </>
  );
};
