import { addCart, moveToCheckout } from "./index.js"

const product = document.getElementById('product')

const params = new URLSearchParams(document.location.search)
const item = JSON.parse(params.get('pro'))
function display ()
{
    const div1 = document.createElement('div')
        const div2 = document.createElement("div")

    const img = document.createElement('img')
    img.src = item.thumbnail
    div1.appendChild(img)
    const title = document.createElement('title')
    title.textContent=item.title
    const price = document.createElement('p')
    price.textContent= item.price
    const button = document.createElement('button')
    button.textContent = "addToCart"
    button.addEventListener('click',addCart)
    div2.append(title, price, button)
    product.append(div1,div2)
}
display()
document.getElementById("cart-button").addEventListener('click',moveToCheckout)