// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const executionTimes = Math.floor(array.length / size)
    const isSizeOverLength = size >= array.length ? true : false
    const isDivisible = array.length % size === 0 ? true : false

    if (isSizeOverLength) {
        return [array]
    } else {
        let startIndex = undefined
        let sorted = []
        for (i = 1; i <= executionTimes; i ++) {
            startIndex = startIndex === undefined ? 0 : startIndex += size
            sorted = [...sorted, array.slice(startIndex, startIndex + size)]
        }
        
        sorted = isDivisible ? sorted : [...sorted, array.slice(startIndex + size)]

        return sorted
    }
}

module.exports = chunk;
