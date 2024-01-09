
let data = [];
const mainDiv = document.getElementById("results")

fetch("https://fakestoreapi.com/products")
	.then(function (res) {
		console.log(res)
		return res.json()
	})
	.then(function (p) {
        console.log(p)
        data = p;
        data.forEach(function (val) {
					const img = document.createElement("img") //<img>
					img.src = val.image //<img src="">
					img.alt = val.title //
					img.style.height = "100px"
					img.style.width = "100px"
					const title = document.createElement("h1") //<h1></h1>
					title.textContent = val.title //<h1>ghdsfashf</h1>
					const p = document.createElement("p")
					p.textContent = val.price
					const subDiv = document.createElement("div") //div
					subDiv.appendChild(img) //<div subdiv><img src="" alt="">--img</div>
					subDiv.appendChild(title)
            subDiv.appendChild(p)
            subDiv.classList.add('subDiv')
					mainDiv.appendChild(subDiv)
				})
    })
    
