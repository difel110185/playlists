import titleCase from './titleCase'

test('capitalizes the first letter of the first word', () => {
    expect(titleCase('hello')).toBe('Hello')
    expect(titleCase('bonjour')).toBe('Bonjour')
    expect(titleCase('hello bonjour').charAt(0)).toBe('H')
});

test('capitalizes the first letter of the last word', () => {
    expect(titleCase('hello bonjour')).toBe('Hello Bonjour')
    expect(titleCase('hello and bonjour').charAt(10)).toBe('B')
})

const lowerCaseWords = ['a', 'an', 'the', 'in', 'and']
test(`keeps the following words lowercased when not first or last word: ${lowerCaseWords}`, () => {
    const expectWordToBeLowerCased = word => {
        expect(titleCase(`word ${word} word`).charAt(5)).toBe(word.charAt(0))
    }

    lowerCaseWords.forEach(expectWordToBeLowerCased)
})

test('uppercases the following words when first or last word: a, an, the, in, and', () => {
    expect(titleCase('an an')).toBe('An An')
})
