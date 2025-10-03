process.stdout.write("Are you married?\nPlease, answer Yes or No: ");
process.stdin.on("data", function (inputFromUser)
{let userInput = inputFromUser.toString().trim();
if(userInput == "Yes"||userInput == "yes"||userInput == "Y"||userInput == "y"){
    process.stdout.write("You entered Yes");
}else {
    {if(userInput == "No"||userInput == "no"||userInput == "N"||userInput == "n"){
        process.stdout.write("You entered No");}
     else
        {process.stdout.write("You entered something else");}}
}
process.exit();
})