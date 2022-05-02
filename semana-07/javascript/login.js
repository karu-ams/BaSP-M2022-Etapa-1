window.onload = function() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var submitButton = document.getElementById('submit') ;

    // VARIABLES
    var emailFormat = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var emailAlert = document.createElement('p');
    
    // EVENTS //
    email.onblur = validateEmail;
    /*submitButton.addEventListener('click', validateLoginForm);*/
    /*email.addEventListener('blur', validateEmail);*/
    /*email.addEventListener('focus', inFocusEmail);*/
    /*password.addEventListener('blur', validatePassword);*/
    /*password.addEventListener('focus', inFocusPwd);*/

    // FUNCTIONS //
    function validateEmail(email){
        var isValid = emailFormat.test((email.value));
        if(isValid == true){
            alert('Valid email.')
        } else {
            alert('Sorry. The email is not valid.')
        }
        /*return emailFormat.test(email) ? true : false;*/
    }
    console.log(emailFormat.test(email));
    email.addEventListener('blur', validateEmail);
}

