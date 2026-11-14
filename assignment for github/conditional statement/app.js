
// Assignment No :- 01

const city = prompt("Enter your city name");

if (city === "Karachi") {
    alert("Welcome to city of lights");
}



// Assignment No :- 02

const gender = prompt("Enter your gender");

if (gender === "male") {
    alert("Good Morning Sir");
}

else if (gender === "female") {
    alert("Good Morning Ma'am");
}



// Assignment No :- 03

const color = prompt("Enter traffic signal color");

if (color === "red") {
    alert("Must Stop");
}

else if (color === "yellow") {
    alert("Ready to move");
}

else if (color === "green") {
    alert("Move now");
}



// Assignment No :- 04

const fuel = prompt("Enter remaining fuel in litres");

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}



// Assignment No :- 05

let a = 4;

if (++a === 5) {
    alert("given condition for variable a is true");
}


let b = 82;

if (b++ === 83) {
    alert("given condition for variable b is true");
}


let c = 12;

if (c++ === 13) {
    alert("condition 1 is true");
}

if (c === 13) {
    alert("condition 2 is true");
}

if (++c < 14) {
    alert("condition 3 is true");
}

if (c === 14) {
    alert("condition 4 is true");
}

let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}

if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}



// Assignment No :- 06

const subject1 = +prompt("Enter marks of subject 1");
const subject2 = +prompt("Enter marks of subject 2");
const subject3 = +prompt("Enter marks of subject 3");

const totalMarks = 300;
const obtainedMarks = subject1 + subject2 + subject3;

const percentage = obtainedMarks / totalMarks * 100;

let grade;
let remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
}

else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
}

else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
}

else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks);



// Assignment No :- 07

const secretNumber = 7;

const guess = +prompt("Guess a number from 1 to 10");

if (guess === secretNumber) {
    alert("Bingo! Correct answer");
}

else if (guess + 1 === secretNumber) {
    alert("Close enough to the correct answer");
}



// Assignment No :- 08

const number = +prompt("Enter a number");

if (number % 2 === 0) {
    alert("Even number");
}

else {
    alert("Odd number");
}



// Assignment No :- 09

const temperature = +prompt("Enter temperature");

if (temperature > 40) {
    alert("It is too hot outside.");
}

else if (temperature > 30) {
    alert("The Weather today is Normal.");
}

else if (temperature > 20) {
    alert("Today's Weather is cool.");
}

else if (temperature > 10) {
    alert("OMG! Today's weather is so Cool.");
}



// Assignment No :- 10

const num1 = +prompt("Enter first number");
const num2 = +prompt("Enter second number");

const operation = prompt("Enter operation (+, -, *, /, %)");

if (operation === "+") {
    alert(num1 + num2);
}

else if (operation === "-") {
    alert(num1 - num2);
}

else if (operation === "*") {
    alert(num1 * num2);
}

else if (operation === "/") {
    alert(num1 / num2);
}

else if (operation === "%") {
    alert(num1 % num2);
}
