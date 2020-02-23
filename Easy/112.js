var hasPathSum = function(root, sum, totalsum = 0) {
    if (root) {
        totalsum += root.val
        if (root.left === null && root.right === null) {
            if (totalsum === sum) {
                return true
            }
        } else {
            if (hasPathSum(root.left, sum, totalsum)) {return true}
            if (hasPathSum(root.right, sum, totalsum)) {return true}
        }
    }
    return false
};