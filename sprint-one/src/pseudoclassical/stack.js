var Stack = function() {
  this.currentKey = 0;
  this.amount = 0;
};

Stack.prototype.push = function(value) {
  this.currentKey++;
  this.amount++;
  this[this.currentKey] = value;
};

Stack.prototype.pop = function() {
  if (this.amount !== 0) {
    var popped = this[this.currentKey];
    delete this[this.currentKey];
    this.currentKey--;
    this.amount--;
    return popped;
  }
};

Stack.prototype.size = function() {
  return this.amount;
};

var storage = new Stack();