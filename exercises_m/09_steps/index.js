// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) { stepsImplHarsh(n) }


function stepsImplHarsh(n) {

	for (let x = 0; x < n; x++) {
		let pyramyd = pyramydStringCreator(0, x, n, "")
		console.log(pyramyd)
	}

}
function pyramydStringCreator(i, p, n, str) {

	if (i == n) {
		return str
	}
	if (i <= p) {
		str = str + '#'
	}
	else {
		str = str + ' '
	}

	if (i < n) {
		return pyramydStringCreator(i + 1, p, n, str)
	}
	return str


}

steps(3)
module.exports = steps;
