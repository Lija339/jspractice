function fun1(callback)
{
    callback()
    console.log("function1 is called")
}
function fun2(callback)
{
    callback()
    console.log("function2 is called")
}

function fun3(callback)
{
    callback()
    console.log("function3 is called")
}

//fun1(fun2(fun3(function())))

fun1 (function()
{
    fun2 (function()
    {
        fun3(function()
        {
            console.log("All functions are called")
        })
    })
})
