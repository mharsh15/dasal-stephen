// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

	//return strReverserMordern(str)
	//return strReversalJsStyle(str)
	return strReversalWithEvery(str)
}


/**
 * 
 * @param {*} str 
 */
function strReverserMordern(str) {


	const reverse = str.split("").reverse().join("")

	return reverse === str

}

function strReversalJsStyle(str) {

	let reverse = ""

	for (chr of str) {
		reverse = chr + reverse
	}

	return reverse === str
}

/**
 * every function,
 * @param {*} str 
 * @returns bolean 
 */
function strReversalWithEveryMH(str) {

	return str.split("").reverse().every((chr, i) => { return chr === str[i] })
}

/**
 * STEPHENS idea to compare last string with current
 * @param {*} str 
 * @returns 
 */
function strReversalWithEvery(str) {

	return str.split("").every((chr, i) => { return chr === str[str.length - i - 1] })
}


console.log(palindrome("aha!aha"))
module.exports = palindrome;
