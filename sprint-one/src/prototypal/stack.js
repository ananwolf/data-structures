var Stack = function() {
  var storage = Object.create(stackMethods);
  storage.currentKey = 0;
  storage.amount = 0;
  return storage;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.currentKey++;
  this.amount++;
  this[this.currentKey] = value;
};

stackMethods.pop = function() {
  var popped = this[this.currentKey];
  this.currentKey--;
  this.amount--;
  if (this.amount < 0) {
    this.currentKey++;
    this.amount++;
  }
  return popped;
};

stackMethods.size = function() {
  return this.amount;
};
