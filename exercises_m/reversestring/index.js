// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

	return normalReversal(str)

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

// function recursiveReversal(str) {

// 	while () {

// 	}
// }
//console.log(reverse("hello"))

module.exports = reverse;
