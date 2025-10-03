let givenNumber = [55,23,6456,324,21,234,72,21];
process.stdout.write("\nThe number you'd like to search: ");
process.stdin.on("data", function(inputFromUser){
    let number = [inputFromUser.toString().split(" ")];
    for(let i=0;i<givenNumber.length;i++){
        if(inputFromUser==givenNumber[i]){
            process.stdout.write(inputFromUser.toString().trim()+" was found "+"in index "+i+"\n")
            process.exit();
        }
    }
    for(let i=0;i<givenNumber.length;i++){
        if(inputFromUser!=givenNumber[i]){
            process.stdout.write(inputFromUser.toString().trim()+" was not found ")
        process.exit()
        };
    }
});