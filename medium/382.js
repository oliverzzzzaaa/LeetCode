var Solution = function(head) {
    this.arr = [];
    this.node = head;
    while (this.node.next) {
        this.arr.push(this.node.next);
        this.node = this.node.next
    }
};

Solution.prototype.getRandom = function() {
    let rand = Math.floor(Math.random() * this.arr.length)
    return this.arr[rand].val
}; 