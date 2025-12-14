let form = document.querySelector("form")
let emailInput = document.querySelector(".emailinput")
let passInput = document.querySelector(".passinput")
let errorMsg = document.querySelector(".error")
let togglePara=document.getElementById("toggle-para")
form.addEventListener("submit", (e) => {
    let email = true;
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
        email=false
    }
    //else is checking whether it contains @ and .
    else {
        let flag1 = true;
        let flag2 = true;
        for (let i = 0; i < emailInput.value.length; i++) {
            if (emailInput.value[i] == "@") {
                flag1 = false
            }
            if (emailInput.value[i] == ".") {
                flag2 = false
            }
        }
        //Checking @
        if (flag1) {
            errorMsg.style.display = "block"
            email = false;
        }
        //Checking .
        else if (flag2) {
            errorMsg.innerText = "Email should contain ."
            errorMsg.style.display = "block"
            email = false;
        }
     }
    //Password checking 
    if (email) {
        //Checking whether its empty or not
        if (passInput.value.trim() == "") {
            Swal.fire({
                title: "Enter Password",
                text: "Password is empty",
                icon: "question"
            })
        }
        //Checking the length whether its 7 or greater
        else if (passInput.value.trim().length < 7) {
            Swal.fire({
                title: "Password is Short",
                text: "Password should contain atleast 7 characters",
                icon: "warning"
            })
        }
        //All conditions met so redirect it
        else {
            Swal.fire({
                title: "Login Successfully",
                text: "Redirecting you to Dasboard",
                icon: "success"
            }).then((result)=>{
              if(result.isConfirmed){
                window.location.href="http://127.0.0.1:5500/dashboard.html"
              }
            })
        }
    }
})















































