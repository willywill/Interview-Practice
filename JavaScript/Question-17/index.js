const customMultiply = (x, y) => [...Array(y).keys()].map(z => z + 3).reduce(a => a + x , 0)

const n = customMultiply(5, 5)

console.log(n)

