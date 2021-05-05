// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let midPoint = n - 1; 
    let size = (2 * midPoint) + 1;
    let output = '';
    for (let i = 0; i < size; i++) {
        output = output + ' ';
    }

    for (let i = 0; i < n; i++) {
        let arr = output.split('');
        arr[midPoint + i] = '#';
        arr[midPoint - i] = '#';
        output = arr.join('');
        console.log(output);
    }
}

module.exports = pyramid;
