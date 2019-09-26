var alphaset = "abcdefghijklmnopqrstuvwxyz"
var nums = "123467890"
var symbols = "!@#$%^&*()_+"

function processOptions(alphabet, numbers, symbols, length) {
    var charsetList = [];
    if (alphabet) {
        charsetList.push(alphaset);
    }

    if (numbers) {
        charsetList.push(numbers);
    }

    if (symbols) {
        charsetList.push(symbols);
    }

    
}

function generatePassword (characterList, length) {
    var phrase = "";
    for (i = 0; i < length; i++) {
        phrase += alphaset[randomNumber(26)];
    }

    return phrase;
}

function pickFromListRandomly(listOfChars) {  
    return Math.floor(Math.random() * (listofChars.length + 1) ); 
}


console.log(generatePassword(5));