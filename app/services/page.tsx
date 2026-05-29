import type { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Button from "@/components/Button";
import ServiceBlock from "@/components/ServiceBlock";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From creative production to brand strategy and social media management — find the package that's right for your brand.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | COBALT",
    description:
      "From creative production to brand strategy and social media management — find the package that's right for your brand.",
    url: "/services",
  },
};

const services = [
  {
    id: 1,
    title: "CREATIVE PRODUCTION",
    price: "starting at £2,000",
    imageSrc: "/images/services/creative.png",
    imageAlt: "Creative Production",
    videoSrc: "https://pub-1ec42cf347284532910f7cc6a8fb640d.r2.dev/creative.mp4",
    paragraphs: [
      "One shoot day with us covers your content for the month ahead.",
      "You walk away with a full library - short form videos, reels, stills, and behind the scenes footage, all scripted, shot, and edited by us in house. Every deliverable is ready to post, sized for the platforms you are on, and built around your brand from the ground up.",
    ],
    note: "What's included varies by brand — get in touch and we'll put together exactly what you need.",
  },
  {
    id: 2,
    title: "BRANDING & STRATEGY",
    price: "starting at £1,500",
    imageSrc: "/images/services/branding.png",
    imageAlt: "Branding & Strategy",
    videoSrc: "https://pub-1ec42cf347284532910f7cc6a8fb640d.r2.dev/Ballers%201.mp4",
    paragraphs: [
      "Your brand should be impossible to mistake for anyone else's.",
      "We build the foundations of your brand — identity, strategy, visual direction, and the guidelines to carry it forward. Whether you're starting from scratch or need a rebrand that finally feels right, we work with you until it's exactly what it should be.",
      "Every project is scoped to what you actually need, built from scratch and delivered to fit.",
    ],
    note: null,
  },
  {
    id: 3,
    title: "SOCIAL MEDIA MANAGEMENT",
    price: "starting at £1,000/mo",
    imageSrc: "/images/services/social.png",
    imageAlt: "Social Media Management",
    videoSrc: "https://pub-1ec42cf347284532910f7cc6a8fb640d.r2.dev/Pianillo%204-captioned.mp4",
    paragraphs: [
      "Your channels handled every month while you focus on everything else.",
      "We take care of the strategy, captions, scheduling, comments, and DMs so your brand stays consistent and active without it becoming another thing on your list.",
      "Retainers are tailored to your posting frequency and content needs. Reach out and we'll build a plan around you.",
    ],
    note: null,
  },
];

export default function Services() {
  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-[140px] md:pt-40 pb-10 md:pb-14 px-4 md:px-8 max-w-[1142px] mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-none mb-6">
          OUR{" "}
          <span
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontWeight: 400,
              fontStyle: "italic",
              textTransform: "none",
            }}
          >
            services
          </span>
        </h1>
        <p className="text-[1.875rem] tracking-tight leading-[1.1] text-[#B3B3B3] max-w-[560px]">
          Not sure what you need yet? That is what we are here for. Every package is tailored around your brand, your goals, and your budget.
        </p>
      </section>

      {/* Full-width image strip */}
      <div className="w-full h-[180px] md:h-[260px] flex overflow-hidden">
        {[
          "/images/case-studies/frame1.png",
          "/images/case-studies/frame2.png",
          "/images/case-studies/fram3.png",
          "/images/case-studies/frame4.png",
        ].map((src, i) => (
          <div key={i} className="relative flex-1 h-full">
            <Image
              src={src}
              alt=""
              fill
              sizes="25vw"
              className="object-cover"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>

      {/* Service blocks */}
      <div className="max-w-[1142px] mx-auto px-4 md:px-8">
        {services.map((service, index) => (
          <ServiceBlock
            key={service.id}
            title={service.title}
            price={service.price}
            imageSrc={service.imageSrc}
            imageAlt={service.imageAlt}
            paragraphs={service.paragraphs}
            note={service.note}
            videoSrc={service.videoSrc || undefined}
            flip={index % 2 === 1}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-[1142px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-2">
            NOT SURE WHICH PACKAGE IS RIGHT?
          </h2>
          <p className="text-[1.875rem] tracking-tight leading-[1.1] text-[#B3B3B3]">
            We&apos;ll figure it out together. Every project starts with a conversation.
          </p>
        </div>
        <div className="flex flex-row gap-4 flex-shrink-0">
          <Button href="/work" variant="secondary">OUR WORK</Button>
          <Button href="/contact" variant="primary">CONTACT US</Button>
        </div>
      </section>
    </div>
  );
}
