// map, filter and arrow functions
let arr = [45,23,91];
console.log(arr)
let a1 = arr.map((value) => {
    return value+1;
})

let a2 = arr.filter((value) => {
    return value >  30;
})

// let a3 = arr.reduce((value) => {
//     return value+1;
// })

console.log(a1);
console.log(a2);
//console.log(a3);