class Queue {

  constructor() {
    this.frontQueue = 0;
    this.backQueue = 0;
    this.amount = 0;
  }

  enqueue(value) {
    this.backQueue++;
    this.amount++;
    this[this.backQueue] = value;
  }

  dequeue() {
    if (this.amount !== 0) {
      this.frontQueue++;
      this.amount--;
      var dequeued = this[this.frontQueue];
      delete this[this.frontQueue];
      return dequeued;
    }
  }

  size() {
    return this.amount;
  }
}

var storage = new Queue();