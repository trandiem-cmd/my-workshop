process.stdout.write("Please enter a string: ");
process.stdin.on("data", function(inputFromUser)
{let word = inputFromUser.toString().trim();
for(let i = 0; i <= (Number(word.length)-1);i++)
{let a =  Number((i+1) % 2);
    if (a==1){process.stdout.write(word.charAt(i).toUpperCase());
}else (process.stdout.write(word.charAt(i).toLowerCase()));
}
}
)