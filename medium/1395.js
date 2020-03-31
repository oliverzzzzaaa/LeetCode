var numTeams = function(rating) {
    return dp(rating, [], 0)
};

function dp(rating, included, idx) {
    if (included.length >= 3) {return 1}
    if (idx >= rating.length-1) {return 0}
    let count = 0;
    if (included.length > 1 && )



    if (included.length > 1) {
        if(rating[idx] > included[included.length-1]) {
            count += dp(rating, included.concat(rating[idx]), idx+1)
            count += dp(rating, included, idx+1)
        }
    } else {

    }

    return count;
}