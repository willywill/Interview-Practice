const types = ['♣️', '♥️', '♦️', '♠️']
const specials = ['A', 'J', 'Q', 'K']
const deckOfCards = []

let currentAssignment = 0


// O(n²) time complexity - Slowwwwwwwwwwwww
for(let i = 1; i <= 13; i++) {
  for(let j = 0; j < 4; j++) {
      if(i === 11) {
        currentAssignment = specials[1] + types[j]
        deckOfCards.push(currentAssignment)
      } else if (i === 12) {
        currentAssignment = specials[2] + types[j]
        deckOfCards.push(currentAssignment)
      } else if (i === 13) {
        currentAssignment = specials[3] + types[j]
        deckOfCards.push(currentAssignment)
      } else if (i === 1) {
        currentAssignment = specials[0] + types[j]
        deckOfCards.push(currentAssignment)
      } else {
        currentAssignment = i + types[j]
        deckOfCards.push(currentAssignment)
      }
    }
}

console.log(deckOfCards)

// Quick and dirty solution
['♣️', '♥️', '♦️', '♠️'].map(s => 
  console.log([Array(9).fill(0).map((v, i) => (i+2) + s)].concat([...`A${s}-J${s}-Q${s}-K${s}`.split("-")]).join()))
