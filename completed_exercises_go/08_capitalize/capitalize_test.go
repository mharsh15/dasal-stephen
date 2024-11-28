package main

import (
	"strings"
	"testing"
)

func Test_One(t *testing.T) {

	if strings.Compare(Capitalize("hi there, how is it going?"), "Hi There, How Is It Going?") == -1 {
		t.Error("hi there, how is it going? is not matching")
	}
}

func Test_Two(t *testing.T) {

	if strings.Compare(Capitalize("i love breakfast at bill miller bbq"), "I Love Breakfast At Bill Miller Bbq") == -1 {

	}
}
