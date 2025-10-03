process.stdout.write("This program calculates the mean value of \nthe numbers you enter from the keyboard.\nThe programs stop when you enter a letter.\n\n");
process.stdout.write("Enter a number: ");
let arrayNumbers = [];
process.stdin.on("data", function(inputFromUser){
let givenNumber = Number(inputFromUser);
arrayNumbers.push(givenNumber);
if(isNaN(givenNumber)){
    let sum = 0;
    for(let i =0;i<(arrayNumbers.length-1);i++){
        sum = sum + arrayNumbers[i]
    };
        let average =0;
            if (arrayNumbers.length>0){
                average = sum / (arrayNumbers.length-1);
                console.log("\nThe average is:"+average.toString());
            process.exit();
            };
}
else{process.stdout.write("Enter a number: ");}
})