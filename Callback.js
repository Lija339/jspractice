function wishMe(name, callbackf)
{
    console.log("Good Morning, " +name)
    callbackf()
}

function sayHai()
{
    console.log("Haiiiiiiiiiiiiiiiiiiii")
}

wishMe("Lija", sayHai)