// var singleNumber = function(nums) {
//     let h = new Map();
//     nums.forEach(num => {
//         if (!h[num]) {
//             h[num] = true;
//         } else {
//             delete h[num]
//         }
//     })
//     let ret = [];
//     // console.log(h)
//     console.log(Array.from(h.keys()))
    
//     // return ret
// };

var singleNumber = function(nums) {
    let seen = new Set();
    nums.forEach(num => {
        if (seen.has(num)) {
            seen.delete(num)
        } else {
            seen.add(num)
        }
    })
    console.log(seen)
    return [...seen]
}

console.log(singleNumber([1,2,1,3,5,3]))