process.stdout.write("Please, enter three numbers separated with single space character: ");
process.stdin.on("data", function (inputFromUser)
{let numbersinString = inputFromUser.toString().split(" ");
let number1 = Number(numbersinString[0]);
let number2 = Number(numbersinString[1]);
let number3 = Number(numbersinString[2]);
if (number1 == number2 && number2 == number3){
    process.stdout.write("You entered three matching numbers.");
    }else if(number1 == number2 && number2 != number3){process.stdout.write("Third one doesn’t fit.");
    }else if(number1 != number2 && number2 != number3 && number1 != number3 ){process.stdout.write("You entered three different numbers");}
if(number1 == 2 || number2 == 2 || number3 == 2){process.stdout.write("\nYou entered the magic number 2!");}
process.exit();
})