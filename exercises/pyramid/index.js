// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {

    // use fill()

    // const maxLength = 1 + (n - 1) * 2
    // for (i = 1; i <= n; i++) {
    //     const hashLength = 1 + (i - 1) * 2
    //     const spaceLength = (maxLength - hashLength) / 2
    //     console.log(Array(spaceLength).fill(' ').join('') + Array(hashLength).fill('#').join('') + Array(spaceLength).fill(' ').join(''))
    // }

    // use repeat()

    // const maxLength = 1 + (n - 1) * 2
    // for (i = 1; i <= n; i++) {
    //     const hashLength = 1 + (i - 1) * 2
    //     const spaceLength = (maxLength - hashLength) / 2
    //     console.log(`${' '.repeat(spaceLength)}${'#'.repeat(hashLength)}${' '.repeat(spaceLength)}`)
    // }

    // use padEnd
    
    const maxLength = 1 + (n - 1) * 2
    for (i = 1; i <= n; i++) {
        const hashLength = 1 + (i - 1) * 2
        const spaceLength = (maxLength - hashLength) / 2
        console.log(`${''.padEnd(spaceLength, ' ')}${''.padEnd(hashLength, '#')}${''.padEnd(spaceLength, ' ')}`)
    }

}

module.exports = pyramid;
