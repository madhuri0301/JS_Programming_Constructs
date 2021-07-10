const readline = require('readline-sync'); // Pulls In All The Functions that Allows Us To Get data From User

//readline.question : this Method Is Used To Ask The Question From User
let digit = readline.question("Enter The Digit : "); 
digit = Number(digit) //Number Is A Function Used To Convert Data Type To Number

if(digit == 0)
{
    console.log("Sunday");
}
else if(digit == 1)
{
    console.log("Monday");
}
else if(digit == 2)
{
    console.log("Tuesday");
}
else if(digit == 3)
{
    console.log("Wednesday");
}
else if(digit == 4)
{
    console.log("Thursday");
}
else if(digit == 5)
{
    console.log("Friday");
}
else if(digit == 6)
{
    console.log("Saturday");
}
else
{
    console.log("Invalid Input")
}

