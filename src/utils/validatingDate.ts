// Función para verificar el formato de fecha (ejemplo: YYYY-MM-DD)

export default function IsValidDateFormat(dateString: string): boolean {
  const dateFormat = /^\d{4}-\d{2}-\d{2}$/; // Expresión regular para YYYY-MM-DD
  return dateFormat.test(dateString);
}
