let usersDatabase = []
if (localStorage.getItem("userData")) {
    usersDatabase = JSON.parse(localStorage.getItem("userData"))
}
function makeCurrentUser(email) {
    let currentUser = {
        email: email,
    }
    localStorage.setItem("Current User", JSON.stringify(currentUser))
}