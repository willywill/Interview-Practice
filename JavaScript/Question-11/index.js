function log(...x)
{
  console.log(x)
}

// TODO: Remove node method
class BinarySearchTree {

  constructor (value) {
    this.value = value
    this.right = null
    this.left = null
  }

  insertNode (value) {
    if (value <= this.value) {
      if (!this.left) {
        this.left = new BinarySearchTree(value)
      } else {
        this.left.insertNode(value)
      }
    }

    else if (value > this.value) {
      if (!this.right) {
        this.right = new BinarySearchTree(value)
      } else {
        this.right.insertNode(value)
      }
    }
  }

  containsNode (value) {
    if (this.value === value) {
      return true
    }

    if (value < this.value) {
      if (!this.left) {
        return false
      } else {
        return this.left.containsNode(value)
      }
    }

    else if (value > this.value) {
      if (!this.right) {
        return false
      } else {
        return this.right.containsNode(value)
      }
    }
  }

  static depthFirstTraversalOrder () {
    return { preOrder: 1, inOrder: 2, postOrder: 3 }
  }

  depthFirstTraversal (iterate, order) {
    if (this.order === depthFirstTraversalOrder.preOrder) {
      iterate(this.value)
    }

    if (this.left) {
      this.left.depthFirstTraversal(iterate, order)
    }

    if (this.order === depthFirstTraversalOrder.inOrder) {
      iterate(this.value)
    }

    if (this.right) {
      this.right.depthFirstTraversal(iterate, order)
    }

    if (this.order === depthFirstTraversalOrder.postOrder) {
      iterate(this.value)
    }
  }

  breadthFirstTraversal (iterate) {
    let queue = [this]

    while (queue.length) {
      let treeNode = queue.shift()

      iterate(treeNode)

      if (treeNode.left) {
        queue.push(treeNode.left)
      }

      if (treeNode.right) {
        queue.push(treeNode.right)
      }
    }
  }

  getMinTraversal () {
    if (!this.left) {
      return this.value
    } else {
      return this.left.getMinTraversal()
    }
  }

  getMaxTraversal () {
    if (!this.right) {
      return this.value
    } else {
      return this.right.getMaxTraversal()
    }
  }
}

const initializeBST = async () => {
  try {
    let binaryTree = new BinarySearchTree(50);

    const values = [30, 10, 35, 55, 65, 75, 25, 40, 60, 15]

    values.map( value => binaryTree.insertNode(value))

    return binaryTree

  } catch (e) {
    console.log(e)
  }
}

const num = 65

initializeBST().then( tree => { log("Max Node:", tree.getMaxTraversal()); return tree; })
               .then( tree => { log(`Does contain node ${num}?`, tree.containsNode(num)); return tree; })
