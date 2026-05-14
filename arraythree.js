let marks = [80,70,90,95]
let sum=0;

for(let i=0;i<marks.length;i++)
{
    sum =sum+marks[i]
}
console.log("Total Mark is" + sum)

let totalmarks=marks.reduce((total,value)=>total+value,0);
console.log("Total marks by using reduce method is: " +totalmarks)

let filterMark=marks.filter(m=>m<90);
console.log(filterMark)

let mapMarks =marks.map(v=>v+10)
console.log(mapMarks)
console.log(marks)
