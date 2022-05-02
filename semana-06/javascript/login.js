window.onload = function() {
    // VARIABLES
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var emailParagraph= document.querySelector('.email-error p');
    var pwdParagraph= document.querySelector('.pwd-error p');

    email.addEventListener("blur", emailBlur);
    email.addEventListener("focus", emailFocus);
    pwd.addEventListener("blur", pwdBlur);
    pwd.addEventListener("focus", pwdFocus);
}