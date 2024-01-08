const ggp = document.querySelector('.ggp');
const gp = document.querySelector(".gp")
const p = document.querySelector(".p")
const c = document.querySelector(".c")
/* event delegation is a pattern*/
ggp.addEventListener('click', function ()
{
    alert("greatgrandparent called")
      ggp.classList.add("red")
})
gp.addEventListener("click", function () {
    alert("grandparent called")
      gp.classList.add("red")
})
p.addEventListener("click", function () {
    alert("parent called")
      p.classList.add("red")
})
c.addEventListener("click", function () {
    alert("child  called")
    c.classList.add('red')
})
document.getElementById('btn').addEventListener('click', function (e)
{
    console.log(e.target)
    alert("button called")
})
/** event propagation is two types
 * 1. bubbling(default).... child to parent... bottom up
 * 2. capturing....parent to child  ....top down
 */