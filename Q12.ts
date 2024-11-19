#! /usr/bin/env node


/*12. Greetings: 
Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
print a message to them. The text of each message should be the same, but each message should be 
personalized with the person’s name.*/



let Personal:string[] = ["DANIYAL","SAMAD", "ALI ARMAN","SHOAIB","BAKHTI"] 
Personal.forEach(name =>
    { console.log(`Dear ${name}, Have a graet day.`); }
)

