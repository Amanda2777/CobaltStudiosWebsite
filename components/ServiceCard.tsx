"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description?: string;
  gradientOpacity?: number;
  href?: string;
  videoSrc?: string;
}

export default function ServiceCard({
  title,
  imageSrc,
  imageAlt,
  description = "",
  href = "/work",
  videoSrc,
}: ServiceCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current && videoSrc) {
      videoRef.current.currentTime = 0;
      void videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <Link
      href={href}
      className="group block flex-1 w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col w-full">
        {/* Image/video container — overflow-hidden clips the scale */}
        <div className="relative h-[260px] md:h-[320px] w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={`object-cover transition-all duration-500 ${videoSrc ? "group-hover:opacity-0" : "group-hover:scale-105"}`}
          />
          {videoSrc && (
            <video
              ref={videoRef}
              src={videoSrc}
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          )}
        </div>

        {/* Title — always visible */}
        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white uppercase pt-4">
          {title}
        </h3>

        {/* Description — fades in below title on hover, left-aligned */}
        <p className="text-sm md:text-base text-white/70 leading-tight mt-2 max-w-[320px] opacity-0 translate-y-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
          {description}
        </p>
      </div>
    </Link>
  );
}
