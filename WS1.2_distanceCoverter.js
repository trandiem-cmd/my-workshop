const util = require("util");
process.stdout.write("This program converts miles to kilometers.\nPlease, give a distance in miles: ");
/*process.stdin.on("data", function ( insertFromUser )
{let convertsNumber = Number (insertFromUser) * 1.6093
    process.stdout.write(util.format("\n%d miles is %d kilometers.\n",insertFromUser,convertsNumber))
    process.exit();
})*/
/*process.stdin.on("data", function ( insertFromUser )
  {let convertsNumber =  Number (insertFromUser) * 1.6093
    process.stdout.write(Number(insertFromUser) + " miles is " + convertsNumber + " kilometers.\n")
    process.exit();  
})*/
process.stdin.on("data", function ( insertFromUser )
  {let convertsNumber =  Number (insertFromUser) * 1.6093
    process.stdout.write(insertFromUser.toString().trim() + " miles is " + convertsNumber + " kilometers.\n")
    process.exit(); 
})