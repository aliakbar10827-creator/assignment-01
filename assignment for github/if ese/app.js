// Assignment 1: Check whether the character is a number, uppercase or lowercase letter

let character1 = prompt("Enter a character");
let code = character1.charCodeAt(0);

if (code >= 48 && code <= 57) {
    alert("It is a number");
}
else if (code >= 65 && code <= 90) {
    alert("It is an uppercase letter");
}
else if (code >= 97 && code <= 122) {
    alert("It is a lowercase letter");
}
else {
    alert("Other character");
}


// Assignment 2: Find the larger number or check if both are equal

let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");

if (num1 > num2) {
    alert("First number is larger");
}
else if (num2 > num1) {
    alert("Second number is larger");
}
else {
    alert("Both numbers are equal");
}


// Assignment 3: Check whether the number is positive, negative or zero

let number = +prompt("Enter a number");

if (number > 0) {
    alert("Positive number");
}
else if (number < 0) {
    alert("Negative number");
}
else {
    alert("Number is zero");
}


// Assignment 4: Check whether the character is a vowel

let character4 = prompt("Enter a character");

if (
    character4 === "a" ||
    character4 === "e" ||
    character4 === "i" ||
    character4 === "o" ||
    character4 === "u"
) {
    alert(true);
}
else {
    alert(false);
}


// Assignment 5: Check whether the password is correct or incorrect

let correctPassword = "12345";
let password = prompt("Enter your password");

if (password === "") {
    alert("Please enter your password");
}
else if (password === correctPassword) {
    alert("Correct! The password you entered matches the original password");
}
else {
    alert("Incorrect password");
}


// Assignment 6: Fix the if/else statement to show the correct greeting

let greeting;
let hour = 13;

if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

alert(greeting);


// Assignment 7: Take time in 24-hour format and show the greeting

let time = +prompt("Enter time in 24-hour format");

if (time >= 0 && time < 1200) {
    alert("Good morning");
}
else if (time >= 1200 && time < 1700) {
    alert("Good afternoon");
}
else if (time >= 1700 && time < 2100) {
    alert("Good evening");
}
else if (time >= 2100 && time <= 2359) {
    alert("Good night");
}
else {
    alert("Invalid time");
}