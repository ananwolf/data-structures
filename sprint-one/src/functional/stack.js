var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var size = 0;
  var currentKey = 1;
  someInstance.push = function(value) {
    storage[currentKey] = value;
    currentKey++;
    size++;
  };

  someInstance.pop = function() {
    delete storage[currentKey];
    currentKey--;
    size--;
    if (size < 0) {
      currentKey++;
      size++;
    }
    return storage[currentKey];
  };

  someInstance.size = function() {
    return size;
  };
  return someInstance;
};
