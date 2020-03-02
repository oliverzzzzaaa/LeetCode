var deleteDuplicates = function(head) {
    let currNode = head;
    while (currNode !== null) {
        if (currNode.next !== null) {
            if (currNode.next.val === currNode.val) {
                currNode.next = currNode.next.next
            } else {
                currNode = currNode.next
            }
        } else {
            return head;
        }
    }
    return head;
};