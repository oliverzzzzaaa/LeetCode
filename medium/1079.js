var numTilePossibilities = function(tiles) {
    let h = {};
    return dp(tiles, h, "")
};

function dp(tiles, h, curr) {
    if (tiles.length < 1) {return 0}
    if (h[curr]) {return h[curr]}
    h[curr] =  1 + dp(tiles.slice(1), h, curr) + dp(tiles.slice(1), h, curr+tiles[0])
    return h[curr]
}

console.log(numTilePossibilities("AAABBC"))