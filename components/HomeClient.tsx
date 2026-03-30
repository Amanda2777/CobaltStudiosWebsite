"use client";

import { useState, useRef, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";
import CaseStudyCard from "@/components/CaseStudyCard";
import ServiceCard from "@/components/ServiceCard";
import FAQItem from "@/components/FAQItem";
import Button from "@/components/Button";
import type { HomeContent } from "@/lib/home";

interface HomeClientProps {
  content: HomeContent;
}

export default function HomeClient({ content }: HomeClientProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Single streamed video source + background mirror canvas.
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const bgCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const caseStudies = content.caseStudies;
  const services = content.services;
  const faqs = content.faqs;
  const brandLogos = content.brandLogos;

  const activeCaseStudyNumber =
    hoveredCard ?? content.hero.defaultActiveCaseStudyNumber;
  const activeCaseStudy =
    caseStudies.find((study) => study.number === activeCaseStudyNumber) ??
    caseStudies[0];

  useEffect(() => {
    const heroVideo = heroVideoRef.current;

    if (!heroVideo) {
      return;
    }

    heroVideo.currentTime = 0;
    void heroVideo.play().catch(() => {});
  }, [activeCaseStudyNumber]);

  useEffect(() => {
    const heroVideo = heroVideoRef.current;
    const canvas = bgCanvasRef.current;

    if (!heroVideo || !canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    let rafId = 0;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    };

    const drawVideoFrameCover = () => {
      if (heroVideo.readyState < 2 || !heroVideo.videoWidth || !heroVideo.videoHeight) {
        return;
      }

      const vw = heroVideo.videoWidth;
      const vh = heroVideo.videoHeight;
      const cw = canvas.width;
      const ch = canvas.height;

      if (!cw || !ch) {
        return;
      }

      const videoRatio = vw / vh;
      const canvasRatio = cw / ch;

      let sx = 0;
      let sy = 0;
      let sw = vw;
      let sh = vh;

      if (videoRatio > canvasRatio) {
        sw = vh * canvasRatio;
        sx = (vw - sw) / 2;
      } else {
        sh = vw / canvasRatio;
        sy = (vh - sh) / 2;
      }

      context.clearRect(0, 0, cw, ch);
      context.drawImage(heroVideo, sx, sy, sw, sh, 0, 0, cw, ch);
    };

    const renderLoop = () => {
      drawVideoFrameCover();
      rafId = window.requestAnimationFrame(renderLoop);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    rafId = window.requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [activeCaseStudyNumber]);

  return (
    <div className="bg-[#050505] text-white">
      {/* Header Container */}
      <div className="flex flex-col items-center px-4 md:px-20 gap-2.5 relative mx-auto">
        {/* Header */}
        <Navigation transparent />
      </div>

      {/* Hero Content - Full Width */}
      <section className="flex flex-row justify-center items-center pt-20 pb-10 md:pt-24 md:pb-16 gap-2 md:gap-4 isolate w-full min-h-[573px] relative overflow-hidden">
        {/* Background video when hovering - dimmed with animation - Full Width */}
        <div className="absolute inset-0 left-0 right-0 z-0 transition-opacity duration-500">
          <div className="absolute inset-0 opacity-20 transition-opacity duration-500">
            <canvas
              ref={bgCanvasRef}
              className="w-full h-full"
              aria-hidden="true"
            />
          </div>
        </div>

        <h1 className="text-sm sm:text-base md:text-5xl font-bold md:tracking-tight whitespace-nowrap px-3 md:px-0 relative z-10">
          {content.hero.titlePrefix}
        </h1>

        {/* Hero Video/Image - Multiple with opacity transitions */}
        <div className="w-56 sm:w-60 h-90 md:w-96 md:h-138 relative overflow-hidden z-10">
          <video
            key={`hero-${activeCaseStudy.number}`}
            ref={heroVideoRef}
            src={activeCaseStudy.videoSrc}
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          />
        </div>

        <h1 className="text-sm sm:text-base md:text-5xl font-bold md:tracking-tight whitespace-nowrap px-3 md:px-0 relative z-10">
          {content.hero.titleSuffix}
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
            {content.seeAllWorksLabel}
            <span className="text-2xl">→</span>
          </Link>
        </div>

        {/* Paragraph Section */}
        <section className="flex flex-col justify-center items-center py-12 md:py-[250px] gap-8 md:gap-12 w-full max-w-[792px] mb-8 md:mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-semibold text-center leading-tight tracking-tight">
            {content.storySection.headline}
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 w-full">
            {content.storySection.buttons.map((button) => (
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
            {content.brandSection.title}
          </p>

          <div className="flex flex-row items-center justify-center gap-8 md:gap-12 w-full">
            {Array.from({ length: content.brandSection.repeatCount }).map((_, repeatIndex) => (
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
            {content.faqSection.title}
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
            src={content.contactCta.backgroundImageSrc}
            alt={content.contactCta.backgroundImageAlt}
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
              {content.contactCta.headline}
            </h2>
            <p className="text-xl md:text-3xl font-medium text-center leading-none">
              {content.contactCta.subheadline}
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-5 w-full">
            {content.contactCta.buttons.map((button) => (
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
