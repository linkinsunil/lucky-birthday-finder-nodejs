var readlineSync = require('readline-sync');

var dobInput = readlineSync.question("Enter your date of birth in 'DDMMYYYY' format: ");
var luckyNumberInput = readlineSync.question("Enter your lucky number: ");
console.log("---------------------------");
console.log("You entered: ");
console.log("Your Birthday is ", dobInput, "and your lucky number is", luckyNumberInput);

var arrOfDob = JSON.parse("[" + dobInput + "]");
// console.log(arrOfDob);
var array = dobInput.split("");
// console.log(array);
var sumOfDob = 0;
for (var i=0; i<array.length; i++) {
  sumOfDob = sumOfDob + parseInt(array[i]);
}
if(sumOfDob % luckyNumberInput === 0){
  console.log("Sum of digits of your birthday is ", sumOfDob, "and is divisible by your lucky number")
} else {
  console.log("Sum of digits of your birthday is ", sumOfDob, "and is not divisible by your lucky number")
}

