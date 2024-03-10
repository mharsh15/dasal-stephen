// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
	//setPyramid(n) 
	stephenLoop(n)
}


/**
 * My Implemetation
 * @param {*} n 
 * @param {*} i 
 * @param {*} str 
 */
function setPyramid(n, tri = 0, i = 1) {
	if (tri === 0) {
		tri = (2 * n) - 1
	}


	const steps = (2 * i) - 1
	const space = (tri - steps) / 2

	//console.log(tri, steps, space)
	const strSteps = setSteps(steps)
	const strSpace = setSpace(space)

	console.log(strSpace + strSteps + strSpace)
	if (i === n) {
		return
	}
	setPyramid(n, tri, i + 1)

}


function setSteps(steps, i = 0, str = "") {
	if (i === steps) {
		return str
	}

	str += "#"
	return setSteps(steps, i + 1, str)

}

function setSpace(spaces, i = 0, str = "") {
	if (i === spaces) {
		return str
	}

	str += " "
	return setSpace(spaces, i + 1, str)
}
/*
* stephen implementation
 */
function stephenLoop(n) {

	const midpoint = Math.floor((2 * n - 1) / 2)

	for (let row = 0; row < n; row++) {
		let level = ''
		for (let col = 0; col < 2 * n - 1; col++) {
			if (midpoint - row <= col && midpoint + row >= col) {
				level += "#"
			}
			else {
				level += " "
			}
		}
		console.log(level)
	}

}

pyramid(1)
module.exports = pyramid;
