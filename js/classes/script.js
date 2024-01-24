// // // class Circle
// // // {
// // //     name = "raj"
// // //     radius;
// // //     changeName ()
// // //     {
// // //         this.name = "prasad"// this means current calling object
// // //         //obj1.name="prasad"
// // //     }
// // //     constructor(r)
// // //     {
// // //         this.radius = r;
// // //     }
    
// // // }
// // // let obj1 = new Circle(5)
// // // console.log(obj1.radius)
// // // let obj2 = new Circle(10);
// // // console.log(obj1.name, obj2.name)
// // // obj1.changeName()
// // // console.log(obj1.name, obj2.name)

// // // console.log(typeof Circle)

// // /** design a class Employee who have properties name, age, salary which will get initialized by constructor and methods are printSalary and printDetails */

// // class Employee
// // {
// //     name; age; salary;
// //     constructor(name,age,salary)
// //     {
// //         this.name = name;
// //         this.age = age;
// //         this.salary = salary;
// //     }
// //    printSalary()
// //     {
// //          console.log(`the salary of the person is ${this.salary}`)
// //     }
// //     printDetails ()
// //     {
// //      console.log(`The name is ${this.name} and  age is ${this.age}`)
// //     }
// // }
// // class Manager extends Employee
// // {
// //     isGood;
// //     constructor(n, r, s, g)
// //     {
// //         super(n, r, s)
// //         this.isGood = g ? 'Good' : 'Bad';
// //     }
// //     makePromote ()
// //     {
// //         console.log(`${this.name} is Promoted and my manager is ${this.isGood}`)
// //     }
// // }
// // let obj1 = new Manager("raj", 25, 15000,false)
// // console.log(obj1.name)
// // obj1.makePromote()


// // /* create human and superHuman classes where super human inherits human properties like name, age and methods like walk and run but superhuman also have properties speed and methods like fly .create object.call appropriately*/
// // class Human
// // {
// //     name; age;
// //    static value = 25;
// //     constructor(name, age)
// //     {
// //         this.name = name;
// //         this.age = age;
// //     }
// //     walk () { console.log(this.name +"is walking") }
// //     run(){console.log(this.name+"is running")}
// // }
// // class SuperHuman extends Human
// // {
// //     speed;
// //     constructor(name, age, speed)
// //     {
// //         super(name, age);
// //         this.speed = speed;
// //     }
// //     fly (){console.log(`${this.name} is flying}`)}
// // }
// // let obj5 = new SuperHuman("raj", 25, 5000)
// // obj5.run(); obj5.walk(); obj5.fly()
// // console.log(Human.value)










// var a = 5;
// let b = 20;
// function fun ()
// {
//     let c = 30;
//     console.log(this)
// }
// window.fun()
// debugger;
// let obj = {
//     name: "raj",
//     age: 50,
//     print: function ()
//     {
//         console.log("hello")
//         console.log(this)
//     }
// }
// obj.fun()
/* this*/
/* create an employee object with name,age,slary and print methods
create a function display and print this.name,salry and age*/

// let emp = {
//     name: "raj",
//     age: 52,
//     salry: 525252,
//     print:  ()=>
//     {
//         console.log(this)
//         console.log(this.name,this.age,this.salry)
//     }
// }
// const display = (a, b) =>
// {
//     return this.age
// }

// emp.print()
// const res = display.call(emp)
// console.log(res)
// const r = emp.bind(res)
// console.log(r())
// emp.print()
// display.call(emp,5,2)
// display.apply(emp, [5, 2])
// display.bind(emp,5,2)





// const module = {
//   x: 42,
//     getX:  function()
//     {
//       console.log(this)
//     return this.x;
//   },
// };

// const unboundGetX = module.getX;
// console.log(unboundGetX()); // The function gets invoked at the global scope
// // Expected output: undefined

// const boundGetX = unboundGetX.bind(module);
// console.log(boundGetX());
// // Expected output: 42






// name="prasad"

// obj.display()
// function fun ()
// {
//     console.log("i'm fun"+this.name)
// }
// fun()
// fun.call(obj)














// //call,bind,apply
// function Counter() {
// 	this.count = 0
// 	setInterval(() => {
// 		// "this" refers to the Counter instance
// 		this.count++
// 		console.log(this.count)
// 	}, 1000)
// }
// const counter = new Counter()
// console.log(counter.count)


const x = 5;
let obj = {
    name:"raj",
    age: 50,
    display:function ()//lexical scoping
    {
        console.log(this.name)
        }
}
class Employee {
	name
	age
	salary
	constructor(name, age, salary) {
		this.name = name
		this.age = age
		this.salary = salary
	}
	fun = (a) => {
		console.log(this)
		console.log(this.name, this.age, this.salary)
	}
	print() {
		console.log("I'm printing")
	}
}
export default Employee;//default export
export { x,obj };