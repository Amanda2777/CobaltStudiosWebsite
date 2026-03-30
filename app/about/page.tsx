import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import Navigation from "@/components/Navigation";
import { getAboutContent } from "@/lib/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet COBALT, a team of storytellers, strategists, and creatives building high-impact content for modern brands.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | COBALT",
    description:
      "Meet COBALT, a team of storytellers, strategists, and creatives building high-impact content for modern brands.",
    url: "/about",
    images: [
      {
        url: "/images/backgrounds/about-header.png",
        width: 1200,
        height: 630,
        alt: "COBALT about page",
      },
    ],
  },
};

export default async function About() {
  const about = await getAboutContent();

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navigation transparent />

      <main className="w-full max-w-[1536px] mx-auto pt-[124px] md:pt-0">
        <section className="relative min-h-[66vh] md:min-h-screen overflow-hidden flex items-center">
          <Image
            src={about.hero.backgroundImageSrc}
            alt={about.hero.backgroundImageAlt}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black/72" />

          <div className="relative z-10 mx-auto w-full max-w-[1142px] px-4 md:px-8 py-10 md:py-0">
            <div className="w-full max-w-[620px] pl-0 pr-4 py-12 md:pr-8 md:py-16 space-y-6 md:space-y-8">
              <div className="space-y-5 md:space-y-6">
                {about.hero.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-[18px] md:text-[30px] leading-[1.1]">
                    {paragraph}
                  </p>
                ))}
              </div>

              <Button
                href={about.hero.primaryAction.href}
                variant="primary"
                openInNewTab
                icon={
                  about.hero.primaryAction.iconSrc ? (
                    <Image
                      src={about.hero.primaryAction.iconSrc}
                      alt={about.hero.primaryAction.iconAlt ?? about.hero.primaryAction.label}
                      width={22}
                      height={22}
                    />
                  ) : undefined
                }
              >
                {about.hero.primaryAction.label}
              </Button>
            </div>
          </div>
        </section>

        <section className="relative w-full h-[300px] md:h-[388px] mb-8 md:mb-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={about.cta.backgroundImageSrc}
              alt={about.cta.backgroundImageAlt}
              fill
              sizes="100vw"
              className="object-cover blur-[2px]"
            />

            <div
              className="absolute inset-0 opacity-20"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.72) 0%, rgba(5, 5, 5, 0.8) 100%)",
              }}
            />
          </div>

          <div className="absolute inset-0 flex flex-col justify-center items-center gap-6 md:gap-11 px-4 md:px-8">
            <div className="flex flex-col items-center gap-2.5 w-full max-w-[678px]">
              <h2 className="text-3xl md:text-6xl font-bold text-center leading-none tracking-[-0.02em]">
                {about.cta.headline}
              </h2>
              <p className="text-xl md:text-3xl font-medium text-center leading-none">
                {about.cta.subheadline}
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-5 w-full">
              {about.cta.buttons.map((button) => (
                <Button
                  key={button.label}
                  href={button.href}
                  variant={button.variant ?? "secondary"}
                  icon={
                    button.iconSrc ? (
                      <Image
                        src={button.iconSrc}
                        alt={button.iconAlt ?? button.label}
                        width={22}
                        height={22}
                      />
                    ) : undefined
                  }
                >
                  {button.label}
                </Button>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
