"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavigationProps {
  transparent?: boolean;
}

export default function Navigation({ transparent = false }: NavigationProps) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    handleScroll(); // Check initial state
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          hasScrolled
            ? "bg-[#050505]/80 backdrop-blur-sm"
            : transparent
              ? "bg-transparent"
              : "bg-[#050505]"
        }`}
      >
        <div
          className={`mx-auto px-4 md:px-8 h-[124px] md:h-auto py-0 md:py-6 flex justify-between items-center w-full max-w-[1142px] transition-opacity duration-300 ${
            isMenuOpen ? "opacity-0 md:opacity-100" : "opacity-100"
          }`}
        >
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="COBALT"
              width={150}
              height={18}
              className="h-4 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-12">
            <Link
              href="/about"
              className="text-xl font-medium leading-none text-white hover:text-[#ABABAB] transition-colors"
            >
              ABOUT
            </Link>
            <Link
              href="/work"
              className="text-xl font-medium leading-none text-white hover:text-[#ABABAB] transition-colors"
            >
              WORK
            </Link>
            <Link
              href="/contact"
              className="text-xl font-medium leading-none text-white hover:text-[#ABABAB] transition-colors"
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden flex flex-col items-center justify-center gap-1.5 w-7 h-7"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="w-7 h-0.5 bg-white"></span>
            <span className="w-7 h-0.5 bg-white"></span>
            <span className="w-7 h-0.5 bg-white"></span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto bg-black/55 backdrop-blur-xl"
            : "opacity-0 pointer-events-none bg-black/0 backdrop-blur-none"
        }`}
      >
        <div className="mx-auto w-full max-w-[1142px] px-4 md:px-8 min-h-screen">
          <div
            className={`h-[124px] md:h-auto py-0 md:py-6 flex justify-between items-center transition-opacity duration-400 ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image
                src="/logo.svg"
                alt="COBALT"
                width={150}
                height={18}
                className="h-4 w-auto"
              />
            </Link>

            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="relative flex items-center justify-center w-7 h-7"
            >
              <span className="absolute w-7 h-0.5 bg-white rotate-45" />
              <span className="absolute w-7 h-0.5 bg-white -rotate-45" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center min-h-[76vh] gap-14">
            <Link
              href="/about"
              className={`text-5xl font-medium leading-none text-white transition-all duration-500 ${
                isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isMenuOpen ? "120ms" : "0ms" }}
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/work"
              className={`text-5xl font-medium leading-none text-white transition-all duration-500 ${
                isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isMenuOpen ? "200ms" : "0ms" }}
              onClick={() => setIsMenuOpen(false)}
            >
              WORK
            </Link>
            <Link
              href="/contact"
              className={`text-5xl font-medium leading-none text-white transition-all duration-500 ${
                isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isMenuOpen ? "280ms" : "0ms" }}
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
