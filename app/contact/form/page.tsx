import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Contact Form",
  description: "Project brief form for COBALT enquiries.",
  alternates: {
    canonical: "/contact/form",
  },
  openGraph: {
    title: "Contact Form | COBALT",
    description: "Project brief form for COBALT enquiries.",
    url: "/contact/form",
  },
};

export default function ContactFormPage() {
  return (
    <div className="relative min-h-screen text-[#F2F2F2]">
      <Image
        src="/images/backgrounds/contact_bg.png"
        alt="Contact background"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-10">
        <Navigation transparent />

        <main className="w-full max-w-[1536px] mx-auto pt-[124px] md:pt-0">
          <section className="min-h-screen py-8 md:py-16">
            <div className="mx-auto w-full max-w-[1142px] px-4 md:px-8">
              <div data-tf-live="01KKKMXHV6BC77EMP6AB8RR0GZ" />
            </div>
          </section>
        </main>
      </div>

      <Script src="//embed.typeform.com/next/embed.js" strategy="afterInteractive" />
    </div>
  );
}
