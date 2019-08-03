// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversed = []
    const speard = [...str]
    for (i = 0; i < str.length; i++) {
        const firstWord = speard[i]
        reversed = [firstWord, ...reversed]
    }
    console.log(reversed.join(''))
    return reversed.join('')
}

module.exports = reverse;