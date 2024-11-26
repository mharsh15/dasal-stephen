package main

import (
	"fmt"
)

// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//
//	anagrams('rail safety', 'fairy tales') --> True
//	anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//	anagrams('Hi there', 'Bye there') --> False
func annagram(left string, right string) bool {

	dsl := map[rune]int{}
	dsr := map[rune]int{}
	for _, e := range left {

		inp, err := getRue(e)
		if err == nil {
			dsl[inp] += 1
			//fmt.Println(pos)
		}

	}
	for _, e := range right {

		inp, err := getRue(e)
		if err == nil {
			dsr[inp] += 1
			//fmt.Println(pos)
		}
	}
	if len(dsr) != len(dsl) {
		return false
	}

	counter := 0
	for key, value := range dsr {
		if dsl[key] == value {
			counter++
		}
	}
	return counter == len(dsl)
	//fmt.Println(dc)

}

func getRue(inp rune) (rune, error) {

	if inp >= 65 && inp <= 91 {
		return inp + 32, nil
	} else if inp >= 97 && inp <= 122 {
		return inp, nil
	}
	return 0, fmt.Errorf("")
}
