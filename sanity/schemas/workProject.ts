import { defineType, defineField } from "sanity";

export default defineType({
  name: "workProject",
  title: "Work Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "clientName", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "clientName",
      title: "Client Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
    }),
    defineField({
      name: "service",
      title: "Service",
      type: "string",
    }),
    defineField({
      name: "teaser",
      title: "Teaser",
      type: "text",
    }),
    defineField({
      name: "workGridImage",
      title: "Work Grid Image Path",
      type: "string",
      description: "Image shown in the work grid and as the left image on the detail page",
    }),
    defineField({
      name: "topImage",
      title: "Top Image Path",
      type: "string",
      description: "Right image in the first row of the detail page",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image Path",
      type: "string",
      description: "Full-width image at the bottom of the detail page",
    }),
    defineField({
      name: "vimeoIds",
      title: "Vimeo Video IDs",
      type: "array",
      of: [{ type: "string" }],
      description: "Up to 3 Vimeo video IDs — renders as side-by-side frames between the images",
    }),
    defineField({
      name: "sortOrder",
      title: "Sort Order",
      type: "number",
      description: "Lower numbers appear first",
    }),
    defineField({
      name: "detailRows",
      title: "Detail Image Rows",
      type: "array",
      of: [
        {
          type: "object",
          name: "imageRow",
          title: "Image Row",
          fields: [
            defineField({
              name: "images",
              title: "Images",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "rowImage",
                  title: "Image",
                  fields: [
                    defineField({ name: "src", title: "Image Path", type: "string", validation: (r) => r.required() }),
                    defineField({ name: "alt", title: "Alt Text", type: "string", validation: (r) => r.required() }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
  orderings: [
    {
      title: "Sort Order",
      name: "sortOrderAsc",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "clientName", subtitle: "title" },
  },
});
