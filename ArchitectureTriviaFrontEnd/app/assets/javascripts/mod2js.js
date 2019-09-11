
const usernameForm = document.querySelector("#usernameForm")
const startBtn = document.querySelector("#button")
const ol = document.createElement('ol')
const userInput = document.querySelector("#username")

const qBox = document.querySelector("#qs-go-here")
const headerBox = document.querySelector("#header-box")


const index = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

userInput.addEventListener("click", e => { userInput.value = ""})

usernameForm.addEventListener("submit", e => {removeStartBox(e), pickRandom()})

function removeStartBox(e) {
    e.preventDefault()
    document.querySelector(".start-screen").style.display = "none"; 
    createUserBar
    highScore(e)
}

function createUserBar() {
    let newUser = {}
    newUser.name = e.target.children[0].value, 
    newUser.score = 0 
    let headerCont = document.createElement('div')   
    headerCont.classList.add('game-header-box')
    let welcomeH1 = document.createElement('H2')
    let scoreH2 = document.createElement('H2')
    let questionH3 = document.createElement('H3')
    questionH3.innerHTML = "Where is this structure located?"
    welcomeH1.innerHTML = `Welcome, ${newUser.name}! You have: `
    scoreH2.innerHTML = `${newUser.score} points`
    headerCont.append(welcomeH1)
    headerCont.append(scoreH2)
    headerCont.append(questionH3)
    headerBox.append(headerCont)
    createUser(newUser)
}

function highScore(e) {
    // let highScoreBox = document.createAttribute('div')
    // highScoreBox.innerHTML =  "<p class= "score-block" id="leaderboard" HIGHSCORES:>"
    // ///this needs to call the high scores
    // headerBox.append(highScoreBox)
}

function pickRandom() {
  if (index.length === 0) {
      endGame()}
  let rand = index[Math.floor(Math.random() * index.length)];
  index.splice(index[rand], 1)
  fetchRandom(rand)
}

function fetchRandom(n) {
  return fetch(`http://localhost:3000/questions/${n}`)
  .then(resp => resp.json())
  .then(showQuestion)
}

function showQuestion(question) {
   qBox.innerHTML = ""
    let qBoxDiv = document.createElement('div')
    let imageBox = document.createElement('div')
    let btn1 = document.createElement('button')
    let btn2 = document.createElement('button')
    let btn3 = document.createElement('button')
    let btn4 = document.createElement('button')
    qBoxDiv.className = "question-box"
    imageBox.innerHTML = `<img class = "question-box" src="${question.img}"/>`
    qBoxDiv.append(imageBox)
    btn1.classList.add('not-correct')
    btn1.addEventListener('click', e => incorrectAnswer(e, question))
    btn2.addEventListener('click', e => {patchAPI(e, question)})
    btn3.addEventListener('click', e => incorrectAnswer(e, question))
    btn4.addEventListener('click', e => incorrectAnswer(e, question))
    btn1.classList.add('not-correct')
    btn2.classList.add('correct')
    btn3.classList.add('not-correct')
    btn4.classList.add('not-correct')
    btn1.innerText = `${question.answer1}`
    btn2.innerText = `${question.correct_answer}`
    btn3.innerText = `${question.answer3}`
    btn4.innerText = `${question.answer2}`
    imageBox.append(btn1)
    imageBox.append(btn2)
    imageBox.append(btn3)
    imageBox.append(btn4)
    qBox.append(qBoxDiv)  
}

//assign button ids and randomize them 

function incorrectAnswer(e, question) {
    let responseDiv = document.createElement('div')
    responseDiv.classList.add('response-box')
    responseDiv.innerText = `Sorry, that is not correct. The ${question.name}
    is located in ${question.correct_answer}`
    // add link to wikipedia page?
    qBox.append(responseDiv)
    pickRandom()
}

function patchAPI(e, question) {
 //.then(correctAnswer(e))
}
function correctAnswer(e) {
    let scoreNum = e.target.parentElement.parentElement.parentElement.parentElement.children[1].childNodes[0].children[1].innerText
    scoreNum = (parseInt(scoreNum) + 1) + " point(s)"
 }

function endGame(newUser) {
   let endDiv = document.createElement('div')
   endDiv.className = "question-box"
   endDiv.innerHTML = `<p>Congratulations, ${newUser.name}, you earned ${newUser.score}</p>`
   qBox.append(endDiv)
   createUser(newUser)
   //then post to game model 
   window.onload() 
}

function createUser(newUser) {
    return fetch("http://localhost:3000/users", {
        method: "POST", 
        headers: {
            "content-type": "application/json", 
            accept: "application/json"
        }, 
        body: JSON.stringify(newUser)
    }).then(resp => resp.json).then(createGame(newUser))
}

function createGame(newUser){
    console.log(newUser)
}