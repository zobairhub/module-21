const result = Math.pow(2, 3);
// console.log(result);

const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1 - num2);
// console.log(gap);
if (gap < 5)
{
  // console.log('You are my friend');
}
else
{
  // console.log('You are not my friend');
}

//--------------
//
//------------
const number = 2.4598;
const fullNumber = Math.round(number);
// console.log(fullNumber);
const number2 = 2.505;
const fullNumber2 = Math.round(number2);
// console.log(fullNumber2);
const number3 = 2.00000001;
const fullNumber3 = Math.ceil(number3);
// console.log(fullNumber3);
const number4 = 2.00000001;
const fullNumber4 = Math.floor(number4);
// console.log(fullNumber4);


// random
// console.log(Math.random());
// console.log(Math.random()*100);
const randomNumber = Math.random() * 100;
// console.log(`Random Number: ${randomNumber}`);

for (let i = 0; i < 20; i++) {
  const random = Math.round(Math.random() * 6);
  console.log(random);
}

 