// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) { return hIterationImpl(str) }


function hIterationImpl(str) {
	const st = str.toLowerCase()
	let counter = 0
	for (let e of st) {
		if (e === "a" || e === "e" || e === "i" || e === "o" || e === "u") {
			counter++
		}
	};
	return counter
}

console.log(vowels('Hi There!'))
console.log(vowels('Why do yOu Ask?'))
module.exports = vowels;
