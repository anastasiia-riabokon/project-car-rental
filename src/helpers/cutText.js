export const cutText = (text, length = 7) =>
  text.length > length ? `${text.slice(0, length)}...` : text;
