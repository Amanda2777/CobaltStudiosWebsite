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
      <div className="flex flex-row justify-between items-start px-5 pb-2 w-full mb-2">
        <span className="text-sm font-medium">{number}</span>
        <div className="flex flex-col justify-center items-end">
          <span className="text-sm font-semibold">{clientName}</span>
          <span className="text-sm text-white/80">{projectName}</span>
        </div>
      </div>
      <div className="w-[339px] h-[238px] relative overflow-hidden self-stretch flex-none">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="339px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
