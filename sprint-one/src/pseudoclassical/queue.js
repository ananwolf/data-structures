var Queue = function() {
  this.frontQueue = 0;
  this.backQueue = 0;
  this.amount = 0;
};

Queue.prototype.enqueue = function(value) {
  this.backQueue++;
  this.amount++;
  this[this.backQueue] = value;
};

Queue.prototype.dequeue = function() {
  this.frontQueue++;
  this.amount--;
  if (this.amount < 0) {
    this.amount++;
  }
  var dequeued = this[this.frontQueue];
  delete this[this.frontQueue];
  return dequeued;
};

Queue.prototype.size = function() {
  return this.amount;
};

var storage = new Queue();
