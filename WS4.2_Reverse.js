process.stdout.write("This program reads numbers from the keyboard.\nAfter receiving a zero, it prints the number\nin reverse order. Please, start entering numbers.\nThe program will stop when you enter a zero.\n\n");
let givenNumbers = [];
process.stdout.write(givenNumbers.length+" Enter a number: ");
process.stdin.on("data", function(inputFromUser)
{let inputNumber = Number(inputFromUser);
    givenNumbers.push(inputNumber);
if (inputNumber==0){
    process.stdout.write("Reverse order: ");
    let i = givenNumbers.length;
    while (i>0)
    {i--;
    process.stdout.write(givenNumbers[i]+" ");}
process.exit();}
else {process.stdout.write(givenNumbers.length+" Enter a number: ")};
});