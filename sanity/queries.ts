import { groq } from "next-sanity";

export const homePageQuery = groq`*[_type == "homePage"][0]{
  heroTitlePrefix,
  heroTitleSuffix,
  defaultActiveCaseStudyNumber,
  seeAllWorksLabel,
  storyHeadline,
  storyButtons[]{label, href, variant, iconSrc, iconAlt},
  brandSectionTitle,
  brandRepeatCount,
  faqSectionTitle,
  contactCtaBackgroundImage,
  contactCtaBackgroundImageAlt,
  contactCtaHeadline,
  contactCtaSubheadline,
  contactCtaButtons[]{label, href, variant, iconSrc, iconAlt},
  caseStudies[]{number, clientName, projectName, imageSrc, imageAlt, videoSrc},
  services[]{title, imageSrc, imageAlt, description, gradientOpacity, href},
  faqs[]{question, answer, defaultOpen},
  brandLogos[]{src, alt}
}`;

export const aboutPageQuery = groq`*[_type == "aboutPage"][0]{
  heroBackgroundImage,
  heroBackgroundImageAlt,
  heroParagraphs,
  primaryActionLabel,
  primaryActionHref,
  primaryActionIconSrc,
  primaryActionIconAlt,
  ctaBackgroundImage,
  ctaBackgroundImageAlt,
  ctaHeadline,
  ctaSubheadline,
  ctaButtons[]{label, href, variant, iconSrc, iconAlt}
}`;

export const allWorksQuery = groq`*[_type == "workProject"] | order(sortOrder asc){
  _id,
  title,
  "slug": slug.current,
  clientName,
  year,
  service,
  teaser,
  workGridImage,
  topImage,
  coverImage,
  vimeoIds,
  sortOrder,
  detailRows[]{
    images[]{src, alt}
  }
}`;

export const workBySlugQuery = groq`*[_type == "workProject" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  clientName,
  year,
  service,
  teaser,
  workGridImage,
  topImage,
  coverImage,
  vimeoIds,
  sortOrder,
  detailRows[]{
    images[]{src, alt}
  }
}`;
