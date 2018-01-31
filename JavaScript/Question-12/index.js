//Generate two arrays to test
const x = ["A", "B", "E", "C", "D", "B", "F"]

const y = ["A", "B", "E", "C", "D", "B", "F"]

//Create a function that returns true or false that checks if each value is identical
const checkAgainst = (v, i) => v === y[i]

//Use that function to loop through our first array and check it's values against the second array
const isEqual = () => x.every( (v, i, a) => checkAgainst(v, i))


//Check if they length of the arrays are equal, if not don't bother checking if the values are equal as well
const isArrayEqual = x.length === y.length ? isEqual() : false

console.log(isArrayEqual)
