import { defineField, defineType } from "sanity";
import {
  scopedCss,
  generateHeadingTagField,
  generateHeadingSizeField,
  generateBackgroundPatternField,
  generateButtonField,
  generateRichtextField,
} from "../defaultFields";
const blockCategory = "hero";
const HeroVariant05 = defineType({
  name: "HeroVariant05",
  title: "Hero Variant 05",
  type: "object",
  _menuCategory: blockCategory,
  groups: [
    {
      name: "content",
      title: "Content",
    },
    {
      name: "style",
      title: "Style",
    },
  ],
  fields: [
    defineField({
      name: "block_category",
      title: "Block Category",
      type: "string",
      initialValue: blockCategory,
      readOnly: true,
      hidden: true,
    }),
    defineField(scopedCss),
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      initialValue: "Section Label",
      group: "content",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Data to enrich your online business",
      group: "content",
    }),

    generateHeadingTagField({
      name: `heading_tag`,
      title: `Heading Tag`,
    }),
    generateHeadingSizeField({
      name: `heading_size`,
      title: `Heading Size`,
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "text",
      initialValue: `Gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.`,
      rows: 4,
      group: "content",
    }),

    generateRichtextField({
      name: "additional_content",
      title: "Additional Content",
      initialValue: [],
    }),

    ...generateButtonField({
      name: "button",
      titleLabel: "Button Title",
      destinationLabel: "Button Destination",
      themeLabel: `Button Theme`,
    }),
    defineField({
      name: "form",
      title: "Form",
      type: "reference",
      to: [{ type: "form" }],
      group: "content",
    }),
    defineField({
      name: "enable_blobs",
      title: "Enable Blobs",
      type: "boolean",
      initialValue: () => false,
      group: "style",
    }),
    defineField({
      name: "align_items_center",
      title: "Align Items Center",
      type: "boolean",
      initialValue: () => false,
      group: "style",
    }),
    defineField({
      name: "enable_animations",
      title: "Enable Animations",
      type: "boolean",
      initialValue: () => false,
      group: "style",
    }),
    defineField({
      name: "enable_form_beam",
      title: "Enable Form Beam",
      type: "boolean",
      initialValue: () => false,
      group: "style",
    }),
    defineField({
      name: "Beam_color_list",
      title: "Beam Color List",
      type: "string",
      hidden: ({ parent }) => !parent?.[`enable_form_beam`],
      initialValue: "",
      group: "style",
    }),
    ...generateBackgroundPatternField(),
  ],
  preview: {
    select: {
      heading: "heading",
    },
    prepare(selection) {
      const { heading } = selection;
      return {
        title: heading || "Heading needs to be set",
        subtitle: "Hero Variant 05",
      };
    },
  },
});

export default HeroVariant05;
