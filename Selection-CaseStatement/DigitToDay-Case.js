const readline = require('readline-sync'); // Pulls In All The Functions that Allows Us To Get data From User

//readline.question : this Method Is Used To Ask The Question From User
let digit = readline.question("Enter The Digit : "); 
digit = Number(digit) //Number Is A Function Used To Convert Data Type To Number

switch(digit)
{
    case 0 :
        console.log("Sunday");
        break;
    case 1 :
        console.log("Monday");
        break;
    case 2 :
        console.log("Tuesday");
        break;
    case 3 :
        console.log("Wednesday");
        break;
    case 4 :
        console.log("Thursday");
        break;
    case 5 :
        console.log("Friday");
        break;
    case 6 :
        console.log("Saturday");
        break;
}
