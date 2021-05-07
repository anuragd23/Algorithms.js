// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let sum = 0;
    const vowelsMap = {
        'a' : 1, 
        'e' : 1, 
        'i' : 1, 
        'o' : 1, 
        'u' : 1}; 
    for(let letter of str.toLowerCase()) {
        if (letter in vowelsMap) sum++ ;    
    }
    return sum;
}

module.exports = vowels;


// function vowels(str) {
//     const strMap = {};
//     const arr = str.toLowerCase().split('');
//     let sum = 0;
//     for(letter of arr) {
//         if (strMap[letter]) strMap[letter]++ ;
//         else strMap[letter] = 1;
//     }
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     for(letter of vowels) {
//         if (strMap[letter]) sum = strMap[letter] + sum;
//     }

//     return sum;
// }