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
    size++;
    storage[backQueue] = value;
  };

  someInstance.dequeue = function() {
    if (size !== 0) {
      frontQueue++;
      size--;
      var dequeued = storage[frontQueue];
      delete storage[frontQueue];
      return dequeued;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
