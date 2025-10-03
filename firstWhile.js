process.stdout.write("Please enter your name:")
process.stdin.on("data", function(inputFromUser){
    let repeat = 1
    while(repeat <= 5){
process.stdout.write(inputFromUser);
repeat++;};
process.exit();
})