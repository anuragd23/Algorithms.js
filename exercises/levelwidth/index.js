// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let nodesLeft = [root,'levelEnd'];
    let width = [0];

    while (nodesLeft.length > 1) {
        let node = nodesLeft.shift();

        if(node === 'levelEnd') {
            nodesLeft.push('levelEnd');
            width.push(0);
        }
        else {
            nodesLeft.push(...node.children);
            width[width.length - 1]++; 
        }
    }

    return width;
}

module.exports = levelWidth;
