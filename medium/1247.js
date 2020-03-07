var minimumSwap = function(s1, s2) {
    let h = {'x': 0, 'y': 0}
    let countX = 0;
    let countY = 0;
    let dX = 0
    let dY = 0;
    for (let i = 0; i < s1.length; i++) {
        h[s1[i]] +=1;
        h[s2[i]] +=1;
        if (s1[i] === 'x') {
            if (s1[i] !== s2[i]) {dX += 1}
        } else {
            countY +=1;
            if (s1[i] !== s2[i]) {dY += 1}
        }
        
    }
    if ((countX + countY) % 2 !== 0) {return -1}
    let swap = 0;
    swap = Math.floor(dX / 2) + Math.floor(dY / 2)
    swap += (dX % 2 !== 0 ? 2 : 0)
    return swap
};