var getTargetCopy = function(original, cloned, target) {
    let queue = [cloned];
    while (queue.length > 0) {
        for (let i = 0; i < queue.length; i++) {
            if (queue[i].val === target.val) {return queue[i]}
            if (queue[i].left) {queue.push(queue[i].left)}
            if (queue[i].right) {queue.push(queue[i].right)}
        }
    }
};