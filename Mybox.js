//Clouser

/*function myBox()
{
    let myPdt ="phone"

    function getpdt()
    {
console.log(myPdt)
    }
    return getpdt

}

let box = myBox()
box()
box()
box() */


function countNum()
{
    let count =100

    function getCountnum()
    {
        count++
        console.log(count)
    }

    return getCountnum
}

let countt = countNum()
//countt()
//countt()
//countt()
for(let i=0; i<=10; i++)
{
  countt()  
}

//closure is when funtion remembers and use variables from outer funtion even after outer fun has finish 
