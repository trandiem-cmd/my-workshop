process.stdout.write("Please enter a string: ");
process.stdin.on("data", function(inputFromUser)
{let word = inputFromUser.toString().trim();
    let i = Number(word.length);
    for(i=Number(word.length);i>=0;i--){
    process.stdout.write(word.charAt(i-1))};
    process.exit();
})