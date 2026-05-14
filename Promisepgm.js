let num=23

let oddeven = new Promise((resolve, reject)=>
{
if(num%2==0)
{
    resolve("Even Number")
}
else
{
    reject("Odd Number")
}
})

oddeven.then((resolvemsg)=>
{
    console.log("Resolved Message")
})

.catch((errmsg)=>{
 console.log("Error Message")
})