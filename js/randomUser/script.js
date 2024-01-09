const mainDiv = document.getElementById('results')
const button = document.getElementById('btn')
button.addEventListener('click', fetchData)
function fetchData ()
{
    fetch("https://randomuser.me/api")
        .then(function (rep) { return rep.json() })
        .then(function (data)
        {
           
            mainDiv.textContent =
							data.results[0].name.title +
							" " +
							data.results[0].name.first +
							" " +
                data.results[0].name.last
            
           
        })
        .catch(function (err)
        {
        console.log("error"+err)
    })
}