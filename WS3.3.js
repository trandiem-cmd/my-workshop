console.log("Please enter a string Javascript");
process.stdin.on("data", function(inputFromUser){
    let text = inputFromUser.toString().trim();
    let character = 0;
    for (let counter = 1;counter <= text.length;counter++){
    console.log(counter.toString().padStart(10," ") + " Charater is " + text.charAt(character++));
    }
}
)