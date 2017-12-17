// Try different values here: [9], [1,2,3], [9,9,9]
const givenArray = [3,5,9]

function iterateArray (arr) {

  let tempArray = []
  let carry

  for (let i = arr.length - 1; i >= 0; i--) {

    // If the first element is a 9, we'll add the 10 manually to the array at the beginning to handle the index increase
    if (i === 0 && arr[i] == 9) {
        tempArray.unshift(0)
        tempArray.unshift(1)
        break
      }

    // If we get to the last element in the array, increment it
    if (i === arr.length - 1) {
        arr[i]++
    }

    // If carried, add to this current value
    if (carry === 1) {
        arr[i]++
        carry = 0
    }

    // If value is divisible by 10 this will equal 0, and make the carry 1
    if (arr[i] % 10 === 0 ) {
        arr[i] %= 10
        carry = 1
    }

    tempArray.unshift(arr[i])
  }

  return tempArray
}

console.log(`Initial values are: ${givenArray}.
Final values are: ${iterateArray(givenArray)}.`)
