// Initially, there is a Robot at position (0, 0). Given a sequence of its moves, 
// judge if this robot makes a circle, which means it moves back to the original place.

// The move sequence is represented by a string. And each move is represent by a character. 
// The valid robot moves are R (Right), L (Left), U (Up) and D (down). 
// The output should be true or false representing whether the robot makes a circle.

// Example
// Input: "UD"
// Output: true
// Example 2:
// Input: "LL"
// Output: false

// 1. Iterate through the input string
// 2. count directions
// 3. return # U === # D && # L === # R

let string = "UUDLLRR";
// false
let string2 = "DRULLR";
// true

// console.log(robotMoves(string));
// console.log(robotMoves(string2));

function robotMoves(moves) {
  let moveObj = {};
  for (let i = 0; i < moves.length; i++) {
    if (moveObj[moves[i]]) {
      moveObj[moves[i]] += 1;
    } else {
      moveObj[moves[i]] = 1;
    }
  }
  return (moveObj['U'] === moveObj['D'] && moveObj['L'] === moveObj['R']);
}

// A self-dividing number is a number that is divisible by every digit it contains. 
// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0,and 128 % 8 == 0.

//Also, a self-dividing number is not allowed to contain the digit zero.

//Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

// Example
// Input: left = 1, right = 22
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

// Iterate from lower to upper bound
// Have a helper function to check if its self dividing
// output as an array

//Helper function: use % 10 to save the digits into an array
// iterate through the array to check if they're all divisible by the original number

// console.log(selfDividingRange(1, 15))
// // [11,12,15]

// console.log(selfDividingRange(100, 120))
// // [111, 112]

function selfDividingRange(lower, upper) {
    let selfDividingNums = [];
    for (let i = lower; i <= upper; i++) {
        if (isSelfDividing(i)) {selfDividingNums.push(i)}
    }
    return selfDividingNums
}

function isSelfDividing(num) {
    let changingNum = num
    let digits = [];
    while (changingNum > 9) {
        digits.push(changingNum % 10);
        changingNum = Math.floor(changingNum/10);
    }
    digits.push(changingNum)
    return digits.every(digit => num % digit === 0)
}



// In a 2 dimensional array grid, each value grid[i][j] represents the height of 
// a building located there. We are allowed to increase the height of any number of buildings,
// by any amount (the amounts can be different for different buildings). 
// Height 0 is considered to be a building as well.

// At the end, the "skyline" when viewed from all four directions of the grid, 
// i.e. top, bottom, left, and right, must be the same as the skyline of the original grid.
// A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed 
// from a distance. See the following example.

// What is the maximum total sum that the height of the buildings can be increased?

// Example
// Input: grid = [
  // [3,0,8,4],
  // [2,4,5,7],
  // [9,2,6,3],
  // [0,3,1,0]
  // ]
// Output: 35

console.log(skyline([
  [3,0,8,4],
  [2,4,5,7],
  [9,2,6,3],
  [0,3,1,0]
  ]))

// 1. Iterate through the grid
// 2. get the max value of that row
// 3. Iterate through row with index
// 4. See if max of row is larger than max of column
// 5. replace the number with the lower number of the two maxes
// 6. Add all values
// 7. Subtract the original grid and return increase

function skyline(grid) {
  let rowMax = [];
  let colMax = [];
  let column = [];
  let originalHeight = 0;
  let totalheight = 0;
  for (let i = 0; i < grid.length; i++) {
    rowMax.push(maxValue(grid[i]))
    column = [];
    for (let j = 0; j < grid[i].length; j++) {
      column.push(grid[j][i]);
    }
    colMax.push(maxValue(column));
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      originalHeight += grid[i][j];
      grid[i][j] = rowMax[i] < colMax[j] ? rowMax[i] : colMax[j];
      totalheight += grid[i][j];
    }
  }
  return totalheight - originalHeight;
}

function maxValue(arr) {
  let max = 0;
  arr.forEach(element => {
    if (element > max) {
      max = element;
    }
  });
  return max;
}

// i j
// 0 0
// 0 1
// 0 2