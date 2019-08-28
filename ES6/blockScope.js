/* alert(carPrice)                              // Problem of variable hoisting
var carPrice = 300000000 */

// console.log(carPrice)                        // uncaughr reference error
// let carPrice = 300000

/* {
    let carPrice = 700000
    console.log(carPrice)
}

console.log(carPrice) */


let x = 1
for(let x = 0; x<10;x++){
    console.log(x)
}

console.log('x : '+x)