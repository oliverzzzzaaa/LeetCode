var numRabbits = function(answers) {
    let h = {};
    sum = 0;
    answers.forEach(num => {
        if (!h[num]) {
            h[num] = 1;
        } else {
            h[num] += 1;
        }
        if (h[num] > num) {
            sum += h[num]
            h[num] = 0
        }
    })
    Object.keys(h).forEach(key => {
        if (h[key] > 0) {
            sum += (1 + parseInt(key))
        }
    })
    return sum
};

console.log(numRabbits([1,1,2]))
console.log("should be " + 5)
console.log(numRabbits([10,10,10]))
console.log("should be " + 11)
console.log(numRabbits([1,0,1,0,0]))
console.log("should be " + 5)
console.log(numRabbits([0,0,1,1,1]))
console.log("should be " + 6)
// console.log(numRabbits([1,1,2]) === 5)
// console.log(numRabbits([10,10,10]) === 11)
// console.log(numRabbits([1,0,1,0,0]) === 5)
// console.log(numRabbits([0,0,1,1,1]) === 6)