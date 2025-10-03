process.stdout.write("Please enter a number: ");
process.stdin.on("data", function ( insertFromUser) 
{if(insertFromUser.value == 0){
    process.stdout.write("You entered a zero");}
else {process.stdout.write("You entered something else");}
process.exit();
})