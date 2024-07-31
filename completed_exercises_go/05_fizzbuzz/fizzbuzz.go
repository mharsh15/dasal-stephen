package main

import (
	"fmt"
)

// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//
//	FizzBuzz(5);
//	1
//	2
//	fizz
//	4
//	buzz

func FizzBuzz(num int) {

	counter := 1
	for counter != num+1 {
		if counter%15 == 0 {
			fmt.Println("fizzbuzz")
		} else if counter%5 == 0 {
			fmt.Println("buzz")
		} else if counter%3 == 0 {

			fmt.Println("fizz")
		} else {
			fmt.Println(counter)
		}

		counter++
	}

}
