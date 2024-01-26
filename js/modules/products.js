import url from './constants.js'
let a = 5
const fetchData = async (url) =>
{
    const res = await fetch(url)
    const dat = await res.json();
    console.log(dat)
}
export {a,fetchData,url}