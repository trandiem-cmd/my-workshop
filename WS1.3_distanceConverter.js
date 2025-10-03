const util = require("util");
process.stdout.write("\nThis program converts meters to other units of distance.\nPlease enter a distance in meters: ");
process.stdin.on("data", function ( inputFromUser )
{let meters = inputFromUser;    
    let kilometers = Number (meters) / 1000;
    let miles = Number (meters) / 1609.34;
    let yards = Number (meters) / 0.9144;
    let feet = Number (meters) * 3.28084;
    let inches = Number (meters) * 39.3701;
    let lightYears = Number (meters) / 9.461e+15;
    process.stdout.write(util.format("\n %d meters is:\n",meters));
    process.stdout.write(util.format("\n %d kilometers\n",kilometers.toFixed(3).toString().padStart(20, " ")));
    process.stdout.write(util.format("\n %d miles\n",miles.toFixed(3).toString().padStart(20, " ")));
    process.stdout.write(util.format("\n %d yards\n",yards.toFixed(3).toString().padStart(20, " ")));
    process.stdout.write(util.format("\n %d feet\n",feet.toFixed(3).toString().padStart(20, " ")));
    process.stdout.write(util.format("\n %d inches\n",inches.toFixed(3).toString().padStart(20, " ")));
    process.stdout.write(util.format("\n %d light years\n",lightYears.toFixed(3).toString().padStart(20, " ")));
    process.exit();
});
