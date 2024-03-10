// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	//return hIterationImpl(str) 
	return fancyStringFunction(str)
}

//Implemented By Harsh
//this one iterates through string and does the job
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

function fancyStringFunction(str) {
	return str.toLowerCase().split("").reduce((prev, e, curI) => {
		if (e === "a" || e === "e" || e === "i" || e === "o" || e === "u") {
			prev += 1
		}
		return prev
	}, 0)

}

console.log(vowels('Hi There!'))
console.log(vowels('Why do yOu Ask?'))
module.exports = vowels;
