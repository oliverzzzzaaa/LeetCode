
// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring.The same letter cell may not be used more than once.

//     Example:

// board =
//     [
//         ['A', 'B', 'C', 'E'],
//         ['S', 'F', 'C', 'S'],
//         ['A', 'D', 'E', 'E']
//     ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.


//     Constraints:

// board and word consists only of lowercase and uppercase English letters.
// 1 <= board.length <= 200
// 1 <= board[i].length <= 200
// 1 <= word.length <= 10 ^ 3
 
//iterate through all x,y  options and see if the x,y is equla to the first char in the string
//if so then proceed recursively with the second letterrn
//ifw e go thorugh every starting i, j option and nothign returns true then return false0

var wordSearch = function(array, word) {
    let width = array[0].length
    let height = array.length
    let works = false
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++ ) {
            if (array[i][j] === word[0]) {
                works = works || helper(j, i, word.slice(1))
            }
            // if  (helper (i,j, word) === true) return true
        }
    }
    return false


    function helper(y, x, word) {
            if (word.length === 0 ) return true
            if (array[y+1] && array[y+1][x] === word[0] ) {
                if (helper (y+1, x, word.slice(1)) ) {
                    return true
                }
            }  
            if (array[y-1] && array[y-1][x] === word[0] ) {
                if (helper (y+1, x, word.slice(1)) ) {
                    return true
                }
            }  
            if (array[y][x+1] === word[0] ) {
                if (helper (y+1, x, word.slice(1)) ) {
                    return true
                }
            }  
            if (array[y+1][x-1] === word[0] ) {
                if (helper (y+1, x, word.slice(1)) ) {
                    return true
                }
            }  
        return false
    }

    
}

console.log(wordSearch(
    [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
    ], "ABCCED"
))
