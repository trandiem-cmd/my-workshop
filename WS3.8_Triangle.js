process.stdout.write("Please enter size of triangle:");
process.stdin.on("data", function (inputFromUser)
{let height = 1;
    let char = "*";
    while(height <= inputFromUser){
        process.stdout.write(char+"\n");
        char = char +"*";
        height++;
    }
    process.exit();
});