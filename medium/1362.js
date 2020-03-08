// var closestDivisors = function(num) {
//     let start = Math.floor(Math.sqrt(num+1))
//     for (let i = start; i >= 1; i--) {
//         if ((num+1) % i === 0) {return [i, (num+1) / i]}
//         if ((num+2) % i === 0) {return [i, (num+2) / i]}
//     }
//     return false;
// };

const closestDivisors = function (num) {
    const getDivisor = (x) => {
      let right = Math.floor(Math.sqrt(x))
      while (right >= 1) {
        const divisor = Math.floor(x / right)
        if (right * divisor === x) {
          return [divisor, right]
        }
        right--
      }
      return [1, x]
    }
    const [a, b] = getDivisor(num + 1)
    const [c, d] = getDivisor(num + 2)
    return Math.abs(b - a) <= Math.abs(c - d) ? [a, b] : [c, d]
  }

console.log(closestDivisors(8))
