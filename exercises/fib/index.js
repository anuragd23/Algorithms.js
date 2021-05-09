// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

const memory = [];

function fib(n) {
    
    if(!memory[n]) {
        if (n < 2) {
            memory[n] = n;
        }
        else {
            memory[n] = fib(n - 1) + fib(n - 2);
        }
    };

    return memory[n];
}

module.exports = fib;
