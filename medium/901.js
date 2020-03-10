var StockSpanner = function() {
    this.price = 0;
    this.span = 0;
    this.arr = [];
};


StockSpanner.prototype.next = function(price) {
    this.arr.push(price)
    if (price >= this.price) {
        this.span +=1;
    } else {
        this.span = 1;
    }
    this.price = price;
    for (let i = this.arr.length-1; i >= 0; i--) {
        
    }
    return this.span
};