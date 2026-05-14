class vegetable
{

    constructor (name, price)
    {
        //console.log(name)
        //console.log(price)
        console.log("This is a constructor")
        this.name=name
        this.price=price
    }
    info()
    {
        console.log(this.name)
        console.log(this.price)
    }
}

let v=new vegetable("Onion", 100)
v.info()
let n=new vegetable("potato", 200)
n.info()