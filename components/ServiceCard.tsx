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
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(180deg, rgba(5, 5, 5, 0.58) 0%, rgba(5, 5, 5, 1) 100%)",
          }}
        />

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

          {/* Title - always visible, fixed height to align descriptions */}
          <div className="flex flex-row justify-end items-end px-4 md:px-[30px] w-full h-[120px] md:h-[150px]">
            <h3 className="text-3xl md:text-5xl font-bold text-right leading-[100%] tracking-[-0.02em] text-white w-full">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
