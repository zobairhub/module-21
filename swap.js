
let first = 5;
let second = 7;
// this is wrong approach
// console.log(first,second);
// const temp = first;
// temp is a constant and cannot be changed
// first = second;
// second = temp;
// this will not work because we are trying to change the value of const variable which is immutable in 
// nature
// console.log(first,second);
// approach ---2 Destructuring
[first, second] = [second, first];
// console.log(first, second);

function cubeNumber(number) {
  return number ** 3; // Using the exponentiation operator to calculate the cube
}

var input = 3;
var result = cubeNumber(input);
// console.log("The cube of", input, "is", result); // Output: "The cube of 3 is 27"


function cubeNumber(number) {
  return Math.pow(number, input);
}

var input = 3;
var result = cubeNumber(input);
console.log("The cube of", input, "is", result); // Output: "The cube of 3 is 27"
