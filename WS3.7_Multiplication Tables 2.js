let row = 1;
let col = 1;
for (row =1;row<=10;row++){
    console.log("Multiplication table for "+row+"\n".padEnd(27,"*"))
    for(col=1;col<=10;col++)
    {
        console.log("*"+col.toString().padStart(8," ")+" * "+row+" = "+(col*row).toString().padEnd(8," ")+"*")};
    }
