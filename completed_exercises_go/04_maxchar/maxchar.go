package main

func Maxchar(input string) string {

	charMap := make(map[rune]int)

	for _, val := range input {

		if charMap[val] >= 1 {

		} else {
			for _, itr := range input {
				if val == itr {
					charMap[val] = charMap[val] + 1
				}
			}

		}

	}
	//fmt.Println(charMap)

	maxCharValue := 'a'
	maxCharNum := 0
	for key, value := range charMap {
		if value >= maxCharNum {
			maxCharNum = value
			maxCharValue = key
		}
	}
	return string(maxCharValue)

}
