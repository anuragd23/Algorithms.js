// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {

    constructor() {
        this.pStack = new Stack();
        this.sStack = new Stack();
    }

    remove() {
        return this.pStack.pop();
    }

    peek() {
        return this.pStack.peek();
    }

    add(record) {
        while (this.pStack.peek()) {
            this.sStack.push(this.pStack.pop());
        }
        this.pStack.push(record);
        while (this.sStack.peek()) {
            this.pStack.push(this.sStack.pop());
        }
    }
}

module.exports = Queue;
