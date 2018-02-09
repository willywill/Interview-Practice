const givenArray = [9,9,9]

/**
* Converts the array to string -> int -> increments it -> back into an array.
*
* @param {Number[]} arr
*/
const iterateArray = arr => String(parseInt(arr.toString().split(',').join('')) + 1).split('')

iterateArray(givenArray)
