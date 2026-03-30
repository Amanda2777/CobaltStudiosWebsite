import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    // Hero
    defineField({
      name: "heroBackgroundImage",
      title: "Hero Background Image Path",
      type: "string",
    }),
    defineField({
      name: "heroBackgroundImageAlt",
      title: "Hero Background Image Alt",
      type: "string",
    }),
    defineField({
      name: "heroParagraphs",
      title: "Hero Paragraphs",
      type: "array",
      of: [{ type: "text" }],
    }),
    defineField({
      name: "primaryActionLabel",
      title: "Primary Action Label",
      type: "string",
    }),
    defineField({
      name: "primaryActionHref",
      title: "Primary Action Link",
      type: "string",
    }),
    defineField({
      name: "primaryActionIconSrc",
      title: "Primary Action Icon Path",
      type: "string",
    }),
    defineField({
      name: "primaryActionIconAlt",
      title: "Primary Action Icon Alt",
      type: "string",
    }),

    // CTA
    defineField({
      name: "ctaBackgroundImage",
      title: "CTA Background Image Path",
      type: "string",
    }),
    defineField({
      name: "ctaBackgroundImageAlt",
      title: "CTA Background Image Alt",
      type: "string",
    }),
    defineField({
      name: "ctaHeadline",
      title: "CTA Headline",
      type: "string",
    }),
    defineField({
      name: "ctaSubheadline",
      title: "CTA Subheadline",
      type: "string",
    }),
    defineField({
      name: "ctaButtons",
      title: "CTA Buttons",
      type: "array",
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
