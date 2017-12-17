package main

import (
  "fmt"
)

// Helper functions

func Print(x ...interface{}) {
  fmt.Println(x)
}

func main () {

  upperLimit := 100

  for value := 1; value <= upperLimit; value++ {
		switch {
		  case value % 3 == 0 && value % 5 == 0:
		    Print("FizzBuzz")
		  case value % 3 == 0:
		    Print("Fizz")
		  case value % 5 == 0:
		    Print("Buzz")
		  default:
		    Print(value)
		}
	}
}
