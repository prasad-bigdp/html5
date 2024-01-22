// const parent = document.getElementById('p');
// const child= document.getElementById('c')
// function fun ()
// {
//     alert("i got clicked")
// }
// document.getElementById('btn').addEventListener('click',fun,true)
// child.addEventListener('click', () => alert("child clicked"),true)
// parent.addEventListener("click", () => alert("parent clicked"), true)
// setInterval(() =>
// {
//   console.log(new Date().toLocaleTimeString())
// }, 1000)
// console.log("something")





const mainDiv = document.getElementById('main')
document.getElementById('btn').addEventListener('click',()=> fetchData() )
const fetchData= async ()=>
{
    // fetch("https://api.thecatapi.com/v1/images/sarch")
    //     .then((res)=>res.json())
    //     .then((data)=>
    //     {
    //         mainDiv.textContent=''
    //         const img = document.createElement('img')
    //         console.log(data)
    //         img.src = data[0].url
    //         img.alt = "dog"
    //         img.height = 300
    //         img.width = 300
    //         mainDiv.appendChild(img)
            
    //     })
    //     .catch((err)=>console.error("network error"+err))
    try
    {
        const res = await fetch('https://api.thecatapi.com/v1/images/search')
        console.log(res)
        if (res.status==200)
        {
              const data = await res.json()
            console.log(data)
                displayData(data)

        }
        else if (res.status == 404)
        {
            mainDiv.textContent = "Not found"; 
            }
      
    }
    catch (err)
    {
        console.log("network error"+err)
    }
  

}
const displayData = (data)=>
{
	mainDiv.textContent = ""
	        const img = document.createElement('img')
	        console.log(data)
	        img.src = data[0].url
	        img.alt = "dog"
	        img.height = 300
	        img.width = 300
	        mainDiv.appendChild(img)
}














