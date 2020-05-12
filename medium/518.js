var change = function(amount, coins) {
    let arr = new Array(amount+1)
    arr.fill(0)
    arr[0] = 1;
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            // if (i - coins[j] === 0) {
            //     arr[i]++;
            // } else if (i - coins[j] > 0) {
            //     arr[i] = arr[i] + arr[i-coins[j]];
            // }
            if (i-coins[j] >= 0) {
                arr[i] = arr[i] + arr[i-coins[j]];
            }
        }
    }
    console.log(arr)
    return arr[amount]
};

// [0,1,2,3,4,5]
// [0,1,]
// var change = function(amount, coins) {
//     let sortedCoins = coins.sort((a,b) => b-a)
//     function dfs(amount, coins, coinIdx) {
//         let localCount = 0;
//         if (amount < 0) {
//             return 0
//         } else if (amount === 0) {
//             return 1
//         } else {
//             for (let i = coinIdx; i < coins.length; i++) {
//                 let coin = coins[i];
//                 localCount += dfs(amount-coin, coins, i);
//             }
//             return localCount
//         }
//     }
//     return dfs(amount, sortedCoins, 0)
// };

console.log(change(5, [1,2,5]))