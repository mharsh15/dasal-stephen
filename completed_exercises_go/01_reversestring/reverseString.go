package main

func ReverseString(input string) string {

	var newString string
	length := len(input)

	for x := length - 1; x >= 0; x-- {
		newString += string(input[x])
	}
	return newString
}
