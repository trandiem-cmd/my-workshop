/* This file has all code samples from 1st of September */
let age;
age = 15;
age = 32
console.log(age);

let courseName = "Intro to programming";
let amountOfCredits = 5;
let startDate = "01.09.2025"

console.log("You are studying " + courseName + ". Course started on " + startDate +" and it is worth " + amountOfCredits + " credits.");

let x = 5, y = 10, z = 15;
result = x + y + z;
console.log("x = " + x);
console.log("y = " + y);
console.log("z = " + z);
console.log(" result = " + result);
result = x + y;
console.log("x = " + x);
console.log("y = " + y);
console.log("z = " + z);
console.log(" result = " + result);
x++;
console.log("x = " + x);

x = 5;
y = "5";
z = 10;
console.log(x + y + z);
console.log(x + z + y);
console.log(x + z + Number(y));

process.stdout.write(z.toString());


process.stdout.write("Please say something: \n");

process.stdin.on("data", function ( inputFromUser )
{
    process.stdout.write("You said: " + inputFromUser);
    process.exit();
})

