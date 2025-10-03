let i = numberOfDays;
let j = firstWeekDay;
if((j++)>7){j=j-7}
for (let i = 1; i <=numberOfDays-1;i++)
{for (let j=0;j<=6;j++)
{if (j==1){console.log("Monday"+" "+(i++)+"."+month+".")
}else if(j==2){console.log("Tuesday"+" "+(i++)+"."+month+".")
}else if(j==3){console.log("Wednesday"+" "+(i++)+"."+month+".")
}else if(j==4){console.log("Thursday"+" "+(i++)+"."+month+".")
}else if(j==5){console.log("Friday"+" "+(i++)+"."+month+".")
}else if(j==6){console.log("Saturday"+" "+(i++)+"."+month+".")
}else if(j==7){console.log("Sunday"+" "+(i++)+"."+month+".")
}
}
}