import {parseLinesSortedAsc} from "../utils";

export const getNumbersThatAddTo2020 = (input) => {
  const array = parseLinesSortedAsc(input).map(e => +e);

  for (const i in array) {
    for (let j = array.length - 1; j > 0; j--) {
      const val = array[i] + array[j];
      console.debug(val);
      if (val === 2020) {
        console.debug(`the two numbers are: ${array[i]} and ${array[j]}`);
        return { a: array[i], b: array[j] };
      }
    }
  }
};

export const getMultipliedNumbers = (input) => {
  const values = getNumbersThatAddTo2020(input);
  return values.a * values.b;
}
