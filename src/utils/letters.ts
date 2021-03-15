export const newLetter = () => {
  return String.fromCharCode(65 + Math.floor(Math.random() * 26)).toLowerCase();
};
