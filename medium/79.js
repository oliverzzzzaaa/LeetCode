var exist = function(board, word) {
    if (word.length < 1) {return true}
    let exists = false;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) {
                exists = exists || rec(board, [i,j], word, 1, new Set());
                if (exists) {return true}
            }
        }
    }
    return exists
};
// Add set inclusion

function rec(board, pos, str, idx, set) {
    if (idx >= str.length) {return true}
    let nextLetter = str[idx]
    let possible = false;
    if (!set.has(`${pos[0]}:${pos[1]+1}`) && board[pos[0]][pos[1]+1] === nextLetter) {
        possible = possible || rec(board, [pos[0],pos[1]+1], str, idx+1, set.add(`${pos[0]}:${pos[1]}`))
    }
    if (!set.has(`${pos[0]+1}:${pos[1]}`) && (board[pos[0]+1] && board[pos[0]+1][pos[1]] === nextLetter)) {
        possible = possible || rec(board, [pos[0]+1,pos[1]], str, idx+1, set.add(`${pos[0]}:${pos[1]}`))
    }
    if (!set.has(`${pos[0]-1}:${pos[1]}`) && (board[pos[0]-1] && board[pos[0]-1][pos[1]] === nextLetter)) {
        possible = possible || rec(board, [pos[0]-1,pos[1]], str, idx+1, set.add(`${pos[0]}:${pos[1]}`))
    }
    if (!set.has(`${pos[0]}:${pos[1]-1}`) && board[pos[0]][pos[1]-1] === nextLetter) {
        possible = possible || rec(board, [pos[0],pos[1]-1], str, idx+1, set.add(`${pos[0]}:${pos[1]}`))
    }
    return possible
}

// console.log(exist([
//     ["A","B","C","E"],
//     ["S","F","C","S"],
//     ["A","D","E","E"]
// ], "ABCB"))
console.log(exist([
    ["A","B","C","E"],
    ["S","F","E","S"],
    ["A","D","E","E"]
],
"ABCEFSADEESE"))
// console.log(exist([
//     ['A','B','C','E'],
//     ['S','F','C','S'],
//     ['A','D','E','E']
//   ], "ABCCED"))
