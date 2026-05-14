"use strict";
let na = "Lija";
let age = 10;
let isFail = false;
let d = "hello";
d = "2";
console.log(na);
console.log(age);
console.log(isFail);
console.log(d);
let digit = 0;
if (digit >= 0) {
    console.log("the number is postive");
}
else if (digit < 0) {
    console.log("the number is negative");
}
else {
    console.log("The number is not valid");
}
let color = 'green';
switch (color) {
    case 'green':
        console.log('Please Go');
        break;
    case 'Yellow':
        console.log('Ready for Go');
        break;
    case 'Red':
        console.log('Please stop');
        break;
    default:
        console.log("Obey traffic rules");
}
for (let i = 2; i <= 10; i++) {
    console.log(i);
}
