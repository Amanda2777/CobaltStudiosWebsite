"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/Button";

const IMAGES = [
  { src: "/images/packages/byredo.png",           rotation:  3 },
  { src: "/images/packages/diamondsespresso.png", rotation: -5 },
  { src: "/images/packages/hermeslipstick.png",   rotation:  7 },
  { src: "/images/packages/mercedes.png",         rotation: -3 },
  { src: "/images/packages/pizza.png",            rotation:  6 },
  { src: "/images/packages/typologymakeup.png",   rotation: -7 },
  { src: "/images/packages/watch.png",            rotation:  4 },
];

export default function PackagesPolaroid() {
  const sectionRef   = useRef<HTMLDivElement>(null);
  const polaroidsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = polaroidsRef.current.filter(Boolean) as HTMLDivElement[];

      // First card visible; the rest are hidden until their scroll slot
      gsap.set(cards[0], { opacity: 1 });
      if (cards.length > 1) gsap.set(cards.slice(1), { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${(cards.length - 1) * 450}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Each image snaps in quickly during its own 1-unit slot
      cards.forEach((card, i) => {
        if (i === 0) return;
        tl.to(card, { opacity: 1, duration: 0.25 }, i - 1);
      });
    }, sectionRef);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full bg-[#050505] mb-16 flex items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-full max-w-[1536px] mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24 px-6 md:px-20 py-16">

        {/* Polaroid stack — images appear here one by one on scroll */}
        <div className="relative flex-shrink-0 w-[220px] h-[280px] md:w-[300px] md:h-[370px]">
          {IMAGES.map((img, i) => (
            <div
              key={i}
              ref={(el) => { polaroidsRef.current[i] = el; }}
              className="absolute inset-0"
              style={{ transform: `rotate(${img.rotation}deg)` }}
            >
              <Image
                src={img.src}
                alt=""
                fill
                sizes="300px"
                className="object-contain"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        {/* Text content — static, unaffected by scroll animation */}
        <div className="flex flex-col items-start gap-5 text-left">
          <h2
            className="text-3xl md:text-5xl tracking-tight uppercase"
            style={{ fontFamily: "var(--font-instrument-serif)", fontWeight: 400, color: "#FCFFA2" }}
          >
            COMPARE OUR PACKAGES
          </h2>
          <p className="text-xl md:text-2xl font-semibold tracking-tight text-white/80 uppercase max-w-[540px] leading-snug">
            FROM CONTENT CREATION TO FULL CREATIVE DIRECTION, FIND THE PACKAGE THAT&apos;S RIGHT FOR YOUR BRAND
          </p>
          <div className="flex flex-row items-center gap-5 mt-2">
            <Button href="/services" variant="secondary">SERVICES</Button>
            <Button
              href="https://wa.me/36204189003"
              variant="primary"
              openInNewTab
              icon={
                <Image
                  src="/icons/whatsapp.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                />
              }
            >
              WHATSAPP US!
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
