"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScatterItem {
  srcA: string; // shown during phase 1
  srcB: string; // swaps in as text reveals
  top: string;
  left: string;
  width: number;
  height: number;
  rotation: number;
  hideOnMobile?: boolean;
}

const IMAGES: ScatterItem[] = [
  // Top row
  { srcA: "/images/case-studies/project-1.png",      srcB: "/images/case-studies/solo_cover.jpg",         top: "4%",  left: "1%",  width: 172, height: 132, rotation: 0 },
  { srcA: "/images/case-studies/project-2.png",      srcB: "/images/case-studies/frame1.png",             top: "2%",  left: "18%", width: 138, height: 108, rotation: 0,  hideOnMobile: true },
  { srcA: "/images/case-studies/Brunch_top.jpg",     srcB: "/images/case-studies/frame2.png",             top: "7%",  left: "37%", width: 148, height: 114, rotation: 0, hideOnMobile: true },
  { srcA: "/images/case-studies/project-4.png",      srcB: "/images/case-studies/fram3.png",              top: "3%",  left: "60%", width: 144, height: 112, rotation: 0,  hideOnMobile: true },
  { srcA: "/images/case-studies/solo_top.jpg",       srcB: "/images/case-studies/frame4.png",             top: "5%",  left: "80%", width: 162, height: 124, rotation: 0 },
  // Mid
  { srcA: "/images/case-studies/SpottedCow_top.jpg", srcB: "/images/services/cpcover.jpg",                top: "38%", left: "1%",  width: 150, height: 114, rotation: 0  },
  { srcA: "/images/case-studies/letoCover.jpg",      srcB: "/images/services/smmanage.png",               top: "35%", left: "15%", width: 124, height: 96,  rotation: 0, hideOnMobile: true },
  { srcA: "/images/case-studies/optera_top.jpg",     srcB: "/images/backgrounds/aboutbackground.jpg",     top: "40%", left: "73%", width: 152, height: 116, rotation: 0,  hideOnMobile: true },
  { srcA: "/images/case-studies/ballers_grid.png",   srcB: "/images/backgrounds/about-header.png",        top: "42%", left: "86%", width: 140, height: 108, rotation: 0 },
  // Bottom row
  { srcA: "/images/case-studies/project-3.jpg",      srcB: "/images/case-studies/MDDiamond_top.jpg",      top: "67%", left: "3%",  width: 160, height: 122, rotation: 0  },
  { srcA: "/images/case-studies/MDDiamond_top.jpg",  srcB: "/images/case-studies/tenby_cover.png",        top: "71%", left: "19%", width: 144, height: 112, rotation: 0, hideOnMobile: true },
  { srcA: "/images/case-studies/tenby_cover.png",    srcB: "/images/case-studies/optera_cover.jpg",       top: "64%", left: "50%", width: 164, height: 126, rotation: 0,  hideOnMobile: true },
  { srcA: "/images/case-studies/optera_cover.jpg",   srcB: "/images/case-studies/ballers_grid.png",       top: "69%", left: "68%", width: 134, height: 104, rotation: 0, hideOnMobile: true },
  { srcA: "/images/case-studies/leto_top.png",       srcB: "/images/backgrounds/hello.jpg",               top: "66%", left: "84%", width: 155, height: 120, rotation: 0  },
];

export default function ScatterGallery() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const imageARef   = useRef<(HTMLDivElement | null)[]>([]);
  const imageBRef   = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef    = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const setA = imageARef.current.filter(Boolean) as HTMLDivElement[];
      const setB = imageBRef.current.filter(Boolean) as HTMLDivElement[];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${isMobile ? 1400 : 2200}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      // Phase 1 (0–1.5s): images drift into scattered positions
      tl.from(setA, {
        opacity: 0,
        scale: 0.8,
        y: () => gsap.utils.random(-40, 40) as number,
        x: () => gsap.utils.random(-20, 20) as number,
        stagger: { amount: 1, from: "random" },
        ease: "power2.out",
        duration: 1.5,
      }, 0);

      // Phase 2 (1.8–3.1s): images swap one by one in random order, instantly
      const indices = Array.from({ length: setA.length }, (_, i) => i);
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
      indices.forEach((imgIdx, order) => {
        const t = 1.8 + order * 0.1;
        if (setA[imgIdx]) tl.set(setA[imgIdx], { opacity: 0 }, t);
        if (setB[imgIdx]) tl.set(setB[imgIdx], { opacity: 1 }, t);
      });

      // Title wipes in from left to right
      tl.fromTo(
        titleRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", ease: "none", duration: 0.9 },
        1.8
      );

      // Subtitle follows
      tl.fromTo(
        subtitleRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", ease: "none", duration: 0.6 },
        2.5
      );

      // Phase 3 (3.2–4s): everything exits
      tl.to([...setA, ...setB], {
        opacity: 0,
        ease: "power1.in",
        duration: 0.8,
      }, 3.2);

      tl.to([titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: -14,
        ease: "power1.in",
        duration: 0.8,
      }, 3.2);

    }, sectionRef);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: "100vh" }}
    >
      {IMAGES.map((img, i) => (
        <div
          key={i}
          className={`absolute overflow-hidden${img.hideOnMobile ? " hidden md:block" : ""}`}
          style={{
            top: img.top,
            left: img.left,
            width: img.width,
            height: img.height,
            transform: `rotate(${img.rotation}deg)`,
          }}
        >
          {/* Image A — visible first */}
          <div
            ref={(el) => { imageARef.current[i] = el; }}
            className="absolute inset-0"
            style={{ willChange: "opacity" }}
          >
            <Image src={img.srcA} alt="" fill sizes="200px" className="object-cover" aria-hidden="true" />
          </div>
          {/* Image B — swaps in as text reveals */}
          <div
            ref={(el) => { imageBRef.current[i] = el; }}
            className="absolute inset-0"
            style={{ opacity: 0, willChange: "opacity" }}
          >
            <Image src={img.srcB} alt="" fill sizes="200px" className="object-cover" aria-hidden="true" />
          </div>
        </div>
      ))}

      {/* Centre text — clip-path wipes in left → right */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-6">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-none uppercase mb-5"
          style={{ clipPath: "inset(0 100% 0 0)" }}
        >
          content that works for you
        </h2>
        <p
          ref={subtitleRef}
          className="text-xl md:text-3xl text-white/80"
          style={{
            fontFamily: "var(--font-instrument-serif)",
            fontStyle: "italic",
            fontWeight: 400,
            clipPath: "inset(0 100% 0 0)",
          }}
        >
          one shoot gives you 30 days of posts
        </p>
      </div>
    </div>
  );
}
