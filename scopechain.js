let b=2
function outerFunction()
{
let a=8
let b=10

function innerFunction()
{
    let a=90
    console.log(a)
    console.log(b)
}
innerFunction()
}
outerFunction()

let x=10

function fun1()
{
    console.log(x)
}

function fun2()
{
    let x=20
    fun1()
}
fun2()