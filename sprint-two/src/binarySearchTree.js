var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.prototype);
  newTree.value = value;
  newTree.left = undefined;
  newTree.right = undefined;

  return newTree;
};


BinarySearchTree.prototype.insert = function(value) {
  var node = BinarySearchTree(value);
  var insertRecursion = function(child) {
    if (child.value > value && child.left === undefined) {
      child.left = node;
    } else if (child.value > value) {
      insertRecursion(child.left);
    } else if (child.value < value && child.right === undefined) {
      child.right = node;
    } else if (child.value < value) {
      insertRecursion(child.right);
    }
  };
  insertRecursion(this);
};

BinarySearchTree.prototype.contains = function(value) {
  var result = false;
  var checkerRecursion = function(node) {
    if (node.value === value) {
      result = true;
    } else if (node.value > value && node.left !== undefined) {
      checkerRecursion(node.left);
    } else if (node.value < value && node.right !== undefined) {
      checkerRecursion(node.right);
    }
  };
  checkerRecursion(this);
  return result;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  var submarine = function(node) {
    cb(node.value);
    if (node.left !== undefined) {
      submarine(node.left);
    }
    if (node.right !== undefined) {
      submarine(node.right);
    }
  };
  submarine(this);
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
