/**
 * Convert a date string from 'dd-MM-yyyy' format to 'yyyy-MM-dd' format.
 * @param {string} dateString - The date string in 'dd-MM-yyyy' format.
 * @returns {string} - The date string in 'yyyy-MM-dd' format.
 */
export const convertDateFormat = (dateString) => {
  if (!dateString) return "";
  
  const [day, month, year] = dateString.split("-");
  return `${year}-${month}-${day}`;
};
