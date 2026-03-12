"use client";

import { useState, useRef, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";
import CaseStudyCard from "@/components/CaseStudyCard";
import ServiceCard from "@/components/ServiceCard";
import FAQItem from "@/components/FAQItem";
import Button from "@/components/Button";
import { home } from "@/lib/home";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Refs for hero and background videos
  const heroVideoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const bgVideoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const caseStudies = home.caseStudies;
  const services = home.services;
  const faqs = home.faqs;
  const brandLogos = home.brandLogos;

  useEffect(() => {
    const cardToShow = hoveredCard ?? home.hero.defaultActiveCaseStudyNumber;
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

  const activeCaseStudyNumber =
    hoveredCard ?? home.hero.defaultActiveCaseStudyNumber;

  return (
    <div className="bg-[#050505] text-white">
      {/* Header Container */}
      <div className="flex flex-col items-center px-4 md:px-20 gap-2.5 relative mx-auto">
        {/* Header */}
        <Navigation transparent />
      </div>

      {/* Hero Content - Full Width */}
      <section className="flex flex-col md:flex-row justify-center items-center py-12 md:py-20 pb-6 md:pb-8 gap-4 isolate w-full min-h-[573px] relative overflow-hidden">
        {/* Background video when hovering - dimmed with animation - Full Width */}
        <div className="absolute inset-0 left-0 right-0 z-0 transition-opacity duration-500">
          {caseStudies.map((study) => (
            <div
              key={`bg-${study.number}`}
              className={`absolute inset-0 transition-opacity duration-500 ${
                study.number === activeCaseStudyNumber
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
          {home.hero.titlePrefix}
        </h1>

        {/* Hero Video/Image - Multiple with opacity transitions */}
        <div className="w-[200px] h-[311px] md:w-[298px] md:h-[463px] relative overflow-hidden z-10">
          {/* Case study videos */}
          {caseStudies.map((study) => (
            <div
              key={`hero-${study.number}`}
              className={`absolute inset-0 transition-opacity duration-500 ${
                study.number === activeCaseStudyNumber
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
          {home.hero.titleSuffix}
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
            {home.seeAllWorksLabel}
            <span className="text-2xl">→</span>
          </Link>
        </div>

        {/* Paragraph Section */}
        <section className="flex flex-col justify-center items-center py-12 md:py-[250px] gap-8 md:gap-12 w-full max-w-[792px] mb-8 md:mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-semibold text-center leading-tight tracking-tight">
            {home.storySection.headline}
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 w-full">
            {home.storySection.buttons.map((button) => (
              <Button key={button.label} href={button.href} variant={button.variant}>
                {button.label}
              </Button>
            ))}
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
            {home.brandSection.title}
          </p>

          <div className="flex flex-row items-center justify-center gap-8 md:gap-12 w-full">
            {Array.from({ length: home.brandSection.repeatCount }).map((_, repeatIndex) => (
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
            {home.faqSection.title}
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
            src={home.contactCta.backgroundImageSrc}
            alt={home.contactCta.backgroundImageAlt}
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
              {home.contactCta.headline}
            </h2>
            <p className="text-xl md:text-3xl font-medium text-center leading-none">
              {home.contactCta.subheadline}
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-5 w-full">
            {home.contactCta.buttons.map((button) => (
              <Button
                key={button.label}
                href={button.href}
                variant={button.variant}
                icon={
                  button.iconSrc ? (
                    <Image
                      src={button.iconSrc}
                      alt={button.iconAlt ?? button.label}
                      width={22}
                      height={22}
                    />
                  ) : undefined
                }
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
