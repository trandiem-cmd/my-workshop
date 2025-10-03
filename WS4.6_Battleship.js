process.stdout.write("Enter x and y coordinates separated by space: ")
let board = [];
for (let i = 0; i <=4; i++) {
        board[i] = new Array();
    }
board[0][0] = "*";
board[0][4] = "*";
board[1][1] = "*";
board[2][2] = "*";
board[3][0] = "*";
let numberofships = 5;
let sunkship = 0;
let count = 0;
process.stdin.on("data",function(inputFromUser){
let userinput = inputFromUser.toString().trim().split(" ");
let x = userinput[0];
let y = userinput[1];
board[x][y];
if(x>4||y>4){console.log("Please input valid range 0-4")

}else {
    if(board[x][y]=="*"){
        console.log("You hit a ship!");
       sunkship++;
    }else {console.log("Miss!");
    }
    count++;
}
      if (sunkship<5){console.log("Enter x and y coordinates separated by space: ")}
      else {console.log("All ship sunk! You needed"+count++)}
})