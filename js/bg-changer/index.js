const button = document.querySelector('#btn')
const paras = document.querySelectorAll('.para')
console.log(paras)

function change ()
{
    const arr=["red","blue","violet","aqua","tomato","green","yellow","purple","brown","black"]
   document.body.style.backgroundColor=arr[Math.ceil(Math.random()*10)]
}
function change2 ()
{
    //each and every colour will have specific  hex code
    const hexcode = "#" + Math.round(Math.random() * 10000000).toString(16)
    document.body.style.backgroundColor= hexcode
}

function changeMode ()
{
      document.body.classList.toggle("dark")

}