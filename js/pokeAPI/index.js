const input = document.getElementById('inp');
const button = document.getElementById('btn')
const mainDiv= document.getElementById('results')
button.addEventListener('click', fetchData)
function fetchData ()
{
    const searchTerm= input.value
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
        .then(function (v1)
        {
          return v1.json()
        })
        .then(function (data)
        {
            console.log(data)
            displayData(data)
        })
        .catch(function (err)
        {
        console.log("my errors"+err)
        })
    
}

function displayData (poke)
{
    console.log(poke);
    const name = document.createElement('h1')
    const img = document.createElement('img')
    const height = document.createElement('p')
    const Weight = document.createElement("p")
    const Abilities = document.createElement("p")
    name.textContent = poke.name;
    height.textContent ="Height: "+ poke.height;
    Weight.textContent = "Weight: " +poke.weight;
    img.src = poke.sprites.front_shiny
    img.alt = poke.name;
    mainDiv.append(img,name,height,Weight)


}