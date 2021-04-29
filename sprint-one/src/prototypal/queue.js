var Queue = function() {
  var storage = Object.create(queueMethods);
  storage.frontQueue = 0;
  storage.backQueue = 0;
  storage.amount = 0;
  return storage;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.backQueue++;
  this.amount++;
  this[this.backQueue] = value;
};

queueMethods.dequeue = function() {
  this.frontQueue++;
  this.amount--;
  if (this.amount < 0) {
    this.amount++;
  }
  var dequeued = this[this.frontQueue];
  return dequeued;
};

queueMethods.size = function() {
  return this.amount;
};