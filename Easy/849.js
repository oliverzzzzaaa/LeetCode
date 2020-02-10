var maxDistToClosest = function(seats) {
    // 1 0 0 0 1 0 1
    let prev = -1;
    let next = 0;
    let most = 0;
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 1) {
            prev = i;
            next = i+1;
        } else {
            while (next < seats.length && seats[next] === 0) {
                next+=1;
            }
            console.log(seats[next])
            let left
            if (prev === -1) {
                left = seats.length;
            } else {
                left = i - prev;
            }
            let right;
            if (next === seats.length) {
                right = seats.length;
            } else {
                right = next - i;
            }
            console.log(left, right, most)

            most = Math.max(most, Math.min(left, right))
        }
    }
    return most;
};

//[1,0,0,0,1,0,1]

let seats = [1,0,0,0,1,0,1];

console.log(maxDistToClosest(seats))