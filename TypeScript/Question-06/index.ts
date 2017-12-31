const listOfLetters: string[] = ["A", "B", "E", "C", "D", "B", "F"]
const letterTracker = new Map<string, number>()

function firstRecurringLetter(): string {

    let recurringLetter: string = null;

    listOfLetters.forEach(letter => {
        if (letterTracker.has(letter)) {
            recurringLetter = letter;
    } else {
           letterTracker.set(letter, 1)
       }
    })

    return recurringLetter
}

console.log(firstRecurringLetter())
