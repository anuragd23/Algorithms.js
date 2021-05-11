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
        if (this.head === null) return null;
        let tempNode = this.head;

        while(tempNode.next) {
            tempNode = tempNode.next;
        }
        return tempNode;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        this.head = this.head.next;
    }

    removeLast() {
        if (this.head === null) return null;

        if(this.getLast() === this.getFirst()) {
            this.head = null;
            return;
        }

        let tempNode = this.head;
        while(tempNode.next !== this.getLast()) {
            tempNode = tempNode.next;
        }
        tempNode.next = null;
    }

    insertLast(Data) {
        const newNode = new Node(Data);
        if (this.head === null) this.head = newNode;
        else this.getLast().next = newNode;
    }

    getAt(index) {

        if (this.head === null) return null;
        if (index === 0) return this.head;
        if (index >= this.size()) return null;

        let count = 0;
        let tempNode = this.head;

        while(tempNode.next) {
            count++;
            tempNode = tempNode.next;
            if (count === index) return tempNode;
        }  
    }

    removeAt(index) {

        if (this.head === null || index >= this.size()) return null;
        
        if (index === 0) {
            this.removeFirst();
        }

        else if(this.getAt(index) === this.getLast()) {
            console.log("stuck!");
            this.removeLast();
        } 

        else {
            let tempNode = this.getAt(index);
            let prevNode = this.getAt(index - 1);
            prevNode.next = tempNode.next;
        }
    }
}

module.exports = { Node, LinkedList };
