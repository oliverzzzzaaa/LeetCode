var addTwoNumbers = function(l1, l2) {
    let num1 = "";
    let num2 = "";
    while (l1) {
        num1 = num1.concat(l1.val.toString());
        l1 = l1.next;
    }
    while (l2) {
        num2 = num2.concat(l2.val.toString());
        l2 = l2.next;
    }
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let ansnum = num1+num2;
    ansnum = ansnum.toString();
    let headNode = new ListNode(parseInt(ansnum[0]))
    let currNode = headNode;
    for (let i = 0; i < ansnum.length-1; i++) {
        currNode.next = new ListNode(ansnum[i+1])
        currNode = currNode.next;
    }
    return headNode
};
console.log(2432432432432432432432432432432432432432432432432432432432439 + 5642432432432432432432432432432432432432432432432432432439999)
