// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let last = '';
    let arr = str.split('');
    arr[0] = arr[0].toUpperCase();
    for (index in arr) {
        if (last === ' ') arr[index] = arr[index].toUpperCase();
        last = arr[index];
    }
    return arr.join('');
}

module.exports = capitalize;
