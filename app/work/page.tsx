"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Image from "next/image";

export default function Work() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      image: "/images/case-studies/project-1.png",
      client: "CLIENT NAME",
      year: "2025",
      service: "CREATIVE PRODUCTION",
    },
    {
      id: 2,
      image: "/images/case-studies/project-2.png",
      client: "CLIENT NAME",
      year: "2025",
      service: "BRANDING",
    },
    {
      id: 3,
      image: "/images/case-studies/project-3.png",
      client: "CLIENT NAME",
      year: "2025",
      service: "SOCIAL MEDIA",
    },
    {
      id: 4,
      image: "/images/case-studies/project-4.jpg",
      client: "CLIENT NAME",
      year: "2025",
      service: "CREATIVE PRODUCTION",
    },
    {
      id: 5,
      image: "/images/hero/hero-main.jpg",
      client: "CLIENT NAME",
      year: "2025",
      service: "BRANDING",
    },
    {
      id: 6,
      image: "/images/services/creative-production.jpg",
      client: "CLIENT NAME",
      year: "2025",
      service: "SOCIAL MEDIA",
    },
    {
      id: 7,
      image: "/images/services/branding.jpg",
      client: "CLIENT NAME",
      year: "2024",
      service: "CREATIVE PRODUCTION",
    },
    {
      id: 8,
      image: "/images/services/social-media.jpg",
      client: "CLIENT NAME",
      year: "2024",
      service: "BRANDING",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navigation transparent />

      <main className="w-full max-w-[1536px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative w-full h-[340px] md:h-[680px] overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Background Image */}
              <Image
                src={project.image}
                alt={project.client}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              {/* Blurred overlay on hover - Progressive blur from top to bottom */}
              {/* Background gradient layer */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  hoveredProject === project.id ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(5, 5, 5, 0.38) 100%)",
                }}
              />
              {/* Progressive blur layer */}
              <div
                className={`absolute inset-0 backdrop-blur-[50px] transition-opacity duration-500 ${
                  hoveredProject === project.id ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  maskImage:
                    "linear-gradient(180deg, transparent 0%, black 100%)",
                  WebkitMaskImage:
                    "linear-gradient(180deg, transparent 0%, black 100%)",
                }}
              />

              {/* Hover Details */}
              <div
                className={`absolute inset-0 flex flex-col justify-center items-end px-6 md:px-10 gap-6 md:gap-8 transition-opacity duration-500 ${
                  hoveredProject === project.id ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Client info */}
                <div className="flex flex-col items-end gap-2.5">
                  <p className="text-lg md:text-xl font-semibold text-right">
                    {project.client}
                  </p>
                  <p className="text-lg md:text-xl font-semibold">
                    {project.year}
                  </p>
                </div>

                {/* Service */}
                <p className="text-base md:text-xl font-semibold text-right">
                  {project.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
