//function TreeNode(val) {
    // this.val = val;
    // this.left = this.right = null;
// }

var findMode = function(root) {
    let tracker = {};
    let queue = [root];
    let node;
    while (queue.length > 0) {
        node = queue.shift;
        if (!tracker[node.value]) {
            tracker[node.value] = 1;
        } else {
            tracker[node.value]+=1;
        }
        if (node.left) {queue.push(node.left)}
        if (node.left) {queue.push(node.right)}
    }
    let max = 0;
    let modes = [];
    Object.keys(tracker).forEach(value => {
        if (tracker[value] > max) {
            modes = [value];
            max = tracker[value]
        } else if (tracker[value] === max) {
            modes.push(value)
        }
    })
    return modes
};

