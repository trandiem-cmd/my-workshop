process.stdout.write("Please enter size of triangle: ");
// Read in input
process.stdin.on("data", function(inputFromUser){
    let size = Number(inputFromUser);
    for(let i = 0; i < size; i++) {
        for (let j = 0; j <= i; j++) {
            process.stdout.write("*");
        }
        process.stdout.write("\n");
    }
    // Terminate program
    process.exit();
    })