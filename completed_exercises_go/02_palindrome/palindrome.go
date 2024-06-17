package main

func Palindrome(input string) bool {

	length := len(input)
	var status = 0

	for pos, _ := range input {
		revPos := length - pos - 1
		if input[revPos] == input[pos] {
			status++
		}
	}

	return status == length

}
