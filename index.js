

let homePoint = document.getElementById("home-point")
let guestPoint = document.getElementById("guest-point")
let homeCount = 0
let guestCount = 0


function homeOne() {
    homePoint.textContent = homeCount +=1
}

function homeTwo() {
    homePoint.textContent = homeCount +=2
}

function homeThree() {
    homePoint.textContent = homeCount +=3
}

// For Guest
function guestOne() {
    guestPoint.textContent = guestCount +=1
}

function guestTwo() {
    guestPoint.textContent = guestCount +=2
}

function guestThree() {
    guestPoint.textContent = guestCount +=3
}