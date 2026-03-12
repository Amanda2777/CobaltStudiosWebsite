import type { Metadata } from "next";
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
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-12 md:gap-16">
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
              </div>

              <form className="space-y-5 md:space-y-6" action="#" method="post">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[#ABABAB] text-xs md:text-sm tracking-wider">
                    YOUR NAME
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full bg-transparent border border-white/35 rounded-md px-4 py-3 md:py-4 text-base md:text-lg placeholder:text-white/35 focus:outline-none focus:border-white"
                    placeholder="Jane Smith"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-[#ABABAB] text-xs md:text-sm tracking-wider">
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-transparent border border-white/35 rounded-md px-4 py-3 md:py-4 text-base md:text-lg placeholder:text-white/35 focus:outline-none focus:border-white"
                    placeholder="you@brand.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-[#ABABAB] text-xs md:text-sm tracking-wider">
                    BRAND / COMPANY
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="w-full bg-transparent border border-white/35 rounded-md px-4 py-3 md:py-4 text-base md:text-lg placeholder:text-white/35 focus:outline-none focus:border-white"
                    placeholder="COBALT"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[#ABABAB] text-xs md:text-sm tracking-wider">
                    PROJECT DETAILS
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-transparent border border-white/35 rounded-md px-4 py-3 md:py-4 text-base md:text-lg placeholder:text-white/35 focus:outline-none focus:border-white resize-y"
                    placeholder="Tell us what you want to make."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-white text-[#050505] px-4 py-3 text-base md:text-xl font-semibold transition-opacity hover:opacity-80"
                >
                  SEND ENQUIRY
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
