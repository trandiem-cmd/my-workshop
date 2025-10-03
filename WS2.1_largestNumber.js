process.stdout.write("This program can find the largest of two numbers you enter from the keyboard. Please, enter two numbers separated with single space character: ");
process.stdin.on("data", function (inputFromUser)
{
let numberinString = inputFromUser.toString().split(" ");
let number1 = numberinString[0];
let number2 = numberinString[1];
if (number1 > number2){
    process.stdout.write("The largest number is "+number1.toString().trim()+".")
} else {process.stdout.write("The largest number is "+number2.toString().trim()+".")}
process.exit();
})