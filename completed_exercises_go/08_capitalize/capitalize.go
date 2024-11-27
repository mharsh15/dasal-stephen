package main

import "unicode"

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
