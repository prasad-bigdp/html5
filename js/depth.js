
//Hoisting - execution of data can preceed the initialization
//Hosting- making ur website live
console.log(h)
console.log(a)
var a = 20;
var a = 50;
a = 100;
let b = 10;
b = 20;

//var- redeclare is possible,re assign is possible,function -based,access values before initialization
//let - redeclare not possible,re assign is possible,block scoped,not possible to access values before initialization
//const -redeclare not possible,re assign is not possible,block scoped,not possible to access values before initialization
//ES6-2015
//block means embraced by curly braces
console.log(a)

function sum ()
{
   
    if (true)
    {
        let x = 20
        var y=30
            console.log(x)

    }
    console.log(y)
}
sum()
//undefined and null
//null means empty/defined empty/ defined absence of value
//undefined -- undesired absence of value
let n1;
let n2 = null;
console.log(typeof (n1), n2)

//operators
//a + b
//a,b are operarands
//+ is operaor and a+b is addition operation
// arithematic operators(+,-,*,/,%,**)
//relative/comparison operators (>,<,>=,<=,==,!=,===,!==)
//Logical Operators(&&,||,!)
//unary(++,--)
//Assignment Operators(+=,-=,*=,/=,%=,=)
//conditional operator or ternary operator

let res = (5 > 6) ? console.log("hello") : console.log("bye");
let q = 20;

q += 2;//q=q+1
let r = 30;
let result = (++q) + (q++) + (--r) + (r--)
console.log(result,q,r)
//21+21+29+29











