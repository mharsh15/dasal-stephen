package main

import "unicode"

// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

func Capitalize(input string) string {
	inputRune := []rune(input)
	for num, char := range inputRune {
		if num == 0 {
			inputRune[num] = checkCaps(char)
		}
		if unicode.IsSpace(char) {
			inputRune[num+1] = checkCaps(inputRune[num+1])
		}
	}
	return string(inputRune)
}

func checkCaps(inp rune) rune {

	if inp >= 97 {
		return inp - 32
	}
	return inp
}
