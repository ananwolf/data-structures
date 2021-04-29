var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
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

