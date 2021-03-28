export const maxOffset = 70;
export const lengthPerPage = 5;

export const getPagingRange = (
    current,
    { min = 1, total = maxOffset, length = lengthPerPage } = {}
  ) => {
    if (length > total) length = total;
  
    let start = current - Math.floor(length / 2);
    start = Math.max(start, min);
    start = Math.min(start, min + total - length);
  
    return Array.from({ length: length }, (el, i) => start + i);
  };


