#! /usr/bin/env node
"use strict";
/*14. Guest List:
If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that
includes at least three people you’d like to invite to dinner. Then use your list to print a message to
each person, inviting them to dinner*/
Object.defineProperty(exports, "__esModule", { value: true });
const GuestList = ["Mahab", "Nida", "Taiyaba", "Rabia"];
GuestList.forEach(message => {
    console.log(`${message}! App mera ghar me raat ke khane me ajai me indazar karo ga?`);
});
