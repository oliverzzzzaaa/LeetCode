var nextGreaterElements = function(nums) {
    let newArr = [];
    let max = nums[0];
    nums.forEach(num => {
        max = Math.max(num, max)
    })
    nums.forEach(num => {
        if (num < max) {
            newArr.push(max)
        } else {
            newArr.push(-1);
        }
    })
    return newArr
};
// var nextGreaterElements = function(nums) {
//     let newArr = [];
//     // let max = nums[0];
//     // nums.forEach(num => {
//     //     max = Math.max(num, max)
//     // })
//     for (let i = 0; i < nums.length; i++) {
//         let num = nums[i];
//         let j = i+1;
//         let found = false;
//         while (j !== i) {
//             if (j >= nums.length) {
//                 j = 0;
//                 console.log(j, i)
//             }else if (nums[j] > num) {
//                 found = true;
//                 newArr.push(nums[j])
//                 j = i;
//             } else {
//                 j++;
//             }
//         }
//         if (!found) {
//             newArr.push(-1)
//         }
//     }
//     return newArr
// };

console.log(nextGreaterElements([5,4,3,2,1]))
console.log(nextGreaterElements([2,3,1,2,1]))