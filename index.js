let number = document.getElementById("score")
count = 0

function plusOneOne() {
    count += 1
    number.textContent = count
}

function plusTwoTwo() {
    count += 2
    number.textContent = count
}
function plusThreeThree() {
    count += 3
    number.textContent = count
}
let numberTwo = document.getElementById("score-right")
countTwo = 0

function plusOne() {
    countTwo += 1
    numberTwo.textContent = countTwo
}

function plusTwo() {
    countTwo += 2
    numberTwo.textContent = countTwo
}
function plusThree() {
    countTwo += 3
    numberTwo.textContent = countTwo
}


function reset() {
    number.textContent = 0
    numberTwo.textContent = 0
    count = 0
    countTwo = 0
}