let marks = [80,70,90,95]
let mul=1;

for(let i=0;i<marks.length;i++)
{
    mul =mul*marks[i]
}
console.log("Total Mark is" + mul)

let totalmarks=marks.reduce((total,value)=>total*value,1);
console.log("Total marks by using reduce method is: " +totalmarks)

let filterMark=marks.filter(m=>m%2===0);
console.log(filterMark)

let mapMarks =marks.map(v=>v*2)
console.log(mapMarks)
console.log(marks)
