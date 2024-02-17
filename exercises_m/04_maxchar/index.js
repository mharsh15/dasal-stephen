// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) { return jsUniqueSolution(str) }

function jsUniqueSolution(str) {
	//splits set	
	let inputSplitUnique = new Set(...[str.split("")])
	let wordObject = {}
	inputSplitUnique.forEach(x => {
		let value = 0
		for (c of str) {
			value = value + (c == x ? 1 : 0)
		}
		wordObject[x] = value
	}
	)

	let maxChar = ''
	let maxCharCount = 0
	for (x in wordObject) {
		if (wordObject[x] > maxCharCount) {
			maxCharCount = wordObject[x]
			maxChar = x
		}
	}
	return maxChar
}

//console.log(jsUniqueSolution("mommy mommy"))
module.exports = maxChar;
