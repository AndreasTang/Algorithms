// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    // my own method(bad way cuz the it's a 2O(n) + O(n^2) time complexity)

    // const arr = [...str]
    // let unique = []
    // let charNum = []
    // for (i = 0; i < arr.length; i++) {
    //     unique = unique.includes(arr[i]) ? [...unique] : [...unique, arr[i]]
    // }
    // for (i = 0; i < unique.length; i++) {
    //     charNum = [...charNum, arr.filter(char => unique[i] === char).length]
    // }

    // return unique[(charNum.findIndex(num =>　num ===　Math.max(...charNum)))]

    // for of with for in method(better way)

    let arr = {}
    let max = {
        char: [],
        num: 0
    }

    for (const word of str) {
        arr[word] = arr[word] + 1 || 1
    }

    for (const prop in arr) {

        if (arr[ prop ] > max.num) {
             max = {
                char:[prop],
                num: arr[ prop ]
            }
        } else if (arr[ prop ] === max.num) {
             max = {
                char: [...max.char, prop],
                num: arr[ prop ]
            }
        }

        // max = arr[ prop ] > max.num ? {
        //     char: prop,
        //     num: arr[ prop ]
        // } : max
    }

    return max.char.join()

}

module.exports = maxChar;
