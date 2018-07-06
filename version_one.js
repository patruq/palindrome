/*
    Simple program that asks the user to enter a word, the characters of which are evaluated backwards and stored into a new string.  That new string is
    then compared to the original word passed by the user for a match. The result of the comparison is displayed to the user.
*/

var rl = require('readline-sync');
var greet =  '----------------------------------\nWelcome to the Palindrome Checker!\n----------------------------------\n';
console.log(greet);
var firstUserWord = rl.question('Enter a word to check if it is a palindrome: ');

function checkCycle() {
    checkLength(firstUserWord);
    while(repeat() == true) {
        repeat();
    }
}
//entered the checkLength() below:
function checkLength(word) {
    if(word.length < 3) {
        console.log('This word is NOT long wnoough to be a palindrome');
    }
    else {
        return checkPal(word);
    }
}

function backwards(word) {
    palWord = '';
    for(var i = (word.length - 1); i > (0 -1); i--) {
        palWord += word[i];
    }
    return palWord
}

function checkPal(word) {
    backwards(word);
    if(backwards(word) == word) {
        console.log('Yes, ' + word + ' is a palindrome!');
    }
    else {
        console.log('No, ' + word + ' is NOT a palindrome!');
    }
}
/*
function checkLength(word) {
    if(word.length < 3) {
        console.log('This word is NOT long enough to be a palindrome.\n');
        repeat();
    }
    else {
        checkPal(word);
    }
}
*/
function repeat() {
    var option = rl.question('Would you like to enter another word? Enter y or n: ').toLowerCase();
    if(option == 'y') {
        var otherUserWord = rl.question('Enter another word to check if it is a palindrome: ');
        checkLength(otherUserWord);
        return true
    }
    else if(option == 'n') {
        return false
    }
    else {
        console.log("That's not what I asked...");
        return repeat();
    }
}

checkCycle();
