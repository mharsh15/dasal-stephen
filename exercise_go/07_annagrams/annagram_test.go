package main

import "testing"

//	anagrams('rail safety', 'fairy tales') --> True
//	anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//	anagrams('Hi there', 'Bye there') --> False
func Test_Annagram_Normal(t *testing.T) {
	resp := annagram("rail safety", "fairy tales")

	if !resp {
		t.Error("for (rail safety, fairy tales) result is not true")
	}
}
func Test_Annagram_Capital(t *testing.T) {
	resp := annagram("RAIL! SAFETY!", "fairy tales")

	if !resp {
		t.Error("for (RAIL! SAFETY!,) result is not true")
	}
}

func TestFalse(t *testing.T) {
	resp := annagram("Hi there", "Bye there")

	if resp {
		t.Error("for (Hi there", "Bye there) result is not true")
	}
}
