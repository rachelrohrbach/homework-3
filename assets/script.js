var specialChar = "!@#$%^&*()";
var numbersChar = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


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

var isSpecialChar;
var isNumChar;
var isLowerCase;
var isUpperCase;

do {
    isSpecialChar = confirm('would you like your password to contain special characters?');
    isNumChar = confirm('would you like your password to contain numerical characters?');
    isLowerCase = confirm('would you like your password to contain lowercase characters?');
    isUpperCase = confirm('would you like your password to contain uppercase characters?');

    if (!isSpecialChar && !isNumChar && !isLowerCase && !isUpperCase) {
        alert('must select at least one character type!');
    }
} while (!isSpecialChar && !isNumChar && !isLowerCase && !isUpperCase);