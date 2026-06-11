"use client";

import { useState, useRef, useEffect, useLayoutEffect } from "react";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";
import CaseStudyCard from "@/components/CaseStudyCard";
import ServiceCard from "@/components/ServiceCard";
import FAQItem from "@/components/FAQItem";
import Button from "@/components/Button";
import ScatterGallery from "@/components/ScatterGallery";
import PackagesPolaroid from "@/components/PackagesPolaroid";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { HomeContent } from "@/lib/home";

interface HomeClientProps {
  content: HomeContent;
}

export default function HomeClient({ content }: HomeClientProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scrollCaseStudy, setScrollCaseStudy] = useState<number | null>(null);

  // Single streamed video source + background mirror canvas.
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const bgCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const heroWrapperRef = useRef<HTMLDivElement>(null);
  const cardRowRef = useRef<HTMLDivElement>(null);
  const categoryRowsRef = useRef<(HTMLDivElement | null)[]>([]);
  const serviceCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const faqItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const storySectionRef = useRef<HTMLElement>(null);
  const industrySectionRef = useRef<HTMLElement>(null);
  const servicesSectionRef = useRef<HTMLElement>(null);

  const caseStudies = content.caseStudies;
  const services = content.services;
  const faqs = content.faqs;


  const activeCaseStudyNumber =
    scrollCaseStudy ?? hoveredCard ?? content.hero.defaultActiveCaseStudyNumber;
  const activeCaseStudy =
    caseStudies.find((study) => study.number === activeCaseStudyNumber) ??
    caseStudies[0];

  const heroSuffixes = [
    content.hero.titleSuffix, // "COBALT"
    "VISIONARIES",
    "CREATORS",
    "BUILDERS",
  ];
  const activeIdx = caseStudies.findIndex((s) => s.number === activeCaseStudyNumber);
  const activeSuffix = heroSuffixes[activeIdx] ?? content.hero.titleSuffix;

  const CASE_STUDY_YEARS: Record<number, number> = { 1: 2026, 2: 2025, 3: 2025, 4: 2026 };

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

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = heroWrapperRef.current;
    const row = cardRowRef.current;
    if (!wrapper || !row) return;

    let prevIdx = -1;
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: "+=5000",
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          refreshPriority: 1,
          onUpdate(self) {
            const idx = Math.min(Math.floor(self.progress * 4), 3);
            if (idx !== prevIdx) {
              prevIdx = idx;
              setScrollCaseStudy(caseStudies[idx].number);
            }
          },
          onLeaveBack() {
            prevIdx = -1;
            setScrollCaseStudy(null);
          },
        },
      });

      // Slide the card row left as user scrolls through the 4 videos
      tl.to(row, { x: -300, ease: "none", duration: 1 });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      mm.revert();
    };
  }, [caseStudies]);

  // Fire after all child components (including ScatterGallery) have mounted and
  // set up their own ScrollTriggers, so every trigger recalculates with the
  // hero pin spacer already in the DOM.
  useEffect(() => {
    const id = setTimeout(() => ScrollTrigger.refresh(), 100);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    const rows = categoryRowsRef.current.filter(Boolean) as HTMLDivElement[];
    if (!rows.length) return;

    const ctx = gsap.context(() => {
      rows.forEach((row) => {
        gsap.set(row, { opacity: 0, y: 36 });
        gsap.to(row, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const cards = serviceCardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        gsap.set(card, { opacity: 0, y: 40 });
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          delay: i * 0.12,
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const items = faqItemsRef.current.filter(Boolean) as HTMLDivElement[];
    if (!items.length) return;

    const ctx = gsap.context(() => {
      items.forEach((item) => {
        gsap.set(item, { opacity: 0, y: 30 });
        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const triggers = [
      { ref: storySectionRef,   extra: 800 },
      { ref: industrySectionRef, extra: 800 },
      { ref: servicesSectionRef, extra: 800 },
    ]
      .map(({ ref, extra }) => {
        const el = ref.current;
        if (!el) return null;
        return ScrollTrigger.create({
          trigger: el,
          start: "top top",
          end: `+=${extra}`,
          pin: true,
          pinSpacing: true,
        });
      })
      .filter(Boolean) as ScrollTrigger[];

    return () => triggers.forEach((t) => t.kill());
  }, []);

  return (
    <div className="bg-[#050505] text-white">
      {/* Header Container */}
      <div className="flex flex-col items-center px-4 md:px-20 gap-2.5 relative mx-auto">
        {/* Header */}
        <Navigation transparent />
      </div>

      {/* Hero + Cards — pinned for scroll-driven video trigger */}
      <div ref={heroWrapperRef}>

      {/* Hero Content - Full Width */}
      <section className="w-full relative isolate overflow-hidden" style={{ height: "calc(100vh - 9rem)" }}>
        {/* Blurred background canvas */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-20">
            <canvas ref={bgCanvasRef} className="w-full h-full" aria-hidden="true" />
          </div>
        </div>

        {/* Symmetric 3-col grid: equal outer columns keep card perfectly centred
            regardless of how wide the suffix text is */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-full w-full">

          <h1 className="text-sm sm:text-base md:text-5xl font-bold md:tracking-tight whitespace-nowrap text-right pr-3 md:pr-6 relative z-10">
            {content.hero.titlePrefix}
          </h1>

          {/* Hero video card — fills full section height, fixed width */}
          <div className="h-full w-[180px] sm:w-[220px] md:w-96 relative overflow-hidden z-10">
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
            {/* Text overlay — updates with each video */}
            <div key={`text-${activeCaseStudy.number}`} className="absolute inset-0 flex flex-col justify-between p-3 md:p-4 pointer-events-none animate-fade-in">
              <div className="flex justify-between items-start pt-16 md:pt-20">
                <span className="text-[10px] md:text-xs text-white/70 tracking-wide">{activeCaseStudy.clientName}</span>
                <span className="text-[10px] md:text-xs text-white/70 tracking-wide">&ldquo;{activeCaseStudy.projectName}&rdquo;</span>
              </div>
              <div className="flex justify-center">
                <span className="text-[10px] md:text-xs text-white/70 tracking-wide">{CASE_STUDY_YEARS[activeCaseStudy.number]}</span>
              </div>
            </div>
          </div>

          <h1
            key={activeSuffix}
            className="text-sm sm:text-base md:text-5xl font-bold md:tracking-tight whitespace-nowrap text-left pl-3 md:pl-6 relative z-10"
          >
            {activeSuffix}
          </h1>

        </div>
      </section>

      {/* Featured Case Studies — sits below hero; together they fill one viewport */}
      <div ref={cardRowRef} className="grid grid-cols-2 md:flex md:flex-row md:justify-between items-center gap-4 md:gap-7 w-full max-w-[1536px] mx-auto px-4 py-3 mb-16">
        {caseStudies.map((study) => (
          <CaseStudyCard
            key={study.number}
            number={study.number}
            clientName={study.clientName}
            projectName={study.projectName}
            imageSrc={study.imageSrc}
            imageAlt={study.imageAlt}
            href={study.href}
            isHovered={scrollCaseStudy === study.number || hoveredCard === study.number}
            isDimmed={
              (scrollCaseStudy !== null && scrollCaseStudy !== study.number) ||
              (scrollCaseStudy === null && hoveredCard !== null && hoveredCard !== study.number)
            }
            onHoverStart={() => setHoveredCard(study.number)}
            onHoverEnd={() => setHoveredCard(null)}
          />
        ))}
      </div>

      </div>{/* end heroWrapperRef */}

      {/* Story Section */}
      <section ref={storySectionRef} className="w-full max-w-[1536px] mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10 bg-[#050505]">
        <div className="mx-auto w-full max-w-[1142px]">
          {/* Two-column text row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mb-10 md:mb-12">
            {/* Left: headline */}
            <div>
              <h2 className="text-4xl md:text-5xl leading-[0.9] tracking-tighter uppercase">
              <span className="font-sans font-bold">THE STORY YOUR BRAND DESERVES.</span>
              <span style={{ fontFamily: 'var(--font-instrument-serif)', fontWeight: 400, fontStyle: 'italic', textTransform: 'none' }}>Content that keeps them watching.</span>
              </h2>
            </div>

            {/* Right: body + buttons */}
            <div className="flex flex-col justify-center gap-8">
              <p className="text-[1.5rem] text-[#B3B3B3] leading-tight w-full">
                Most brands have a story worth telling. Most content never tells it properly. As a full-service creative studio, we make brand films, video ads, and social media content built to convert — keeping your vision intact and your marketing budget focused on results. </p>
              <div className="flex flex-row items-center gap-4">
                <Button href="/contact" variant="primary">CONTACT US</Button>
                <Button href="#services" variant="secondary">SERVICES</Button>
              </div>
            </div>
          </div>

          {/* Full-width image */}
          <div className="relative w-full h-[200px] md:h-[300px] overflow-hidden">
            <Image
              src="/images/backgrounds/aboutbackground.jpg"
              alt="Story section"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <ScatterGallery />

      {/* Industry Categories */}
      <section ref={industrySectionRef} className="w-full max-w-[1536px] mx-auto px-4 md:px-8 py-8 md:py-12">
        {[
          [
            { label: "Lifestyle",      img: "/images/story/lifestyle.jpg" },
            { label: "Restaurants",    img: "/images/story/restaurants.jpg" },
            { label: "Aesthetics",     img: "/images/story/aesthetics.jpg" },
            { label: "Food & Drinks",  img: "/images/story/food.jpg" },
          ],
          [
            { label: "Beauty",           img: "/images/story/beauty.jpg" },
            { label: "Active & Outdoor", img: "/images/story/outdoor.jpg" },
            { label: "Travel",           img: "/images/story/travel.jpg" },
            { label: "Nightlife",        img: "/images/story/nightlife.jpg" },
          ],
          [
            { label: "Fitness",            img: "/images/story/fitness.jpg" },
            { label: "Wellness & Pilates", img: "/images/story/wellnes.jpeg" },
            { label: "Jewellery",          img: "/images/story/jewllery.jpg" },
            { label: "Events & Luxury",    img: "/images/story/events.jpg" },
          ],
        ].map((row, rowIndex) => (
          <div
            key={rowIndex}
            ref={(el) => { categoryRowsRef.current[rowIndex] = el; }}
            className="flex flex-row items-center justify-center gap-2 w-full py-1 md:py-2"
          >
            {row.map((item) => (
              <div key={item.label} className="flex flex-row items-center gap-2">
                <span
                  style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", fontWeight: 400 }}
                  className="text-[clamp(1rem,2.5vw,3rem)] text-white whitespace-nowrap"
                >
                  {item.label}
                </span>
                <div className="relative flex-shrink-0 overflow-hidden" style={{ height: '2.5vw', width: 'calc(2.5vw * 2 / 3)' }}>
                  <Image
                    src={item.img}
                    alt={item.label}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
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

      </div>

      {/* Services Section */}
      <section ref={servicesSectionRef} id="services" className="flex flex-col md:flex-row items-start gap-20 w-full max-w-[1536px] mb-16 mx-auto px-20 py-20">
        {services.map((service, i) => (
          <div key={service.id} ref={(el) => { serviceCardsRef.current[i] = el; }}>
            <ServiceCard
              title={service.title}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
              description={service.description}
              gradientOpacity={service.gradientOpacity}
              href={service.href}
              videoSrc={service.videoSrc}
            />
          </div>
        ))}
      </section>

      {/* Packages Banner */}
      <PackagesPolaroid />

      {/* Lower Content Container */}
      <div className="flex flex-col items-center px-4 md:px-20 gap-2.5 relative mx-auto">
        {/* Brand Logos — hidden for now, re-enable when ready */}
        {/* <section className="flex flex-col justify-center items-center py-12 md:py-50 gap-6 md:gap-9 w-full max-w-[793px] mb-8 md:mb-16">
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
        </section> */}

        {/* FAQs */}
        <section className="flex flex-col items-start pb-12 md:pb-50 gap-8 md:gap-15 w-full max-w-[900px] mb-8 md:mb-16 px-4">
          <h2 className="text-5xl font-medium text-center w-full tracking-tight">
            {content.faqSection.title}
          </h2>

          <div className="flex flex-col justify-center items-start gap-15 w-full">
            {faqs.map((faq, i) => (
              <div key={faq.id} ref={(el) => { faqItemsRef.current[i] = el; }} className="w-full">
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  defaultOpen={faq.defaultOpen}
                />
              </div>
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
                openInNewTab={button.openInNewTab}
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
