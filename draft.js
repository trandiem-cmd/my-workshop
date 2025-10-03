/*let fruits = ["apple","banana"];
console.log(fruits);
console.log(fruits[0]);
console.log(5);
process.stdout.write(5+"");
fruits.push("cherry");
console.log(fruits);
let number = [5,3,5,6];
 let sum = 0;
    for(let i =0;i<4;i++){
        sum = sum + number[i]
    };
    console.log(sum);*/
let a = 0;
    process.stdin.on("data",function(inputFromUser){
console.log(inputFromUser.toString());
a++;
console.log(a)});