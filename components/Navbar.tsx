"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTheme } from "next-themes";

enum MODE_TYPE {
  DARK = 'dark',
  LIGHT = 'light'
}

const navItems = [
  {
    path: "#about",
    name: "About",
  },
  {
    path: "#experience",
    name: "Experience",
  },
  {
    path: "#skills",
    name: "Skills",
  },
  {
    path: "#projects",
    name: "Projects",
  },
  {
    path: "#contact",
    name: "Contact",
  },
];

export default function Navbar() {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const logoSrc = theme === MODE_TYPE.DARK
    ? "/asset/my-logo-dark-mode.png"
    : "/asset/my-logo-light-mode.png";

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-3xl font-bold tracking-tight text-foreground transition-colors"
        >
          {mounted && (
            <Image
              src={logoSrc}
              alt="my_logo"
              width={100}
              height={50}
              priority
            />
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  onClick={(e) => scrollToSection(e, item.path)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute left-0 right-0 bg-background border-b transition-transform duration-300 ease-in-out transform",
          menuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav className="container mx-auto py-4">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.name} className="py-2">
                <Link
                  href={item.path}
                  onClick={(e) => scrollToSection(e, item.path)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
