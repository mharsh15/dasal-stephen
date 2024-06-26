// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
	return setFib(n)
}


function setFib(n) {
	if (n === 0) {
		return 0
	}

	if (n === 1) {
		return 1
	}


	return setFib(n - 1) + setFib(n - 2)
}

function fibIter(n) {
	let num = 0;
	let prevNum = num;
	for (let i = 0; i < n; i++) {
		if (i === 1) {
			num = 1
		}
		let newNum = prevNum + num
		prevNum = num
		num = newNum

	}
	return num
}

//MEMOIZATION FUNCTIONS
function slowFib(n) {
	if (n === 0) {
		return 0
	}

	if (n === 1) {
		return 1
	}


	return mem(n - 1) + mem(n - 2)
}

function memoize(fn) {

	const cache = {}
	return function (...args) {
		if (cache[args]) {
			return cache[args]
		}
		const result = fn.apply(this, args);
		cache[args] = result
		//console.log(cache)
		return result
	}
}

//console.log(fibIter(39))
const mem = memoize(slowFib)
//console.log(mem(39))
module.exports = mem;
