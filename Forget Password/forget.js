let emailValue = document.getElementById("email-check");
let passInput = document.getElementById("new-pass");
let findAcc = document.querySelector(".find-acc");
let changePass = document.querySelector(".change-pass");
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let errorMsg = document.querySelector(".error-msg");
let errorMsg2 = document.querySelector(".error-msg-2");
let skipBtn = document.querySelector(".skip")
let indexInDB = ""
const sweety = (title, text, icon) => {
    return Swal.fire({
        title: title,
        text: text,
        icon: icon
    })
}

findAcc.addEventListener("click", () => {
    errorMsg.style.display = "none"
    const email = emailValue.value.trim();
    if (email == "") {
        console.log("hello");
        errorMsg.textContent = "Email is empty"
        errorMsg.style.display = "block"
        return
    }
    if (!emailRegex.test(email)) {
        console.log("hello");
        errorMsg.textContent = "Email format is incorrect"
        errorMsg.style.display = "block"
        return
    }
    const finding = usersDatabase.find((each) => {
        indexInDB = usersDatabase.findIndex(user => user.email == email);
        return each.email == email
    })
    if (finding) {
        console.log("Found");
        passInput.style.display = "block"
        findAcc.style.display = "none"
        changePass.style.display = "block"
        emailValue.disabled = true
    } else {

        errorMsg.style.display = "block"
    };
})
changePass.addEventListener("click", () => {
    errorMsg2.style.display = "none"
    const password = passInput.value.trim();
    if (!password) {
        errorMsg2.style.display = "block"
        return
    } else {
        usersDatabase[indexInDB].password = password;
        localStorage.setItem("userData", JSON.stringify(usersDatabase));
        return sweety("Password Changed", "Please login in", "success").then((result) => {
            if (result.isConfirmed) {
                window.location.replace("http://127.0.0.1:5500/");
            }
        });
    }
});

skipBtn.addEventListener("click", () => {
    window.location.replace("http://127.0.0.1:5500/");
})