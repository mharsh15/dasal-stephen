package main

func Palindrome(input string) bool {

	length := len(input)
	var status = 0

	for pos, _ := range input {
		revPos := length - pos - 1
		//fmt.Println(input)
		//fmt.Println(input[revPos])
		//fmt.Println(val)

		if input[revPos] == input[pos] {
			status++
		}
	}

	return status == length

}
