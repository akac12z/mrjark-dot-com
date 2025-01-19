# Explicaciones para crear las colecciones de buena manera

Estoy haceindo el curso de DevTalles explican super bien cómo funciona astro y te dan ejemplos reales de cómo hacer las cosas, mrjark's approve 👍🏽.

Esta documentación la estoy haciendo a través de:

- [Astro Docs](https://docs.astro.build/en/guides/content-collections/)
- [ChatGPT](https://chatgpt.com/)
- [Zod readme](https://github.com/colinhacks/zod) en GitHub

## Frontmatter SEO Frienfdly

Lo primero que he hecho ha sido preguntarle a ChatGPT cuáles eras las formas correctas de hacer lo más SEO Friendly las _collections_ tanto para los usuarios como para los motores de búsqueda.

Esta ha sido su respuesta:

### Frontmatter de la _Essay Collection_

title: "El título SEO-friendly del post" # (Máx. 60 caracteres, incluye una palabra clave)
slug: "titulo-seo-friendly" # (URL amigable, derivada del título) date: "2024-09-24" # Fecha de publicación
description: "Breve descripción optimizada para SEO" # (Máx. 160 caracteres)
tags: ["growth", "psicología"] # (Lista de etiquetas relevantes)
language: "Español - es" Idioma
coverImage: "/images/cover-image.jpg" # Imagen de portada con un nombre relevante
coverImageAlt: "Descripción accesible de la imagen de portada" # Texto alternativo de la imagen
author: "mrjark" # Nombre del autor o autores
authorImage: "/images/author-image.jpg" # Imagen del autor (opcional)
category: "Growth Hacking" # Categoría del post para ayudar en la organización y SEO
readingTime: "5 min read" # Estimación del tiempo de lectura
canonicalURL: "<https://tu-dominio.com/titulo-seo-friendly>" # URL canónica para evitar duplicados
metaTitle: "Título optimizado para SEO" # Título específico para SEO (si es diferente del título principal)
metaDescription: "Descripción para SEO que aparecerá en los resultados de búsqueda" # (Máx. 160 caracteres)
ogImage: "/images/og-image.jpg" # Imagen optimizada para Open Graph (redes sociales)
ogTitle: "Título para compartir en redes sociales" # Título para Open Graph (si es diferente del título principal)
ogDescription: "Descripción para redes sociales" # Descripción para Open Graph (máx. 160 caracteres)
twitterCard: "summary_large_image" # Configuración de la tarjeta de Twitter (puede ser "summary" o "summary_large_image")
keywords: ["growth", "psicología", "A/B testing"] # Palabras clave específicas para SEO
status: "published" # Estado del post ("draft" para borrador, "published" para publicado)

#### Schema ZOD para _Essay Collection_

Cogiendo todo lo anterior, la configuración del esquema de colecciones tiene la siguiente forma:

```typescript
const essay = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(), // Título del post
    date: z.date(), // Fecha de publicación
    description: z.string(), // Descripción del post
    tags: z.array(z.string()), // Tags del post
    essayImage: z.object({
      src: z.union([z.string().url(), z.string()]), // Imagen de portada que puedo coger de una url o de una que tenga en mi librería
      alt: z.string(),
    }),
    language: z.enum(["es", "en"]),
    author: z.string().default("mrjark"), // Autor del post
    authorLink: z.string(), // Sitio del autor
    readingTime: z.string(), // Tiempo estimado de lectura
    categories: z.array(z.string()), // Categorías del post
    keywords: z.array(z.string()), // Palabras clave para SEO
    slug: z.string(), // Slug para SEO
    status: z.boolean().default(true), // Para saber si está en construcción
    canonicalURL: z.string().url(),
  }),
});
```

### Frontmatter de la _Library Collection_

title: "Título del libro o nota" # (Máx. 60 caracteres)
slug: "titulo-libro" # (URL amigable)
language: "Español - es" Idioma
date: "2024-09-24" # Fecha de creación o publicación
author: "Autor del libro" # Autor del libro reseñado
authorLink: "Sitio web del autor del libro"
bookCover: "/images/book-cover.jpg" # Imagen de portada del libro
bookCoverAlt: "Descripción accesible de la portada del libro" # Texto alternativo para la imagen del libro
summary: "Resumen del libro o principales ideas" # Resumen breve (máx. 160 caracteres)
tags: ["psicología", "hábitos"] # Lista de etiquetas relacionadas con el libro
keyTakeaways: ["Punto clave 1", "Punto clave 2"] # Principales conclusiones del libro
readingTime: "7 min read" # Estimación del tiempo de lectura de las notas
metaTitle: "Título optimizado para SEO" # (si es diferente del `title`)
metaDescription: "Descripción optimizada para SEO" # (Máx. 160 caracteres)
ogImage: "/images/og-image-book.jpg" # Imagen Open Graph para redes sociales
ogTitle: "Título para redes sociales" # (si es diferente del `title`)
ogDescription: "Descripción para redes sociales" # Descripción para Open Graph
twitterCard: "summary_large_image" # Tipo de tarjeta de Twitter
keywords: ["resumen libro", "psicología", "hábitos"] # Palabras clave específicas para SEO
status: "published" # Estado del post ("draft" para borrador, "published" para publicado)

#### Zod para _Library Collection_

```typescript
const library = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(), // Título del libro
    date: z.date(), // Fecha de publicación
    description: z.string(), // Descripción del libro
    tags: z.array(z.string()), // Tags del libro
    bookImage: z.object({
      src: z.union([z.string().url(), z.string()]), // Imagen de portada que puedo coger de una url o de una que tenga en mi librería
      alt: z.string(),
    }),
    language: z.enum(["es", "en"]),
    author: z.string(), // Autor del libro
    authorLink: z.string(), // Sitio del autor
    readingTime: z.string(), // Tiempo estimado de lectura
    categories: z.array(z.string()), // Categorías del libro
    keywords: z.array(z.string()), // Palabras clave para SEO
    slug: z.string(), // Slug para SEO
    status: z.boolean().default(true), // Para saber si está en construcción
    canonicalURL: z.string().url(),
    buyOnAmazon: z.string().url(), // link al libro en amazon (no lleva código de referidos)
  }),
});
```

### Frontmatter de la _Bias Collection_

title: "Una Reflexión Profunda sobre la Creatividad"
publishDate: 2024-10-30
description: "Una reflexión sobre cómo la creatividad influye en nuestra vida diaria."
tags: ["creatividad", "reflexión", "sesos"]
image: "src/assets/images/creatividad.png"
keywords: ["creatividad", "inspiración", "pensamientos profundos"]
slug: "reflexion-creatividad"
relatedLinks:

- label: "Artículo sobre creatividad"
  url: "<https://ejemplo.com/articulo-creatividad>"
- label: "Libro recomendado"
  url: "<https://amazon.com/libro-creatividad>"
  readingTime: "5 min"

#### ZOD para _Bias Collections_

Estructura de zod para los bias

```typescript
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
```

Formas antiguas de usar el BiasCollection:

```typescript
const biasCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z
      .object({
        name: z.string(),
        image: image().refine((img) => img.width >= 1080, {
          message: "Image should be 560px × 320px.",
        }),
        imageAlt: z.string(),
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
        description: z.string(),
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

const biasCollection = defineCollection({
  schema: z
    .object({
      biasName: z.string(),
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
      description: z.string(),
      tags: z.array(z.string()),
      biasImage: z.object({
        src: z.union([z.string().url(), z.string()]),
        alt: z.string(),
      }),
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
```

Last Updated: 30/10/2024\_

Actualización del Bias collection para validar las fechas

Last Updated: 06/11/2024\_
