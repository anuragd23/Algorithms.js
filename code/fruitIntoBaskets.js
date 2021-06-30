

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