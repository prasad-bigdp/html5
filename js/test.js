

function sum(...a)/* rest*/
{

  return a.reduce(((val,sum)=>val+sum),0)
}
let result = sum(5,6,5)
console.log(result)
export let arr=[5,6,"prasad",5,6,8,true]
let obj = {
    name: "raj",
    age: 50,
    email: "a@a.com",
    status:"Good"
}
export default obj;
