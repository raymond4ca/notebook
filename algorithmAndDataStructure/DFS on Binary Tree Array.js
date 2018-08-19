
  //this.root is the root node of the binary search tree
  //Breadth-first tree traversals
  bfs() {
    let currentNode = this.root;
    console.log(currentNode.value);
    let ret = [];
    let queue = [currentNode];
    while(queue.length) {
      currentNode = queue.shift();
      ret.push(currentNode.value);
      if(currentNode.left) {
        queue.push(currentNode.left);
      }
      if(currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return ret;

  }

  //Depth-first tree traversals
  dfs() {
    let currentNode = this.root;
    let stack = [currentNode];
    let ret = [];

    while(stack.length) {
      currentNode = stack.pop();
      ret.push(currentNode.value);

      if(currentNode.right) {
        stack.push(currentNode.right);
      }

      if(currentNode.left) {
        stack.push(currentNode.left);
      }
    }

    return ret;
  }
