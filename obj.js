let stud=
{
    name : 'AAA',
    rollno:8,
    isPass:true,

fun: function()
{
    //console.log("It is a function")
    return this.name
}
}
//stud.fun()
console.log(stud.fun())

for(let key in stud)
{
    if(typeof stud[key]==="function")
    {
        console.log(key+ ":" + stud[key]())
    }
    else
    {
        console.log(key+ ":"+ stud[key])
    }
}