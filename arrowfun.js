const x=(a,b)=>
    {
    return a-b;
}
console.log(x(3,3));

const y=(i,x)=>
    console.log(i*x)
y(5,5)

//scope of variable

function testvar()
{
if (true)
{
    var a=3;
    console.log(a)

}
console.log(a)
}
testvar()

function testlet()
{
    if(true)
    {
        let r=5;
        console.log(r)

    }
    //console.log(r)
}
testlet()

function testconst()
{
    if (true)
    {
        const z= 7;
        console.log(z)
    }
    //console.log(z)
}
testconst()














    