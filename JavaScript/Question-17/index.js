const customMultiply = (x, y) => [...Array(y).keys()].reduce(a => a + x, 0)

const n = customMultiply(5, 2)

console.log(n)

