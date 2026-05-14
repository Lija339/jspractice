//Methods of Arrays

let arr=[1,2]
console.log(arr)

arr.push(30)
console.log(arr)

arr.pop()
console.log(arr)

arr.unshift(20)
console.log(arr)

arr.shift()
console.log(arr)

console.log(arr.length)

console.log(arr.indexOf(3))

let bool = arr.includes(2)
console.log(bool)

let arr1=[4,5,6,10,67]
console.log(arr1)

let newArr=arr1.slice(3,5)
console.log(newArr)

arr1.splice(0,2)
console.log("After removing the element:" +arr1)
arr1.splice(2,3,40)
console.log("After Replacing the element:" +arr1)