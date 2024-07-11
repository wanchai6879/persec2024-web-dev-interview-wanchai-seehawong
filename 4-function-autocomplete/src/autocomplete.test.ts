// autocomplete.test.ts

import { autocomplete } from './autocomplete';

describe('autocomplete function', () => {
    it('returns correct autocomplete results', () => {
        // Test case 1
        expect(autocomplete("th", ["Mother", "Think", "Worthy", "Apple", "Android"], 2)).toEqual(["Think", "Mother"]);

        // Test case 2
        expect(autocomplete("pp", ["Apple", "Pineapple", "Puppy", "Laptop"], 3)).toEqual(["Apple", "Pineapple", "Puppy"]);

        // Test case 3
        expect(autocomplete("a", ["Apple", "Apricot", "Banana", "Avocado"], 2)).toEqual(["Apple", "Apricot"]);

        // Test case 4
        expect(autocomplete("An", ["Ant", "Banana", "Panda", "Anemone"], 3)).toEqual(["Anemone", "Ant", "Banana"]);

        // Test case 5
        expect(autocomplete("xyz", ["Apple", "Banana", "Pineapple"], 2)).toEqual([]);

        // Test case 6
        expect(autocomplete("th", [], 3)).toEqual([]);
    });
});
