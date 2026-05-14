"use strict";
class Studentts {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log(name);
        console.log(age);
    }
    showdetails() {
        console.log("student name is", this.name);
        console.log("Student aage is", this.age);
    }
    displaymark(subject, mark) {
        return subject + "=" + mark;
    }
}
let s = new Studentts("AAA", 12);
s.showdetails();
let m = s.displaymark("Maths", 80);
console.log(s);
