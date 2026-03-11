"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavigationProps {
  transparent?: boolean;
}

export default function Navigation({ transparent = false }: NavigationProps) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    handleScroll(); // Check initial state
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        transparent
          ? "bg-transparent"
          : hasScrolled
            ? "bg-[#050505]/80 backdrop-blur-sm"
            : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-4 md:px-8 py-4 md:py-6 flex justify-between items-center w-full max-w-[1142px]">
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
        <button className="md:hidden flex flex-col gap-1.5 w-6 h-6 items-end">
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-4 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>
    </nav>
  );
}
