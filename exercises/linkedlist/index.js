// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

    constructor(Data, Node = null) {
        this.data = Data;
        this.next = Node;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        const headNode = new Node(data);
        if(this.head) headNode.next = this.head;
        this.head = headNode;
    }

    size() {
        if (this.head === null) return 0;

        let count = 1;
        let tempNode = this.head;

        while(tempNode.next) {
            count++;
            tempNode = tempNode.next;
        }
        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let tempNode = this.head;

        while(tempNode.next) {
            tempNode = tempNode.next;
        }
        return tempNode;
    }

    clear() {
        this.head = null;
    }
}

module.exports = { Node, LinkedList };
