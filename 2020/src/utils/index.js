export const parseLines = (input) => input.trim().split("\n");

export const parseLinesSortedAsc = (input) =>
  parseLines(input).sort((a, b) => a - b);
