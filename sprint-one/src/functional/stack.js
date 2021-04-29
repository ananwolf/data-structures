var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var size = 0;
  var currentKey = 0;
  someInstance.push = function(value) {
    currentKey++;
    size++;
    storage[currentKey] = value;
  };

  someInstance.pop = function() {
    if (size !== 0) {
      var popped = storage[currentKey];
      delete storage[currentKey];
      currentKey--;
      size--;
      return popped;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
