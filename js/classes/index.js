import * as em from './script.js'//named import name should be same-->import alias
import prasad from './script.js'//default import
console.log(prasad)
let Emp = new prasad("raj", 45, 25252)
Emp.print()
console.log(em.x)
console.log(em.obj.name)