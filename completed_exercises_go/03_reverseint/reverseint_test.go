package main

import "testing"

func TestReverseIntZero(t *testing.T) {
	input := 0

	output := ReverseInt(input)

	if output != 0 {
		if output != 5 {
			t.Fatalf(`Output Failed: %d should be false for input %d`, output, input)
		}
	}

}

func TestReverseIntFlipsPositiveNum(t *testing.T) {
	inputOne := 5
	inputTwo := 15
	inputThree := 90
	inputFour := 2395

	outputOne :=
		ReverseInt(inputOne)
	outputTwo := ReverseInt(inputTwo)
	outputThree := ReverseInt(inputThree)
	outputFour := ReverseInt(inputFour)

	if outputOne != 5 {
		t.Fatalf(`Output Failed: %d should be false for input %d`, outputOne, inputOne)
	}

	if outputTwo != 51 {
		t.Fatalf(`Output Failed: %d should be false for input %d`, outputTwo, inputTwo)
	}

	if outputThree != 9 {
		t.Fatalf(`Output Failed: %d should be false for input %d`, outputThree, inputThree)
	}

	if outputFour != 5932 {
		t.Fatalf(`Output Failed: %d should be false for input %d`, outputFour, inputFour)
	}
}

func TestReverseIntFlipsNegativeInt(t *testing.T) {
	inputOne := -5
	inputTwo := -15
	inputThree := -90
	inputFour := -2395

	outputOne :=
		ReverseInt(inputOne)
	outputTwo := ReverseInt(inputTwo)
	outputThree := ReverseInt(inputThree)
	outputFour := ReverseInt(inputFour)

	if outputOne != -5 {
		t.Fatalf(`Output Failed: %d should be false for input %d`, outputOne, inputOne)
	}

	if outputTwo != -51 {
		t.Fatalf(`Output Failed: %d should be false for input %d`, outputTwo, inputTwo)
	}

	if outputThree != -9 {
		t.Fatalf(`Output Failed: %d should be false for input %d`, outputThree, inputThree)
	}

	if outputFour != -5932 {
		t.Fatalf(`Output Failed: %d should be false for input %d`, outputFour, inputFour)
	}

}
