function hello(btn) {
    console.log(btn.previousElementSibling);
    btn.previousElementSibling.classList.toggle("hide-2")
    if (btn.innerHTML == '<i class="fa-solid fa-angle-down"></i>') {
        btn.innerHTML = '<i class="fa-solid fa-angle-up"></i>'
    }
    else btn.innerHTML = '<i class="fa-solid fa-angle-down"></i>'
}
if (!localStorage.getItem("Current User")) {
    window.location.replace("http://127.0.0.1:5500/");
}