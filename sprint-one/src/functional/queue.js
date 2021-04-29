var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var size = 0;
  var frontQueue = 0;
  var backQueue = 0;
  someInstance.enqueue = function(value) {
    backQueue++;
    storage[backQueue] = value;
    size++;
  };

  someInstance.dequeue = function() {
    frontQueue++;
    var keyToBeDeleted = storage[frontQueue];
    delete storage[frontQueue];
    size--;
    if (size < 0) {
      size++;
    }
    return keyToBeDeleted;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
