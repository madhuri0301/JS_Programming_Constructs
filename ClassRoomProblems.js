let a = 10;
let b = 20;
let c = a+b;
console.log("add is :" +c);

let s1 = "10";
let s2 = "20";
let s3 = s1+s2;
console.log("Concatination String" +s3);

let d = new Date();
let today = "Today is :" +(d.getDate()+1) + "/" + d.getFullYear();
let time = "Time is"+d.getHours()+":"+(d.getMinutes());
console.log(today);
console.log(time);