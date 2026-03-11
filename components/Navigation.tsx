import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1C1C1C]/80 backdrop-blur-sm">
      <div className="container mx-auto px-8 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-wider text-[#F2F2F2]">
          COBALT
        </Link>
        <div className="flex gap-12">
          <Link 
            href="/about" 
            className="text-[#F2F2F2] text-sm tracking-wider hover:text-[#ABABAB] transition-colors"
          >
            ABOUT
          </Link>
          <Link 
            href="/work" 
            className="text-[#F2F2F2] text-sm tracking-wider hover:text-[#ABABAB] transition-colors"
          >
            WORK
          </Link>
          <Link 
            href="/contact" 
            className="text-[#F2F2F2] text-sm tracking-wider hover:text-[#ABABAB] transition-colors"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}
