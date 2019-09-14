var alphaset = "abcdefghijklmnopqrstuvwxyz"
var nums = "123467890"
var symbols = "!@#$%^&*()_+"


function generatePassword (length) {
    phrase = "";
    for (i = 0; i < length; i++) {
        phrase += alphaset[randomNumber(26)];
    }

    return phrase;
}

function randomNumber(maxNumber) {  
    return Math.floor(Math.random() * (maxNumber + 1) ); 
}

console.log(generatePassword(5));