/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name) {
    //loop through each animal object in animal array
    for(let i= 0; i < animals.length; i++) {
        //if animals name matched parameter
        if(animals[i].name === name) {
            //return animal object if found
            return animals[i];
        }
    }
    //return null if no matching  animal is found
    return null;
}



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//define a functiion called replace that takes three parameters(animals,name, replacement)
function replace(animals, name, replacement) {
    //loop through each animal in animal array
    for (let i = 0; i < animals.length; i++) {
//check if each animal matches
        if(animals[i].name === name) {
            //if there a matche replace animals object with replacement object
            animals[i] = replacement;
            //exit loop
            break;
        }

    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// function declaration called `remove` with animals, name parameters
function remove(animals,name) {
    //loop through each animal object in animal array
    for(let i = 0; i < animals.length; i++) {
        //if animals name matches the parameter name
        if(animals[i].name === name) {
            //remove animal from animal array using splice
            animals.splice(i, 1);
            //exit loop
            break;
        }
    }

}



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
    // Check if the animal object has a valid 'name' property
    if (!animal.name || animal.name.length === 0) {
        // Log an error message and exit the function if name is missing or empty
        console.log('Error: Animal must have a name.');
        return;
    }

    // Check if the animal object has  'species' property
    if (!animal.species || animal.species.length === 0) {
        // Log an error message and exit the function if species is missing or empty
        console.log('Error: Animal must have a species.');
        return;
    }

    // Check if the name is unique by looping through existing animals
    for (let existingAnimal of animals) {
        if (existingAnimal.name === animal.name) {
            // Log an error message and exit the function if name is not unique
            console.log('Error: Animal name must be unique.');
            return;
        }
    }

    // If all conditions pass, add the new animal to the animals array
    animals.push(animal);
}




/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}