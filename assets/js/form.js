const btnUsername = document.getElementById('submitUsername')
const userNameInput = document.getElementById('userNameInput')
const error = document.getElementById('error')


btnUsername.addEventListener('click', saveUsername)


function saveUsername() {
    let username = userNameInput.value
    if (username == '') {
        error.style.display = "block"
    } else {
        error.style.display = "none"
        localStorage.setItem('UserName', username)
        window.location.assign('/QuizHomePage.html')
    }
}