// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


// to create a string with same letter for Muti time
// Array(n) => make a Array with n empty elements
// Array(5) => ['', '', '', '', '']
// Array(3).join('#') => [''#''#''] => '##'
// string.prototype.padEnd() & padStart()
// Array.prototype.fill()
function steps(n) {
    let hash = []
    for (i = 1; i <= n; i++) {
        hash = [...hash, '#']
        let space = []
        for (j = n-i; j >= 1; j--) {
            space = [...space, ' ']
        }
        const ans = [...hash, ...space]
        console.log(ans.join(''))
    }
}

module.exports = steps;
