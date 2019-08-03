// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2) 
//     [[1, 2],
//     [4, 3]]
//   matrix(3) 
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4) 
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
//  matrix(5) 
//    [[ 1,  2,  3,  4, 5],
//     [16, 17, 18, 19, 6],
//     [15, 24, 25, 20, 7],
//     [14, 23, 22, 21, 8],
//     [13, 12, 11, 10, 9]]
//  matrix(6) 
//    [[ 1,  2,  3,  4,  5,  6],
//     [20, 21, 22, 23, 24,  7],
//     [19, 32, 33, 34, 25,  8],
//     [18, 31, 36, 35, 26,  9],
//     [17, 30, 29, 28, 27, 10]
//     [16, 15, 14, 13, 12, 11]]

//    [[ 1, n-4, n-3,  n-2,  n-1,  n],
//     [3n+2, 21, 22, 23, 24, n+1],
//     [3n+1, 32, 33, 34, 25, n+2],
//     [3n, 31, 36, 35, 26, n+3],
//     [2n+5, 30, 29, 28, 27, n+4]
//     [2n+4, 2n+3, 2n+2, 2n+1, 2n, n+5]]

function matrix(n) {
    
    const makeArrays = (n) => {
        let matrixArray = []
        for (i = 1; i <= n; i ++) {
            matrixArray = [...matrixArray, Array(n).fill('')]
        }
        return matrixArray
    }

    const calMoves = (n) => {
        let moveCounter = [n-1]
        for (i = n-1; i > 0; i--) {
            moveCounter = [...moveCounter, i, i]
        }
        return moveCounter
    }

    const moveRightward = (n) => {
        for (i = currentColumn + 1; i <= currentColumn + moveCounters[j]; i ++) {
            currentNumber ++
            (matrixArrays[currentRow])[i] = currentNumber
        }
    }

    const moveDownward = (n) => {
        for (i = currentRow + 1; i <= currentRow + moveCounters[j]; i ++) {
             currentNumber ++
            (matrixArrays[i])[currentColumn] = currentNumber
        }
    }

    const moveLeftward = (n) => {
        for (i = currentColumn - 1; i >= currentColumn - moveCounters[j]; i --) {
            currentNumber ++
            (matrixArrays[currentRow])[i] = currentNumber
        }
    }

    const moveUpperward = (n) => {
        for (i = currentRow - 1; i >= currentRow - moveCounters[j]; i --) {
            currentNumber ++
            (matrixArrays[i])[currentColumn] = currentNumber
        }
    }

    const isComplete = (n) => {
        return currentNumber === n * n ? true : false
    }

    const moveCounters = calMoves(n)
    let matrixArrays = makeArrays(n)
    let currentRow = 0
    let currentColumn = 0
    let currentNumber = 1
    let finish = false
    matrixArrays[currentRow][currentColumn] = 1

    for (j = 0; j < moveCounters.length; j++) {
        if (finish) {
            break
        }
        let moveDirection = (j + 1) % 4
        switch (moveDirection) {
            case 1: {
                moveRightward(n)
                currentColumn = currentColumn + moveCounters[j]
                finish = isComplete(n)
                break
            }
            case 2: {
                moveDownward(n)
                currentRow = currentRow + moveCounters[j]
                finish = isComplete(n)
                break
            }
            case 3: {
                moveLeftward(n)
                currentColumn = currentColumn - moveCounters[j]
                finish = isComplete(n)
                break
            }
            case 0: {
                moveUpperward(n)
                currentRow = currentRow - moveCounters[j]
                finish = isComplete(n)
                break
            }
        }
    }

    return matrixArrays

}

module.exports = matrix;
