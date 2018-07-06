/*
This is the test file for the palindrome program.
*/

var rl = require('readline-sync');
var greet = '----------------------------------\nWelcome to the Palindrome Checker!\n----------------------------------\n';
console.log(greet);
var firstUserWord = rl.question('Enter a word to check if it is a palindrome: ');


function checkCycle() {
    checkLength(firstUserWord);
    while(repeat() == true) {
        repeat();
    }
}


// adding the checkPal() func to checkLength()
function checkLength(word) {
    if(word.length < 3) {
        console.log('This word is NOT long enough to be a palindrome');
    }
    else {
        return checkPal(word);
    }
}

// checks the word backwards -  
function backwards(word) {
    palWord = '';
    for(var i = (word.length - 1); i > (0 - 1); i--) {
        palWord += word[i];
    }
    return palWord
};

// checks to see if the palWord str created by backwards() func == the firstUserWord
function checkPal(word) {
    backwards(word);
    if(backwards(word) == word) {
        console.log('Yes, ' + word + ' is a palindrome!');
    }
    else {
        console.log('No, ' + word + ' is NOT a palindrome!');
    }
}

function repeat() {
    var option = rl.question('Would You Like to Check Another Word? Enter Y or N: ').toLowerCase();
    if(option == 'y') {
        var otherUserWord = rl.question('Enter another word to check if it is a palindrome: ');
        checkLength(otherUserWord);
        return true
    }
    else if(option == 'n') {
//        console.log('Have a nice day.');
        return false
    }
    else {
        console.log('That is not what I asked...');
        return repeat();
    }
}

// all functions calls go below:
checkCycle();



/* 
I got the game to repeat itself and work properly on each repeat, NOW I NEED TO GET IT TO STOP

Wonder to build out a more involved greeting- and set a function to terminate the program if the user types in a specific word of set of words?

How to have the prorgram ask the user to enter another word? - lump into one function?

Check if having a front and backwards functions can compare, if True then print success message to user?
ibeset to have the backwards iteration function separate from the check if pal function
*/
