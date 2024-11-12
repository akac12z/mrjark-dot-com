
export const isValidDateFormat = (dateString: string): boolean => {
  const dateFormatMustBe = /^\d{4}-\d{2}-\d{2}$/; // Expresión regular para YYYY-MM-DD

  if (!dateFormatMustBe.test(dateString)) throw new Error('The date must be in the format YYYY-MM-DD!');

  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));

  if (
  date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    throw new Error('The date is invalid, make sure you have spelled the date correctly. Remember, must be YYYY-MM-DD and be real!')
  }
  return true;
}

// Funcion para convertir la fecha en ISO para las metatags
export const convertDateToISO8601 = (dateString: string): string => {
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.toISOString();
};
