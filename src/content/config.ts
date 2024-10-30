import { defineCollection, z } from "astro:content";

const blogs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(), 
    createdDate: z.date(), 
    lastTimeEdited: z.string().date().optional(), 
    description: z.string(), 
    tags: z.array(z.string()), 
    blogImage: z.object({
      src: z.union([z.string().url(), z.string()]), 
      alt: z.string(),
    }),
    language: z.enum(["es"]),
    author: z.string().default("mrjark"), 
    authorLink: z.string(), 
    readingTime: z.string(), 
    categories: z.array(z.string()), 
    keywords: z.array(z.string()), 
    // slug: z.string(), // Slug para SEO
    status: z.boolean().default(true), 
    canonicalURL: z.string().url(),
  }),
});

const bookNotes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(), 
    createdDate: z.date(), 
    lastTimeEdited: z.string().date().optional(), 
    description: z.string(),
    tags: z.array(z.string()), 
    bookImage: z.object({
      src: z.union([z.string().url(), z.string()]), 
      alt: z.string(),
    }),
    language: z.enum(["es"]),
    author: z.string().default("mrjark"), 
    authorLink: z.string(), 
    readingTime: z.string(), 
    categories: z.array(z.string()), 
    keywords: z.array(z.string()), 
    // slug: z.string(), // Slug para SEO
    status: z.boolean().default(true), 
    canonicalURL: z.string().url(),
    buyOnAmazon: z.object({
      spain: z.string().url(),
      usa: z.string().url()
    }).optional()
  }),
});

const biases = defineCollection({
  schema: z.object({
    biasName: z.string(), 
    createdDate: z.string().date(), 
    lastTimeEdited: z.string().date().optional(), 
    description: z.string(), 
    tags: z.array(z.string()),
    biasImage: z.object({
      src: z.union([z.string().url(), z.string()]), 
      alt: z.string(),
    }),
    language: z.enum(["es"]),
    keywords: z.array(z.string()), 
    // slug: z.string(), // Slug para SEO
    relatedLinks: z.array(z.object({
      label: z.string(), 
      url: z.string().url()
    })).optional(),
    readingTime: z.number().optional(), 
  }),
});

export const collections = {
  biases, 
  blogs, 
  bookNotes
}