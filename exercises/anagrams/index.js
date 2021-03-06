// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    stringA.replace(/[^\w]/g,'').toLowerCase();
    stringB.replace(/[^\w]/g,'').toLowerCase();

    
    
    const mapA = {}, mapB = {};

    const mapFill = (string, map) => {
        for (let element of string) {
            if(map[element]) map[element]++;
            else map[element] = 1;
        }
    }

    mapFill(stringA, mapA);
    mapFill(stringB, mapB);

    if (Object.keys(mapA).length !== Object.keys(mapB).length) return false;

    for(let key in mapA) {
        if(mapA[key] !== mapB[key]) return false;
    }
    return true;
}

module.exports = anagrams;
