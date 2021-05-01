var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  var result = false;
  var recursion = function (node) {
    _.each (node.children, function(leaves) {
      if (leaves.value === target) {
        result = true;
      } else {
        recursion(leaves);
      }
    });
  };
  recursion(this);
  return result;
};


/*
newTree = {
  addChild: function(){},
  contains: function(){},
  value: input,
  children: [children1, children2, ]
}
*/

/*
 * Complexity: What is the time complexity of the above functions?
 */
