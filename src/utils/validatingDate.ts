// Función para verificar el formato de fecha (ejemplo: YYYY-MM-DD)
export function IsValidDateFormat(dateString: string): boolean {
  const dateFormat = /^\d{4}-\d{2}-\d{2}$/; // Expresión regular para YYYY-MM-DD
  return dateFormat.test(dateString);
}

// TODO: PROBAR ESTA COLECCIÓN
// Definir la colección
// const biases = defineCollection({
//   schema: z.object({
//     biasName: z.string(),
//     publishDate: z.string().refine(isValidDateFormat, {
//       message: "La fecha debe estar en formato YYYY-MM-DD",
//     }),
//     description: z.string(),
//     tags: z.array(z.string()),
//     biasImage: z.string(),
//     language: z.string().or(z.array(z.string())),
//     keywords: z.array(z.string()),
//     slug: z.string(),
//     lastTimeEdited: z.string().optional().refine((val) => {
//       return isValidDateFormat(val); // Validar el formato si se proporciona
//     }, {
//       message: "La fecha de última edición debe estar en formato YYYY-MM-DD",
//     }).transform((val, ctx) => {
//       // Si no se proporciona lastTimeEdited, usar publishDate
//       if (!val) {
//         const { publishDate } = ctx.parent; // Obtener publishDate del contexto
//         return publishDate; // Asignar publishDate a lastTimeEdited
//       }
//       return val; // Si hay un valor, devolverlo
//     }),
//     relatedLinks: z.array(z.string()).optional(),
//     readingTime: z.number().optional(),
//   }),
// });

// // Exportar las colecciones
// export const collections = {
//   biases,
// };