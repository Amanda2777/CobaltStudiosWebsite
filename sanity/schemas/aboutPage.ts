import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fieldsets: [
    { name: "hero", title: "Hero Section", options: { collapsible: true, collapsed: false } },
    { name: "contactCta", title: "Contact CTA Section", options: { collapsible: true, collapsed: false } },
  ],
  fields: [
    // --- Hero Section ---
    defineField({
      name: "heroBackgroundImage",
      title: "Background Image Path",
      type: "string",
      fieldset: "hero",
    }),
    defineField({
      name: "heroBackgroundImageAlt",
      title: "Background Image Alt Text",
      type: "string",
      fieldset: "hero",
    }),
    defineField({
      name: "heroParagraphs",
      title: "Paragraphs",
      type: "array",
      fieldset: "hero",
      of: [{ type: "text" }],
    }),
    defineField({
      name: "primaryActionLabel",
      title: "Button Label",
      type: "string",
      fieldset: "hero",
    }),
    defineField({
      name: "primaryActionHref",
      title: "Button Link",
      type: "string",
      fieldset: "hero",
    }),
    defineField({
      name: "primaryActionIconSrc",
      title: "Button Icon Path",
      type: "string",
      fieldset: "hero",
    }),
    defineField({
      name: "primaryActionIconAlt",
      title: "Button Icon Alt Text",
      type: "string",
      fieldset: "hero",
    }),

    // --- Contact CTA Section ---
    defineField({
      name: "ctaBackgroundImage",
      title: "Background Image Path",
      type: "string",
      fieldset: "contactCta",
    }),
    defineField({
      name: "ctaBackgroundImageAlt",
      title: "Background Image Alt Text",
      type: "string",
      fieldset: "contactCta",
    }),
    defineField({
      name: "ctaHeadline",
      title: "Headline",
      type: "string",
      fieldset: "contactCta",
    }),
    defineField({
      name: "ctaSubheadline",
      title: "Subheadline",
      type: "string",
      fieldset: "contactCta",
    }),
    defineField({
      name: "ctaButtons",
      title: "Buttons",
      type: "array",
      fieldset: "contactCta",
      of: [
        {
          type: "object",
          name: "ctaButton",
          title: "Button",
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
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "About Page" };
    },
  },
});
