"use client";

import { useState, useRef, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";
import CaseStudyCard from "@/components/CaseStudyCard";
import ServiceCard from "@/components/ServiceCard";
import FAQItem from "@/components/FAQItem";
import Button from "@/components/Button";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Refs for hero and background videos
  const heroVideoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const bgVideoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const caseStudies = [
    {
      number: 1,
      clientName: "CLIENT NAME",
      projectName: "PROJECT NAME",
      imageSrc: "/images/case-studies/project-1.png",
      imageAlt: "Project 1",
      videoSrc: "/videos/KnQ new 5.mp4",
    },
    {
      number: 2,
      clientName: "CLIENT NAME",
      projectName: "PROJECT NAME",
      imageSrc: "/images/case-studies/project-2.png",
      imageAlt: "Project 2",
      videoSrc: "/videos/Cow-3.mp4",
    },
    {
      number: 3,
      clientName: "CLIENT NAME",
      projectName: "PROJECT NAME",
      imageSrc: "/images/case-studies/project-3.png",
      imageAlt: "Project 3",
      videoSrc: "/videos/1.mp4",
    },
    {
      number: 4,
      clientName: "CLIENT NAME",
      projectName: "PROJECT NAME",
      imageSrc: "/images/case-studies/project-4.jpg",
      imageAlt: "Project 4",
      videoSrc: "/videos/Soloskin-3.mp4",
    },
  ];

  const services = [
    {
      id: 1,
      title: "CREATIVE PRODUCTION",
      imageSrc: "/images/services/creative-production.jpg",
      imageAlt: "Creative Production",
      description:
        "From concept to completion, we produce stunning visual content that captures attention and drives engagement.",
      gradientOpacity: 60,
      href: "/work",
    },
    {
      id: 2,
      title: "BRANDING",
      imageSrc: "/images/services/branding.jpg",
      imageAlt: "Branding",
      description:
        "Build a memorable brand identity that resonates with your audience and stands out in the market.",
      gradientOpacity: 20,
      href: "/work",
    },
    {
      id: 3,
      title: "SOCIAL MEDIA MANAGEMENT",
      imageSrc: "/images/services/social-media.jpg",
      imageAlt: "Social Media Management",
      description:
        "Strategic content creation and community management that grows your presence and connects with your audience.",
      gradientOpacity: 0,
      href: "/work",
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "WHAT KIND OF PROJECTS DO YOU TAKE ON?",
      answer:
        "From branding and social content to motion graphics and full channel management - we handle creative work that helps brands stand out online.",
      defaultOpen: false,
    },
    {
      id: 2,
      question: "HOW LONG DOES A TYPICAL PROJECT TAKE?",
      answer:
        "Project timelines vary depending on scope, but most projects range from 2-6 weeks from concept to delivery.",
      defaultOpen: false,
    },
    {
      id: 3,
      question: "DO YOU WORK WITH CLIENTS REMOTELY?",
      answer:
        "Yes! We work with clients all over the world. Our process is designed to be seamless whether you're local or remote.",
      defaultOpen: false,
    },
    {
      id: 4,
      question: "WHAT'S YOUR PRICING STRUCTURE?",
      answer:
        "We offer custom quotes based on project scope and requirements. Get in touch for a detailed proposal tailored to your needs.",
      defaultOpen: false,
    },
    {
      id: 5,
      question: "CAN WE SEE MORE OF YOUR WORK?",
      answer:
        "Absolutely! Check out our portfolio page to see our latest projects and case studies across various industries.",
      defaultOpen: false,
    },
  ];

  const brandLogos = [
    { src: "/images/brands/rhode.svg", alt: "Rhode" },
    { src: "/images/brands/Sephora.svg", alt: "Sephora" },
  ];

  // Auto-play pizza video (card 3) on mount and synchronize videos when hoveredCard changes
  useEffect(() => {
    const cardToShow = hoveredCard ?? 3; // Default to card 3 (pizza) when no hover
    const heroVideo = heroVideoRefs.current[cardToShow];
    const bgVideo = bgVideoRefs.current[cardToShow];

    if (heroVideo && bgVideo) {
      // Reset both to start and sync
      heroVideo.currentTime = 0;
      bgVideo.currentTime = 0;

      // Play both together
      Promise.all([
        heroVideo.play().catch(() => {}),
        bgVideo.play().catch(() => {}),
      ]);

      // Keep them synced during playback
      const syncVideos = () => {
        if (Math.abs(heroVideo.currentTime - bgVideo.currentTime) > 0.1) {
          bgVideo.currentTime = heroVideo.currentTime;
        }
      };

      heroVideo.addEventListener("timeupdate", syncVideos);
      return () => heroVideo.removeEventListener("timeupdate", syncVideos);
    }
  }, [hoveredCard]);

  return (
    <div className="bg-[#050505] text-white">
      {/* Header Container */}
      <div className="flex flex-col items-center px-4 md:px-20 gap-2.5 relative mx-auto">
        {/* Header */}
        <Navigation />
      </div>

      {/* Hero Content - Full Width */}
      <section className="flex flex-col md:flex-row justify-center items-center py-12 md:py-20 pb-6 md:pb-8 gap-4 isolate w-full min-h-[573px] relative overflow-hidden">
        {/* Background video when hovering - dimmed with animation - Full Width */}
        <div className="absolute inset-0 left-0 right-0 z-0 transition-opacity duration-500">
          {caseStudies.map((study) => (
            <div
              key={`bg-${study.number}`}
              className={`absolute inset-0 transition-opacity duration-500 ${
                (hoveredCard === null && study.number === 3) ||
                hoveredCard === study.number
                  ? "opacity-20"
                  : "opacity-0"
              }`}
            >
              <video
                ref={(el) => {
                  bgVideoRefs.current[study.number] = el;
                }}
                src={study.videoSrc}
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight relative z-10">
          WE ARE
        </h1>

        {/* Hero Video/Image - Multiple with opacity transitions */}
        <div className="w-[200px] h-[311px] md:w-[298px] md:h-[463px] relative overflow-hidden z-10">
          {/* Case study videos */}
          {caseStudies.map((study) => (
            <div
              key={`hero-${study.number}`}
              className={`absolute inset-0 transition-opacity duration-500 ${
                (hoveredCard === null && study.number === 3) ||
                hoveredCard === study.number
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              <video
                ref={(el) => {
                  heroVideoRefs.current[study.number] = el;
                }}
                src={study.videoSrc}
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight relative z-10">
          COBALT
        </h1>
      </section>

      {/* Featured Case Studies */}
      <section className="grid grid-cols-2 md:flex md:flex-row md:justify-between items-center gap-4 md:gap-7 w-full max-w-[1536px] pt-4 md:pt-6 mb-16 mx-auto px-4">
        {caseStudies.map((study) => (
          <CaseStudyCard
            key={study.number}
            number={study.number}
            clientName={study.clientName}
            projectName={study.projectName}
            imageSrc={study.imageSrc}
            imageAlt={study.imageAlt}
            isHovered={hoveredCard === study.number}
            isDimmed={hoveredCard !== null && hoveredCard !== study.number}
            onHoverStart={() => setHoveredCard(study.number)}
            onHoverEnd={() => setHoveredCard(null)}
          />
        ))}
      </section>

      {/* Middle Content Container */}
      <div className="flex flex-col items-center px-4 md:px-20 gap-2.5 relative mx-auto">
        {/* See More */}
        <div className="flex flex-row justify-center items-center gap-2.5 w-auto">
          <Link
            href="/work"
            className="text-lg md:text-xl flex items-center gap-2"
          >
            SEE ALL WORKS
            <span className="text-2xl">→</span>
          </Link>
        </div>

        {/* Paragraph Section */}
        <section className="flex flex-col justify-center items-center py-12 md:py-[250px] gap-8 md:gap-12 w-full max-w-[792px] mb-8 md:mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-semibold text-center leading-tight tracking-tight">
            The story your brand deserves. Content that keeps them watching.
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 w-full">
            <Button href="/work" variant="secondary">
              SERVICES
            </Button>
            <Button href="/contact" variant="primary">
              CONTACT US
            </Button>
          </div>
        </section>
      </div>

      {/* Services Section */}
      <section className="flex flex-col md:flex-row items-center w-full max-w-[1536px] mb-16 mx-auto px-4">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            imageSrc={service.imageSrc}
            imageAlt={service.imageAlt}
            description={service.description}
            gradientOpacity={service.gradientOpacity}
            href={service.href}
          />
        ))}
      </section>

      {/* Lower Content Container */}
      <div className="flex flex-col items-center px-4 md:px-20 gap-2.5 relative mx-auto">
        {/* Brand Logos */}
        <section className="flex flex-col justify-center items-center py-12 md:py-50 gap-6 md:gap-9 w-full max-w-[793px] mb-8 md:mb-16">
          <p className="text-base md:text-xl text-center text-white/40">
            WE&apos;VE SHOT WITH
          </p>

          <div className="flex flex-row items-center justify-center gap-8 md:gap-12 w-full">
            {[...Array(3)].map((_, repeatIndex) => (
              <div
                key={repeatIndex}
                className="flex flex-row items-center gap-8 md:gap-12"
              >
                {brandLogos.map((logo) => (
                  <div
                    key={`${logo.alt}-${repeatIndex}`}
                    className="flex items-center"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={100}
                      height={40}
                      className="object-contain h-8 w-auto"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="flex flex-col items-start pb-12 md:pb-50 gap-8 md:gap-15 w-full max-w-[900px] mb-8 md:mb-16 px-4">
          <h2 className="text-5xl font-medium text-center w-full tracking-tight">
            FAQs
          </h2>

          <div className="flex flex-col justify-center items-start gap-15 w-full">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                defaultOpen={faq.defaultOpen}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Invite to Chat */}
      <section className="relative w-full h-[300px] md:h-[388px] mb-8 md:mb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/contact-cta.jpg"
            alt="Contact background"
            fill
            sizes="100vw"
            className="object-cover blur-[2px]"
          />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.72) 0%, rgba(5, 5, 5, 0.8) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-6 md:gap-11 px-4 md:px-8">
          <div className="flex flex-col items-center gap-2.5 w-full max-w-[678px]">
            <h2 className="text-3xl md:text-6xl font-bold text-center leading-none tracking-[-0.02em]">
              ALL GREAT IDEAS START WITH HELLO
            </h2>
            <p className="text-xl md:text-3xl font-medium text-center leading-none">
              Let&apos;s get your story out there!
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-5 w-full">
            <Button href="/work" variant="secondary">
              SERVICES
            </Button>
            <Button
              href="/contact"
              variant="primary"
              icon={
                <Image
                  src="/icons/whatsapp.svg"
                  alt="WhatsApp"
                  width={22}
                  height={22}
                />
              }
            >
              WHATSAPP US!
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col justify-center items-center w-full mx-auto bg-[#050505]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 w-full max-w-[1142px] px-4 md:px-8 mb-8 md:mb-16">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo-large.svg"
              alt="COBALT"
              width={196}
              height={56}
              className="h-10 md:h-14 w-auto"
            />
          </Link>

          <div className="flex flex-row gap-16 md:gap-48 items-start">
            {/* Navigation Links */}
            <div className="flex flex-col justify-start items-start gap-2.5">
              <Link
                href="/about"
                className="text-base md:text-xl font-semibold"
              >
                OUR STORY
              </Link>
              <Link href="/work" className="text-base md:text-xl font-semibold">
                WORK
              </Link>
              <Link href="/work" className="text-base md:text-xl font-semibold">
                SERVICES
              </Link>
              <Link
                href="/contact"
                className="text-base md:text-xl font-semibold"
              >
                CONTACT
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex flex-col justify-start items-start gap-2.5">
              <a href="#" className="text-base md:text-xl font-semibold">
                INSTAGRAM
              </a>
              <a
                href="mailto:hello@cobalt.com"
                className="text-base md:text-xl font-semibold"
              >
                EMAIL
              </a>
              <Link
                href="/contact"
                className="text-base md:text-xl font-semibold"
              >
                HAVE AN IDEA?
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-[831px] w-full max-w-[1142px] px-4 md:px-8">
          <div className="relative w-[100px] h-[150px] md:w-[147px] md:h-[230px] overflow-hidden">
            <Image
              src="/images/case-studies/project-3.png"
              alt="Footer image"
              fill
              sizes="(max-width: 768px) 100px, 147px"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center items-start gap-2.5 w-auto md:w-[108px]">
            <Link href="#" className="text-sm md:text-base whitespace-nowrap">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm md:text-base whitespace-nowrap">
              Terms and conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
