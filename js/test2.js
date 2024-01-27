// import { arr } from './test.js'

// let { name, age } = obj/* destructuring objects*/
// let [a,b,c,...d]=arr
// console.log(name, age, obj.email)
// console.log(a, b, c, d)

// // function sum(b,...a) {
// //   return a.length
// // }

// // const numbers = [1, 2, 3];

// // console.log(sum(...numbers));
// // // Expected output: 6
// let ba = [5, 6, 7, 8, 9]
// let k = [...ba, 10,...ba]
// console.log(k)
// //[5,6,7,8,9,10]






import obj from "./test.js"
let obj3 = Object.assign(obj)
console.log(obj3)
let obj2 = Object.create(obj)
console.log(obj2)
console.log(obj2.__proto__)
console.log(obj2.__proto__.__proto__)
console.log(obj2.__proto__.__proto__.__proto__)
console.log(obj2.name)
let arr = [2, 3, 5, 7]
console.log(arr)
let obj5 = {
    name: "shekhar",
    age: 85,
    email: "abc@gmail.com",
}
Object.defineProperty(obj5,"age", {
    writable: false,
    configurable: false,
    enumerable:true
})
console.log(obj5.age)
/*for..in,for..of*/
console.log(obj5.age)































