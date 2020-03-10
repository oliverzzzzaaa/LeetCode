//positive integers
//return max sum of non adjacent integers in the array

// [0,1,2,3,4]

function nonAdjacentSum(nums) {
    if (nums.length < 1) {return 0;}
    if (nums.length === 1) {return nums[0]}
    let startAtFour = nonAdjacentSum(nums.slice(5));
    let startAtTwo = nonAdjacentSum(nums.slice(3));
    let startAtThree = nonAdjacentSum(nums.slice(4));
    let zeroToTwo = 0;
    let zeroToThree = 0;
    let oneToThree = 0;
    let oneToFour = 0;
    if (nums[2]) {zeroToTwo = nums[0] + nums[2] + startAtTwo}
    if (nums[3]) {
        oneToThree = nums[1] + nums[3] + startAtThree
        zeroToThree = nums[0] + nums[3] + startAtThree
    }
    if (nums[4]) {oneToFour = nums[1] + nums[4] + startAtFour}
    console.log(zeroToTwo)

    return Math.max(zeroToTwo, oneToThree, zeroToThree, oneToFour)
}

console.log(nonAdjacentSum([5,9,12,5,1,10]))