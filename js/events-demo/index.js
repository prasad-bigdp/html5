const ggp = document.querySelector('.ggp');
const gp = document.querySelector(".gp")
debugger;
const p = document.querySelector(".p")
const c = document.querySelector(".c")
/* event delegation is a pattern*/
ggp.addEventListener('click', function ()
{
    alert("greatgrandparent called")
},true)
gp.addEventListener("click", function () {
	alert("grandparent called")
},true)
p.addEventListener("click", function () {
	alert("parent called")
},true)
c.addEventListener("click", function () {
	alert("child  called")
},true)
document.getElementById('btn').addEventListener('click', function (e)
{
    console.log(e.target)
    alert("button called")
},true)
/** event propagation is two types
 * 1. bubbling(default).... child to parent... bottom up
 * 2. capturing....parent to child  ....top down
 */