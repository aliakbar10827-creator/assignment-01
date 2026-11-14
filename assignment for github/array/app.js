// Assignment 9: Perform different operations on colors array

let colors = ["Red", "Green", "Blue"];

document.write("Original Array: " + colors + "<br><br>");

// a. Add color at the beginning
let firstColor = prompt("Enter a color to add at the beginning");

colors.unshift(firstColor);

document.write("After adding at beginning: " + colors + "<br><br>");

// b. Add color at the end
let lastColor = prompt("Enter a color to add at the end");

colors.push(lastColor);

document.write("After adding at end: " + colors + "<br><br>");

// c. Add two more colors at the beginning
colors.unshift("Purple", "Orange");

document.write("After adding two colors: " + colors + "<br><br>");

// d. Delete first color
colors.shift();

document.write("After deleting first color: " + colors + "<br><br>");

// e. Delete last color
colors.pop();

document.write("After deleting last color: " + colors + "<br><br>");

// f. Add color at desired index
let index = +prompt("Enter index to add a color");
let newColor = prompt("Enter color name");

colors.splice(index, 0, newColor);

document.write("After adding at desired index: " + colors + "<br><br>");

// g. Delete colors from desired index
let deleteIndex = +prompt("Enter index to delete colors");
let deleteCount = +prompt("How many colors do you want to delete?");

colors.splice(deleteIndex, deleteCount);

document.write("After deleting colors: " + colors);