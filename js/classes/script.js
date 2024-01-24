// // class Circle
// // {
// //     name = "raj"
// //     radius;
// //     changeName ()
// //     {
// //         this.name = "prasad"// this means current calling object
// //         //obj1.name="prasad"
// //     }
// //     constructor(r)
// //     {
// //         this.radius = r;
// //     }
    
// // }
// // let obj1 = new Circle(5)
// // console.log(obj1.radius)
// // let obj2 = new Circle(10);
// // console.log(obj1.name, obj2.name)
// // obj1.changeName()
// // console.log(obj1.name, obj2.name)

// // console.log(typeof Circle)

// /** design a class Employee who have properties name, age, salary which will get initialized by constructor and methods are printSalary and printDetails */

// class Employee
// {
//     name; age; salary;
//     constructor(name,age,salary)
//     {
//         this.name = name;
//         this.age = age;
//         this.salary = salary;
//     }
//    printSalary()
//     {
//          console.log(`the salary of the person is ${this.salary}`)
//     }
//     printDetails ()
//     {
//      console.log(`The name is ${this.name} and  age is ${this.age}`)
//     }
// }
// class Manager extends Employee
// {
//     isGood;
//     constructor(n, r, s, g)
//     {
//         super(n, r, s)
//         this.isGood = g ? 'Good' : 'Bad';
//     }
//     makePromote ()
//     {
//         console.log(`${this.name} is Promoted and my manager is ${this.isGood}`)
//     }
// }
// let obj1 = new Manager("raj", 25, 15000,false)
// console.log(obj1.name)
// obj1.makePromote()


// /* create human and superHuman classes where super human inherits human properties like name, age and methods like walk and run but superhuman also have properties speed and methods like fly .create object.call appropriately*/
// class Human
// {
//     name; age;
//    static value = 25;
//     constructor(name, age)
//     {
//         this.name = name;
//         this.age = age;
//     }
//     walk () { console.log(this.name +"is walking") }
//     run(){console.log(this.name+"is running")}
// }
// class SuperHuman extends Human
// {
//     speed;
//     constructor(name, age, speed)
//     {
//         super(name, age);
//         this.speed = speed;
//     }
//     fly (){console.log(`${this.name} is flying}`)}
// }
// let obj5 = new SuperHuman("raj", 25, 5000)
// obj5.run(); obj5.walk(); obj5.fly()
// console.log(Human.value)










var a = 5;
let b = 20;
function fun ()
{
    let c = 30;
    console.log(this)
}
window.fun()

let obj = {
    name: "raj",
    age: 50,
    print: function ()
    {
        console.log("hello")
        console.log(this)
    }
}
obj.fun()






