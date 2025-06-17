import { defineField, defineType } from "sanity";
import {
  generateHeadingTagField,
  generateHeadingSizeField,
  scopedCss,
  generateBackgroundPatternField,
  generateButtonField,
} from "../defaultFields";
const blockCategory = "hero";
const HeroVariant03 = defineType({
  name: "HeroVariant03",
  title: "Hero Variant 03",
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
    defineField(scopedCss),
    defineField({
      name: "block_category",
      title: "Block Category",
      type: "string",
      initialValue: blockCategory,
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "background_theme",
      title: "Background Theme",
      type: "string",
      initialValue: "primary",
      group: "content",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
        ],
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      group: "content",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "align_left",
      title: "Align Left",
      type: "boolean",
      initialValue: () => false,
      group: "style",
    }),
    defineField({
      name: "enable_background_tint",
      title: "Enable Background Tint",
      type: "boolean",
      initialValue: () => false,
      group: "style",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Page Heading",
      group: "content",
    }),
    generateHeadingTagField(`heading_tag`, `Heading Tag`),
    generateHeadingSizeField(`heading_size`, `Heading Size`),
    generateHeadingTagField(`description_tag`, `Description Tag`),
    generateHeadingSizeField(`description_size`, `Description Size`),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      initialValue:
        "Gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
      rows: 4,
      group: "content",
    }),
    ...generateButtonField({
      name: "button",
      titleLabel: "Button Title",
      destinationLabel: "Button Destination",
      themeLabel: `Button Theme`,
    }),
    ...generateButtonField({
      name: "button_two",
      titleLabel: "Button Two Title",
      destinationLabel: "Button Two Destination",
      themeLabel: `Button Two Theme`,
    }),

    defineField({
      name: "enable_animations",
      title: "Enable Animations",
      type: "boolean",
      initialValue: () => false,
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
        subtitle: "Hero Variant 03",
      };
    },
  },
});

export default HeroVariant03;
