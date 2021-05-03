// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let allChars = {}, maxCount = 0, maxString = str[0]; 

    for(let char of str) {
        if(!allChars[char]) allChars[char] = 1;
        else if(allChars[char]) {
            allChars[char]++;
            if (allChars[char] > maxCount) {
                maxCount = allChars[char];
                maxString = char;
            }
        }
    }
    return maxString;
}

module.exports = maxChar;
