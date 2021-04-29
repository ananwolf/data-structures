var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.currentKey = 0;
  storage.amount = 0;
  _.extend(storage, stackMethods);
  return storage;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.currentKey++;
  this.amount++;
  this[this.currentKey] = value;
};

stackMethods.pop = function() {
  var poppedItem = this[this.currentKey];
  delete this[this.currentKey];
  this.currentKey--;
  this.amount--;
  if (this.amount < 0) {
    this.currentKey++;
    this.amount++;
  }
  return poppedItem;
};

stackMethods.size = function() {
  return this.amount;
};