const readline = require('readline-sync'); // Pulls In All The Functions that Allows Us To Get data From User

//readline.question : this Method Is Used To Ask The Question From User
let num = readline.question("Enter The Number Like 10, 100, 1000 , 10000,... : "); 
num = Number(num) //Number Is A Function Used To Convert Data Type To Number

if(num == 10)
{
    console.log("Ten");
}
else if(num == 100)
{
    console.log(" One Hundred");
}
else if(num == 1000)
{
    console.log("One Thousand");
}
else if(num == 10000)
{
    console.log("Ten Thousand");
}
else if(num == 100000)
{
    console.log("One Lakh");
}
else if(num == 1000000)
{
    console.log("One Million");
}
else if(num == 10000000)
{
    console.log("One Crore");
}
else
{
    console.log("Enter Valid Number")
}

