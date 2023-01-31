import { defineField, defineType } from "sanity";

export default defineType({
  name: "item",
  title: "Item",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),

    defineField({
      name: "priceId",
      title: "Price Id",
      type: "string",
    }),
  ],
});
