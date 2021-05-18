function isPalindrome(string) {
  // Write your code here.
	forward = 0;
	backward = string.length - 1;
	
	while(forward < backward) {
		if(string[forward] !== string[backward]) return false;
		forward++;
		backward--;	
	}
	return true;
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
