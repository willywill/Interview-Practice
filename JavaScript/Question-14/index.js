function caesarShift (s, z) {
  const word = s
  const charCodes = word.split('').map((x, i) => word.charCodeAt(i))
  return String.fromCharCode(...[...charCodes].map(x => x + z))
}

caesarShift('Hello', 2)
