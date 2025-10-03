let weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let numberOfDays = 28;
let month = 2;
let firstWeekDay = 2;
let i;
let j;
for (i=1;i<=(Number(numberOfDays)-1);i++) 
    {for(j=firstWeekDay;j<=(numberOfDays+firstWeekDay-1);(j++))
{console.log(weekdays[j%7]+" "+(i++)+"."+month+".")
}}