// src/reverse-encoder.test.ts

import { ReverseEncoder } from './reverse-encoder';

test('encode replaces characters and reverses word order', () => {
  const reverseEncoder = new ReverseEncoder();
  const input = "Hello world";
  const expectedOutput = "dliow svool";
  expect(reverseEncoder.encode(input)).toEqual(expectedOutput);
});

test('decode reverses the process of encode', () => {
  const reverseEncoder = new ReverseEncoder();
  const input = "dliow svool";
  const expectedOutput = "Hello world";
  expect(reverseEncoder.decode(input)).toEqual(expectedOutput);
});
