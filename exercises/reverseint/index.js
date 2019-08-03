// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const str = n.toString()
    const arr = [...str]
    const isNegative = n < 0 ? true : false
    let reversed = []

    for (let i = isNegative ? 1 : 0; i < arr.length; i++) {
        const firstWord = arr[i]
        reversed = [firstWord, ...reversed]
    }
    reversed = isNegative ? [arr[0], ...reversed] : [...reversed]
    
    return parseInt(reversed.join(''))
}

module.exports = reverseInt;