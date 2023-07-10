export const formatDate = (date) => {
  const _date = new Date(date);
  const month = String(_date.getMonth() + 1).padStart(2, "0");
  const day = String(_date.getDate()).padStart(2, "0");
  const year = _date.getFullYear();
  return `${month}/${day}/${year}`;
};
