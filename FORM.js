let img = document.getElementById(`close`);
let password = document.getElementById(`password-field`);

img.onclick = function () {
    if (password.type == "password") {
        password.type = "text";
        img.src = `eye-regular.png`;
    }
    else {
        password.type = `password`;
        img.src = `eye-slash-regular.png`;
    }
}