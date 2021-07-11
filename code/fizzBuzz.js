/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i if non of the above conditions are true.

*/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    
    const result = [];
    
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) result.push("FizzBuzz");
        else if (i % 5 === 0) result.push("Buzz");
        else if (i % 3 === 0) result.push("Fizz");
        else result.push(i.toString());
    }
    return result;
};