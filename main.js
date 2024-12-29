alert("Welcome to JavaScipt");
let name=prompt("What's your name?");
alert("Hello"+ " " + name);
var first_name=prompt("first name");
var last_name=prompt("last name");
alert(first_name+ " " +last_name);
let hobby=prompt("What's your favourite hobby?");
alert("My favourite hobby is"+" "+hobby);

let yearOfBirth=parseFloat(prompt("What's your birth year?"));
let currentYear=parseFloat(prompt("What's your current year?"));
let age=currentYear - yearOfBirth;
alert(`Your age is ${age}`);

let length=prompt("Enter the length of the rectangle");
let width=prompt("Enter the width of the rectangle");
let total=length*width;
alert(`The area of the rectangle is ${total}`);

alert("These are the legal variable: var ROSE, var flower_rose, var sunFlower")

alert("These are the illegal variable: var 1 , var .a ,var a.1 and var a/");

age=20;
alert(`My age is ${age}`);
var age1=24
alert("My friend age is"+ " "+age1);

var first_number=parseFloat(prompt("Enter first number"));
var second_number=parseFloat(prompt("Enter second number"));
total=first_number+second_number;
alert("The total sum of two number is "+total);

var a=6;
var b=8;
total=a*b;
alert(`The result of multiplying 6 and 8 is ${total}`);

let e=17;
let f=5;
let remainder=e % f;
alert(`The remainder is ${remainder}`);

yearOfBirth=prompt("Enter your birth year");
currentAge=2024;
age=currentAge - yearOfBirth;
alert(`Your age is ${age}`);


var num1=parseFloat(prompt("Enter first number"));
var num2=parseFloat(prompt("Enter second number"));
sum=num1+num2;
difference=num1-num2;
product=num1*num2;
quotation=num1/num2;
remainder=num1%num2;
alert(`Sum ${sum}, Difference ${difference}, Product ${product}, Division ${quotation}, Remainder ${remainder }`)



