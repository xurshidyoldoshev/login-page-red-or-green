let btn = document.querySelector(".btn");
let passwordInput = document.querySelector(".inp[type='password']");
let usernameInput = document.querySelector(".inp[type='text']");
let text = document.querySelector(".empty__str");

btn.addEventListener("click", () => {
    if (usernameInput.value.length > 20) {
        text.textContent = "information has increased !";
        text.style.textAlign = "center";
        text.style.fontSize = "1.4em";
        return usernameInput.focus();
    }

    if (passwordInput.value.length > 32) {
        return passwordInput.focus();
    }

    console.log("Username:", usernameInput.value);
    console.log("Password:", passwordInput.value);
});

usernameInput.addEventListener("keyup", () => {
    if (usernameInput.value.length > 20) {
        usernameInput.style.border = "2px solid red";
        text.textContent = "information has increased !";
        text.style.color = "black";
        text.style.textAlign = "center";
        text.style.fontSize = "1.4em";
    } else {
        usernameInput.style.border = "2px solid green";
        text.textContent = "";
        text.style.color = "";
    }
});

passwordInput.addEventListener("keyup", () => {
    if (passwordInput.value.length > 32) {
        passwordInput.style.border = "2px solid red";
    } else {
        passwordInput.style.border = "2px solid green";
    }
});

usernameInput.addEventListener("focus", () => {
    console.log("Username focused");
    text.textContent = "";
    text.style.color = "";
});

passwordInput.addEventListener("focus", () => {
    console.log("Password focused");
});
