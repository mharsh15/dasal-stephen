// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	//return chunkHarshImpl(array, size)
	return chunkArrayGenericImpl(array, size)
}

//slice method
//chunk array by checking length. if input length is less than said sixe 
function chunkHarshImpl(array, size) {

	if (array.length <= size) {
		return [array]
	}

	const returnArray = []

	for (let i = 0; i < array.length; i = i + size) {
		console.log(i)
		returnArray.push(array.slice(i, i + size))
	}

	//return array.slice(0, size)
	return returnArray
}

function chunkArrayGenericImpl(array, size) {

	const chunkedArray = []
	// for (ele of array) {
	// 	let subArray = []
	// 	subArray.push(ele)
	// 	if (subArray.size == size) {
	// 		chunkedArray.push(subArray)
	// 	}
	//}
	let subArray = []
	array.forEach((ele, pos) => {

		subArray.push(ele)
		if (subArray.length == size || pos == (array.length - 1)) {
			chunkedArray.push(subArray)
			subArray = []
		}

	});

	return chunkedArray
}
//console.log(chunk([1, 2, 3, 4, 5], 1))
//console.log(chunk([1, 2, 3, 4], 6))
//console.log(chunkArrayGenericImpl([1, 2, 3, 4], 6))
module.exports = chunk;
