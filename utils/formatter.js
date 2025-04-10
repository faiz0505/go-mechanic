export const formatStatesValue = (num) => {
  if (num >= 10000000) {
    return (num / 10000000).toFixed(1) + " Crore+";
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + " Million+";
  } else if (num >= 100000) {
    return (num / 100000).toFixed(1) + " Lacs+";
  } else if (num >= 1000) {
    return num.toLocaleString() + "+";
  }
  return num;
};
