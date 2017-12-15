const givenArray = [9,9,9] // Try [1,2,3] or [1,9,9]

let newArray = []
let tempArray = []
let carry

newArray = () => {
  // Start from the end of the array and count down towards the beginning
  for (let i = givenArray.length - 1; i >= 0; i--) {

    if (i === 0 && givenArray[i] == 9) {
        tempArray.unshift(0)
        tempArray.unshift(1)
        break
      }

    if (i === givenArray.length - 1) {
      givenArray[i]++
    }

    if (carry === 1) {
      givenArray[i]++
      carry = 0
    }

    /* If the value is divisable by 10 this value will = to 0 and make the carry = 1, continue to the next element
    */
    givenArray[i] %= 10

    if (givenArray[i] % 10 === 0 ) {
      carry = 1
    }

    tempArray.unshift(givenArray[i])
  }

  return tempArray
}

console.log(`Initial values are: ${givenArray}.
Final values are: ${newArray()}.`)
