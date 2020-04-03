var hasCycle = function(head) {
    if (!head || !head.next) {return false}
    // if (!head.next) {return false}
    let one = head;
    let two = head.next.next;
    while (one !== null && two !== null) {

        if (one === two) {return true}
        one = one.next;
        if (one === null ) {return false}
        two = two.next
        if (two === null) {return false}
        two = two.next
    }  
    return false;
};