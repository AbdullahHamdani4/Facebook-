let form = document.querySelector("form")
let emailInput = document.querySelector(".emailinput")
let passInput = document.querySelector(".passinput")
let errorMsg = document.querySelector(".error")
let password = true;
form.addEventListener("submit", (e) => {
    errorMsg.style.display = "none"
    e.preventDefault()
    //Email checking 
    //if is checking whether its empty or nor
    if (emailInput.value.trim() == "") {
        Swal.fire({
            title: "Enter Email",
            text: "Email is empty",
            icon: "question"
        })
    }
    //else is checking whether it contains @ and .
    else {
        let flag1 = true;
        let flag2 = true;
        for (let i = 0; i < emailInput.value.length; i++) {
            if (emailInput.value[i] == "@") {
                flag1 = false
                password = false;
            }
            if (emailInput.value[i] == ".") {
                flag2 = false
                password = false;
            }
        }
        //Checking @
        if (flag1) {
            errorMsg.style.display = "block"
        }
        //Checking .
        else if (flag2) {
            errorMsg.innerText = "Email should contain ."
            errorMsg.style.display = "block"
        }
    }
})











































// else if (passInput.value.trim() == "") {
//     Swal.fire({
//         title: "Enter Password",
//         text: "Password is empty",
//         icon: "question"
//     })
// }
// else if (passInput.value.trim().length < 7) {
//     Swal.fire({
//         title: "Password is Short",
//         text: "Password should be atleast 7 characters",
//         icon: "warning"
//     })
// }










// function removeError(this) {
//     for (let i = 0; i < this.value.length; i++) {
//             if (this.value[i] == "@") {
//                 // flag = false
//                 errorMsg.style.display="none"

//             }
//         }
// }