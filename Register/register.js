
let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let form1 = document.querySelector("form");
let gender = document.getElementsByName("gender");
let emailBar = document.getElementById("Email-bar");
let userPass = document.getElementById("user-Pass");
localStorage.removeItem("Current User")
//Checking whether the database of users exist or we need to make a new one

 //Getting the values from signup form
form1.addEventListener("submit", (event) => {
    event.preventDefault()
    let data = {
        Name: firstName.value.trim(),
        Surname: lastName.value.trim(),
        genderChar: lastName.value.trim(),
        email: emailBar.value.trim(),
        password: userPass.value.trim()
    }
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            data.genderChar = gender[i].value
        }
    }
    //Pushing the user data into local storage
     usersDatabase.push(data)
     localStorage.setItem("userData", JSON.stringify(usersDatabase))
        makeCurrentUser(data.email)
        window.location.replace("/Dasboard/dashboard.html");
})