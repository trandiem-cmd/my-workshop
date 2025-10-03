/*write comments here*/
process.stdout.write("\nThis is a computer game.\nPlease, type in a number: ");
process.stdin.on("data", function ( inputFromUser )
{   process.stdout.write("You typed in " + inputFromUser); 
    let numberFromUser = Number (inputFromUser) + 1;
    process.stdout.write("My number is " + numberFromUser + "\n");
    process.stdout.write("Sorry, you lost. I won. The game is over.\n");
    process.exit();//terminate the program: process.exit();
})