process.stdout.write("Random number: ");
let random = [];
for (let i = 1;i<=100;i++){
    let randomnumber = Math.floor(Math.random() *1000);
    random.push(randomnumber);
    process.stdout.write(randomnumber+" ");
}
    let largestnumber = 0;
for (let i = 0;i<=99;i++){
    if (random[i]>largestnumber){largestnumber=random[i]}
    }
console.log("\n\nLargest number is: "+largestnumber);
let smallestnumber=1000;
for (let i = 0;i<=99;i++){
    if (random[i]<smallestnumber){smallestnumber=random[i]}
    }
console.log("\nSmallest number is: "+smallestnumber+"\n");