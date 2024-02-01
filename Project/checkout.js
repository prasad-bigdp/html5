const cartDetails = JSON.parse(localStorage.getItem("cartDetails"))
console.log(cartDetails)
const mainDiv = document.getElementById("details")
function displayData ()
{
    mainDiv.textContent=""
cartDetails.forEach((pro, index) => {
	const div = document.createElement("div")
	div.classList.add("cart-item")
	const title = document.createElement("h2")
	title.textContent = pro.title
	const price = document.createElement("p")
	price.textContent = "$" + pro.price
	const dlte = document.createElement("button")
	dlte.textContent = "❎"
	dlte.setAttribute("data-pro", JSON.stringify(index))
	dlte.addEventListener("click", deleteItem)
	div.append(title, price, dlte)
	mainDiv.appendChild(div)
})
}
displayData()
document.getElementById("total").textContent = cartDetails.reduce((sum, v) => {
	console.log(v)
	console.log(sum)
	return v.price + sum
}, 0)
function deleteItem (pro)
{
    const item = JSON.parse(event.target.getAttribute('data-pro'))
    console.log(cartDetails, item)
    cartDetails.splice(item,1)
    displayData()
}
