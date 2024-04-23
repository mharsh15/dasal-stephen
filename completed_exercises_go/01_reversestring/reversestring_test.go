package main

import "testing"

func TestReverseStringOne(t *testing.T) {
	input := "abcd"
	response := ReverseString("abcd")
	expectedResponse := "dcba"
	if response != expectedResponse {
		t.Fatalf(`ReverseString input %q is not matching with expected output %q. current output: %q`, input, expectedResponse, response)
	}
}

func TestReverseStringTwo(t *testing.T) {
	input := "abcd"
	response := ReverseString(" abcd")
	expectedResponse := "dcba "
	if response != expectedResponse {
		t.Fatalf(`ReverseString input %q is not matching with expected output %q. current output: %q`, input, expectedResponse, response)
	}

}

//   test('Reverse reverses a string', () => {
// 	expect(reverse('  abcd')).toEqual('dcba  ');
//   });
