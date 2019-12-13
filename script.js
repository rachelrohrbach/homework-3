var generateButton = document.querySelector("#generate");
var copyButton = document.querySelector("#copy")

function generatePassword () {
    var specialCharacters = "!@#$%^&*()";
    var numbersCharacters = "0123456789";
    var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength;
    do {
        var numberOfCharacters = prompt('how many characters would you like your password to contain?');
        passwordLength = parseInt(numberOfCharacters);
        if (passwordLength < 8) {
            alert('password must be 8 or more characters!');
        }
        if (passwordLength > 128) {
            alert('password must be 128 or less characters!');
        }
    } while (passwordLength < 8 || passwordLength > 128);
    
    var hasSpecialCharacters;
    var hasNumberCharacters;
    var hasLowerCaseCharacters;
    var hasUpperCaseCharacters;
    
    do {
        hasSpecialCharacters = confirm('would you like your password to contain special characters?');
        hasNumberCharacters = confirm('would you like your password to contain numerical characters?');
        hasLowerCaseCharacters = confirm('would you like your password to contain lowercase characters?');
        hasUpperCaseCharacters = confirm('would you like your password to contain uppercase characters?');
    
        if (!hasSpecialCharacters && !hasNumberCharacters && !hasLowerCaseCharacters && !hasUpperCaseCharacters) {
            alert('must select at least one character type!');
        }
    } while (!hasSpecialCharacters && !hasNumberCharacters && !hasLowerCaseCharacters && !hasUpperCaseCharacters);
    
    var selectableCharacters = '';
    if (hasSpecialCharacters === true) {
        selectableCharacters += specialCharacters;
    }
    if (hasNumberCharacters === true) {
        selectableCharacters += numbersCharacters;
    }
    if (hasLowerCaseCharacters === true) {
        selectableCharacters += lowerCaseCharacters;
    }
    if (hasUpperCaseCharacters === true) {
        selectableCharacters += upperCaseCharacters;
    }
    
    var password = '';
    for (var i = 1; i <= passwordLength; i++) {
        var randomIndex = Math.floor(Math.random () * selectableCharacters.length);
        password = password + selectableCharacters.charAt(randomIndex);
    }
    
    document.getElementById('msg').textContent = password;
}

function copyToClipboard() {
    var passwordText = document.getElementById('msg');
    passwordText.select();
    passwordText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert('Your password ' + passwordText.value + 'has been copied to the clipboard!');
}

generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyToClipboard);
