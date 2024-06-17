package main

func ReverseInt(num int) int {
	reverse := 0

	for num != 0 {
		rem := num % 10
		num = num / 10
		reverse = (reverse * 10) + rem
	}

	return reverse
}
