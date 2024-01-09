const ggp = document.querySelector('.ggp');
const gp = document.querySelector(".gp")
const p = document.querySelector(".p")
const c = document.querySelector(".c")
/* event delegation is a pattern*/
ggp.addEventListener('click', function ()
{
    alert("greatgrandparent called")
})
gp.addEventListener("click", function () {
    alert("grandparent called")
})
p.addEventListener("click", function () {
    alert("parent called")
})
c.addEventListener("click", function () {
    alert("child  called")
})
document.getElementById('btn').addEventListener('click', function (e)
{
    alert("button called")
})
/** event propagation is two types
 * 1. bubbling(default).... child to parent... bottom up
 * 2. capturing....parent to child  ....top down
 */