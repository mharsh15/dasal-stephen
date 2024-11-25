package main

import "testing"

func Test_Nums(t *testing.T) {

	arr := []int{1, 2, 3}
	chunked := Chunker(arr, 1)

	length := len(chunked)
	if len(chunked) != 3 {
		t.Error("Length should had been 3, but lenght turned out to be", length)
	}

	if chunked[0][0] != 1 {
		t.Error("Number should had been 1 but turned out to be", chunked[0][0])
	}
	if chunked[1][0] != 2 {
		t.Error("Number should had been 2 but turned out to be", chunked[1][0])
	}
	if chunked[2][0] != 3 {
		t.Error("Number should had been 3 but turned out to be", chunked[2][0])
	}
}

func Test_Nums_Big_Arr(t *testing.T) {

	arr := []int{1, 2, 3, 4, 5, 6, 7, 8}
	chunked := Chunker(arr, 3)

	length := len(chunked)
	if len(chunked) != 3 {
		t.Error("Length should had been 3, but lenght turned out to be", length)
	}

	if chunked[0][0] != 1 {
		t.Error("Number should had been 1 but turned out to be", chunked[0][0])
	}
	if chunked[1][0] != 4 {
		t.Error("Number should had been 4 but turned out to be", chunked[1][0])
	}
	if chunked[2][0] != 7 {
		t.Error("Number should had been 7 but turned out to be", chunked[2][0])
	}
}

func Test_Nums_Big_But_One_Split(t *testing.T) {

	arr := []int{1, 2, 3, 4, 5, 6, 7, 8}
	chunked := Chunker(arr, 12)

	length := len(chunked)
	if len(chunked) != 1 {
		t.Error("Length should had been 3, but lenght turned out to be", length)
	}

	if chunked[0][0] != 1 {
		t.Error("Number should had been 1 but turned out to be", chunked[0][0])
	}
	if chunked[0][3] != 4 {
		t.Error("Number should had been 4 but turned out to be", chunked[1][0])
	}
	if chunked[0][6] != 7 {
		t.Error("Number should had been 7 but turned out to be", chunked[2][0])
	}
}
