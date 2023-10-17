let quizTitle = document.getElementById('quizTitle')
let startBtn = document.getElementById('startbtn')

// To Show Name of Student
let username = localStorage.getItem('UserName')
quizTitle.innerText = "Hi, " + username + " I hope you're doing well in quiz"


startbtn.addEventListener('click', () => {
    window.location.assign('/QuizApp.html')
})