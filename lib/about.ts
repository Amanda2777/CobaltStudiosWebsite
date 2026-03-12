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

export const about = aboutContent as AboutContent;
