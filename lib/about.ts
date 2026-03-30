import { client } from "@/sanity/client";
import { aboutPageQuery } from "@/sanity/queries";
import aboutContent from "@/data/about.json";

export interface AboutAction {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  iconSrc?: string;
  iconAlt?: string;
}

export interface AboutContent {
  hero: {
    backgroundImageSrc: string;
    backgroundImageAlt: string;
    paragraphs: string[];
    primaryAction: AboutAction;
  };
  cta: {
    backgroundImageSrc: string;
    backgroundImageAlt: string;
    headline: string;
    subheadline: string;
    buttons: Array<Required<Pick<AboutAction, "label" | "href">> & AboutAction>;
  };
}

function mapSanityToAbout(data: Record<string, unknown>): AboutContent {
  return {
    hero: {
      backgroundImageSrc: data.heroBackgroundImage as string,
      backgroundImageAlt: data.heroBackgroundImageAlt as string,
      paragraphs: data.heroParagraphs as string[],
      primaryAction: {
        label: data.primaryActionLabel as string,
        href: data.primaryActionHref as string,
        iconSrc: data.primaryActionIconSrc as string | undefined,
        iconAlt: data.primaryActionIconAlt as string | undefined,
      },
    },
    cta: {
      backgroundImageSrc: data.ctaBackgroundImage as string,
      backgroundImageAlt: data.ctaBackgroundImageAlt as string,
      headline: data.ctaHeadline as string,
      subheadline: data.ctaSubheadline as string,
      buttons: data.ctaButtons as AboutContent["cta"]["buttons"],
    },
  };
}

/** Fetch about page content — falls back to local JSON when Sanity is not configured. */
export async function getAboutContent(): Promise<AboutContent> {
  if (!client) return aboutContent as AboutContent;

  try {
    const data = await client.fetch(aboutPageQuery);
    if (!data) return aboutContent as AboutContent;
    return mapSanityToAbout(data);
  } catch {
    return aboutContent as AboutContent;
  }
}

/** Synchronous access for backward compatibility — uses JSON only. */
export const about = aboutContent as AboutContent;
