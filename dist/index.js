"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Labas rytas, Lietuva!');
let name = 'Jonas';
console.log(name);
name = '5';
console.log(name);
const lastname = 'Jonaitis';
const age = 99;
const isMarried = true;
console.log(lastname, age, isMarried);
const marks = [10, 2, 8, 4, 6];
const x = marks.join('');
const students = ['Jonas', 'Maryte'];
students.push('Petras', 'Ona');
function sum(a, b) {
    return a + b;
}
sum(7, 5);
function diff(a, b, convertToString) {
    if (convertToString === true) {
        return '' + (a + b);
    }
    else {
        return a + b;
    }
}
const c = diff(7, 5, true);
const d = diff(7, 5, false);
console.log(c, d);
