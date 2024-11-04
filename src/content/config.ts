import { defineCollection, z } from "astro:content";

/**
 * Las comento para que no me den errores
 */

const essayCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(), 
    // description: z.string(), 
    // essayImage: z.object({
    //   src: z.union([z.string().url(), z.string()]), 
    //   alt: z.string(),
    // }),
    // keywords: z.array(z.string()), 
    // publishDate: z.string(), 
    // llastTimeEdited: z.string().optional(), 
    // tags: z.array(z.string()),
    // language: z.enum(["es"]),
    // author: z.string().default("mrjark"), 
    // authorLink: z.string(), 
    // readingTime: z.string(), 
    // categories: z.array(z.string()), 
    // // slug: z.string(), // Slug para SEO astro lo crea automáticamente por eso no hace falta tenerlo
    // status: z.boolean().default(true), 
    // canonicalURL: z.string().url(),
  }),
});

const bookNotesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(), 
    // publishDate: z.string(), 
    // lastTimeEdited: z.string().optional(),
    // description: z.string(),
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
    // // slug: z.string(), // Slug para SEO astro lo crea automáticamente por eso no hace falta tenerlo
    // status: z.boolean().default(true), 
    // canonicalURL: z.string().url(),
    // buyOnAmazon: z.object({
    //   spain: z.string().url(),
    //   usa: z.string().url()
    // }).optional()
  }),
});

const biasCollection = defineCollection({
  schema: z.object({
    biasName: z.string(), 
    // publishDate: z.string().date(), //para los metatags del SEO debe ser string y luego pasarlo a ISO
    publishDate: z.string(), 
    lastTimeEdited: z.string().optional(),
    description: z.string(), 
    tags: z.array(z.string()),
    biasImage: z.object({
      src: z.union([z.string().url(), z.string()]), 
      alt: z.string(),
    }),
    language: z.enum(["es"]),
    keywords: z.array(z.string()), 
    // slug: z.string(), // Slug para SEO -> astro lo crea automáticamente por eso no hace falta tenerlo
    relatedLinks: z.array(z.object({
      label: z.string(), 
      url: z.string().url()
    })).optional(),
    readingTime: z.number().optional(), 
  }),
});

export const collections = {
  bias: biasCollection, 
  essay: essayCollection, 
  bookNotes: bookNotesCollection,
}
