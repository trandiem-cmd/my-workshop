let array1 = [5,7,32,31,8];
let array2 = [12.4,-13.55,67.44];
let array3 = ["Helsinki","Lissabon","New York","Shanghai"];
process.stdout.write("The value in the index number 3 is: "+array3[3]+"\n");
process.stdout.write("The fourth item in the int array is: "+array1[3]+"\n");
process.stdout.write("In the array2 there are "+ array2.length +" items"+"\n")
process.stdout.write("Integer array contents:\n");
for (let i = 0;i< array1.length;i++){
    console.log(array1[i]);
}
process.stdout.write("Double array contents last to first:\n");
for (let j = 0;j< array2.length;j++){
    array2.reverse();
    console.log(array2[j]);
}
process.stdout.write("New string array: ")
array3.splice(0,4,"empty","empty","empty","empty")
    console.log(array3.join(","));