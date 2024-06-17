package main

import (
	"testing"
)

func TestPalindromeAbba(t *testing.T) {

	input := "abba"

	output := Palindrome(input)

	if !output {
		t.Fatalf(`Output Failed: %t should be true for input: %q`, output, input)
	}
}

func TestPalindroneFail(t *testing.T) {
	input := "greetings"
	output := Palindrome(input)
	if output {
		t.Fatalf(`Output Failed: %t should be false for input %q`, output, input)
	}
}

func TestPalindromeWithSpaces(t *testing.T) {
	inputOne := "aba"
	inputTwo := " aba"
	inputThree := "aba "

	outputOne := Palindrome(inputOne)

	outputTwo := Palindrome(inputTwo)

	outputThree := Palindrome(inputThree)

	if !outputOne {
		t.Fatalf(`Output Failed: %t should be true for input %q`, outputOne, inputOne)
	}
	if outputTwo {
		t.Fatalf(`Output Failed: %t should be false for input %q`, outputTwo, inputTwo)
	}

	if outputThree {
		t.Fatalf(`Output Failed: %t should be false for input %q`, outputThree, inputThree)
	}
}
func TestPalindromeBigNumber(t *testing.T) {
	input := "1000000001"
	output := Palindrome(input)

	if !output {
		t.Fatalf(`Output Failed: %t should be false for input %q`, output, input)
	}
}

func TestPalindromeCapsAndSmall(t *testing.T) {
	input := "Fish hsif"
	output := Palindrome(input)

	if output {
		t.Fatalf(`Output Failed: %t should be false for input %q`, output, input)
	}
}

func TestPalindromePennep(t *testing.T) {
	input := "pennep"
	output := Palindrome(input)

	if !output {
		t.Fatalf(`Output Failed: %t should be false for input %q`, output, input)
	}
}
