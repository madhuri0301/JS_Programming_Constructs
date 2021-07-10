const readline = require('readline-sync'); // Pulls In All The Functions that Allows Us To Get data From User

//variables
let maxNum = 0;
let minNum = 0;

//Taking Input From User
//readline.question : this Method Is Used To Ask The Question From User
let a = readline.question("\nEnter The Value Of a : ")
let b = readline.question("Enter The Value Of b :")
let c = readline.question("Enter The Value Of c :");

//Number Is A Function Used To Convert Data Type To Number
a = Number(a);
b = Number(b);
c = Number(c);

// Performing Given Operations
let firstOperation = a + b * c;
console.log("\nFirst Number : " + firstOperation);
let secondOperation = a % b + c;
console.log("Second Number :" + secondOperation);
let thirdOperation = c + a / b;
console.log("Third Number : " + thirdOperation);
let FourthOperation = a * b + c;
console.log("Fourth Number : " +FourthOperation);

//For Maximum Value
if(firstOperation > secondOperation && firstOperation > thirdOperation && firstOperation > FourthOperation)
{
    maxNum = firstOperation;
}
else if(secondOperation > firstOperation && secondOperation > thirdOperation && secondOperation > FourthOperation)
{
    maxNum = secondOperation ;
}
if(thirdOperation > firstOperation && thirdOperation > secondOperation && thirdOperation> FourthOperation)
{
    maxNum = thirdOperation;
}
if(FourthOperation > firstOperation && FourthOperation > secondOperation && FourthOperation > thirdOperation)
{
    maxNum = FourthOperation;
}

// For Minimum Value
if(firstOperation < secondOperation && firstOperation < thirdOperation && firstOperation < FourthOperation)
{
    minNum = firstOperation;
}
else if (secondOperation < firstOperation && secondOperation < thirdOperation && secondOperation < FourthOperation)
{
    minNum = secondOperation ;
}
else if(thirdOperation < firstOperation && thirdOperation < secondOperation && thirdOperation < FourthOperation)
{
    minNum = thirdOperation;
}
else if(FourthOperation < firstOperation && FourthOperation < secondOperation && FourthOperation< thirdOperation)
{
    minNum = FourthOperation;
}
// Printing The Value Of Maximum Number And Minimum Number
console.log("\nThe Maximum Number Is : " + maxNum);
console.log("the Minimum Number Is : " + minNum);