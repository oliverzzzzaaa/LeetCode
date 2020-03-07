
var ProductOfNumbers = function() {

    this.numbers = [1];
    this.isZero = false;
};

ProductOfNumbers.prototype.add = function(num) {
    if (num !== 0) {
        this.numbers.push(num * this.numbers[this.numbers.length - 1])
    } else {
        this.numbers = [1];
        this.isZero = true;
    }
    // return this.numbers;
};


ProductOfNumbers.prototype.getProduct = function(k) {
    if (this.isZero && k >= this.numbers.length) {
        return 0;
    } else {
        return this.numbers[this.numbers.length-1] / this.numbers[this.numbers.length - 1 - k]
    }
    
};