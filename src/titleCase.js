function upperCaseFirstLetter(word) {
    const firstLetter = word.charAt(0)
    const wordWithoutFirstLetter = word.substring(1)
    return firstLetter.toUpperCase() + wordWithoutFirstLetter
}

function titleCase(string) {
    const words = string.split(' ')
    const lowerCaseWords = ['a', 'an', 'the', 'in', 'and', 'of']

    const upperCaseWords = words.map( (word, index) => {
        if (index > 0 && index < words.length-1 && lowerCaseWords.includes(word)) {
            return word
        }
        return upperCaseFirstLetter(word)
    })

    const sentence = upperCaseWords.join(' ')
    return sentence
}


export default titleCase
