export class Atm
{
    #balance = 1000
    
    deposit(deptamount)
    {
        this.#balance=this.#balance+deptamount;
        console.log("Total balance after deposit:")
    }

    Withdraw(withdrawamount)
    {
        this.#balance=this.#balance-withdrawamount;
        console.log("Total amount after withdraw:")
    }

    checkbalance()
    {
        console.log(this.#balance)
        console.log("The total amount is:")
    }
}

let atm = new Atm()
atm.checkbalance()
atm.deposit(2000)
atm.checkbalance()
atm.Withdraw(500)
atm.checkbalance()
