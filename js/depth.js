
// //Hoisting - execution of data can preceed the initialization
// //Hosting- making ur website live
// console.log(h)
// console.log(a)
// var a = 20;
// var a = 50;
// a = 100;
// let b = 10;
// b = 20;

// //var- redeclare is possible,re assign is possible,function -based,access values before initialization
// //let - redeclare not possible,re assign is possible,block scoped,not possible to access values before initialization
// //const -redeclare not possible,re assign is not possible,block scoped,not possible to access values before initialization
// //ES6-2015
// //block means embraced by curly braces
// console.log(a)

// function sum ()
// {
   
//     if (true)
//     {
//         let x = 20
//         var y=30
//             console.log(x)

//     }
//     console.log(y)
// }
// sum()
// //undefined and null
// //null means empty/defined empty/ defined absence of value
// //undefined -- undesired absence of value
// let n1;
// let n2 = null;
// console.log(typeof (n1), n2)

// //operators
// //a + b
// //a,b are operarands
// //+ is operaor and a+b is addition operation
// // arithematic operators(+,-,*,/,%,**)
// //relative/comparison operators (>,<,>=,<=,==,!=,===,!==)
// //Logical Operators(&&,||,!)
// //unary(++,--)
// //Assignment Operators(+=,-=,*=,/=,%=,=)
// //conditional operator or ternary operator

// let res = (5 > 6) ? console.log("hello") : console.log("bye");
// let q = 20;

// q += 2;//q=q+1
// let r = 30;
// let result = (++q) + (q++) + (--r) + (r--)
// console.log(result,q,r)
// //21+21+29+29










let arr = ["raj", 20, true, "java"]
console.log(arr.length)
arr.push(55)
console.log(arr)
arr.pop()
console.log(arr)
arr.splice(2,1,5,8,9)
console.log(arr)
//for...of
// for (let a of arr)
// {
//     console.log(a)
// }
// function print(value){console.log(value)}
// //for(let a=0;a<arr.length-1;a++){console.log(arr[i])}
// //polyfill
// arr.forEach(print(val))
// browser.forEach(print(va))

//map,filter,reduce
const br = [2, 3, 5, 6, 8, 9, 2];
br.forEach(function (wh)//transversing 
{
    console.log(wh)
})
const arr1=br.map(function (value)//return
{
    return value%2==0; //
})
const arr2 = br.filter(function (value) {
	return value%2==0//
})
const arr3 = br.reduce(function (value,sum)
{
    return sum+=value
}, 0)
let arr5 = new Array()

console.log(arr1)
console.log(arr2)
console.log(arr3)

let obj1 = {
	name: "raj",
	mobno: 96969,
    isGood: true,
    add: function () { console.log("add called") }//method
    
}
//DOM
let obj2 = Object.create(obj1)
console.log(Object.values(obj1))
console.log(obj1["name"], obj1.name)
console.log(obj2,obj2.name)
obj1.add()
















