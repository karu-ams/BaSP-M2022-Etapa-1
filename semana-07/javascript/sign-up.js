/* AUXILIAR FUNCTIONS CAN BE FOUND AR THE END OF THE CODE */
window.onload = function() {
    ///// FIRST NAME ////
    // FIRST NAME -> Variables //
    var firstName = document.getElementById('first-name');

    // FIRST NAME -> Error alerts //
    var errorFirstName = document.getElementById('first-name-error')

    // FIRST NAME -> Events ////
    firstName.addEventListener('blur', validateFirstName);
    firstName.addEventListener('focus', firstNameFocus);

    // FIRST NAME -> Functions //
    function validateFirstName() {
        if (haveOnlyLetters(firstName.value) && firstName.value.length >= 3) {
            console.log('Name is correct');
            return true;
        } else {
            console.log('Name is incorrect.');
            errorFirstName.classList.add('error-input');
            return false;
        }
    }
    function firstNameFocus() {
        errorFirstName.classList.replace('error-input','error-inv');
    }

    ///// LAST NAME ////
    // LAST NAME -> Variables //
    var lastName = document.getElementById('last-name');

    // LAST NAME -> Error alerts //
    var errorLastName = document.getElementById('last-name-error');

    // LAST NAME -> Events ////
    lastName.addEventListener('blur', validateLastName);
    lastName.addEventListener('focus', lastNameFocus);

    // LAST NAME -> Functions //
    function validateLastName() {
        if (haveOnlyLetters(lastName.value) && lastName.value.length >= 3) {
            console.log('Last name is correct')
            return true;
        } else {
            console.log('Last name is incorrect.')
            errorLastName.classList.add('error-input');
            return false;
        }
    }
    function lastNameFocus() {
        errorLastName.classList.replace('error-input','error-inv');
    }

    ///// ID /////
    // ID -> Variables //
    var dni = document.getElementById('id-number');

    // ID -> Error alerts //
    var errorDni = document.getElementById('id-number-error');

    // ID -> Events //
    dni.addEventListener('blur', validateDni);
    dni.addEventListener('focus', dniFocus);

    // ID -> Functions //
    function validateDni() {
        if (dni.value.length >= 7) {
            console.log('ID number is correct')
            return true;
        } else {
            console.log('ID is incorrect.')
            errorDni.classList.add('error-input');
            return false;
        }
    } 
    function dniFocus() {
        errorDni.classList.replace('error-input','error-inv');
    }

/*     ///// DATE OF BIRTH /////
    // DATE OF BIRTH -> Variables //
    var birthDate = document.getElementById('birth-date');
    // DATE OF BIRTH -> Error alerts //
    var errorBirthDate = document.getElementById('birth-date-error');
    // DATE OF BIRTH -> Events //
    birthDate.addEventListener('blur', validateBirthDate);
    birthDate.addEventListener('focus', birthDateFocus);
    // DATE OF BIRTH -> Functions //
    function isFullAge(date) {  
        var birthDate = new Date(date);
        var thisMoment = new Date(Date.now());
      
        return new Date(thisMoment - inputDate).getFullYear() - 1970 >= 18;
    }
 */
    ///// PHONE NUMER /////
    // PHONE NUMBER -> Variables //
    var phoneNum = document.getElementById('phone-number');

    // PHONE NUMBER -> Error alerts //
    var errorPhoneNum = document.getElementById('phone-number-error');

    // PHONE NUMBER -> Events //
    phoneNum.addEventListener('blur', validatePhoneNum);
    phoneNum.addEventListener('focus', phoneNumFocus);

    // PHONE NUMBER -> Functions //
    function validatePhoneNum() {
        if (haveOnlyNumbers(phoneNum.value) && phoneNum.value.length == 10) {
            console.log('Phone number is correct.');
            return true;
        } else {
            console.log('Phone number is incorrect.');
            errorPhoneNum.classList.add('error-input');
            return false;
        }
    }
    function phoneNumFocus() {
        errorPhoneNum.classList.replace('error-input','error-inv');
    }

    ///// ADDRESS /////
    // ADDRESS -> Variables //
    var address = document.getElementById('home-address');

    // ADDRESS -> Error alerts //
    var errorAddress = document.getElementById('home-address-error');

    // ADDRESS -> Events //
    address.addEventListener('blur', validateAddress);
    address.addEventListener('focus', addressFocus);

    // ADDRESS -> Functions //
    function validateAddress() {
        if(haveNumLettSpace(address.value) && address.value.length >= 5){
        return true;
        } else {
            errorAddress.classList.add('error-input');
            return false;
        }
    }

    function addressFocus() {
        errorAddress.classList.replace('error-input','error-inv');
    }

    ///// CITY /////
    // CITY -> Variables //
    var city = document.getElementById('city');

    // CITY -> Error alerts //
    var errorCity = document.getElementById('city-error');

    // CITY -> Events //
    city.addEventListener('blur', validateCity);
    city.addEventListener('focus', cityFocus);

    // CITY -> Functions //
    function validateCity() {
        if(couldHaveNumLettSpace(city.value) && city.value.length > 3){
        return true;
        } else {
            errorCity.classList.add('error-input');
            return false;
        }
    }
    function cityFocus() {
        errorCity.classList.replace('error-input','error-inv');
    }

    ///// POSTAL CODE ////
    // POSTAL CODE -> Variables //
    var postalCode = document.getElementById('postal-code');

    // POSTAL CODE -> Error alerts //
    var errorPostalCode = document.getElementById('home-address-error');

    // POSTAL CODE -> Events //
    postalCode.addEventListener('blur', validatePostalCode);
    postalCode.addEventListener('focus', postalCodeFocus);

    // POSTAL CODE -> Functions //
    function validatePostalCode() {
        if (haveOnlyNumbers(postalCode.value) && postalCode.value.length == 4 || postalCode.value.length == 5) {
            console.log('Postal code is correct.');
            return true;
        } else {
            console.log('Postal code is incorrect.');
            errorPostalCode.classList.add('error-input');
            return false;
        }
    }
    function postalCodeFocus() {
        errorPostalCode.classList.replace('error-input','error-inv');
    }

    ///// EMAIL ////
    // EMAIL -> Variables //
    var email = document.getElementById('email');
    var emailFormat = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    // EMAIL -> Error alerts //
    var errorEmail = document.getElementById('email-error');
    // EMAIL -> Events //
    email.addEventListener('blur', validateEmail);
    email.addEventListener('focus', emailFocus);
    // EMAIL -> Functions //
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

    ///// PASSWORD /////
    // PASSWORD -> Variables //
    var password = document.getElementById('password');
    
    // PASSWORD -> Error alerts //
    var errorPassword = document.getElementById('password-error');

    // PASSWORD -> Events //
    password.addEventListener('blur', validatePassword);
    password.addEventListener('focus', passwordFocus);

    // PASSWORD -> Functions //
    function validatePassword() {
        if (haveNumAndLett(password.value) && password.value.length >= 8) {
            console.log('Correct password');
            /*errorPassword.classList.add('error-inv')*/
            return true;
        } else {
            console.log('Incorrect password.');
            errorPassword.classList.add('error-input');
            return false;
        }
    }
    function passwordFocus() {
        errorPassword.classList.replace('error-input','error-inv');
    }

    ///// REPEAT PASSWORD /////
    // REPEAT PASSWORD -> Variables //
    var repeatPassword = document.getElementById('password-repeat');

    // REPEAT PASSWORD -> Error alerts //
    var errorRepeatPassword = document.getElementById('password-repeat-error');

    // REPEAT PASSWORD -> Events //
    repeatPassword.addEventListener('blur', validateRepeatPassword);
    repeatPassword.addEventListener('focus', repeatPasswordFocus);

    // REPEAT PASSWORD -> Functions //
    function validateRepeatPassword() {
        if (password.value != repeatPassword.value) {
            console.log('Incorrect. You have to repeat the password so they match.');
            errorRepeatPassword.classList.add('error-input');
            return false;
        } else {
            console.log('Both password input match');
            return true;
        }
    }
    function repeatPasswordFocus() {
        errorRepeatPassword.classList.replace('error-input','error-inv');
    }

    ///// CREATE /////
    // CREATE -> Variables //
    var createButton = document.getElementById('create');
    // CREATE -> Error alerts //
    // CREATE -> Events //
    // CREATE -> Functions //
}
///// AUXILIAR FUNCTIONS /////
function haveOnlyLetters(str) {
    var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZáéíóúÁÉÍÓÚ'
    var areLetters = false;
    for (var i = 0; i < str.length ; i++) {
        if (letters.indexOf(str[i]) >= 0) {
            areLetters = true;
        } else {
            return false;
        }
    }
    return areLetters;
}
function haveOnlyNumbers(str) {
    var numbers = '1234567890';
    var areNumbers = false;
    for (var i = 0; i < str.length ; i++) {
        if (numbers.indexOf(str[i]) >= 0) {
            areNumbers = true;
        } else {
            return false;
        }
    }
    return areNumbers;
}
//
function haveNumAndLett (str) {
    var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZáéíóúÁÉÍÓÚ'
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
//
function haveNumLettSpace(str) {
    var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZáéíóúÁÉÍÓÚ';
    var numbers = '1234567890';
    var areLetters = false;
    var areNumbers = false;
    var areSpace = false;
    if(str != str.trim()){
        return false;
    }
    for (var i = 0; i < str.length ; i++) {
        if (letters.indexOf(str[i]) >= 0){
            areLetters = true;
        } else if (numbers.indexOf(str[i]) >= 0) {
            areNumbers = true;
        } else if (str[i] == ' '){
            areSpace = true;
        } else {
            return false;
        }
    }
    return (areLetters && areNumbers && areSpace);
}
// esta funcion recibe un str -> booleano, 
function couldHaveNumLettSpace(str) {
    var lettersAndSpace = ' abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZáéíóúÁÉÍÓÚ';
    var numbers = '1234567890';
    if(str != str.trim()){
        return false;
    }
    for (var i = 0; i < str.length ; i++) {
        if (lettersAndSpace.indexOf(str[i]) >= 0 || numbers.indexOf(str[i]) >= 0){
        } else {
            return false;
        }
    }
    return true;
}