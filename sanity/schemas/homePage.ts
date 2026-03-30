import { defineType, defineField } from "sanity";

const actionButton = {
  name: "actionButton",
  title: "Action Button",
  type: "object" as const,
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (r) => r.required() }),
    defineField({ name: "href", title: "Link", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "variant",
      title: "Variant",
      type: "string",
      options: { list: ["primary", "secondary"] },
      initialValue: "secondary",
    }),
    defineField({ name: "iconSrc", title: "Icon Path", type: "string" }),
    defineField({ name: "iconAlt", title: "Icon Alt Text", type: "string" }),
  ],
};

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    // Hero
    defineField({
      name: "heroTitlePrefix",
      title: "Hero Title Prefix",
      type: "string",
      initialValue: "WE ARE",
    }),
    defineField({
      name: "heroTitleSuffix",
      title: "Hero Title Suffix",
      type: "string",
      initialValue: "COBALT",
    }),
    defineField({
      name: "defaultActiveCaseStudyNumber",
      title: "Default Active Case Study Number",
      type: "number",
      initialValue: 1,
    }),

    // See All Works
    defineField({
      name: "seeAllWorksLabel",
      title: "See All Works Label",
      type: "string",
      initialValue: "SEE ALL WORKS",
    }),

    // Story Section
    defineField({
      name: "storyHeadline",
      title: "Story Section Headline",
      type: "text",
    }),
    defineField({
      name: "storyButtons",
      title: "Story Section Buttons",
      type: "array",
      of: [actionButton],
    }),

    // Brand Section
    defineField({
      name: "brandSectionTitle",
      title: "Brand Section Title",
      type: "string",
    }),
    defineField({
      name: "brandRepeatCount",
      title: "Brand Logo Repeat Count",
      type: "number",
      initialValue: 3,
    }),

    // FAQ Section
    defineField({
      name: "faqSectionTitle",
      title: "FAQ Section Title",
      type: "string",
      initialValue: "FAQs",
    }),

    // Contact CTA
    defineField({
      name: "contactCtaBackgroundImage",
      title: "Contact CTA Background Image",
      type: "string",
      description: "Path to the background image (e.g. /images/backgrounds/contact-cta.jpg)",
    }),
    defineField({
      name: "contactCtaBackgroundImageAlt",
      title: "Contact CTA Background Image Alt",
      type: "string",
    }),
    defineField({
      name: "contactCtaHeadline",
      title: "Contact CTA Headline",
      type: "string",
    }),
    defineField({
      name: "contactCtaSubheadline",
      title: "Contact CTA Subheadline",
      type: "string",
    }),
    defineField({
      name: "contactCtaButtons",
      title: "Contact CTA Buttons",
      type: "array",
      of: [actionButton],
    }),

    // Case Studies
    defineField({
      name: "caseStudies",
      title: "Hero Case Studies",
      type: "array",
      of: [
        {
          type: "object",
          name: "caseStudy",
          title: "Case Study",
          fields: [
            defineField({ name: "number", title: "Number", type: "number", validation: (r) => r.required() }),
            defineField({ name: "clientName", title: "Client Name", type: "string" }),
            defineField({ name: "projectName", title: "Project Name", type: "string" }),
            defineField({ name: "imageSrc", title: "Image Path", type: "string" }),
            defineField({ name: "imageAlt", title: "Image Alt Text", type: "string" }),
            defineField({ name: "videoSrc", title: "Video URL", type: "url" }),
          ],
        },
      ],
    }),

    // Services
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          name: "service",
          title: "Service",
          fields: [
            defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
            defineField({ name: "imageSrc", title: "Image Path", type: "string" }),
            defineField({ name: "imageAlt", title: "Image Alt Text", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text" }),
            defineField({ name: "gradientOpacity", title: "Gradient Opacity", type: "number", initialValue: 0 }),
            defineField({ name: "href", title: "Link", type: "string" }),
          ],
        },
      ],
    }),

    // FAQs
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          name: "faq",
          title: "FAQ",
          fields: [
            defineField({ name: "question", title: "Question", type: "string", validation: (r) => r.required() }),
            defineField({ name: "answer", title: "Answer", type: "text", validation: (r) => r.required() }),
            defineField({ name: "defaultOpen", title: "Open by Default", type: "boolean", initialValue: false }),
          ],
        },
      ],
    }),

    // Brand Logos
    defineField({
      name: "brandLogos",
      title: "Brand Logos",
      type: "array",
      of: [
        {
          type: "object",
          name: "brandLogo",
          title: "Brand Logo",
          fields: [
            defineField({ name: "src", title: "Logo Path", type: "string", validation: (r) => r.required() }),
            defineField({ name: "alt", title: "Alt Text", type: "string", validation: (r) => r.required() }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Home Page" };
    },
  },
});
