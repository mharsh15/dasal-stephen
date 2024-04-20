// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) { }

function matrixPrinter(n) {
	const totalNumber = n * n
	let maxRow = n - 1
	let maxCol = n - 1

	//initializing variables
	let currNum = 1
	let currRow = 0
	let currCol = 0

	let initRow = 0
	let initCol = 0
	let i = 0
	const matrix = []
	for (let i = 0; i < n; i++) {
		matrix.push(new Array(n))
	}
	//first row
	console.log(matrix)
	while (i < n - 1) {
		while (currCol <= maxCol && (currNum <= totalNumber)) {
			matrix[currRow][currCol] = currNum
			currNum += 1
			currCol += 1
		}
		console.log("test 1:", matrix)
		currCol -= 1
		//downward column
		while (currRow < maxRow && (currNum <= totalNumber)) {
			currRow += 1
			matrix[currRow][currCol] = currNum
			currNum += 1

		}
		console.log("test 2:", matrix)

		//last row insert
		while (currCol > initCol && (currNum <= totalNumber)) {
			currCol -= 1
			matrix[currRow][currCol] = currNum
			currNum += 1
			//console.log(currCol, currNum)
		}
		//upward column insert
		console.log("test 3:", matrix)
		while (currRow > (initRow + 1) && (currNum <= totalNumber)) {
			currRow -= 1
			matrix[currRow][currCol] = currNum
			currNum += 1
		}
		console.log("test 4:", matrix)
		currCol += 1
		maxCol -= 1
		maxRow -= 1
		i = i + 1
	}
	//sideward insert spiral
	return matrix
}

console.log(matrixPrinter(3))
module.exports = matrix;
