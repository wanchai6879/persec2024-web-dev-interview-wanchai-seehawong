// src/hexToRgb.test.ts
import { hexToRgb } from './hexToRgb';

test('converts #FF0000 to { r: 255, g: 0, b: 0 }', () => {
  expect(hexToRgb('#FF0000')).toEqual({ r: 255, g: 0, b: 0 });
});

test('converts #ff9933 to { r: 255, g: 153, b: 51 }', () => {
  expect(hexToRgb('#ff9933')).toEqual({ r: 255, g: 153, b: 51 });
});

test('converts #FFF to { r: 255, g: 255, b: 255 }', () => {
  expect(hexToRgb('#FFF')).toEqual({ r: 255, g: 255, b: 255 });
});

test('converts #000 to { r: 0, g: 0, b: 0 }', () => {
  expect(hexToRgb('#000')).toEqual({ r: 0, g: 0, b: 0 });
});
