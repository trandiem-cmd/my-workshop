process.stdout.write("This program can findout whether a number is even or odd.\nPlease, enter a number: ");
process.stdin.on("data", function (inputFromUser)
{let number = Number(inputFromUser);
if (number % 2 == 0){
    process.stdout.write(number +" is even.");
} else {process.stdout.write(number +" is odd.");}
 process.exit();   
})