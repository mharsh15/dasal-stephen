// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

	//return callbackInt(n)
	return (reverseString(n))

}

/**
 * Harsh Solution with recursion 
 * @param {*} num 
 * @returns 
 */
function callbackInt(num) {

	if (num < 0) {
		return callbackPositiveInt(num * -1, 0) * -1
	}
	return (callbackPositiveInt(num, 0))


}

function callbackPositiveInt(num, sum) {

	sum = (num % 10) + (sum * 10)
	if (num < 10) {
		return sum
	}
	const quotient = Math.floor(num / 10)
	return callbackPositiveInt(quotient, sum)


}

/**
* shortcut with string
 */

function reverseString(num) {
	const isNegative = num < 0 ? true : false

	let numToString = String(isNegative ? num * -1 : num)
	let newNum = numToString.split("").reverse().join("")
	debugger
	return Number(isNegative ? newNum * -1 : newNum)

}

module.exports = reverseInt;
