var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null && list.tail === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    if (list.head !== null) {
      var deletedHead = list.head.value;
      list.head = list.head.next;
      return deletedHead;
    }
  };

  list.contains = function(target) {
    var array = [];
    var currentValue = list.head;
    while (currentValue !== null) {
      array.push(currentValue.value);
      currentValue = currentValue.next;
    }
    return _.contains(array, target);
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
