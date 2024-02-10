// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	//return normalReversal(str)
	//return jsReversall(str)
	//return jsReduce(str)
	return jsForEach(str)
}

//** when string is reversed normally */
function normalReversal(str) {
	let reverseStr = ""
	//console.log("in func")
	for (let i = str.length - 1; i >= 0; i--) {
		console.log(str[i])
		reverseStr = reverseStr + str[i]

	};

	return reverseStr
}

/**
* when you reverse string using simple js commands
 */
function jsReversall(str) {

	return str.split("").reverse().join("")
}
/**
 * uses JS Feature Reduce function of JS to do the trick
 */
function jsReduce(str) {
	return str.split("").reduce((reversed, characters) => {
		return characters + reversed
	}, '')

}
/**
 * 
 *Fancier Syntax for reduce
 */

function jsReduceFancy(str) {
	return str.split("").reduce((reversed, characters) =>
		characters + reversed, '')

}

function jsForEach(str) {
	debugger
	let reversed = ""
	for (let chr of str) {
		reversed = chr + reversed
		debugger
	}
	return reversed
}
console.log(reverse("hello"))

module.exports = reverse;
