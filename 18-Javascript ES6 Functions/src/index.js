// var numbers = [3, 56, 2, 48, 5];
import emojipedia from "./emojipedia";


//Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function(x){
  // return x * 2;
// });
// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(x){
  // return x > 10;
// });
// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
// const newNumber = numbers.reduce(function(accumulator, currentNumber){
  // return accumulator + currentNumber;
// });
// console.log(newNumber);

//Find - find the first item that matches from an array.
// const newNumber = numbers.find(function(x){
  // return x < 3;
// })
// console.log(newNumber);

const newArray = emojipedia.map(function(desc){
  return desc.meaning.substring(0,100);
})
console.log(newArray)
