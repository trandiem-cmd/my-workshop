const util = require("util");
process.stdout.write(util.format("%s","Please enter a number: "));
process.stdin.on("data",function( inputFromUser )
{let x = inputFromUser;
let y = 18
    line1 = Number (x) + Number (y);
    line2 = Number (x) - Number (y);
    line3 = Number (x) * Number (y);
    line4 = Number (x) / Number (y);
    line5 = Number (x) % Number (y);
    line6 = Number (x) + 1;
    line7 = Number (x) + 1;
process.stdout.write(util.format("%d + %d = %d \n",x,y,line1));
process.stdout.write(util.format("%d - %d = %d \n",x,y,line2));
process.stdout.write(util.format("%d * %d = %d \n",x,y,line3));
process.stdout.write(util.format("%d / %d = %d \n",x,y,line4.toFixed(1)));
process.stdout.write(util.format("%d % %d = %d \n",x,y,line5));
process.stdout.write(util.format("%d++ = %d \n",x,line6));
process.stdout.write(util.format("%d-- = %d \n",line7,x));
process.exit();
})