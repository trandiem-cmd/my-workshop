console.log("Please select what you want to do: \n1 - Print out hello\n2 - Print out current date and time\n0 - Exit");
process.stdin.on("data", function (inputFromUser)
{let selectedNumber = Number(inputFromUser);
switch (selectedNumber){
    case 0:
        process.stdout.write("End program. Goodbye!");
        break;
    case 1:
        process.stdout.write("Hello!");
        break;
    case 2:
        process.stdout.write("Current date and time is: "+new Date());
        break;
    default:
        process.stdout.write("You entered an invalid number. Please, enter 0, 1 or 2.");}
        process.exit();
})
