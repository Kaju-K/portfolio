let countingLetter = 0
const myName = "Marcelo Kogut"
const spaceName = document.getElementById("my-name")

function writing () {
    if (countingLetter < myName.length) {
        spaceName.innerHTML += myName[countingLetter]
        countingLetter++
        setTimeout(writing, 200)
    }
}

setTimeout(writing, 700)
