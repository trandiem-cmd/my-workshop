process.stdin.on("data", function(inputFromUser){
console.log("Please enter the number:"+inputFromUser)
console.log("Multiplication table for:"+inputFromUser)
let number= Number(inputFromUser.toString().trim());
for (let counter = 1;counter <= 10 ;counter++)
{result= counter * number;
console.log("*"+counter.toString().padStart(10," ") + " * " + number + " = " + result.toString().padEnd(10," ")+"*")};
console.log("*".padStart(29,"*"))
process.exit();
})


