import type { Metadata } from "next";
import Link from "next/link";
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with COBALT to discuss your next project.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | COBALT",
    description: "Get in touch with COBALT to discuss your next project.",
    url: "/contact",
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F2F2F2]">
      <Navigation transparent />

      <main className="w-full max-w-[1536px] mx-auto pt-[124px] md:pt-0">
        <section className="py-12 md:py-24">
          <div className="mx-auto w-full max-w-[1142px] px-4 md:px-8">
            <div className="grid grid-cols-1 gap-12 md:gap-16">
              <div className="space-y-8 md:space-y-10">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
                  CONTACT
                </h1>

                <p className="text-xl md:text-3xl text-[#F2F2F2] max-w-[28ch] leading-[1.1]">
                  Let&apos;s create something exceptional together.
                </p>

                <div className="space-y-6 text-base md:text-xl">
                  <div>
                    <p className="text-[#ABABAB] text-xs md:text-sm tracking-wider mb-2">EMAIL</p>
                    <a href="mailto:nikita@cobaltmade.com" className="hover:text-[#ABABAB] transition-colors">
                      nikita@cobaltmade.com
                    </a>
                  </div>

                  <div>
                    <p className="text-[#ABABAB] text-xs md:text-sm tracking-wider mb-2">FOR NEW PROJECTS</p>
                    <a href="mailto:team@cobaltmade.com" className="hover:text-[#ABABAB] transition-colors">
                      team@cobaltmade.com
                    </a>
                  </div>
                </div>

                <Link
                  href="/contact/form"
                  className="inline-flex items-center justify-center rounded-lg bg-white text-[#050505] px-4 py-3 text-base md:text-xl font-semibold transition-opacity hover:opacity-80"
                >
                  OPEN ENQUIRY FORM
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
