import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import { getWorkBySlugAsync, getAllWorks } from "@/lib/work";

interface WorkDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const works = await getAllWorks();
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = await getWorkBySlugAsync(slug);

  if (!work) {
    return {
      title: "Work Not Found",
      description: "The requested case study could not be found.",
    };
  }

  return {
    title: work.clientName,
    description: work.teaser,
    alternates: {
      canonical: `/work/${work.slug}`,
    },
    openGraph: {
      type: "article",
      title: `${work.clientName} | COBALT`,
      description: work.teaser,
      url: `/work/${work.slug}`,
      images: [
        {
          url: work.workGridImage,
          alt: work.clientName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${work.clientName} | COBALT`,
      description: work.teaser,
      images: [work.workGridImage],
    },
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const work = await getWorkBySlugAsync(slug);

  if (!work) {
    notFound();
  }

  const hasTopRow = work.workGridImage || work.topImage;
  const hasVideos = work.vimeoIds && work.vimeoIds.length > 0;

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
          {/* ── Mobile: stack everything vertically ── */}
          <div className="md:hidden">
            {work.workGridImage && (
              <div className="relative w-full" style={{ height: "680px" }}>
                <Image
                  src={work.workGridImage}
                  alt={work.clientName}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
              </div>
            )}
            {work.topImage && (
              <div className="relative w-full" style={{ height: "680px" }}>
                <Image
                  src={work.topImage}
                  alt={`${work.clientName} detail`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            )}
            {hasVideos &&
              work.vimeoIds!.map((id, i) => (
                <div key={i} className="relative w-full overflow-hidden" style={{ height: "680px" }}>
                  <iframe
                    src={`https://player.vimeo.com/video/${id}?badge=0&autopause=0&player_id=0&app_id=58479`}
                    className="absolute inset-0 w-full h-full"
                    style={{ border: "none" }}
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    allowFullScreen
                    title={`${work.clientName} video ${i + 1}`}
                  />
                </div>
              ))}
            {work.coverImage && (
              <div className="relative w-full" style={{ height: "775px" }}>
                <Image
                  src={work.coverImage}
                  alt={`${work.clientName} cover`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>

          {/* ── Desktop: 3-section layout ── */}
          <div className="hidden md:block">
            {/* Row 1: grid image + top image */}
            {hasTopRow && (
              <div
                className="grid gap-0"
                style={{
                  gridTemplateColumns:
                    work.workGridImage && work.topImage ? "1fr 1fr" : "1fr",
                  height: "680px",
                }}
              >
                {work.workGridImage && (
                  <div className="relative w-full h-full">
                    <Image
                      src={work.workGridImage}
                      alt={work.clientName}
                      fill
                      sizes="50vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                )}
                {work.topImage && (
                  <div className="relative w-full h-full">
                    <Image
                      src={work.topImage}
                      alt={`${work.clientName} detail`}
                      fill
                      sizes="50vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                )}
              </div>
            )}

            {/* Row 2: Vimeo video frames */}
            {hasVideos && (
              <div
                className="grid gap-0"
                style={{
                  gridTemplateColumns: `repeat(${work.vimeoIds!.length}, 1fr)`,
                  height: "680px",
                }}
              >
                {work.vimeoIds!.map((id, i) => (
                  <div key={i} className="relative w-full h-full overflow-hidden">
                    <iframe
                      src={`https://player.vimeo.com/video/${id}?badge=0&autopause=0&player_id=0&app_id=58479`}
                      className="absolute inset-0 w-full h-full"
                      style={{ border: "none" }}
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                      allowFullScreen
                      title={`${work.clientName} video ${i + 1}`}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Row 3: cover image (full width) */}
            {work.coverImage && (
              <div className="relative w-full" style={{ height: "775px" }}>
                <Image
                  src={work.coverImage}
                  alt={`${work.clientName} cover`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
