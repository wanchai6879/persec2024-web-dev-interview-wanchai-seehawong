// autocomplete.ts

export function autocomplete(search: string, items: string[], maxResult: number): string[] {
    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    filteredItems.sort((a, b) => {
        const lowerSearch = search.toLowerCase();
        const aLower = a.toLowerCase();
        const bLower = b.toLowerCase();

        if (aLower.startsWith(lowerSearch) && !bLower.startsWith(lowerSearch)) {
            return -1;
        } else if (!aLower.startsWith(lowerSearch) && bLower.startsWith(lowerSearch)) {
            return 1;
        }

        if (aLower.includes(lowerSearch) && !bLower.includes(lowerSearch)) {
            return -1;
        } else if (!aLower.includes(lowerSearch) && bLower.includes(lowerSearch)) {
            return 1;
        }

        return aLower.localeCompare(bLower);
    });

    return filteredItems.slice(0, maxResult);
}
