let word = "abba";
//loop from the letter and continue to the middle 
for(let i = 0; i< (word.length / 2);i++){
    //if the letter in the current index is the same as the letter in the current index counted from the end
if(word.charAt(i)!= word.charAt(word.length - 1 - i)){
    process.stdout.write("Word is NOT a palindrome");
     process.exit();
}}
   process.stdout.write("Word is a palindrome");

