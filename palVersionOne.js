// this is the main file for the project

var rl = require('readline-sync');
var word = rl.question('Enter a word to check if it is a palindrome: ');

function backwards() {
    palWord = '';
    for(var i = (word.length - 1); i > (0 -1); i--) {
        palWord += word[i]
    }
    return palWord
}

function checkPal() {
    backwards();
    if(backwards() == word) {
        console.log('Yes this word is a palindrome!');
    }
    else {
        console.log('This word is NOT a palindrome!');
    }
}

checkPal();
