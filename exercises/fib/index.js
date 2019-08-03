// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
// //     let fibSeries = [0, 1]
// //     for (i = 2; i <= n; i++) {
// //         const lastTwo = fibSeries.slice(fibSeries.length - 2)
// //         fibSeries = [...fibSeries,lastTwo[0]+lastTwo[1]]
// //     }
// //     return fibSeries[n]
// }

const fib = (n, cache = {}) => {
    if (cache[n]) {
        return cache[n]
    }
    const fibNumber = n < 2 ? n : fib(n - 1, cache) + fib(n - 2, cache)
    cache[n] = fibNumber
    return fibNumber
}

module.exports = fib;
