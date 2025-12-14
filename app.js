let form = document.querySelector("form")
let emailInput = document.querySelector(".emailinput")
let passInput = document.querySelector(".passinput")
let errorMsg = document.querySelector(".error")
form.addEventListener("submit", (e) => {
    errorMsg.style.display="none"
    e.preventDefault()
    if (emailInput.value.trim() == "") {
        Swal.fire({
            title: "Enter Email",
            text: "Email is empty",
            icon: "question"
        })
    }

    else {
        // console.log( emailInput.length);
        // console.log(object);
        let flag = true;
        for (let i = 0; i < emailInput.value.length; i++) {
            if (emailInput.value[i] == "@") {
                flag = false
            }
        }
        if (flag) {
            errorMsg.style.display="block"
        }
    }

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

})

