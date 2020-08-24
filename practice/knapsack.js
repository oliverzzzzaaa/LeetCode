function idealItems(itemweights, itemvals, maxWeight) {
    let lookup = new Array(itemweights.length);

    for (let i = 0; i < itemweights.length; i++) {
        lookup[i] = new Array(maxWeight+1)
        if (i === 0) lookup[i].fill(0);
    }
    // console.log(lookup)
    for (let i = 0; i < itemweights.length; i++) {
        let weight = itemweights[i];
        for (let j = 0; j < maxWeight+1; j++) {
            if (i !== 0) {
                lookup[i][j] = lookup[i-1][j]
                if (j >= weight) lookup[i][j] = Math.max(itemvals[i]+ lookup[i-1][j-weight],lookup[i][j])
            } else {
                if (j >= weight) lookup[i][j] = itemvals[i]
            }
        }
    }
    console.log(lookup)
    return lookup[lookup.length-1][lookup[0].length-1]
}


// console.log(idealItems([1,3,4,5],[1,4,5,7],7))
console.log(idealItems([5,4,3,1],[7,5,4,1],7))