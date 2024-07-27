import numeral from "numeral";

export const formattedNumber = (num) => {
  return numeral(num).format("0,0");
};
