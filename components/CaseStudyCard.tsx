import Image from "next/image";

interface CaseStudyCardProps {
  number: number;
  clientName: string;
  projectName: string;
  imageSrc: string;
  imageAlt: string;
}

export default function CaseStudyCard({
  number,
  clientName,
  projectName,
  imageSrc,
  imageAlt,
}: CaseStudyCardProps) {
  return (
    <div className="flex flex-col items-start flex-1">
      <div className="flex flex-row justify-between items-start px-2 md:px-5 pb-2 w-full mb-2">
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
    </div>
  );
}
