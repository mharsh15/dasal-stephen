// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

package main

import "fmt"

func Chunker(input []int, split int) [][]int {

	output := [][]int{}
	inpLen := len(input)
	for i := 0; i < inpLen; i++ {
		var y = i + split
		if y > inpLen {
			y = inpLen
		}
		slice := input[i:y]
		fmt.Println(slice)
		output = append(output, slice)
		i += (split - 1)
	}
	return output

}
