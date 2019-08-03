// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // first ans

    // const arr = [...str]
    // const strLength = str.length
    // const midNum = Math.floor(strLength / 2)
    // let ans = strLength % 2 === 0 ? [] : [arr[midNum]]
    // for (let i = midNum; i > 0; i--) {
    //     const nextWord = i - 1
    //     ans = [arr[nextWord], ...ans, arr[nextWord]]
    // }
    // return ans.join('') === str ? true : false

    //sec ans

    const arr = [...str]
    const strLength = str.length
    const midIndex = Math.floor(strLength / 2)
    let isPalindrome
    for (i = 0; i < midIndex; i++) {
        isPalindrome = arr[i] === arr[str.length - i - 1] ? true : false
        if (!isPalindrome) {
            break
        }
    }
    return isPalindrome
}
module.exports = palindrome;
