/*

JS Functions!

- function literals (+)
- functions declations (named) vs. function expressions (anonymous) (+)
- named funcitons vs. anonymous functions (+)
- function arguments vs. function parameters (+)
- function calls/invocation vs function references (+)
- built-in methods
- funciton scope

What is a function?

- John says "A capsule of code", not a bad start!

> A REUSABLE block of code (set of intructions) that takes inputs, and produces outputs.

*/

// Function literal (functional expression)

// the things inside parenthesis are arguments
var calculateArea = function(width, height) { // anonymous
    // width and height are arguments
    console.log('Area:', width*height);
}

// speaking in code: here, we are calling/invoking the calculateArea function three times...
// calculateArea(20, 40) // 20 and 40 are parameters;
// calculateArea(30, 20) // 30 and 20 are parameters;
// calculateArea(25, 48) // 25 and 48 are parameters;

// console.log(calculateArea) // invoking console.log, with a reference to calculateArea;

///////////////////////////////////////////////////////////////////
// Named functions [speaking in code:](are declared)
///////////////////////////////////////////////////////////////////
function calculateVolume(width, height, depth) {
    var volume = width*height*depth; // volume is only availble within the SCOPE of calculateVolume;
    console.log('Volume:', volume, 'cubic in.');

    window.volume = volume; // this is leaking to test code, delete this! :: no

    return volume;
}

// var cubeVolume = calculateVolume(40, 50, 60);

///////////////////////////////////////////////////////////////////
// Built-in methods
///////////////////////////////////////////////////////////////////

function popeye(someFood) {
//     return "Popeye eats " + someFood; // concatination
    return "Popeye eats ".concat(someFood, " and also olive oil."); // concat : built-in;
}
// typeof is a convienient way of finding out what type a variable is.

var sentence = popeye('spinach');
var numWords = sentence.split(' ').length;

var csvFile = 'Name,Address,Phone,Social,Passport,BloodType,PersonalPrefenceOfSoap';

csvFile.split(',').join(' '); // no looooooops

function oliveOil(string, fn) { // callback
    console.log(string);

    var popeyeSentence = fn(string);

    console.log(popeyeSentence);
}

oliveOil("Olive Oil", popeye); // passing in a function BY REFERNECE (callback);
