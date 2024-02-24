// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	return arrayStringFunc(str)
}

function arrayStringFunc(str) {

	return str.split(" ").map(element => {
		const y = element[0].toUpperCase() + String(element.length > 1 ? element.slice(1) : "")
		return y
	}).join(" ")
}

//console.log(capitalize('a short sentence'))
//console.log(capitalize('look, it is working!'))
module.exports = capitalize;
