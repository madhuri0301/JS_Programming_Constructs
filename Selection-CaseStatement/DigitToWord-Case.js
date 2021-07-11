const readline = require('readline-sync'); // Pulls In All The Functions that Allows Us To Get data From User

//readline.question : this Method Is Used To Ask The Question From User
let digit = readline.question("Enter The Digit : "); 
digit = Number(digit) //Number Is A Function Used To Convert Data Type To Number

switch(digit)
{
    case 0 :
        console.log("Zero");
        break;
    case 1 :
        console.log("One");
        break;
    case 2 :
        console.log("Two");
        break;
    case 3 :
        console.log("Three");
        break;
    case 4 :
        console.log("Four");
        break;
    case 5 :
        console.log("Five");
        break;
    case 6 :
        console.log("Six");
        break;
    case 7 :
        console.log("Seven");
        break;
    case 8 :
        console.log("Eight");
        break;
    case 9 :
        console.log("Nine");
        break;
}
