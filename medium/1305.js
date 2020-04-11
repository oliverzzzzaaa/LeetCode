var getAllElements = function(root1, root2) {
    let arr1 = dfs1(root1)
    let arr2 = dfs1(root2);
    let arr1idx = 0
    let arr2idx = 0
    let newarr = [];
    while (newarr.length < arr1.length + arr2.length) {
        if (arr1idx === arr1.length) {
            newarr = newarr.concat(arr2.slice(arr2idx));
            break;
        } else if (arr2idx === arr2.length) {
            newarr = newarr.concat(arr1.slice(arr1idx));
            break;
        } else if (arr1[arr1idx] < arr2[arr2idx]) {
            newarr.push(arr1[arr1idx]);
            arr1idx++;
        } else {
            newarr.push(arr2[arr2idx]);
            arr2idx++;
        }
    }
    return newarr
};

function dfs1(root1) {
    if (!root1) {return [];}
    return dfs1(root1.left).concat(root1.val).concat(dfs1(root1.right))
}

