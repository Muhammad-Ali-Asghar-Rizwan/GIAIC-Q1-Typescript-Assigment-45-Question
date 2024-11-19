#! /usr/bin/env node

/*3. Name Cases: 
Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, 
and titlecase.*/


console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  lowercase >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");


export const  lowercase:string =  "HELLOW WORLD"
console.log( lowercase.toLocaleLowerCase());








console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Uppercase >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");



const Uppercase:string="hellow world"
console.log(Uppercase.toLocaleUpperCase());




console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< titlecase >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");


const  titlecase:string= "hellów world"
console.log(titlecase[0].toUpperCase()+titlecase.slice(1).toLocaleLowerCase());

