let form = document.querySelector("form")
let emailInput = document.querySelector(".emailinput")
let passInput = document.querySelector(".passinput")
let errorMsg = document.querySelector(".error")
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let usersDatabaseLocal = "";
localStorage.removeItem("Current User")
const sweety = (title, text, icon) => {
    return Swal.fire({
        title: title,
        text: text,
        icon: icon
    })
}
form.addEventListener("submit", (e) => {
    usersDatabaseLocal = JSON.parse(localStorage.getItem("userData"));
    errorMsg.style.display = "none"
    e.preventDefault()
    const email = emailInput.value.trim();
    const password = passInput.value.trim();

    //Email checking 
    //Email empty or not
    if (email == "") {
        sweety("Enter Email", "Email is empty", "question")
        return
    }
    //Whether the email format is correct or not
    if (emailRegex.test(email) == false) {
        errorMsg.style.display = "block"
        return
    }

    //Password checking 
    //Checking whether its empty or not
    if (password == "") {
        return sweety("Enter Password", "Password is empty", "question")
    }  
    //Finding the user data in the database(localStorage)
    if (!usersDatabaseLocal) return sweety("Invalid email or password", "Please check your credentials and try again.", "error")
    const checkUserData = usersDatabaseLocal.find((each) => {
        return each.email == email && each.password == password
    })
    if (checkUserData) {
        makeCurrentUser(email)
        sweety("Login Successfully", "Redirecting you to Dasboard", "success").then((result) => {
            if (result.isConfirmed) {
                window.location.replace("/Dasboard/dashboard.html")
            }
        })
        emailInput.value = ""
    } else {
        sweety("Invalid email or password", "Please check your credentials and try again.", "error")
    }

})//form event end


