class Cart {
    constructor(count = 0, price, discount, maxLimit) {
        this.price = price,
            this.count = count,
            this.discount = discount,
            this.maxLimit = maxLimit
    }
    get getPrice() {
        return Math.round(this.price - (this.price * this.discount) / 100);
    }
    get getCount() {
        return this.count;
    }
    get getMaxLimit() {
        return this.maxLimit;
    }
    increment() {
        this.count <= this.maxLimit ? ++this.count : this.count;
        return this.count;
    }
    decrement() {
        this.count > 1 ? --this.count : this.count;
        return this.count;
    }
    inputCount(num) {
        if (num <= this.maxLimit && num >= 1) this.count = num
        return this.count;
    }
}
export default Cart;
