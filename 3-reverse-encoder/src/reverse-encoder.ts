// src/ReverseEncoder.ts

export class ReverseEncoder {
  private static alphabet = 'abcdefghijklmnopqrstuvwxyz';

  private static reverseChar(char: string): string {
    const lowerChar = char.toLowerCase();
    const index = this.alphabet.indexOf(lowerChar);
    if (index === -1) {
      return char; // Return non-alphabetic characters as is
    }
    return this.alphabet[25 - index];
  }

  encode(input: string): string {
    // Convert input to lowercase, replace each character with its 'reversed' counterpart
    const replacedChars = input.toLowerCase().split('').map(char => ReverseEncoder.reverseChar(char)).join('');
    // Reverse the order of words
    const reversedWords = replacedChars.split(' ').reverse().join(' ');
    return reversedWords;
  }

  decode(input: string): string {
    // Reverse the order of words
    const reversedWords = input.split(' ').reverse().join(' ');
    // Replace each character with its 'reversed' counterpart and convert to proper case
    const decodedChars = reversedWords.split('').map(char => {
      const reversedChar = ReverseEncoder.reverseChar(char);
      return char === char.toUpperCase() ? reversedChar.toUpperCase() : reversedChar;
    }).join('');
    return decodedChars.charAt(0).toUpperCase() + decodedChars.slice(1);
  }
}
