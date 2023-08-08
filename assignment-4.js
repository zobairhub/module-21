// problem 1
function cubeNumber(number) {
  return Math.pow(number, 3);
}

var input = 4;
var result1 = cubeNumber(input);
console.log(result1)

// problem 2
function matchFinder(string1, string2) {
  if (typeof string1 === "string" && typeof string2 === "string") {
    return string1.includes(string2);
  }
  else
  {
    return "Your input is not string";
  }
}

let string1 = "ajke amar mon valo nei";
let string2 = "ei";
let result2 = matchFinder(string1, string2 );
console.log(result2);

// problem 3 

function sortMaker(arr){
  if(arr.length !== 2){
    return "Invalid Input";
  }

  let [number1 , number2 ] = arr;

  if(number1 < 0 || number2 < 0){
    return "Invalid Input";
  }
  else if (number1 === number2)
  {
    return "equal";
  }
  else
  {
    return [number1 , number2 ].sort(
        function(number3, number4){
        return number4 - number3;
      }
    )
  }
}

var result3 = sortMaker([3,3]);
console.log(result3);

// problem 4
function findAddress(obj) {
  // Define the default properties with double underscore
  const address = "__";
  
  // Check if the properties exist in the object or not
  const street = obj.street || address;
  const house = obj.house || address;
  const society = obj.society || address;

  // Return an array of property values
  return [street, house, society];
}

// Test case
var myAddressObject = {
  street: 10,
  house: '15A',
  society: 'Earth Perfect'
};

var [streetNumber, houseName, societyName] = findAddress(myAddressObject);

var addingComa = [streetNumber, houseName, societyName].join(",");
console.log(addingComa);

// problem 5

function canPay(arr, chipsPrice) {
  // Check if the array is empty
  if (arr.length === 0) {
    return "Sorry , empty wallet";
  }

  // Calculate the sum of elements in the array
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  // Check if the sum is greater than or equal to chips price
  return sum >= chipsPrice;
}

// Test cases
var myPocketWallet = [5,5,2,1,20,50];
var chipsPrice = 30;

console.log(canPay(myPocketWallet, chipsPrice)); // Output: true













