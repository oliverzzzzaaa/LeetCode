// var numTeams = function(rating) {
    

//     function dfs(rating, index, prev, count) {
//         if (rating.length - index < 3 - count) {
//             return 0;
//         }
//         if (count === 3) {
//             console.log(prev)
//             return 1
//         }
//         // console.log(rating[index], prev)
//         if (rating[index] > prev) {
//             return dfs(rating, index+1, prev, count) + dfs(rating, index+1, rating[index], count+1)
//         } else {
//             return dfs(rating, index+1, prev, count)
//         }
//     }

//     function dfs2(rating, index, prev, count) {
//         if (rating.length - index < 3 - count) {return 0}
//         if (count === 3) {
//             console.log(prev)
//             return 1
//         }
//         if (rating[index] < prev) {
//             return dfs(rating, index+1, prev, count) + dfs(rating, index+1, rating[index], count+1)
//         } else {
//             return dfs(rating, index+1, prev, count)
//         }
//     }
//     return dfs(rating, 0, Number.MIN_VALUE, 0) + dfs2(rating, 0, Number.MAX_VALUE, 0)
// };



// // [1,2,3,4,5]
// // [0,1,2,3,4]

var numTeams = function(rating) {

    function dp(rating, curr, index) {
        if (rating.length - index < 3 - curr.length) {
            return 0;
        }
        if (curr.length === 3) {
            return 1
        }
        if (curr.length < 1 || rating[index] > curr[curr.length-1]) {
            return dp(rating, curr, index+1) + dp(rating, curr.concat(rating[index]), index+1)
        } else {
            return dp(rating, curr, index+1)
        }
    }

    function dp2(rating, curr2, index2) {
        if (rating.length - index2 < 3 - curr2.length) {
            return 0;
        }
        if (curr2.length === 3) {
            return 1
        }
        if (curr2.length < 1 || rating[index2] < curr2[curr2.length-1]) {
            return dp2(rating, curr2, index2+1) + dp2(rating, curr2.concat(rating[index2]), index2+1)
        } else {
            return dp2(rating, curr2, index2+1)
        }
    }
    return dp(rating, [], 0) + dp2(rating, [], 0)
}

console.log(numTeams([2,5,3,4,1]))