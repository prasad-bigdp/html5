function fetchData2()
{
   axios.get("https://dummyjson.com/products")
			.then((res) => console.log(res.data))
}
function fetchData3()
{
    fetch("https://dummyjson.com/products")
        .then((res) => res.json())
    .then((data)=>console.log(data))
}

fetchData2()
fetchData3()

async function fetchData ()
{
    try
    {
        
        const res = await fetch("https://dummyjson.com/products");
        console.log(res)
        if (res.ok)
        {
            const data = await res.json()
            console.log(data)
            displayData(data.products)
        }
        else
        {
            console.error("fetching is not done Properly")
            }
    }
    catch (err)
    {
        console.error(err)
    }
}
const mainDiv= document.getElementById('products')
const cartCount = document.getElementById('count')
const cartPrice = document.getElementById('price')
let cart = [];
fetchData()
function displayData (data)
{
    console.log(data);
    mainDiv.textContent=""
    data.forEach((pro) =>
    {
        const product = document.createElement('div')
        product.classList.add('product')
        const image = document.createElement('img')
        image.src = pro.thumbnail;
        const productLink = document.createElement('a')
        productLink.href = `./product.html?pro=${encodeURIComponent(JSON.stringify(pro))} `;
        productLink.target="_blank"
        const title = document.createElement('h2')
        title.textContent = pro.title
        productLink.appendChild(title)
        const price = document.createElement('price')
        price.textContent = pro.price
        const cart_button = document.createElement('button');
        cart_button.textContent = "Add to Cart"
        const product_button=document.createElement("button")
		product_button.textContent = "Add to Cart"
        cart_button.setAttribute('data-product', JSON.stringify(pro))
        //pro object is stringified and stored inside data-product
        cart_button.addEventListener('click', addCart) 
        
        product.append(image, productLink, price, cart_button)
        mainDiv.appendChild(product)
    })
}
export function addCart ()
{
    const newpro = JSON.parse(event.target.getAttribute('data-product'))
    console.log(newpro)
   
            cart.push(newpro)

   
    cartCount.textContent = cart.length;
 
}
const cart_button = document.getElementById("cart-button")
cart_button.addEventListener('click', moveToCheckout)
export function moveToCheckout ()
{
    console.log(cart)
    localStorage.setItem('cartDetails', JSON.stringify(cart))
   
    window.location.href="./checkout.html"
}
const searchBtn = document.getElementById('searchBtn')
const searchTerm = document.getElementById("searchTerm")
searchBtn.addEventListener('click',  ()=>
{
  fetch(`https://dummyjson.com/products/search?q=${searchTerm.value}`)
      .then((res) => res.json())
    
      .then((data) =>
      {
          console.log(data)
          displayData(data.products)
      })
})
const category_dd = document.getElementById('category-dd')
category_dd.addEventListener('select', function ()
{
    console.log(category_dd);
    fetch(`https://dummyjson.com/products/category/${category_dd}`)
			.then((res) => res.json())

			.then((data) => {
				console.log(data)
				displayData(data.products)
			})

})