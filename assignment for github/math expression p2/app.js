// Assigmnet No :-01

let a = 10;
    document.write("Result:<br>");
    document.write("The value of a is: " + a + "<br>");
    document.write("........................................<br><br>");

    document.write("The value of ++a is: " + (++a) + "<br>");
    document.write("Now the value of a is: " + a + "<br><br>");

    document.write("The value of a++ is: " + (a++) + "<br>");
    document.write("Now the value of a is: " + a + "<br><br>");

    document.write("The value of --a is: " + (--a) + "<br>");
    document.write("Now the value of a is: " + a + "<br><br>");

    document.write("The value of a-- is: " + (a--) + "<br>");
    document.write("Now the value of a is: " + a + "<br>");






// Assigmnet No :-02
    let ab = 2, b = 1;
    let result = --a - --b + ++b + b--;

    document.write("a is " + ab + "<br>");
    document.write("b is " + b + "<br>");
    document.write("result is " + result);






// Assigmnet No :-03
    let userName = prompt("Enter your name");
    document.write(" Hello " + userName + " !  ");



// Assigmnet No :-04 question is not write



// Assigmnet No :-05
    let num = prompt("Enter a number");

    if(num === "" || num === null){
        num = 5;   // default value
    }

    document.write("Multiplication Table of " + num + "<br><br>");

    for(let i = 1; i <= 10; i++){
        document.write(num + " x " + i + " = " + (num * i) + "<br>");
    }





// Assigmnet No :-06
    let subject1 = prompt("Enter first subject name");
    let subject2 = prompt("Enter second subject name");
    let subject3 = prompt("Enter third subject name");

    let totalMarks = 100;

    let obtained1 = +prompt("Enter obtained marks of " + subject1);
    let obtained2 = +prompt("Enter obtained marks of " + subject2);
    let obtained3 = +prompt("Enter obtained marks of " + subject3);

    let totalObtained = obtained1 + obtained2 + obtained3;
    let percentage = (totalObtained / 300) * 100;

    document.write("<table border='1' cellpadding='8'>");
    document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
    
    document.write("<tr><td>" + subject1 + "</td><td>100</td><td>" + obtained1 + "</td><td>" + ((obtained1/100)*100) + "%</td></tr>");
    document.write("<tr><td>" + subject2 + "</td><td>100</td><td>" + obtained2 + "</td><td>" + ((obtained2/100)*100) + "%</td></tr>");
    document.write("<tr><td>" + subject3 + "</td><td>100</td><td>" + obtained3 + "</td><td>" + ((obtained3/100)*100) + "%</td></tr>");
    
    document.write("<tr><th></th><th>300</th><th>" + totalObtained + "</th><th>" + percentage.toFixed(0) + "%</th></tr>");
    document.write("</table>");

