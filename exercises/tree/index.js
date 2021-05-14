// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {

    constructor(Data) {
        this.data = Data;
        this.children = [];
    }

    add(childData) {
        this.children.push(new Node(childData));
    }

    remove(childData) {
        this.children = this.children.filter(child => {
            return child.data !== childData;
        });
    }
}

class Tree {

    constructor() {
        this.root = null;
    }
}

module.exports = { Tree, Node };
