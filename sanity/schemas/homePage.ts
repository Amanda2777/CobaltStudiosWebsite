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
  fieldsets: [
    { name: "hero", title: "Hero Section", options: { collapsible: true, collapsed: false } },
    { name: "story", title: "Story Section", options: { collapsible: true, collapsed: false } },
    { name: "services", title: "Services Section", options: { collapsible: true, collapsed: false } },
    { name: "brands", title: "Brands Section", options: { collapsible: true, collapsed: false } },
    { name: "faqs", title: "FAQs Section", options: { collapsible: true, collapsed: false } },
    { name: "contactCta", title: "Contact CTA Section", options: { collapsible: true, collapsed: false } },
  ],
  fields: [
    // --- Hero Section ---
    defineField({
      name: "heroTitlePrefix",
      title: "Title Prefix",
      type: "string",
      fieldset: "hero",
      initialValue: "WE ARE",
    }),
    defineField({
      name: "heroTitleSuffix",
      title: "Title Suffix",
      type: "string",
      fieldset: "hero",
      initialValue: "COBALT",
    }),
    defineField({
      name: "defaultActiveCaseStudyNumber",
      title: "Default Active Case Study Number",
      type: "number",
      fieldset: "hero",
      initialValue: 1,
    }),
    defineField({
      name: "caseStudies",
      title: "Case Studies",
      type: "array",
      fieldset: "hero",
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
            defineField({ name: "href", title: "Link to Case Study", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "seeAllWorksLabel",
      title: "See All Works Label",
      type: "string",
      fieldset: "hero",
      initialValue: "SEE ALL WORKS",
    }),

    // --- Story Section ---
    defineField({
      name: "storyHeadline",
      title: "Headline",
      type: "text",
      fieldset: "story",
    }),
    defineField({
      name: "storyButtons",
      title: "Buttons",
      type: "array",
      fieldset: "story",
      of: [actionButton],
    }),

    // --- Services Section ---
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      fieldset: "services",
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

    // --- Brands Section ---
    defineField({
      name: "brandSectionTitle",
      title: "Section Title",
      type: "string",
      fieldset: "brands",
    }),
    defineField({
      name: "brandRepeatCount",
      title: "Logo Repeat Count",
      type: "number",
      fieldset: "brands",
      initialValue: 3,
    }),
    defineField({
      name: "brandLogos",
      title: "Logos",
      type: "array",
      fieldset: "brands",
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

    // --- FAQs Section ---
    defineField({
      name: "faqSectionTitle",
      title: "Section Title",
      type: "string",
      fieldset: "faqs",
      initialValue: "FAQs",
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      fieldset: "faqs",
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

    // --- Contact CTA Section ---
    defineField({
      name: "contactCtaBackgroundImage",
      title: "Background Image",
      type: "string",
      fieldset: "contactCta",
      description: "Path to the background image (e.g. /images/backgrounds/contact-cta.jpg)",
    }),
    defineField({
      name: "contactCtaBackgroundImageAlt",
      title: "Background Image Alt Text",
      type: "string",
      fieldset: "contactCta",
    }),
    defineField({
      name: "contactCtaHeadline",
      title: "Headline",
      type: "string",
      fieldset: "contactCta",
    }),
    defineField({
      name: "contactCtaSubheadline",
      title: "Subheadline",
      type: "string",
      fieldset: "contactCta",
    }),
    defineField({
      name: "contactCtaButtons",
      title: "Buttons",
      type: "array",
      fieldset: "contactCta",
      of: [actionButton],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Home Page" };
    },
  },
});
