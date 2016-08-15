// // Definition
// function myAwesomeFunction (something, stuff){
//     console.log('hello');
// };

// // function call / invocation
// myAwesomeFunction();

// function move (speed) {
//     // speed is our parameter (placeholder)
    
//     // typeof is an operator that will return the type that a variable / value is
//     // returns the type as a string
//     // console.log( typeof speed )
    
//     //typeof is great for enforcing value types that are getting passed into a function
    
    
    
//     if ( typeof speed === 'string' ){
//         console.log('We moved at a ' + speed + ' pace.');
//     }
//     else{
//         console.log('We couldn\'t move :(')
//     }
// }

// move('fast');      // 'fast' is an argument
// move('real slow'); // 'real slow' is an argument

// f(x) = x + 3
// f(6) = 6 + 3
//       9
// move(speed){}
// move('fast')


// Fun With Arguments

// function doTheThing (pokemon, digimon) {
    
//     // ES6 / ES2015 - Template Literals
//     console.log( `The ${pokemon} fights the ${digimon}` );
    
//     // // Traditional String Concat
//     // console.log( 'The ' + pokemon + ' fights the ' + digimon );
    
// }
// doTheThing('t-rexmon')
// console.log(1,2,3,4,5,6,7,8,9,10)

// // Working with unknown number of arguments
// function doTheThing (pokemon) {
    
//     // ALL arguments passed to a function (whether there is a parameter or not) are accessible
//     // They are accessible through an object called arguments
//     console.log(arguments);
//     // arguments can be used to check for things like length
//     // can check typeof
 
//     for( var i = 0; i < arguments.length; i++){
//         console.log( `The ${pokemon} fights the ${arguments[i]}` );
//     }
// }




// // Primitive
// String
// Number
// Boolean
// Undefined
// Null

// // Non-Primitive
// Object
// Array
// Function


var potato = 'hot potato'
// Scoping
// Lexical Scoping - Variables that are declared inside of a scope are inaccessible outside of that scope
// Dynamic Scoping - Every time a function is executed (called or invoked) it creates a scope.  This scope only exists while the function is being executed
function myFunc () {
    var potato = 'spudtacular';
    console.log(potato);
    return potato
    // return output // functions typically return values, this is the only thing that really lives on after the function is done executing
}
var otherPotato = myFunc();

// Garbage Collection
    // Process of destroying unused variables to free up memory
    // If a value / object has no reference, it will be garbage collected

var pikachu = {
    name : 'pikachu',
    move : 'thunderstuff'
};
var porkymans = pikachu // this would creates a 2nd reference
pikachu = null; // The object that the variable pikachu USED to be assigned to is garbage collected.  There's no way we can reference that object


var twoScoops = {
    name : '2 Scoops',
    trainer : {
        name : 'Ash',
        age  : 10
    }
}
var ash = twoScoops.trainer;
twoScoops = null;
// What happens to twoScoops and ash?
// The outside object gets garbage collected, but because ash has a reference to the inner object - it lives on


// var pikachu = 'dog'
// pikachu = null

// All non-primitive types are passed by REFERENCE
// All primitive types are passed by VALUE


// Closure - ties in Dynamic Scoping and Garbage Collection

function playerMaker () {
    
    var health = 100;
    
    return function(dmg){
        health -= dmg; // decrement health
        
        if( health <= 0){
            console.log('bleehhhh')
        }
        else{
            console.log(health)
        }
            
    }
}
var bill  = playerMaker();
var alice = playerMaker();
// both bill and alice have closure over their respective health variables
// health cannot be garbage collected because there is a reference to it
// bill / alice (the function they are pointing to) sort of remember the scope they were created in
// bill = null; // Destroys bill's health and function, but alice's would still live on

