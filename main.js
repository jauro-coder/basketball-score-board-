
//home score count 
let homeCount = 0
let homeScore = document.getElementById("home-score")

function homeOne(){
  homeCount += 1
  homeScore.innerText = homeCount
  console.log(homeCount)
}


function homeTwo(){
  homeCount += 2
  homeScore.innerText = homeCount
  console.log(homeCount)
}

function homeThree(){
  homeCount += 3
  homeScore.innerText = homeCount
  console.log(homeCount)
}

//guest score count 
let guestCount = 0
let guestScore = document.getElementById("guest-score")

function guestOne(){
  guestCount += 1
  guestScore.innerText = guestCount
  console.log(guestCount)
}


function guestTwo(){
  guestCount += 2
  guestScore.innerText = guestCount
  console.log(guestCount)
}

function guestThree(){
  guestCount += 3
  guestScore.innerText = guestCount
  console.log(guestCount)
}

function resetResult(){
  guestScore.innerText = 0
  homeScore.innerText = 0
}