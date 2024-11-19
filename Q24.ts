#! /usr/bin/env node


/*24. More Conditional Tests: 
You don’t have to limit the number of tests you create to 10. If you want to try more 
comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal 
to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in an array
• Test whether an item is not in an array*/






//• Tests for equality and inequality with strings
const equality:string = "Ali"
console.log(equality == "Ali");    // ture



let  inequality:string= "Ahmed"
console.log(inequality == "ahmed");  // false   





  //• Tests using the lower case function
function greet(name:string) {
    console.log(`${name} HOW ARE YOU,`.toLocaleLowerCase());
}
greet("AHMED!")






/*• Numerical tests involving equality and inequality, greater than and less than, greater than or equal 
to, and less than or equal to*/




const Numerical:number = 10
console.log(Numerical == 10); //TURE
console.log(Numerical !== 3); 
console.log(Numerical < 5);  //ture
console.log(Numerical > 15); // tURE




//• Tests using "and" and "or" operators 
const and_or:number = 50
console.log(and_or == 50 && and_or < 40); // FALSE
console.log(and_or >= 60 || and_or !== 45)  ;  // TURE


const my_array = [1,2,3,4,5]
const my_array3 = 372
console.log(Array.isArray(my_array));
console.log(Array.isArray(my_array3));









