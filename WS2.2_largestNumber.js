process.stdout.write("This program can find the largest of three numbers you enter from the keyboard.\nPlease, enter three numbers separated with single space character: ");
process.stdin.on("data", function (inputFromUser)
{
let numberinString = inputFromUser.toString().split(" ");
let number1 = Number(numberinString[0]);
let number2 = Number(numberinString[1]);
let number3 = Number(numberinString[2]);
/*if (number1 > number2){
    largestNumber = number1
} else {largestNumber = number2;}
if (largestNumber > number3){
    process.stdout.write("The largest number is "+largestNumber.toString().trim()+".")
} else {process.stdout.write("The largest number is "+number3.toString().trim()+".")}
process.exit();
})*/
let greastest = number1;
if (number2 > greastest){
    greastest = number2;
}   
if (number3 > greastest){
    greastest = number3;
}
process.stdout.write("The largest number is "+greastest+".")
process.exit();})