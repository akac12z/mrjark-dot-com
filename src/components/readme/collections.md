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

title: "El título SEO-friendly del post" # (Máx. 60 caracteres, incluye una palabra clave)<br>
slug: "titulo-seo-friendly" # (URL amigable, derivada del título) date: "2024-09-24" # Fecha de publicación<br>
description: "Breve descripción optimizada para SEO" # (Máx. 160 caracteres)<br>
tags: ["growth", "psicología"] # (Lista de etiquetas relevantes)<br>
language: "Español - es" Idioma<br>
coverImage: "/images/cover-image.jpg" # Imagen de portada con un nombre relevante<br>
coverImageAlt: "Descripción accesible de la imagen de portada" # Texto alternativo de la imagen<br>
author: "mrjark" # Nombre del autor o autores<br>
authorImage: "/images/author-image.jpg" # Imagen del autor (opcional)<br>
category: "Growth Hacking" # Categoría del post para ayudar en la organización y SEO<br>
readingTime: "5 min read" # Estimación del tiempo de lectura<br>
canonicalURL: "https://tu-dominio.com/titulo-seo-friendly" # URL canónica para evitar duplicados<br>
metaTitle: "Título optimizado para SEO" # Título específico para SEO (si es diferente del título principal)<br>
metaDescription: "Descripción para SEO que aparecerá en los resultados de búsqueda" # (Máx. 160 caracteres)<br>
ogImage: "/images/og-image.jpg" # Imagen optimizada para Open Graph (redes sociales)<br>
ogTitle: "Título para compartir en redes sociales" # Título para Open Graph (si es diferente del título principal)<br>
ogDescription: "Descripción para redes sociales" # Descripción para Open Graph (máx. 160 caracteres)<br>
twitterCard: "summary_large_image" # Configuración de la tarjeta de Twitter (puede ser "summary" o "summary_large_image")<br>
keywords: ["growth", "psicología", "A/B testing"] # Palabras clave específicas para SEO<br>
status: "published" # Estado del post ("draft" para borrador, "published" para publicado)<br>

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

### Frontmatter de la _BookNotes Collection_

title: "Título del libro o nota" # (Máx. 60 caracteres)<br>
slug: "titulo-libro" # (URL amigable)<br>
language: "Español - es" Idioma<br>
date: "2024-09-24" # Fecha de creación o publicación<br>
author: "Autor del libro" # Autor del libro reseñado<br>
authorLink: "Sitio web del autor del libro"<br>
bookCover: "/images/book-cover.jpg" # Imagen de portada del libro<br>
bookCoverAlt: "Descripción accesible de la portada del libro" # Texto alternativo para la imagen del libro<br>
summary: "Resumen del libro o principales ideas" # Resumen breve (máx. 160 caracteres)<br>
tags: ["psicología", "hábitos"] # Lista de etiquetas relacionadas con el libro<br>
keyTakeaways: ["Punto clave 1", "Punto clave 2"] # Principales conclusiones del libro<br>
readingTime: "7 min read" # Estimación del tiempo de lectura de las notas<br>
metaTitle: "Título optimizado para SEO" # (si es diferente del `title`)<br>
metaDescription: "Descripción optimizada para SEO" # (Máx. 160 caracteres)<br>
ogImage: "/images/og-image-book.jpg" # Imagen Open Graph para redes sociales<br>
ogTitle: "Título para redes sociales" # (si es diferente del `title`)<br>
ogDescription: "Descripción para redes sociales" # Descripción para Open Graph<br>
twitterCard: "summary_large_image" # Tipo de tarjeta de Twitter<br>
keywords: ["resumen libro", "psicología", "hábitos"] # Palabras clave específicas para SEO<br>
status: "published" # Estado del post ("draft" para borrador, "published" para publicado)<br>

#### Zod para _BookNotes Collection_

```typescript
const bookNote = defineCollection({
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

title: "Una Reflexión Profunda sobre la Creatividad"<br>
publishDate: 2024-10-30<br>
description: "Una reflexión sobre cómo la creatividad influye en nuestra vida diaria."<br>
tags: ["creatividad", "reflexión", "sesos"]<br>
image: "src/assets/images/creatividad.png"<br>
keywords: ["creatividad", "inspiración", "pensamientos profundos"]<br>
slug: "reflexion-creatividad"<br>
relatedLinks:
  - label: "Artículo sobre creatividad"
    url: "https://ejemplo.com/articulo-creatividad"
  - label: "Libro recomendado"
    url: "https://amazon.com/libro-creatividad"
readingTime: "5 min"

#### ZOD para _Bias Collections_

```typescript
const bias = defineCollection({
  schema: z.object({
    title: z.string(), // Título de la reflexión o idea
    publishDate: z.date(), // Fecha de publicación
    description: z.string(), // Descripción breve o resumen
    tags: z.array(z.string()), // Tags para clasificar el contenido
    image: z.union([z.string().url(), z.string()]).optional(), // Imagen de portada (URL externa o local)
    keywords: z.array(z.string()), // Palabras clave para SEO
    slug: z.string(), // Slug para SEO
    relatedLinks: z.array(z.object({
      label: z.string(), // Título del enlace relacionado
      url: z.string().url() // URL del enlace
    })).optional(), // Enlaces relacionados opcionales
    readingTime: z.string().optional(), // Tiempo estimado de lectura
  }),
  });
```

_Last Updated: 30/10/2024_
