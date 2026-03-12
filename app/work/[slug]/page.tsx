import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import { getWorkBySlug, works } from "@/lib/work";

interface WorkDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    return {
      title: "Work Not Found | Cobalt",
    };
  }

  return {
    title: `${work.clientName} | Cobalt`,
    description: work.teaser,
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navigation transparent />

      <main className="w-full max-w-[1536px] mx-auto pt-24 md:pt-0">
        <header className="bg-black pt-24 md:pt-28 pb-12 md:pb-16">
          <div className="mx-auto w-full max-w-[1142px] px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
              <div className="space-y-3">
                <p className="text-xs md:text-base tracking-wide">CLIENT NAME</p>
                <p className="text-xl md:text-3xl font-semibold">{work.clientName}</p>
                <p className="text-base md:text-xl text-white/80">{work.year}</p>
              </div>

              <div className="space-y-4 md:text-right">
                <p className="text-xs md:text-base tracking-wide">SERVICE GIVEN</p>
                <p className="text-xl md:text-3xl font-semibold">{work.service}</p>
                <p className="text-sm md:text-xl leading-tight text-white/80 max-w-[28ch] md:ml-auto">
                  {work.teaser}
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="space-y-0">
          {/* Mobile: force all images into one vertical list. */}
          <div className="md:hidden">
            {work.detailRows.flatMap((row) => row.images).map((image, imageIndex) => (
              <div
                key={`${work.slug}-mobile-image-${imageIndex}`}
                className="relative w-full"
                style={{ aspectRatio: image.aspectRatio ?? "4 / 3" }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={imageIndex < 2}
                />
              </div>
            ))}
          </div>

          {/* Desktop: preserve row/column layout from JSON. */}
          <div className="hidden md:block">
            {work.detailRows.map((row, rowIndex) => (
              <div
                key={`${work.slug}-row-${rowIndex}`}
                className="grid gap-0"
                style={{
                  gridTemplateColumns: `repeat(${row.images.length}, minmax(0, 1fr))`,
                }}
              >
                {row.images.map((image, imageIndex) => (
                  <div
                    key={`${work.slug}-row-${rowIndex}-image-${imageIndex}`}
                    className="relative w-full"
                    style={{ aspectRatio: image.aspectRatio ?? "4 / 3" }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="100vw"
                      className="object-cover"
                      priority={rowIndex === 0}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
