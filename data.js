/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create variable animal and set it equal to an empty object
var animal = {};
// use dot notation and assign value of animal=bear
animal.species = 'bear';
//use bracket notation give animal property name assign value of Bob
animal['name'] = 'Bob';
//use dot notation give animal propertry nosies assign empty array
animal.noises = [];
//print animal object
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create variable noises and assign empty array
var noises = [];
//use bracket notation and assign sound in first index
noises[0] = 'arg';
//use push method to add another noise
noises.push('arw');
//use unshift method to add sound at the beginning of noises array
noises.unshift('arf');
//use bracket notation to add another noise at the end of array
noises[noises.length] = 'awy';
//print length of noises
console.log(noises.length);
//print last element in noises
console.log(noises[noises.length-1]);
//print the entire noises array
console.log(noises);



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//use bracket to assign noises property on animal to noises
animal['noises'] = noises;
//use push to add another noise property to animal
animal.noises.push('awv');
//print animal
console.log(animal);



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * You use dot and bracket notation. For example. object.propertyName, object[PropertyName]
 *
 * 2. What are the different ways of accessing elements on arrays?
 *  You use index notation and other methods(push, unshift etc.)
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}