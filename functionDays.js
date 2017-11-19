// Reverse a String
function reverseString(str) {
	var strArr = str.split('')
	var reverseStrArray = strArr.reverse()
	var backToString = reverseStrArray.join('')
	return backToString
	str.split('').reverse().join('')//This works too.
	
	var final = ''
	for (var i = str.length; i > 0; i--) {
		final += str[i]
	}
	return final// This also works
}
Functions
-Block of code that you can 'call' (JS execute)
-Unique name
-Can recieve data (params/args)
-Can return data
-Scope

-choose concise, descriptive names
-functions should only do one thing 

// Methods to know

split(); //The split() method splits a String object into an array
 // of strings by separating the string into substrings, using a specified separator
 // string to determine where to make each split.


reverse(); //The reverse() method reverses an array in place. 
// The first array element becomes the last, and the last array element
// becomes the first.


join(); //The join() method joins all elements of an array (or an array-like object)
 // into a string and returns this string.
//Parameters
// separator Optional
// Specifies a string to separate each pair of adjacent elements of the array. 
// The separator is converted to a string if necessary. If omitted, 
// the array elements are separated with a comma (","). 
// If separator is an empty string, all elements are joined without any 
// characters in between them.

return // return MUST be used in oreder to call back data



// Arithmetic Operators
// (Add) +
// (subtract) -
// (multiply) *
// (division) /
// (exponentiation) **
// (modulo) %