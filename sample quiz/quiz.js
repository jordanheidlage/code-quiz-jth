var introEl = document.querySelector("#intro")
var qaViewEl = document.querySelector("#qa-view")
var timerEl = document.querySelector("#time")
var titleEl = document.querySelector
    ("#title")
var choicesEl = document.querySelector("#choices")
var inputInitialEl = document.querySelector("#input-initial")
var enterInitialEl = document.querySelector("#enter-inital")
var saveEl = document.querySelector("#save")
var dashboard = document.querySelector("#dashboard")
var startQuizBtn = document.querySelector("#start-quiz")
/*
step 1. displays start page - title and paragraph
start button -  (triggers the quiz game and displays timer and question page)

step 2. displays question page and hides start page - timer will start when the start button is clicked from start page, display question and show 4 four answer buttons,  
When you click one of the answer button, show correct or wrong. . Total remaining is 75 seconds for 5 questions. total = number of Questions * 15 seconds.

When you get a wrong answer, your time gets deducted by 15 sec off the clock and it needs to show wrong message. If you get it right, no penalty off clock but you need to show Correct message.

step 3. Once you answer all the questions or the time runs out, you will be presented with the score and input text to enter your initial and a submit button. The timer should stop
and time left becomes your score. When you click the submit, it store your initial and score in localstorage

step 4:
Show a dashboard of all the highscores 
*/


var timeRemaining = 75 // for each 5questions
var clockid;

var question = [
    {
        title: "What does HTML stand for?",
        answers: ["Hypertext Markup Language", "Hampsters try making lasagna", "Hyperlink Marker Language", "Just don't pick this one"],
        solution: "Hypertext Markup Language"

    },
    {
        title: "What language will you use to style your html page?",
        answers: ["Javascript", "CSS", "R", "Python"],
        solution: "CSS"
    },
    {
        title: "What is a group of variables called?",
        answers: ["Grouping", "Marker", "Array", "Static selector"],
        solution: "Array"
    },
    {
        title: "What language will you use to style your html page?",
        answers: ["Javascript", "CSS", "R", "Python"],
        solution: "answer2"
    },
    {
        title: "Test?",
        answers: ["Test", "Answer", "Test", "Test"],
        solution: "answer2"
    }
]

var index = 0

function countDown() {
    console.log(countDown)
    timeRemaining--
    timerEl.textContent = timeRemaining
}

function startGame() {
    console.log(startGame)
    qaViewEl.classList.remove("hide")
    introEl.classList.add("hide")
    timerEl.textContent = timeRemaining
    clockid = setInterval(countDown, 1000)
    displayQuestions()
}

function displayQuestions() {
    console.log(displayQuestions)
    titleEl.textContent = question[index].title
    choicesEl.innerHTML = '';
    for (var i = 0; i < question[index].answers.length; i++) {
        var button = document.createElement('button')
        button.textContent = question[index].answers[i]
        button.setAttribute('value', question[index].answers[i])

        button.onclick = checkAnswer;

        choicesEl.append(button)

    }

}

function checkAnswer() {
    console.log(checkAnswer)
    if (this.value !== question[index].solution) {
        timeRemaining -= 15;
        timeRemaining = timeRemaining - 15;

        timerEl.textContent = timeRemaining
    } 

    index++

    if (question.length === index){
        gameOver()
    }else{
        displayQuestions()
    }
}

function gameOver() {
//     step 3. Once you answer all the questions or the time runs out, you will be presented with the score and input text to enter your initial and a submit button. The timer should stop
console.log(gameOver)
qaViewEl.classList.add('hide')
inputInitialEl.classList.remove('hide')
clearInterval(clockid)
}

function saveGame(){
    console.log(saveGame)
    event.preventDefault();
qaViewEl.classList.add('hide')
inputInitialEl.classList.add('hide')
inputInitialEl.classList.remove('hide')
let initials = enterInitialEl.value.toUpperCase();
dashboard.push({ initials: init, dashboard: timeRemaining});
dashboard=innerHTML="";
for (let i = 0; i < dashboard.length; i++) {
    const element = array[index];
    let li =document.createElement("li");
    li.textContent = ${dashboard[i].enterInitialEl}: ${dashboard[i].saveEl};
    dashboard.append(li);
}

storeScores();
displayScores();
    // and time left becomes your score.
    // When you click the submit, it store your initial and score in localstorage
function storeScores(){
    console.log(storeScores)
    localStorage.setItem("dashboard", JSON.stringify(dashboard));
}
function displayScores(){
    console.log(displayScores)
    let storedDashboard = JSON.parse(localStorage.getItem("dashboard"));
}
function clearScores() {
    console.log(clearScores)
    localStorage.clear();
    scoreListEl.innerHTML="";
}
}

clearScrBtn.addEventListener("click", clearScores);
saveEl.addEventListener("submit", saveGame)
startQuizBtn.addEventListener("click", startGame)
