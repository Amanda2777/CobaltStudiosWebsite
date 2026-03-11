import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-sm">
      <div className="container mx-auto px-8 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="COBALT"
            width={100}
            height={12}
            className="h-3 w-auto"
          />
        </Link>
        <div className="flex gap-12">
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
      </div>
    </nav>
  );
}
