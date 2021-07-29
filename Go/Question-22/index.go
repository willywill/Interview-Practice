package main

import (
	"strings"
)

func WordBreak(targetWord string, words []string) bool {
	if targetWord == "" {
		return true
	}

	for _, word := range words {
		if strings.HasPrefix(targetWord, word) {
			// Get the suffix of targetWord starting from the length of word to the end of targetWord
			suffix := targetWord[len(word):]

			// Recursively call WordBreak with the suffix
			if WordBreak(suffix, words) {
				return true
			}
		}
	}

	// Tried everything, and no match was found
	return false
}

func WordBreakCached(targetWord string, words []string, cache map[string]bool) bool {
	if targetWord == "" {
		return true
	}

	// If we have a value in the cache, return it
	val, ok := cache[targetWord]
	if ok {
		return val
	}

	for _, word := range words {
		if strings.HasPrefix(targetWord, word) {
			// Get the suffix of targetWord starting from the length of word to the end of targetWord
			suffix := targetWord[len(word):]

			// Recursively call WordBreak with the suffix
			if WordBreakCached(suffix, words, cache) {
				// Cache the result before returning to the caller
				cache[targetWord] = true
				return true
			}
		}
	}

	// Tried everything, and no match was found
	cache[targetWord] = false
	return false
}

func WordBreakWithMemoization(targetWord string, words []string) bool {
	cache := make(map[string]bool)
	return WordBreakCached(targetWord, words, cache)
}

func main() {
	words1 := []string{"ab", "abc", "cd", "def", "abcd"}
	targetWord1 := "abcdef"

	words2 := []string{"bo", "rd", "ate", "t", "ska", "sk", "boar"}
	targetWord2 := "skateboard"

	words3 := []string{"a", "p", "ent", "enter", "ot", "o", "t"}
	targetWord3 := "enterapotentpot"

	words4 := []string{"e", "ee", "eee", "eeee", "eeeee", "eeeeee"}
	targetWord4 := "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef"

	words5 := []string{"leet", "code"}
	targetWord5 := "leetcode"

	println("Example 1: ", WordBreakWithMemoization(targetWord1, words1))
	println("Example 2: ", WordBreakWithMemoization(targetWord2, words2))
	println("Example 3: ", WordBreakWithMemoization(targetWord3, words3))
	println("Example 4: ", WordBreakWithMemoization(targetWord4, words4))
	println("Example 5: ", WordBreakWithMemoization(targetWord5, words5))
}
