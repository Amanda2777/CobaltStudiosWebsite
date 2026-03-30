"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import type { WorkEntry } from "@/lib/work";

interface WorkGridClientProps {
  works: WorkEntry[];
}

export default function WorkGridClient({ works }: WorkGridClientProps) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navigation transparent />

      <main className="w-full max-w-[1536px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {works.map((project, index) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className={`relative w-full ${
                index === 0 ? "h-[464px]" : "h-[340px]"
              } md:h-[680px] overflow-hidden group cursor-pointer`}
              onMouseEnter={() => setHoveredProject(project.slug)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Image
                src={project.workGridImage}
                alt={project.clientName}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              <div
                className={`absolute inset-0 backdrop-blur-[15px] transition-opacity duration-500 ${
                  hoveredProject === project.slug ? "opacity-100" : "opacity-0"
                }`}
              />

              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  hoveredProject === project.slug ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  background:
                    "linear-gradient(to top, rgba(5, 5, 5, 0.55) 0%, rgba(5, 5, 5, 0) 70%)",
                }}
              />

              <div
                className={`absolute inset-0 flex flex-col justify-center items-end px-6 md:px-10 gap-6 md:gap-8 transition-opacity duration-500 ${
                  index === 0 ? "pt-31 md:pt-0" : ""
                } ${hoveredProject === project.slug ? "opacity-100" : "opacity-0"}`}
              >
                <div className="flex flex-col items-end gap-2.5">
                  <p className="text-lg md:text-xl font-semibold text-right">
                    {project.clientName}
                  </p>
                  <p className="text-lg md:text-xl font-semibold">
                    {project.year}
                  </p>
                </div>

                <p className="text-base md:text-xl font-semibold text-right">
                  {project.service}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
