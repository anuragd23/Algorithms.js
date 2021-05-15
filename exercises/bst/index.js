// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {

    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {

        if(data > this.data) {
            if(!this.right) this.right = new Node(data);
            else this.right.insert(data);
        }

        else if(data < this.data) {
            if(!this.left) this.left = new Node(data);
            else this.left.insert(data);
        }
    }

    contains(data) {

        if (data === this.data) {
            console.log(this);
            return this;
        }

        else if(data > this.data) {
            if(!this.right) {
                console.log(data,"null");
                return null;
            }

            else return this.right.contains(data);
        }

        else if(data < this.data) {
            if(!this.left) {
                console.log(data,"null");
                return null;
            }
            else return this.left.contains(data);
        }
    }
}


module.exports = Node;
