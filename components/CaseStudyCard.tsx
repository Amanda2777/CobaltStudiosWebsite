import Image from "next/image";
import Link from "next/link";

interface CaseStudyCardProps {
  number: number;
  clientName: string;
  projectName: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
  isHovered?: boolean;
  isDimmed?: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export default function CaseStudyCard({
  number,
  clientName,
  projectName,
  imageSrc,
  imageAlt,
  href,
  isHovered = false,
  isDimmed = false,
  onHoverStart,
  onHoverEnd,
}: CaseStudyCardProps) {
  return (
    <Link
      href={href ?? "/work"}
      className="flex flex-col items-start flex-1 relative cursor-pointer"
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      {/* Overlay for blacking out non-hovered cards */}
      <div
        className={`absolute inset-0 z-30 transition-opacity duration-500 pointer-events-none ${
          isDimmed ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundColor: "rgb(5, 5, 5)" }}
      />

      {/* Overlay for dimming the hovered card */}
      <div
        className={`absolute inset-0 bg-black z-10 transition-opacity duration-500 pointer-events-none ${
          isHovered ? "opacity-40" : "opacity-0"
        }`}
      />

      <div
        className={`flex flex-row justify-between items-start px-2 md:px-5 pb-2 w-full mb-2 relative z-20 transition-opacity duration-500 ${
          isDimmed ? "opacity-10" : "opacity-100"
        }`}
      >
        <span className="text-xs md:text-sm font-medium">{number}</span>
        <div className="flex flex-col justify-center items-end">
          <span className="text-xs md:text-sm font-semibold">{clientName}</span>
          <span className="text-xs md:text-sm text-white/80">
            {projectName}
          </span>
        </div>
      </div>
      <div className="w-full h-[180px] md:h-[238px] relative overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 50vw, 339px"
          className="object-cover"
        />
      </div>
    </Link>
  );
}
