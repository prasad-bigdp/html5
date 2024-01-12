const button = document.getElementById('btn2')
const apikey = '1870b88e';

button.addEventListener('click', fetchData2)
// function fetchData ()
// {
//     mainDiv.textContent=""
//     fetch("https://randomuser.me/api")
//         .then(function (res) { return res.json() })
//         .then(function (data)
//         {
//             console.log(data.results)
//             displayData(data.results) //black box API
//         })
// }
// function displayData (val)
// {

//     const img = document.createElement('img')
//     img.src = val[0].picture.large
//     img.alt = "image"
//     const gender = document.createElement('p')
//     gender.textContent = val[0].gender;
//     const name = document.createElement('h2')
//     name.textContent = val[0].name.title + " " + val[0].name.first + " " + val[0].name.last;
//     const em = document.createElement('p')
//     em.textContent = val[0].email;
//     const phno = document.createElement('p')
//     phno.textContent = val[0].phone
//     mainDiv.append(img,name,gender,em,phno)
    
// }
    const mainDiv = document.getElementById("results2")

function fetchData2 ()
{
 mainDiv.textContent=""
    const searchTerm = document.getElementById("inp").value
    fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${apikey}`)
        .then(function (res) { return res.json() })
        .then(function (data)
        {
           
            displayData2(data.Search)
        })
   
}
function displayData2 (data)
{
    data.forEach(function (val)
    {
        console.log(val)
        const img = document.createElement("img")
				img.src = val.Poster
				const name = document.createElement("h2")
				name.textContent = val.Title
				const movie = document.createElement("div")
				movie.classList.add("movie")
				movie.append(img, name)
				mainDiv.appendChild(movie) 
    })
   
}
