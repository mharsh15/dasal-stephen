package main

import "testing"

func TestMaxChar(t *testing.T) {
	inputOne := "ab1c1d1e1f1g1"
	testOne := Maxchar(inputOne)
	if testOne != "1" {
		t.Fatalf("Test Case for :" + inputOne + " is 1 but response found is:" + testOne)
	}

	inputTwo := "abcdefghijklmnaaaaa"
	testTwo := Maxchar(inputTwo)

	if testTwo != "a" {
		t.Fatalf("Test Case for :" + inputTwo + " is 1 but response found is:" + testTwo)

	}
}
