import homeContent from "@/data/home.json";

export interface HomeCaseStudy {
  number: number;
  clientName: string;
  projectName: string;
  imageSrc: string;
  imageAlt: string;
  videoSrc: string;
}

export interface HomeService {
  id: number;
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  gradientOpacity: number;
  href: string;
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

export const home = homeContent as HomeContent;
