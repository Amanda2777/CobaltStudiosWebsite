import Link from "next/link";
import Image from "next/image";

interface NavigationProps {
  transparent?: boolean;
}

export default function Navigation({ transparent = false }: NavigationProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        transparent ? "bg-transparent" : "bg-[#050505]/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 py-4 md:py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="COBALT"
            width={100}
            height={12}
            className="h-3 w-auto"
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
