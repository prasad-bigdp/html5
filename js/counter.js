
// // function increment ()
// // {
// //    alert("increase value is ")
// // }
// // function decrement ()
// // {
// //     alert("decreased value is ")
// // }
// function mad (a)
// {
//     console.log("I'm mad"+a)
// }
// function add (a, b,mad)
// {
//     console.log("I'm add ")
//     console.log(a + b)
//     mad(a)
// }
// //callback function
// function bad (p, q,mad)
// {
//     console.log("I'm bad")
//     console.log(p)
//     console.log(q)
//     console.log(mad)
//    q(5,6,mad)
// }
// bad(2,add,mad)//Higher order function will take other functions as parameter or return functions
// function self ()
// {
//     console.log("hello , i can call myself")
// }
// self()
// self()
// //IIFE - Immediate Invoke function Expression


// //closure - inner function can remember outer function even after outer function execution ended
// function counter ()
// {
//     let count = 20;
//     function inner ()
//     {
//         console.log(++count)
//     }
//     return inner;
// }
// const k = counter();
// k()
// k()
// k()
//to comment a block of code ctrl+K+C
/* conditional statements */
// if (condition)
// {
//     console.log("success")
// }
// else if(another-Condition)
//     console.log("fail")
// else console.log("too fail")
//switch
// let day = "Monday"
// switch (day) {
//     case "Monday":
//         console.log("It's the start of the workweek.")
//         break;
//     case "Friday":
//         console.log("It's almost the weekend.")
//         break;
// 	default:
// 		console.log("It's some other day.")
// }
//loops
// let i = 100;//initialization
// // while (i < 10)//condition
// // {
// //     console.log(i);
// //     i++;//updation
// // }
// do
// {
//     console.log(i);
//     i++;
// } while (i < 10)



// //for- standard

// for (let i = 5; i < 25; i++)
// {
//     console.log(i)
// }

//nested loop- loop inside the loop
//forEach is used for Arrays
//Arrays-collection of items


let arr = [2, 5, 9, 8, "raj", true, 16]
console.log(arr.length)
console.log(arr[2] + arr[3])
/* take your name reverse it*/
/*primitive data types are immutable and non primitive data types are mutable*/
for (let i = 0; i < arr.length; i++)
{
    console.log(arr[i])
}
console.log("                      ")
arr.forEach(function (value,index)
{
    console.log(value,index)
})













    









