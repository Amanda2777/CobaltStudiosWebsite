"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

interface ServiceBlockProps {
  title: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  paragraphs: string[];
  note?: string | null;
  videoSrc?: string;
  flip?: boolean;
}

export default function ServiceBlock({
  title,
  price,
  imageSrc,
  imageAlt,
  paragraphs,
  note,
  videoSrc,
  flip = false,
}: ServiceBlockProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!videoSrc || !videoRef.current || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;
        if (entry.isIntersecting) {
          videoRef.current.currentTime = 0;
          void videoRef.current.play().catch(() => {});
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [videoSrc]);

  return (
    <section
      className={`flex flex-col ${flip ? "md:flex-row-reverse" : "md:flex-row"} gap-0 md:gap-16 py-16 md:py-24`}
    >
      {/* Text */}
      <div className="flex flex-col justify-center gap-5 md:flex-1 pb-8 md:pb-0">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight uppercase mb-1">
            {title}
          </h2>
          <p
            className="text-lg md:text-3xl text-[#FFFFFF]"
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            {price}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-[1.775rem] tracking-tight leading-[1.1] text-[#B3B3B3]"
            >
              {p}
            </p>
          ))}
        </div>

      </div>

      {/* Media */}
      <div
        ref={containerRef}
        className="relative w-full md:flex-1 overflow-hidden"
        style={{ aspectRatio: "3 / 4" }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover transition-opacity duration-700 ${videoSrc ? "group-video-playing:opacity-0" : ""}`}
        />
        {videoSrc && (
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>
    </section>
  );
}
