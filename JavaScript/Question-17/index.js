const customMultiply = (x, y) => [...Array(y).keys()].map(z => z + 3).reduce((a, b, c) => a + x , 0)

const n = customMultiply(3, 3)

console.log(n)