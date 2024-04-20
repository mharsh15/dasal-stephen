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
	//return fancyStringFunction(str)
	//return fancyStringAdvanbced(str)
	return regexSol(str)
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

function fancyStringAdvanbced(str) {
	return str.toLowerCase().split("").reduce((prev, e, curI) => {
		const vovels = ["a", "e", "i", "o", "u"]
		if (vovels.includes(e)) {
			prev += 1
		}
		return prev
	}, 0)
}

function regexSol(str) {
	let regex = new RegExp(/[aeiou]/ig)
	return [...str.matchAll(regex)].length ?? 0
}
console.log(vowels('Hi There!'))
console.log(vowels('Why do yOu Ask?'))
console.log(vowels('Why?'))
module.exports = vowels;
