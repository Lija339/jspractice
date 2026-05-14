class Studentts
{

    name:string
    age:number
    constructor (name:string, age:number)
    {
        this.name=name;
        this.age=age;
        console.log(name)
        console.log(age)
    }
    showdetails():void
    {
console.log ("student name is", this.name)
console.log("Student aage is", this.age)
    }

    displaymark(subject:string, mark:number)
    {
        return subject + "="+mark
    }
}

let s=new Studentts("AAA",12)
s.showdetails()
let m=s.displaymark("Maths", 80)
console.log(s)

console