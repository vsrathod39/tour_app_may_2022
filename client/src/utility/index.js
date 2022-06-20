export const excerpt = (str, count) => {
  if (str?.length > count) {
    str = str?.substr(0, count) + "...";
  }
  return str + "   ";
};
