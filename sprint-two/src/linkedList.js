var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.count = 0;
  //   list = {
  //     { value: 6,
  //       next: {
  //             value: 10,
  //             next: {
  //                 value: 12,
  //                 next: {
  //                     value: 3,
  //                     next: null
  //                     }
  //                 }
  //             }
  //         }
  //     }
  // };
  list.addToTail = function(value) {

    // create a new node
    // update the old tail to point to new tail
    // list.tail = new tail

    // list = {
    // 0 : node

    var node = Node(value);
    if (list.count = 0) {
      list[list.count] = node;
      list.head = node;
      list.tail = node;
      list.count += 1;
    } else {
      list.tail = node;
      list[list.count] = node;
      list.count += 1;
    }
  };

  list.removeHead = function() {
    // if (list.head !== null) {
    list.head = list.nodes.next;
    // }
    console.log(list);
  };

  list.contains = function(target) {
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
