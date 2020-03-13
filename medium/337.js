var rob = function(root) {
    return dp(root, true)
};

function dp(node, avail) {
    if (!node || !node.val) {return 0}
    if (avail) {
        let robleft = Number.MIN_VALUE;
        let robright = Number.MIN_VALUE;
        let robnode = node.val + dp(node.left, false) + dp(node.right, false);
        if (node.left) {
            robleft = node.left.val + Math.max(dp(node.left.left, false), dp(node.left.right, false))
        } 
        if (node.right) {
            robright = node.right.val + Math.max(dp(node.right.left, false), dp(node.right.right, false))
        } 
        let correct = Math.max(robnode, robright + robleft)
        console.log(correct)
        return correct
    } else {
        return Math.max(dp(node.left, true), dp(node.right, true))
    }
}


// 3 options: node, node.left or node.right