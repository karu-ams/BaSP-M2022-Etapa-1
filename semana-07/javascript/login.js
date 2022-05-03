window.onload = function() {
    // OBJECTS
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var submitButton = document.getElementById('submit');

    // ERROR
    var errorEmail = document.getElementById('email-error')
    var errorPassword = document.getElementById('password-error')

    // VARIABLES
    var emailFormat = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    
    // EVENTS //
    email.addEventListener('blur', validateEmail);
    email.addEventListener('focus', emailFocus);
    password.addEventListener('blur', validatePassword);
    password.addEventListener('focus', passwordFocus);
    submitButton.addEventListener('click', submitLogin);

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
            errorEmail.classList.add('error-inv');
            return true;
           // errorEmail.classList.replace('error-input','error-inv')
        } else {
            console.log('Sorry. The email is not valid.') /// ver de sacar
            errorEmail.classList.add('error-input');
            return false;
          //  errorEmail.classList.replace('error-inv', 'error-input')
        }
    }

    function emailFocus () {
        errorEmail.classList.replace('error-input','error-inv');
    }

    ///// PASSWORD FUNCTION
    function validatePassword () {
        if (haveNumAndLett(password.value) && password.value.length >= 8) {
            console.log('correct Password')
            /*errorPassword.classList.add('error-inv')*/
            return true;
        } else {
            console.log('incorrect pass.')
            errorPassword.classList.add('error-input');
            return false;
        }
    }

    function passwordFocus () {
        errorPassword.classList.replace('error-input','error-inv')
    }

    /////// LOG IN
    function submitLogin () {
        if (validateEmail() && validatePassword()){
            alert('The mail is: '+email.value+'\nThe password is: '+password.value)
        }
    }

    /////// AUXILIARES
    function haveNumAndLett (str) {
        var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
        var numbers = '1234567890'
        var areLetters = false;
        var areNumbers = false;
        for (var i = 0; i < str.length ; i++) {
            if (letters.indexOf(str[i]) >= 0){
                areLetters = true;
            } else if (numbers.indexOf(str[i]) >= 0) {
                areNumbers = true;
            } else {
                return false;
            }
        }
        return (areLetters && areNumbers);
    }
}


