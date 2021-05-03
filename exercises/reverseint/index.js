// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let multiplier = 1;
    if (n < 0) {
        n = n * -1;
        multiplier = -1;
    }

    const str = String(n).split('').reverse().join('');
    return (parseInt(str) * multiplier);
}

module.exports = reverseInt;
