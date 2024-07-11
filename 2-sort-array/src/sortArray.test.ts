// src/sortArray.test.ts
import { sortArray } from './sortArray';

test('sorts another array of strings with numbers', () => {
  const input = ["TH19", "SG20", "TH2"];
  const expectedOutput = ["SG20", "TH2", "TH19"];
  expect(sortArray(input)).toEqual(expectedOutput);
});

test('sorts an array of strings with numbers', () => {
  const input = ["TH10", "TH3Netflix", "TH1", "TH7"];
  const expectedOutput = ["TH1", "TH3Netflix", "TH7", "TH10"];
  expect(sortArray(input)).toEqual(expectedOutput);
});
