import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description?: string;
  gradientOpacity?: number;
  href?: string;
}

export default function ServiceCard({
  title,
  imageSrc,
  imageAlt,
  description = "A short description that describes this service in plain terms. At most 3 lines.",
  gradientOpacity = 60,
  href = "/work",
}: ServiceCardProps) {
  return (
    <Link href={href} className="group block flex-1 w-full">
      <div className="flex flex-col justify-end items-end py-8 md:py-[45px] h-[400px] md:h-[579px] w-full relative overflow-hidden isolate">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />

        {/* Default gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]/${gradientOpacity} transition-opacity duration-300 group-hover:opacity-0`}
        />

        {/* Hover gradient - darker */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Content container */}
        <div className="flex flex-col justify-end items-end gap-4 w-full relative z-10">
          {/* Description - only visible on hover */}
          <div className="flex flex-col items-start px-4 md:px-[30px] gap-4 md:gap-[25px] w-full opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <p className="text-base md:text-xl font-medium leading-none text-white">
              LEARN MORE
            </p>
            <p className="text-xl md:text-[30px] font-medium leading-[100%] text-white/80 max-w-[240px] md:max-w-[304px]">
              {description}
            </p>
          </div>

          {/* Title - always visible */}
          <div className="flex flex-row justify-end items-start px-4 md:px-[30px] w-full">
            <h3 className="text-3xl md:text-6xl font-bold text-right leading-[100%] tracking-[-0.02em] max-w-[250px] md:max-w-[339px] text-white">
              {title}
            </h3>
          </div>
        </div>

        {/* Pointer icon - visible on hover */}
        <div className="absolute bottom-[302px] right-[30px] w-6 h-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 4V19.27C5 19.95 5.78 20.35 6.31 19.92L12 15.58L17.69 19.92C18.22 20.35 19 19.95 19 19.27V4C19 3.45 18.55 3 18 3H6C5.45 3 5 3.45 5 4Z"
              fill="white"
              stroke="black"
              strokeWidth="0.75"
            />
            <line
              x1="16.14"
              y1="12.5"
              x2="16.86"
              y2="12.5"
              stroke="black"
              strokeWidth="0.75"
            />
            <line
              x1="14.74"
              y1="12.5"
              x2="15.46"
              y2="12.5"
              stroke="black"
              strokeWidth="0.75"
            />
            <line
              x1="13.34"
              y1="12.5"
              x2="14.06"
              y2="12.5"
              stroke="black"
              strokeWidth="0.75"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
