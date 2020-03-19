var asteroidCollision = function(asteroids) {
    if (asteroids.length < 1) {return [];}
    let newarr = [asteroids[0]];
    for (let i = 1; i < asteroids.length; i++) {
        while ((asteroids[i] < 0 && newarr[newarr.length-1] > 0) 
                && (Math.abs(asteroids[i]) > newarr[newarr.length-1])) {
                newarr.pop();
        }
        // 3 Possibilities
        // Equal
        // Empty
        // Less
        // Positive
        // Both are
        if (newarr.length < 1 || asteroids[i] > 0) {
            newarr.push(asteroids[i]);
        } else if (newarr[newarr.length-1] + asteroids[i] === 0) {
            newarr.pop();
        } else if (asteroids[i] < 0 && newarr[newarr.length-1] < 0) {
            newarr.push(asteroids[i])
        }
    }
    return newarr;
};


console.log(asteroidCollision([-2,-1,1,2]))
// console.log(asteroidCollision([10,2,-5]))
// console.log(asteroidCollision([5,10,-5]))
// console.log(asteroidCollision([8,-8]))


//Iterate through once O(n)
//If positive, add to newarr