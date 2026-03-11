import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[#050505] text-white">
      <div className="flex flex-col items-center px-20 gap-2.5 relative">
        
        {/* Header */}
        <Navigation />
        
        {/* Hero Content */}
        <section className="flex flex-col justify-center items-center py-20 pb-8 gap-2.5 isolate w-full max-w-[1280px] h-[573px]">
          <h1 className="text-5xl font-bold tracking-tight text-center">
            WE ARE COBALT
          </h1>
          
          {/* Hero Image Placeholder */}
          <div className="w-[298px] h-[463px] bg-gray-700 flex items-center justify-center">
            <span className="text-gray-400 text-sm">[MD-Diamonds-9755.jpg]</span>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="flex flex-row justify-between items-center gap-7 w-full max-w-[1440px] mb-16">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex flex-col items-start w-[339px]">
              <div className="flex flex-row justify-between items-start px-5 pb-2 w-full mb-2">
                <span className="text-sm font-medium">{item}</span>
                <div className="flex flex-col justify-center items-end">
                  <span className="text-sm font-semibold">CLIENT NAME</span>
                  <span className="text-sm text-white/80">PROJECT NAME</span>
                </div>
              </div>
              <div className="w-[339px] h-[238px] bg-gray-700 flex items-center justify-center">
                <span className="text-gray-400 text-xs">[Project Image]</span>
              </div>
            </div>
          ))}
        </section>

        {/* See More */}
        <div className="flex flex-row justify-center items-center pt-[60px] gap-2.5 w-[163px] h-[84px] mb-16">
          <Link href="/work" className="text-xl flex items-center gap-2">
            SEE ALL WORKS
            <span className="text-2xl">→</span>
          </Link>
        </div>

        {/* Paragraph Section */}
        <section className="flex flex-col justify-center items-center py-[250px] gap-12 w-[792px] mb-16">
          <h2 className="text-5xl font-semibold text-center leading-tight tracking-tight">
            The story your brand deserves. Content that keeps them watching.
          </h2>
          
          <div className="flex flex-row justify-center items-center gap-8">
            <Link href="/work" className="px-4 py-2 text-xl font-semibold">
              SERVICES
            </Link>
            <Link href="/contact" className="px-4 py-3 text-xl font-semibold bg-white text-[#050505] rounded-lg">
              CONTACT US
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section className="flex flex-row justify-between items-center gap-7 w-full max-w-[1440px] mb-16">
          <div className="flex flex-col justify-end items-end py-11 w-[482px] h-[579px] bg-gradient-to-b from-transparent to-[#050505]/60 bg-gray-700">
            <div className="flex flex-row justify-end items-start px-8 pr-8 w-full">
              <h3 className="text-6xl font-bold text-right leading-tight tracking-tight w-[339px]">
                CREATIVE PRODUCTION
              </h3>
            </div>
          </div>
          
          <div className="flex flex-col justify-end items-end py-11 w-[482px] h-[579px] bg-gradient-to-b from-transparent to-[#050505]/20 bg-gray-700">
            <div className="flex flex-row justify-end items-start px-8 pr-8 w-full">
              <h3 className="text-6xl font-bold text-right leading-tight tracking-tight w-[339px]">
                BRANDING
              </h3>
            </div>
          </div>
          
          <div className="flex flex-col justify-end items-end py-11 w-[482px] h-[579px] bg-gray-700">
            <div className="flex flex-row justify-end items-start px-8 pr-8 w-full">
              <h3 className="text-6xl font-bold text-right leading-tight tracking-tight w-[405px]">
                SOCIAL MEDIA MANAGEMENT
              </h3>
            </div>
          </div>
        </section>

        {/* Brand Logos */}
        <section className="flex flex-col justify-center items-center py-[200px] gap-9 w-[793px] mb-16">
          <p className="text-xl text-center text-white/40">WE&apos;VE SHOT WITH</p>
          
          <div className="flex flex-row justify-center items-center gap-7 w-full">
            {[1, 2, 3, 4, 5].map((logo) => (
              <div key={logo} className="w-[100px] h-7 bg-white/20 flex items-center justify-center">
                <span className="text-xs text-white/40">[Logo {logo}]</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="flex flex-col items-start pb-[200px] gap-[60px] w-[900px] mb-16">
          <h2 className="text-5xl font-medium text-center w-full tracking-tight">FAQs</h2>
          
          <div className="flex flex-col justify-center items-start gap-[60px] w-full">
            {/* FAQ Item 1 - Closed */}
            <div className="flex flex-col justify-center items-start w-full border-b border-white/30 pb-6">
              <div className="flex flex-row justify-between items-center w-full py-1">
                <h3 className="text-3xl font-medium">WHAT KIND OF PROJECTS DO YOU TAKE ON?</h3>
                <span className="text-2xl">+</span>
              </div>
            </div>
            
            {/* FAQ Item 2 - Open */}
            <div className="flex flex-col justify-center items-start pb-4 w-full">
              <div className="flex flex-col w-full border-b border-white/30 pb-6 mb-12">
                <div className="flex flex-row justify-between items-center w-full py-1">
                  <h3 className="text-3xl font-medium">WHAT KIND OF PROJECTS DO YOU TAKE ON?</h3>
                  <span className="text-2xl">−</span>
                </div>
              </div>
              <p className="text-3xl text-white/50">
                From branding and social content to motion graphics and full channel management - we handle creative work that helps brands stand out online.
              </p>
            </div>
            
            {/* FAQ Items 3-5 - Closed */}
            {[3, 4, 5].map((item) => (
              <div key={item} className="flex flex-col justify-center items-start w-full border-b border-white/30 pb-6">
                <div className="flex flex-row justify-between items-center w-full py-1">
                  <h3 className="text-3xl font-medium">WHAT KIND OF PROJECTS DO YOU TAKE ON?</h3>
                  <span className="text-2xl">+</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Invite to Chat */}
        <section className="relative w-full max-w-[1440px] h-[388px] mb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]/20 bg-gray-700 blur-sm" />
          
          <div className="absolute inset-0 flex flex-col justify-center items-center gap-11 px-8">
            <div className="flex flex-col items-center gap-2.5 w-[678px]">
              <h2 className="text-6xl font-bold text-center leading-tight tracking-tight">
                ALL GREAT IDEAS START WITH HELLO
              </h2>
              <p className="text-3xl font-medium text-center">
                Let&apos;s get your story out there!
              </p>
            </div>
            
            <div className="flex flex-row justify-center items-center gap-5">
              <Link href="/work" className="px-4 py-2 text-xl font-semibold">
                SERVICES
              </Link>
              <Link href="/contact" className="px-4 py-3 text-xl font-semibold bg-white text-[#050505] rounded-lg flex items-center gap-2.5">
                WHATSAPP US!
                <span className="text-sm">📱</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col justify-center items-center py-[60px] w-full max-w-[1440px] bg-[#050505]">
          <div className="flex flex-row justify-between items-start gap-[341px] w-[1142px] mb-16">
            {/* Logo */}
            <div className="w-[196px] h-14 bg-[#F9F9F9] flex items-center justify-center">
              <span className="text-[#050505] font-bold">COBALT</span>
            </div>
            
            {/* Navigation Links */}
            <div className="flex flex-col justify-center items-start gap-2.5">
              <Link href="/about" className="text-xl font-semibold">OUR STORY</Link>
              <Link href="/work" className="text-xl font-semibold">WORK</Link>
              <Link href="/work" className="text-xl font-semibold">SERVICES</Link>
              <Link href="/contact" className="text-xl font-semibold">CONTACT</Link>
            </div>
            
            {/* Social Links */}
            <div className="flex flex-col justify-center items-start gap-2.5">
              <a href="#" className="text-xl font-semibold">INSTAGRAM</a>
              <a href="mailto:hello@cobalt.com" className="text-xl font-semibold">EMAIL</a>
              <Link href="/contact" className="text-xl font-semibold">HAVE AN IDEA?</Link>
            </div>
          </div>
          
          <div className="flex flex-row items-end px-[149px] gap-[831px] w-full">
            <div className="w-[147px] h-[230px] bg-gray-700 flex items-center justify-center">
              <span className="text-xs text-gray-400">[Footer Image]</span>
            </div>
            
            <div className="flex flex-col justify-center items-start gap-2.5">
              <Link href="#" className="text-sm">Privacy Policy</Link>
              <Link href="#" className="text-sm">Terms and conditions</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
