import Image from "next/image";

interface ServiceCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  gradientOpacity?: number;
}

export default function ServiceCard({
  title,
  imageSrc,
  imageAlt,
  gradientOpacity = 60,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col justify-end items-end py-11 flex-1 h-[579px] relative overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]/${gradientOpacity}`}
      />
      <div className="flex flex-row justify-end items-start px-8 pr-8 w-full relative z-10">
        <h3 className="text-6xl font-bold text-right leading-none tracking-[-0.02em] max-w-[405px]">
          {title}
        </h3>
      </div>
    </div>
  );
}
