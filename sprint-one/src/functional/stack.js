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
    delete storage.currentKey;
    currentKey--;
    size--;
  };

  someInstance.size = function() {
    return size < 0 ? 0 : size;
  };

  return someInstance;
};

// ReferenceError: stroage is not defined
//     at Object.Stack.someInstance.size (src/functional/stack.js:23:7)
//     at Context.<anonymous> (spec/specs.js:44:22)