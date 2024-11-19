#! /usr/bin/env node
"use strict";
/*3. Name Cases:
Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
and titlecase.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.lowercase = void 0;
console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  lowercase >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
exports.lowercase = "HELLOW WORLD";
//console.log( lowercase.toLocaleLowerCase());
console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Uppercase >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
const Uppercase = "hellow world";
console.log(Uppercase.toLocaleUpperCase());
console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< titlecase >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
const titlecase = "hellów world";
console.log(titlecase[0].toUpperCase() + titlecase.slice(1).toLocaleLowerCase());
