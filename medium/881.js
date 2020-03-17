var numRescueBoats = function(people, limit) {
    let sorted = people.sort((a, b) => a-b);
    let heaviest = sorted.length-1;
    let lightest = 0;
    let count = 0;
    let left = people.length;
    while (lightest < heaviest) {
        // console.log(sorted[heaviest], sorted[lightest])
        if (sorted[heaviest] + sorted[lightest] <= limit) {
            count++;
            lightest++;
            heaviest--;
            left = left-2;
        } else {
            heaviest--;
            count++;
            left--;
        }
    }
    if (left > 0) {
        count++;
    }

    return count;
};

console.log([3,5,3,4].sort((a,b) => a-b))

console.log(numRescueBoats([3,5,3,4], 5))

//[