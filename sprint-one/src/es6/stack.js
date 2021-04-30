class Stack {

  constructor() {
    this.currentKey = 0;
    this.amount = 0;
  }

  push(value) {
    this.currentKey++;
    this.amount++;
    this[this.currentKey] = value;
  }

  pop() {
    if (this.amount !== 0) {
      var popped = this[this.currentKey];
      delete this[this.currentKey];
      this.currentKey--;
      this.amount--;
      return popped;
    }
  }

  size() {
    return this.amount;
  }
}

var storage = new Stack();