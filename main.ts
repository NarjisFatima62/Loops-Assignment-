//Assignment task 1:

//create a blank array.

// const myWork : any[] = [];

// //crreating lesson by using loop.
// for(let i=1; i <= 10; i++){
//     let lesson = {
//         name : `Lesson ${i}`,
//         status : i % 2 === 0,
//     };
//     myWork.push(lesson);
// };

// console.log(myWork);



//Assignment task 2:

//setting maxValue.
// let maxValue =30;

// //generating random number.
// let randomNumber = Math.floor(Math.random()* maxValue) + 1;
// console.log(randomNumber);

// //track the guess status.
// let correctGuess: boolean = false

// //simulate user guesses.
// let predefined = [6, 19, 26, 22];

// // iterate over guesses.
// let main: number = 0;
// while (!correctGuess && main < predefined.length){

//     // check the user's guess.

//     const currentGuess: number = predefined[main];
//     if(currentGuess === randomNumber){
//         console.log("Congratulations! you've guessed the  correct number:", currentGuess);
//         correctGuess = true;
//     }else if(currentGuess < randomNumber){
//         console.log("Too low! Guess higher.");
//     }else {
//         console.log("Too high! Guess lower.");
//     }
//     main++;
// };



//Assignment task 3:

//counter incrementer (using do while loop) loop assignment 3.

 // set the starting counter to 0.
// let counter = 0;

 // Create a variable, step , to increase your counter by.
// let step = 4;

 // Add a do ... while loop.
// do{
//     console.log("Counter;" , counter);
//     counter += step;
// }while (counter <= 10);




//Assignment TAsk 4:

//explore a object with for ... in loop.

//Create a simple object with three items..
let myObject : any ={
    item1: "Biryani",
    item2: "Pasta",
    item3: "Coldrink",
};

for( let x in myObject){
    console.log(`${x} : ${myObject[x]}`);
}
    



//Assignemnt Task 5:

// //create an empty array:
// const myArray : number[] = [];

// // Run a loop 10 times, adding a new increment value to the array:
// for (let i = 1; i <= 10; i++ ){
//     myArray.push(i);
// };

// //log the array into the console.
// console.log("Array:" , myArray);

// // use the for loop to it rate through the array..
// for (let i = 0; i < myArray.length; i++){
//     console.log("main:" , i, "Value:" , myArray[i]);
// }

// for (const value of myArray){
//     console.log("Value:" , value);
// }