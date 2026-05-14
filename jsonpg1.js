import data from './sample.json' with {type: 'json'}
console.log(data.name);

let empl ={
    name: "Lija",
    lname: "John",
    empId: "Emp001",

    fullname : function()
    {
     return this.name + " " + this.lname;
    }
    
}
console.log (empl.fullname());
