function sayHello()
{
    console.log("Hi Hello...")
    console.log("Function without parameter and without return")
}

sayHello()

function greet(name: string, age:number)
{
console.log("Your name is" + name+ "and age is" +age)
console.log("Function with parametr and without return")
}
//function with parameter and return type
greet('Lija', 1111)

function addition(a:number, b:number):number
{
    return a+b
}

let sum = addition(12,12)
console.log(sum)