var Queue = function() {
  var storage = {};
  storage.frontQueue = 0;
  storage.backQueue = 0;
  storage.amount = 0;
  _.extend(storage, queueMethods);
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
  var dequeued = this[this.frontQueue];
  delete this[this.frontQueue];
  this.amount--;
  if (this.amount < 0) {
    this.amount++;
  }
  return dequeued;
};

queueMethods.size = function() {
  return this.amount;
};

