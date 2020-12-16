import { getNumbersThatAddTo2020, getMultipliedNumbers } from "./day1";
import puzzle from "./PuzzleInput";

const testInput = `1721
979
366
299
675
1456`;


describe("part 1", () => {
  test("two numbers that sum to 2020 are 1721 and 299", () => {
    const val = getNumbersThatAddTo2020(testInput);

    expect(val.a).toEqual(299);
    expect(val.b).toEqual(1721);
  });

  test("two numbers retrieved from test input multiply together and equal 514579", () => {
    const val = getMultipliedNumbers(testInput);
    expect(val).toEqual(514579);
  });


  test("find part one solution", () => {
    const val = getMultipliedNumbers(puzzle);
    expect(val).toEqual(388075);
  });
});
