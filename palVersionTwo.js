/*
New in this version: adding a way to terminate the program, once the user has entered the correct set of words.
*/

var rl = require('readline-sync');
var greet = '----------------------------------\nWelcome to the Palindrome Checker!\n---------------------------------\n';
console.log(greet);
var firstUserWord = rl.question('Enter a word to check if it is a palindrome: ');

// this function makes the pal checker repeat as long as the user wants.
function checkCycle() {
    checkLength(firstUserWord);
    while(repeat() == true) {
        repeat();
    }
}

function checkLength(word) {
    if(word.length <3) {
        console.log('This word is NOT long enough to be a palindrome');
    }
    else {
        return checkPal(word);
    }
}

// stores the user inputted word in reverse order, into an empty string.
function backwards(word) {
    palWord = '';
    for(var i = (word.length - 1); i > (0 - 1); i--) {
        palWord += word[i]
    }
    return palWord;
}

// compares the reversed word and the original/user inputted word
function checkPal(word) {
    backwards(word);
    if(backwards(word) == word) {
        console.log('Yes, ' + word + ' is a palindrome!');
    }
    else {
        console.log('No, ' + word + ' is NOT a palindrome!');
    }
}

// prompts the user if they would like to continue, and for another word if so.
function repeat() {
    var option = rl.question('Would you like to check another word? Enter Y or N: ').toLowerCase();
    if(option == 'y') {
        var otherUserWord = rl.question('Enter another word to check if it is a palindrome: ');
        checkLength(otherUserWord);
        return true;
    }
    else if(option == 'n') {
        return false;
    }
    else {
        console.log('That is not what I asked...');
        return repeat();
    }
}

checkCycle();
