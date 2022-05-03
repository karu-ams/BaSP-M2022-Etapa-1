window.onload = function() {
    // OBJECTS //
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var submitButton = document.getElementById('submit');

    // ERROR ALERTS //
    var errorEmail = document.getElementById('email-error');
    var errorPassword = document.getElementById('password-error');

    // VARIABLES //
    var emailFormat = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    
    // EVENTS //
    email.addEventListener('blur', validateEmail);
    email.addEventListener('focus', emailFocus);
    password.addEventListener('blur', validatePassword);
    password.addEventListener('focus', passwordFocus);
    submitButton.addEventListener('click', submitLogin);

    // FUNCTIONS // 
    // ANOTHER OPTION
   /* email.onblur = function () {
        var isValid = emailFormat.test(email.value);
        if(isValid == true){
            alert('Valid email.')
        } else {
            alert('Sorry. The email is not valid.')
        }
    }
    console.log(emailFormat.test(email.value));*/

    function validateEmail() {
        var isValid = emailFormat.test(email.value);
        if(isValid == true){
            errorEmail.classList.add('error-inv');
            return true;
        } else {
            console.log('Sorry. The email is not valid.'); /// ver de sacar
            errorEmail.classList.add('error-input');
            return false;
        }
    }

    function emailFocus() {
        errorEmail.classList.replace('error-input','error-inv');
    }

    // PASSWORD FUNCTION //
    function validatePassword() {
        if (haveNumAndLett(password.value) && password.value.length >= 8) {
            console.log('correct Password');
            /*errorPassword.classList.add('error-inv')*/
            return true;
        } else {
            console.log('incorrect pass.');
            errorPassword.classList.add('error-input');
            return false;
        }
    }

    function passwordFocus() {
        errorPassword.classList.replace('error-input','error-inv');
    }

    // LOG IN //
    function submitLogin() {
        if (validateEmail() && validatePassword()){
            var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login';
            var keylist = ['email', 'password'];
            var valuelist = [email.value, password.value];
            fetchLogin(url, keylist, valuelist);
            alert('The mail is: '+email.value+'\nThe password is: '+password.value);
        }
    }

    // AUXILIARES //
    function haveNumAndLett(str) {
        var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZáéíóúÁÉÍÓÚ';
        var numbers = '1234567890';
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

    function fetchLogin(url, keylist, valuelist) {
        var keyValueArr = []
        for (var i = 0; i < keylist.length ; i++) {
            keyValueArr.push(keylist[i].concat('=', valuelist[i]));
        }
        var queryParams = keyValueArr.join('&');
        var fetchURL = url.concat('?', queryParams);

        fetch (fetchURL)
            .then(function(response){ ///tiene que tener un then que transforme a json el obj
                return response.json();
            })
            .then(function(jsonResponse){ //// agregar IF para que me de mensaje success
                alert(jsonResponse.msg);
            })
            .catch(function(error){ ///siempre termina con catch
                console.log(error);
            })
    }
}


