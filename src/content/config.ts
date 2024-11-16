import { defineCollection, z } from "astro:content";
import { isValidDateFormat } from "@utils/validatingDate";
// import { SITE_DEFAULT_CONFIG } from "@/global/siteInfo";

/**
 * ? Los slug: z.string(), en las colecciones dan error porque ya los está creando astro por defecto. Por ende, al desestructurarlo te dará error si los tienes.
 * Las comento para que no me den errores
 */

const essayCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // essayImage: z.object({
    //   src: z.union([z.string().url(), z.string()]),
    //   alt: z.string(),
    // }),
    // keywords: z.array(z.string()),
    // publishDate: z.string().refine(isValidDateFormat, {
    //   message: "The date must be in the format: YYYY-MM-DD. Make sure you have written it in the correct format.",
    // }),
    // lastTimeEdited: z.string().refine(
    //   (val) => (val ? isValidDateFormat(val) : true), {
    //   message: "The date must be in the format: YYYY-MM-DD. Make sure you have written it in the correct format.",
    //   }).transform((val, ctx) => {
    //     const publishDate = ctx;
    //     return val ?? publishDate;
    //   }).optional(),
    // tags: z.array(z.string()),
    // language: z.enum(["es"]),
    // author: z.string().default("mrjark"),
    // authorLink: z.string(),
    // readingTime: z.string(),
    // categories: z.array(z.string()),
    // status: z.boolean().default(true),
    // canonicalURL: z.string().url(),
  }),
});

const bookNotesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    // publishDate: z.string().refine(isValidDateFormat, {
    //   message: "The date must be in the format: YYYY-MM-DD. Make sure you have written it in the correct format.",
    // }),
    // lastTimeEdited: z.string().refine(
    //   (val) => (val ? isValidDateFormat(val) : true), {
    //   message: "The date must be in the format: YYYY-MM-DD. Make sure you have written it in the correct format.",
    //   }).transform((val, ctx) => {
    //     const publishDate = ctx;
    //     return val ?? publishDate;
    //   }).optional(),
    // tags: z.array(z.string()),
    // bookImage: z.object({
    //   src: z.union([z.string().url(), z.string()]),
    //   alt: z.string(),
    // }),
    // language: z.enum(["es"]),
    // author: z.string().default("mrjark"),
    // authorLink: z.string(),
    // readingTime: z.string(),
    // categories: z.array(z.string()),
    // keywords: z.array(z.string()),
    // status: z.boolean().default(true),
    // canonicalURL: z.string().url(),
    // buyItOnAmazon: z.object({
    //   spain: z.string().url(),
    //   usa: z.string().url()
    // }).optional()
  }),
});

const biasCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z
      .object({
        name: z.string().max(60),
        cover: z.object({
          src: image(),
          alt: z.string(),
        }),
        description: z.string().min(40).max(160),
        publishDate: z.string().refine(isValidDateFormat),
        lastTimeEdited: z
          .string()
          .refine(isValidDateFormat)
          .refine((val) => (val ? isValidDateFormat(val) : true))
          .transform((val, ctx) => {
            const publishDate = ctx;
            return val ?? publishDate;
          })
          .optional(),
        tags: z.array(z.string()),
        language: z.enum(["es"]),
        keywords: z.array(z.string()),
        relatedLinks: z
          .array(
            z.object({
              label: z.string(),
              url: z.string().url(),
            })
          )
          .optional(),
        readingTime: z.number().optional(),
      })
      .refine(
        (data) => {
          if (data.lastTimeEdited && data.publishDate) {
            const publishDateObj = new Date(data.publishDate);
            const lastTimeEditedObj = new Date(data.lastTimeEdited);
            return lastTimeEditedObj >= publishDateObj;
          }
          return true; // Si no hay lastTimeEdited, no aplica la validación en el frontmatter pero cuando se crea el componente, se le añade en el componente del {blog/bias/essay}SEO.astro para los metatags
        },
        {
          message:
            "The field { lastTimeEdited } cannot be earlier than { publishDate }.",
          path: ["lastTimeEdited"], // Indica el campo donde se muestra el error
        }
      ),
});

export const collections = {
  bias: biasCollection,
  essay: essayCollection,
  bookNotes: bookNotesCollection,
};
