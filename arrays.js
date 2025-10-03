let fruits = ["banana","apple","kiwi","orange"];
fruits.push("watermelon");
for (let i=fruits.length-1;i>=0;i--)
{console.log(fruits[i])};
for (let i=0;i<fruits.length-1;i++)
{console.log(fruits[i])};
console.log(fruits.length);
console.log(fruits[4]);
for (let i=fruits.length-1;i>=0;i--)
{console.log(fruits[i])};
fruits.unshift("mango");
for (let i=0;i<fruits.length;i++)
{console.log(fruits[i])};
let seasons = ["Spring","Summer","Fall","Winter"];
seasons.pop();
console.log(seasons);
console.log(seasons);
console.log(seasons.join("-"));
seasons.shift();
console.log(seasons);
console.log(seasons);
seasons.sort();
console.log(seasons);
seasons.sort((a, b)=>a-b);
console.log(seasons);
let giadinh = ["Soc","Nghe","Ba","Me"];
console.log (giadinh);
giadinh.reverse();
console.log(giadinh);
giadinh.sort();
console.log(giadinh);
let breakfirst = ["bread","milk","eggs","jam"];
breakfirst.unshift("rice");
console.log(breakfirst);
breakfirst.push("sup");
console.log(breakfirst);
breakfirst.reverse(breakfirst.sort());
console.log(breakfirst);
let jumps = [
    ["Mike Powell",8.95, 8.22],
    ["Bob Beamon",8.9,"x"],
    ["Carl Lewis",8.87,8.24]
];
jumps.push(
    ["Tommi Evilä",8.22,"x"]
)
let i=0;
let j=0;
for (i=0;i<=3;i++)
{for (j=0;j<=2;j++)
{process.stdout.write(" "+jumps[i][j])}};
let matrix = new Array();
for(let i = 0; i < 3; i++) {
matrix[i] = new Array('Initial value col 1', 'Initial value col 2' );
}
jumps.splice(1,0,["David John",9.9,10.0]);
jumps.splice(0,2);
jumps.pop();
for (i=0;i<=1;i++)
{for (j=0;j<=1;j++)
{process.stdout.write(" "+jumps[i][j])}};
console.table(jumps);
let grade = [
    ["Hung",8.5,9.0],
    ["Diem",9.1,8.8],
    ["Cat Tuong",9.5,9.6],
    ["Kien Tuong",9.8,9.7]
];
console.log(grade);
console.table(grade);
grade.forEach((gradeOfMember)=>{
    console.log(gradeOfMember+"");
})
grade.forEach(function printItem(gradeOfMember){
    console.log(gradeOfMember+"");
})