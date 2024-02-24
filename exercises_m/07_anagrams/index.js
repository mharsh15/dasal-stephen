// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) { return harshImplementation(stringA, stringB) }


function harshImplementation(stringA, stringB) {
	console.log(getWordToObject(stringA), getWordToObject(stringB))
	const stringAObject = getWordToObject(stringA)
	const stringBObject = getWordToObject(stringB)
	const objALength = Object.keys(stringAObject).length
	if (!(objALength === Object.keys(stringBObject).length)) {
		return false
	}
	let counter = 0
	for (key in stringAObject) {
		const countA = stringAObject[key]
		const countB = stringBObject[key]
		if (countA === countB) {
			counter = counter + 1
		}
	}

	if (!(counter === objALength)) {
		return false
	}

	return true

}

function getWordToObject(word) {
	const updatedWord = word.replace(/[^\w]/g, "").toLowerCase()
	//const letterSet = new Set(updatedWord)
	const letterObject = {}
	for (letter of updatedWord) {
		//console.log(letter)
		if (letterObject[letter]) { letterObject[letter] += 1 } else {
			letterObject[letter] = 1
		}

	}
	return letterObject
}

//console.log(anagrams('Hi there', 'Bye there'))
module.exports = anagrams;
