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
  if (this.amount !== 0) {
    this.frontQueue++;
    this.amount--;
    var dequeued = this[this.frontQueue];
    delete this[this.frontQueue];
    return dequeued;
  }
};

queueMethods.size = function() {
  return this.amount;
};

