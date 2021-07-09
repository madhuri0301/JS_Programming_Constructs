let readline = require('readline-sync');
console.log("Check Year is Leap or Non-Leap Year");

let Year = readline.question('Enter The Year : ');
Year = Number(Year);

if(Year%4 == 0 && Year % 100 !=0 || Year % 400 == 0)
{
    console.log("Year Is Leap");
}
else
{
    console.log("Year Is Not a Leap year");
}