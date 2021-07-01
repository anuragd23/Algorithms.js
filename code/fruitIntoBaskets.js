You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick.

/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
    if (!tree) return 0;
    if (tree.length < 3) return tree.length;
    let indexStart = 0;
    let tracker = new Map();
    let longestLength = 0;
    let currentLength = 0;
    
    for(let i = 0; i < tree.length; i++) {
        if(!tracker.has(tree[i])) {
            tracker.set(tree[i], 1);
        } else tracker.set(tree[i], tracker.get(tree[i]) + 1);
        
        while(tracker.size > 2) {
            tracker.set(tree[indexStart], tracker.get(tree[indexStart]) - 1);
            if(tracker.get(tree[indexStart]) === 0) tracker.delete(tree[indexStart]);
            currentLength--;
            indexStart++;
        }
        
        currentLength++;
        longestLength = Math.max(longestLength, currentLength);
    }
    return longestLength;
};