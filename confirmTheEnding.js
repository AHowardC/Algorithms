function confirmTheEnding(str, target) {
	// using .substr(takes 2 params)
	return str.substr(-target.length) === target;
	// if(str.endsWith(target)){
	// 	return true
	// }
	// return false
	
	// using .endsWith() method
	// return str.endsWith(target)
	
}
console.log(confirmTheEnding('ljk', true));