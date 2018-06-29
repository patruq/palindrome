/*
    Simple program that asks the user to enter a word, the characters of which are evaluated backwards and stored into a new string.  That new string is
    then compared to the original word passed by the user for a match. The result of the comparison is displayed to the user.
*/

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
        console.log('Yes, ' + word + ' is a palindrome!');
    }
    else {
        console.log('No, ' + word + ' is NOT a palindrome!');
    }
}

checkPal();
