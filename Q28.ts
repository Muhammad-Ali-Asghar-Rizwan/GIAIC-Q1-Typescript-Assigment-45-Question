#! /usr/bin/env node


/*28. Stages of Life: 
Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, 
and then:
• If the person is less than 2 years old, print a message that the person is a baby
• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
• If the person is age 65 or older, print a message that the person is an elder.*/




//• If the person is less than 2 years old, print a message that the person is a baby.


let baby_age:number = 2
if (baby_age > 1) {
    console.log(" He the person is a baby.");
} 


//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

let baby_age2:number = 4
if (baby_age2 > 2) {
    console.log(" He the person is a toddler");
} 




//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

let baby_age3:number = 13
if (baby_age3 > 4) {
    console.log(" He the person is a baby");
} 



//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
let baby_age4:number = 20
if (baby_age4 > 13) {
    console.log(" He the person is a teenager");
} 




//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

let baby_age5:number = 65
if (baby_age5 > 20) {
    console.log(" He the person is a adult");
} 




//• If the person is age 65 or older, print a message that the person is an elder.

let elder:number = 65
if (elder <= 70) {
    console.log(" He the person is a elder");
}