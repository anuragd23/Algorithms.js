// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    let output = '';
    for (let i = 0; i < n; i++) {
        output = output + ' ';
    }
    
    for (let i = 0; i < n; i++) {
        output = '#' + output;
        console.log(output.slice(0, n)); 
    }
}

module.exports = steps;
