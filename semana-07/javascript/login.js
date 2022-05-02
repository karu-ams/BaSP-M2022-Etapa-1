window.onload = function() {
    // OBJECTS
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var submitButton = document.getElementById('submit');

    // ERROR
    var errorEmail = document.getElementById('email-error')

    // VARIABLES
    var emailFormat = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    
    // EVENTS //
    email.addEventListener('blur', validateEmail);
    email.addEventListener('focus', emailFocus)

    // FUNCTIONS //
   /* email.onblur = function () {
        var isValid = emailFormat.test(email.value);
        if(isValid == true){
            alert('Valid email.')
        } else {
            alert('Sorry. The email is not valid.')
        }
    }
    console.log(emailFormat.test(email.value));*/

    function validateEmail () {
        var isValid = emailFormat.test(email.value);
        if(isValid == true){
            console.log('Valid email.') /// ver de sacar
            errorEmail.classList.add('error-inv')
            errorEmail.classList.replace('error-input','error-inv')
        } else {
            console.log('Sorry. The email is not valid.') /// ver de sacar
            errorEmail.classList.add('error-input')
            errorEmail.classList.replace('error-inv', 'error-input')
        }
    }

    function emailFocus () {
        errorEmail.classList.replace('error-input','error-inv')
    }
}

