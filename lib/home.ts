import { client } from "@/sanity/client";
import { homePageQuery } from "@/sanity/queries";
import homeContent from "@/data/home.json";

export interface HomeCaseStudy {
  number: number;
  clientName: string;
  projectName: string;
  imageSrc: string;
  imageAlt: string;
  videoSrc: string;
  href?: string;
}

export interface HomeService {
  id: number;
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  gradientOpacity: number;
  href: string;
  videoSrc?: string;
}

export interface HomeFaq {
  id: number;
  question: string;
  answer: string;
  defaultOpen: boolean;
}

export interface HomeBrandLogo {
  src: string;
  alt: string;
}

export interface HomeActionButton {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  iconSrc?: string;
  iconAlt?: string;
  openInNewTab?: boolean;
}

export interface HomeContent {
  hero: {
    titlePrefix: string;
    titleSuffix: string;
    defaultActiveCaseStudyNumber: number;
  };
  seeAllWorksLabel: string;
  storySection: {
    headline: string;
    buttons: HomeActionButton[];
  };
  brandSection: {
    title: string;
    repeatCount: number;
  };
  faqSection: {
    title: string;
  };
  contactCta: {
    backgroundImageSrc: string;
    backgroundImageAlt: string;
    headline: string;
    subheadline: string;
    buttons: HomeActionButton[];
  };
  caseStudies: HomeCaseStudy[];
  services: HomeService[];
  faqs: HomeFaq[];
  brandLogos: HomeBrandLogo[];
}

function mapSanityToHome(data: Record<string, unknown>): HomeContent {
  return {
    hero: {
      titlePrefix: (data.heroTitlePrefix as string) ?? "WE ARE",
      titleSuffix: (data.heroTitleSuffix as string) ?? "COBALT",
      defaultActiveCaseStudyNumber: (data.defaultActiveCaseStudyNumber as number) ?? 1,
    },
    seeAllWorksLabel: (data.seeAllWorksLabel as string) ?? "SEE ALL WORKS",
    storySection: {
      headline: data.storyHeadline as string,
      buttons: data.storyButtons as HomeActionButton[],
    },
    brandSection: {
      title: data.brandSectionTitle as string,
      repeatCount: (data.brandRepeatCount as number) ?? 3,
    },
    faqSection: {
      title: (data.faqSectionTitle as string) ?? "FAQs",
    },
    contactCta: {
      backgroundImageSrc: data.contactCtaBackgroundImage as string,
      backgroundImageAlt: data.contactCtaBackgroundImageAlt as string,
      headline: data.contactCtaHeadline as string,
      subheadline: data.contactCtaSubheadline as string,
      buttons: data.contactCtaButtons as HomeActionButton[],
    },
    caseStudies: data.caseStudies as HomeCaseStudy[],
    services: ((data.services as Array<Record<string, unknown>>) ?? []).map((s, i) => ({
      ...s,
      id: i + 1,
    })) as HomeService[],
    faqs: ((data.faqs as Array<Record<string, unknown>>) ?? []).map((f, i) => ({
      ...f,
      id: i + 1,
    })) as HomeFaq[],
    brandLogos: data.brandLogos as HomeBrandLogo[],
  };
}

/** Fetch home page content — falls back to local JSON when Sanity is not configured. */
export async function getHomeContent(): Promise<HomeContent> {
  if (!client) return homeContent as HomeContent;

  try {
    const data = await client.fetch(homePageQuery);
    if (!data) return homeContent as HomeContent;
    return mapSanityToHome(data);
  } catch {
    return homeContent as HomeContent;
  }
}

/** Synchronous access for backward compatibility — uses JSON only. */
export const home = homeContent as HomeContent;
